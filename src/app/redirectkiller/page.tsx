'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { PRODUCTS } from '@/lib/products';
import {
  ArrowRight, Copy, Check, Eye, EyeOff, Link2, LogOut,
  Pencil, Plus, Save, Trash2, X, ExternalLink, RefreshCw
} from 'lucide-react';

type RedirectRule = {
  id: number;
  slug: string;
  destination: string;
  label?: string | null;
  note?: string | null;
  updated_at?: string | null;
};

const TOKEN_KEY = 'vm_redirectkiller_token';

const DESTINATION_OPTIONS = [
  { label: 'الصفحة الرئيسية', value: '/' },
  { label: 'صفحة التهيئة /lp', value: '/lp' },
  { label: 'كافة المنتجات', value: '/collections' },
  ...PRODUCTS.map((p) => ({
    label: p.shortName,
    value: `/products/${p.slug}`,
  })),
  { label: 'مسار مخصص', value: '__custom__' },
];

function publicOrigin() {
  if (typeof window === 'undefined') return 'https://vitalismaroc.shop';
  return window.location.origin;
}

export default function RedirectKillerPage() {
  const [token, setToken] = useState<string | null>(null);
  const [username, setUsername] = useState('redirectadmin');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const [rules, setRules] = useState<RedirectRule[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState('');
  const [copied, setCopied] = useState('');

  const [slug, setSlug] = useState('');
  const [destinationChoice, setDestinationChoice] = useState(DESTINATION_OPTIONS[0].value);
  const [customDestination, setCustomDestination] = useState('');
  const [label, setLabel] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const resolvedDestination = destinationChoice === '__custom__' ? customDestination.trim() : destinationChoice;
  const previewAdUrl = `${publicOrigin()}/ads/${(slug || 'killer').toLowerCase()}`;
  const previewFinalUrl = useMemo(() => {
    const dest = resolvedDestination || '/';
    return `${publicOrigin()}${dest.startsWith('/') ? dest : `/${dest}`}?utm_source=meta&utm_medium=cpc`;
  }, [resolvedDestination]);

  useEffect(() => {
    const saved = localStorage.getItem(TOKEN_KEY);
    if (saved) setToken(saved);
  }, []);

  useEffect(() => {
    if (token) loadRules(token);
  }, [token]);

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(''), 2400);
  };

  const authHeaders = (value: string) => ({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${value}`,
  });

  async function loadRules(value: string) {
    setIsLoading(true);
    try {
      const res = await fetch('/api/v1/redirects', { headers: authHeaders(value) });
      if (res.status === 401) {
        localStorage.removeItem(TOKEN_KEY);
        setToken(null);
        return;
      }
      const data = await res.json();
      setRules(Array.isArray(data) ? data : []);
    } catch {
      showToast('تعذر تحميل القواعد');
    } finally {
      setIsLoading(false);
    }
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError('');
    try {
      const res = await fetch('/api/v1/redirects/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setLoginError(data.detail || 'فشل تسجيل الدخول');
        return;
      }
      localStorage.setItem(TOKEN_KEY, data.token);
      setToken(data.token);
      setPassword('');
    } catch {
      setLoginError('تعذر الاتصال بالخادم');
    } finally {
      setIsLoggingIn(false);
    }
  }

  function resetForm() {
    setEditingId(null);
    setSlug('');
    setDestinationChoice(DESTINATION_OPTIONS[0].value);
    setCustomDestination('');
    setLabel('');
  }

  function startEdit(rule: RedirectRule) {
    setEditingId(rule.id);
    setSlug(rule.slug);
    setLabel(rule.label || '');
    const known = DESTINATION_OPTIONS.find((o) => o.value === rule.destination);
    if (known) {
      setDestinationChoice(known.value);
      setCustomDestination('');
    } else {
      setDestinationChoice('__custom__');
      setCustomDestination(rule.destination);
    }
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!token) return;
    setIsSaving(true);
    try {
      const payload = { slug, destination: resolvedDestination, label };
      const res = await fetch(editingId ? `/api/v1/redirects/${editingId}` : '/api/v1/redirects', {
        method: editingId ? 'PUT' : 'POST',
        headers: authHeaders(token),
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        showToast(typeof data.detail === 'string' ? data.detail : 'تعذر الحفظ');
        return;
      }
      showToast(editingId ? 'تم تحديث القاعدة' : 'تم إنشاء القاعدة');
      resetForm();
      await loadRules(token);
    } catch {
      showToast('تعذر الحفظ');
    } finally {
      setIsSaving(false);
    }
  }

  async function handleDelete(id: number) {
    if (!token || !confirm('حذف قاعدة التحويل؟')) return;
    const res = await fetch(`/api/v1/redirects/${id}`, {
      method: 'DELETE',
      headers: authHeaders(token),
    });
    if (res.ok || res.status === 204) {
      showToast('تم الحذف');
      if (editingId === id) resetForm();
      await loadRules(token);
    } else {
      showToast('تعذر الحذف');
    }
  }

  async function copyText(value: string, key: string) {
    await navigator.clipboard.writeText(value);
    setCopied(key);
    setTimeout(() => setCopied(''), 1600);
  }

  if (!token) {
    return (
      <div className="min-h-screen bg-[#070b14] flex items-center justify-center px-4" dir="rtl">
        <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-11 h-11 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              <Link2 className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h1 className="text-xl font-black text-white">Redirect Killer</h1>
              <p className="text-xs text-slate-400">لوحة مستقلة عن الإدارة العامة</p>
            </div>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-xs font-bold text-slate-300 block mb-1.5">اسم المستخدم</label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-300 block mb-1.5">كلمة المرور</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            {loginError && <p className="text-xs text-red-400 font-bold">{loginError}</p>}
            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-3 rounded-xl disabled:opacity-60"
            >
              {isLoggingIn ? 'جاري الدخول...' : 'دخول'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100" dir="rtl">
      <header className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              <Link2 className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h1 className="font-black text-white">Redirect Killer</h1>
              <p className="text-[11px] text-slate-400">تحويل الإعلانات مع الحفاظ على المعاملات</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => token && loadRules(token)}
              className="px-3 py-2 rounded-xl border border-slate-800 text-xs font-bold text-slate-300 hover:border-slate-600"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
            </button>
            <button
              onClick={() => {
                localStorage.removeItem(TOKEN_KEY);
                setToken(null);
              }}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-800 text-xs font-bold text-slate-300 hover:text-white"
            >
              <LogOut className="w-4 h-4" />
              خروج
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8 grid lg:grid-cols-[1fr_1.1fr] gap-6">
        <form onSubmit={handleSave} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-black text-white">{editingId ? 'تعديل التحويل' : 'تحويل جديد'}</h2>
            {editingId && (
              <button type="button" onClick={resetForm} className="text-xs text-slate-400 hover:text-white inline-flex items-center gap-1">
                <X className="w-3.5 h-3.5" /> إلغاء
              </button>
            )}
          </div>

          <div>
            <label className="text-xs font-bold text-slate-300 block mb-1.5">Slug</label>
            <input
              value={slug}
              onChange={(e) => setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))}
              placeholder="killer"
              required
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white font-mono text-left"
              dir="ltr"
            />
            <p className="text-[11px] text-slate-500 mt-1">رابط الإعلان: {previewAdUrl}</p>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-300 block mb-1.5">الوجهة داخل الموقع</label>
            <select
              value={destinationChoice}
              onChange={(e) => setDestinationChoice(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white"
            >
              {DESTINATION_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>

          {destinationChoice === '__custom__' && (
            <input
              value={customDestination}
              onChange={(e) => setCustomDestination(e.target.value)}
              placeholder="/products/kneerelief-heated-brace"
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white font-mono text-left"
              dir="ltr"
            />
          )}

          <div>
            <label className="text-xs font-bold text-slate-300 block mb-1.5">تسمية داخلية (اختياري)</label>
            <input
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              placeholder="Meta — KneeRelief"
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white"
            />
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 text-xs space-y-2">
            <div className="flex items-center gap-2 text-slate-400">
              <ArrowRight className="w-3.5 h-3.5" />
              <span>المثال بعد تمرير المعاملات:</span>
            </div>
            <p className="text-emerald-300 font-mono break-all text-left" dir="ltr">{previewFinalUrl}</p>
            <p className="text-slate-500">هذا هو الرابط الذي يُحفظ في الجدول، وليس رابط /ads.</p>
          </div>

          <button
            type="submit"
            disabled={isSaving || !slug || !resolvedDestination}
            className="w-full inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-3 rounded-xl disabled:opacity-50"
          >
            {editingId ? <Save className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
            {editingId ? 'حفظ التعديل' : 'إنشاء التحويل'}
          </button>
        </form>

        <section className="space-y-3">
          {rules.length === 0 && !isLoading && (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center text-slate-400 text-sm">
              لا توجد قواعد بعد. أنشئ أول slug من النموذج.
            </div>
          )}
          {rules.map((rule) => {
            const adUrl = `${publicOrigin()}/ads/${rule.slug}`;
            return (
              <article key={rule.id} className="bg-slate-900 border border-slate-800 rounded-3xl p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-black text-white">/{rule.slug}</h3>
                    {rule.label && <p className="text-xs text-slate-400 mt-0.5">{rule.label}</p>}
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => startEdit(rule)} className="p-2 rounded-xl border border-slate-800 text-slate-300 hover:text-white">
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button onClick={() => handleDelete(rule.id)} className="p-2 rounded-xl border border-slate-800 text-red-400 hover:bg-red-500/10">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <p className="mt-3 text-xs text-slate-400">الوجهة النهائية</p>
                <p className="font-mono text-sm text-emerald-300 break-all text-left" dir="ltr">{rule.destination}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <button
                    onClick={() => copyText(adUrl, rule.slug)}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs font-bold"
                  >
                    {copied === rule.slug ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    نسخ رابط الإعلان
                  </button>
                  <a
                    href={`${adUrl}?utm_source=test`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-800 text-xs font-bold text-slate-300"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    تجربة
                  </a>
                </div>
              </article>
            );
          })}
        </section>
      </main>

      {toast && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-slate-900 border border-emerald-500/30 text-sm font-bold px-4 py-2 rounded-full">
          {toast}
        </div>
      )}
    </div>
  );
}
