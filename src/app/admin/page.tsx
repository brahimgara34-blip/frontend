'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import {
  ShieldCheck, Award, Truck, Lock, User, Eye, EyeOff, LogOut,
  RefreshCw, Search, Phone, MessageSquare, CheckCircle2, Clock,
  AlertTriangle, XCircle, ChevronDown, Download, DollarSign,
  TrendingUp, Users, ShoppingBag, ArrowUpRight, Zap, MapPin,
  Flame, Filter, Calendar, Check, Copy, Trash2, ExternalLink,
  ShieldAlert, Activity, Globe, X
} from 'lucide-react';

interface OrderItemData {
  id?: string;
  sku?: string;
  name: string;
  quantity: number;
  price?: number;
  color?: string;
}

interface OrderData {
  id: number;
  orderId: string;
  customerName: string;
  phoneNumber: string;
  normalizedPhone?: string;
  totalAmount: number;
  hasUpsell: boolean;
  upsellProduct?: string | null;
  upsellAmount?: number;
  status: string;
  city: string;
  region: string;
  country: string;
  isProxy: boolean;
  riskScore: number;
  clientIp: string;
  items: OrderItemData[];
  createdAt: string;
}

interface StatsData {
  kpis: {
    total_revenue: number;
    total_orders: number;
    confirmed_orders: number;
    aov: number;
    valid_morocco_clicks: number;
    blocked_vpn_clicks: number;
    total_clicks: number;
    cvr_percent: number;
    upsell_orders_count: number;
    upsell_revenue: number;
    upsell_take_rate: number;
  };
  status_breakdown: Record<string, number>;
  product_breakdown: Array<{ name: string; sku: string; units: number; revenue: number }>;
  tier_breakdown: { "1_piece": number; "2_pieces": number; "3_pieces": number };
  cities_breakdown: Array<{ city: string; orders: number; revenue: number }>;
  timeline: Array<{ date: string; orders: number; revenue: number; clicks: number }>;
  range: string;
}

interface ClickData {
  id: number;
  path: string;
  clientIp: string;
  country: string;
  city: string;
  region: string;
  isProxy: boolean;
  riskScore: number;
  isValidMorocco: boolean;
  referrer: string;
  createdAt: string;
}

export default function AdminPage() {
  // Auth state
  const [token, setToken] = useState<string | null>(null);
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Dashboard state
  const [activeTab, setActiveTab] = useState<'analytics' | 'orders' | 'traffic'>('analytics');
  const [dateRange, setDateRange] = useState<string>('all');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [customDateOpen, setCustomDateOpen] = useState(false);

  // Data state
  const [stats, setStats] = useState<StatsData | null>(null);
  const [orders, setOrders] = useState<OrderData[]>([]);
  const [clicks, setClicks] = useState<ClickData[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Order filters
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Selected order for Preview Modal
  const [selectedOrder, setSelectedOrder] = useState<OrderData | null>(null);
  const [isUpdatingStatus, setIsUpdatingStatus] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [copiedOrderId, setCopiedOrderId] = useState<string | null>(null);

  // Load token from localStorage on mount
  useEffect(() => {
    const savedToken = localStorage.getItem('vm_admin_token');
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  // Fetch data when token or date range changes
  useEffect(() => {
    if (token) {
      fetchDashboardData();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, dateRange, startDate, endDate]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError('');

    try {
      let res = await fetch('/api/v1/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username.trim(), password }),
      });

      // If Next.js internal proxy or direct URL is needed
      if (!res.ok && res.status >= 500) {
        const directApi = process.env.NEXT_PUBLIC_API_URL;
        if (directApi) {
          try {
            const cleanBase = directApi.replace(/\/+$/, '');
            const fallbackRes = await fetch(`${cleanBase}/api/v1/admin/login`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ username: username.trim(), password }),
            });
            if (fallbackRes.ok) {
              res = fallbackRes;
            }
          } catch {}
        }
      }

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.detail || (res.status === 404 ? 'الخادم لم يتعرف على مسار تسجيل الدخول (يرجى عمل Push و Redeploy للباك اند)' : 'اسم المستخدم أو كلمة المرور غير صحيحة'));
      }

      const data = await res.json();
      localStorage.setItem('vm_admin_token', data.token);
      setToken(data.token);
      showToast('مرحباً بك! تم تسجيل الدخول بنجاح');
    } catch (err: any) {
      setLoginError(err.message || 'حدث خطأ أثناء تسجيل الدخول');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('vm_admin_token');
    setToken(null);
    setStats(null);
    setOrders([]);
    setSelectedOrder(null);
  };

  const fetchDashboardData = async () => {
    if (!token) return;
    setIsLoading(true);

    const queryParams = new URLSearchParams();
    queryParams.set('range', dateRange);
    if (dateRange === 'custom') {
      if (startDate) queryParams.set('start_date', startDate);
      if (endDate) queryParams.set('end_date', endDate);
    }

    try {
      const headers = { Authorization: `Bearer ${token}` };

      // 1. Fetch Stats
      const statsRes = await fetch(`/api/v1/admin/stats?${queryParams.toString()}`, { headers });
      if (statsRes.status === 401) {
        handleLogout();
        return;
      }
      if (statsRes.ok) {
        const statsData = await statsRes.json();
        setStats(statsData);
      }

      // 2. Fetch Orders
      const ordersRes = await fetch(`/api/v1/admin/orders?${queryParams.toString()}&limit=200`, { headers });
      if (ordersRes.ok) {
        const ordersData = await ordersRes.json();
        setOrders(ordersData.orders || []);
      }

      // 3. Fetch Recent Clicks
      const clicksRes = await fetch('/api/v1/admin/clicks?limit=50', { headers });
      if (clicksRes.ok) {
        const clicksData = await clicksRes.json();
        setClicks(clicksData || []);
      }
    } catch (err) {
      console.error('Error fetching admin data:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleStatusChange = async (orderId: string, newStatus: string) => {
    if (!token) return;
    setIsUpdatingStatus(true);

    try {
      const res = await fetch(`/api/v1/admin/orders/${orderId}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!res.ok) throw new Error('فشل تحديث الحالة');

      // Update local state
      setOrders((prev) =>
        prev.map((o) => (o.orderId === orderId ? { ...o, status: newStatus } : o))
      );

      if (selectedOrder && selectedOrder.orderId === orderId) {
        setSelectedOrder({ ...selectedOrder, status: newStatus });
      }

      showToast(`تم تحديث حالة الطلب #${orderId} إلى "${newStatus}"`);
    } catch (err: any) {
      showToast(err.message || 'حدث خطأ أثناء التحديث');
    } finally {
      setIsUpdatingStatus(false);
    }
  };

  const handleDeleteOrder = async (orderId: string) => {
    if (!token) return;
    if (!confirm(`هل أنت متأكد من رغبتك في حذف الطلب #${orderId}؟`)) return;

    try {
      const res = await fetch(`/api/v1/admin/orders/${orderId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) throw new Error('فشل حذف الطلب');

      setOrders((prev) => prev.filter((o) => o.orderId !== orderId));
      if (selectedOrder?.orderId === orderId) {
        setSelectedOrder(null);
      }
      showToast(`تم حذف الطلب #${orderId} بنجاح`);
    } catch (err: any) {
      showToast(err.message || 'حدث خطأ أثناء الحذف');
    }
  };

  // Filtered orders for table
  const filteredOrders = useMemo(() => {
    return orders.filter((o) => {
      const matchesStatus = statusFilter === 'all' || o.status === statusFilter;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        o.orderId.toLowerCase().includes(q) ||
        o.customerName.toLowerCase().includes(q) ||
        o.phoneNumber.includes(q) ||
        (o.city && o.city.toLowerCase().includes(q));
      return matchesStatus && matchesSearch;
    });
  }, [orders, statusFilter, searchQuery]);

  // Export to CSV
  const handleExportCSV = () => {
    if (filteredOrders.length === 0) {
      alert('لا توجد طلبات لتصديرها');
      return;
    }

    const headers = [
      'date',
      'orderid',
      'country',
      'name',
      'phone',
      'product',
      'sku',
      'quantity',
      'total price',
      'currency',
      'status',
      'city',
      'is_proxy',
      'risk_score'
    ];

    const rows = filteredOrders.map((o) => {
      const dateStr = o.createdAt ? new Date(o.createdAt).toLocaleDateString('fr-FR') : '';
      const products = (o.items || []).map((i) => i.name.replace(/^\[.*?\]\s*/, '')).join(' / ') || 'منتج فيتاليس';
      const skus = (o.items || []).map((i) => i.sku || 'VM-PROD-01').join(' / ') || 'VM-SHW-01';
      const qtys = (o.items || []).map((i) => i.quantity || 1).join(' / ') || '1';
      const cleanPhone = o.phoneNumber.replace(/\D/g, '').replace(/^0/, '212 ');

      return [
        `"${dateStr}"`,
        `"${o.orderId}"`,
        `"${o.country || 'maroc'}"`,
        `"${o.customerName.replace(/"/g, '""')}"`,
        `"'+${cleanPhone}"`,
        `"${products.replace(/"/g, '""')}"`,
        `"${skus}"`,
        `"${qtys}"`,
        o.totalAmount,
        `"SAR (الدرهم.المغربي)"`,
        `"${o.status}"`,
        `"${o.city}"`,
        o.isProxy ? 'نعم' : 'لا',
        o.riskScore
      ].join(',');
    });

    const csvContent = '\uFEFF' + [headers.join(','), ...rows].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `vitalis_maroc_orders_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('تم تصدير ملف الطلبات بنجاح');
  };

  // WhatsApp link generator
  const getWhatsAppLink = (order: OrderData) => {
    let cleanPhone = order.phoneNumber.replace(/\D/g, '');
    if (cleanPhone.startsWith('0')) {
      cleanPhone = '212' + cleanPhone.substring(1);
    } else if (!cleanPhone.startsWith('212')) {
      cleanPhone = '212' + cleanPhone;
    }

    const itemsSummary = (order.items || []).map((i) => `${i.quantity}x ${i.name}`).join(' + ');
    const msg = `السلام عليكم ورحمة الله سيدي/للا ${order.customerName}،\n\nمعك فريق تأكيد الطلبات من متجر *Vitalis Maroc™* 🇲🇦.\n\nبخصوص طلبك رقم *${order.orderId}*:\n📦 *المنتجات:* ${itemsSummary}\n💰 *المبلغ الإجمالي:* ${order.totalAmount} درهم (الدفع عند الاستلام بعد المعاينة)\n📍 *المدينة:* ${order.city}\n\nبغيت غير نتأكد معك من العنوان واش نرسلو ليك الطرد غداً إن شاء الله؟`;
    
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(msg)}`;
  };

  // Copy order info for Moroccan shipping companies
  const handleCopyShippingInfo = (order: OrderData) => {
    const text = `الاسم: ${order.customerName}\nالهاتف: ${order.phoneNumber}\nالمدينة: ${order.city}\nالطلب: ${order.orderId}\nالمبلغ: ${order.totalAmount} DH\nالمنتجات: ${(order.items || []).map(i => `${i.quantity}x ${i.name}`).join(', ')}`;
    navigator.clipboard.writeText(text);
    setCopiedOrderId(order.orderId);
    setTimeout(() => setCopiedOrderId(null), 2500);
    showToast('تم نسخ معلومات الشحن للحافظة');
  };

  const getStatusBadge = (st: string) => {
    if (st.includes('جديد')) {
      return <span className="bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2.5 py-1 rounded-full text-[11px] font-black inline-flex items-center gap-1"><Clock className="w-3 h-3" /> {st}</span>;
    }
    if (st.includes('تم التأكيد')) {
      return <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2.5 py-1 rounded-full text-[11px] font-black inline-flex items-center gap-1"><Phone className="w-3 h-3" /> {st}</span>;
    }
    if (st.includes('الشحن')) {
      return <span className="bg-purple-500/10 text-purple-400 border border-purple-500/20 px-2.5 py-1 rounded-full text-[11px] font-black inline-flex items-center gap-1"><Truck className="w-3 h-3" /> {st}</span>;
    }
    if (st.includes('التسليم')) {
      return <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-1 rounded-full text-[11px] font-black inline-flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> {st}</span>;
    }
    if (st.includes('ملغي')) {
      return <span className="bg-rose-500/10 text-rose-400 border border-rose-500/20 px-2.5 py-1 rounded-full text-[11px] font-black inline-flex items-center gap-1"><XCircle className="w-3 h-3" /> {st}</span>;
    }
    return <span className="bg-slate-800 text-slate-300 border border-slate-700 px-2.5 py-1 rounded-full text-[11px] font-bold">{st}</span>;
  };

  // =========================================================================
  // 1. LOGIN SCREEN (If not authenticated)
  // =========================================================================
  if (!token) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center p-4" dir="rtl">
        <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500" />
          
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#0F2744] to-slate-800 p-0.5 shadow-xl border border-slate-700 mx-auto flex items-center justify-center mb-4">
              <span className="text-2xl font-black bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                VM
              </span>
            </div>
            <h1 className="text-2xl font-black text-white">لوحة تحكم Vitalis Maroc™</h1>
            <p className="text-slate-400 text-xs mt-1.5">
              سجل الدخول لإدارة الطلبات، تتبع الأداء، ومراقبة النقرات والتحويلات.
            </p>
          </div>

          {loginError && (
            <div className="bg-rose-500/10 border border-rose-500/20 rounded-xl p-3 mb-5 text-rose-300 text-xs flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            {/* Quick credentials hint */}
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-3 text-[11px] text-slate-400 space-y-1">
              <div className="flex justify-between items-center text-slate-300 font-bold border-b border-slate-800/80 pb-1">
                <span>بيانات الدخول الافتراضية:</span>
                <span className="text-[10px] text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded-full">Default</span>
              </div>
              <div className="flex justify-between">
                <span>اسم المستخدم:</span>
                <span className="font-mono text-emerald-400 font-bold select-all">admin</span>
              </div>
              <div className="flex justify-between">
                <span>كلمة المرور:</span>
                <span className="font-mono text-emerald-400 font-bold select-all">vitalis2026admin</span>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300 block mb-1.5">
                اسم المستخدم (Username)
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  placeholder="admin"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition-colors pr-10"
                />
                <User className="w-4 h-4 text-slate-500 absolute right-3 top-3.5" />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300 block mb-1.5">
                كلمة المرور (Password)
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition-colors pr-10 pl-10"
                />
                <Lock className="w-4 h-4 text-slate-500 absolute right-3 top-3.5" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-3 top-3.5 text-slate-500 hover:text-slate-300"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-sm py-3.5 rounded-xl shadow-lg shadow-emerald-950/40 transition-all cursor-pointer mt-2 disabled:opacity-50"
            >
              {isLoggingIn ? 'جاري التحقق...' : 'تسجيل الدخول إلى لوحة الإدارة ❯'}
            </button>
          </form>

          <div className="mt-6 pt-5 border-t border-slate-800/80 text-center text-[11px] text-slate-500 flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>نظام إداري محمي بتشفير HMAC-SHA256</span>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // 2. AUTHENTICATED DASHBOARD
  // =========================================================================
  return (
    <div className="space-y-8 pb-16" dir="rtl">

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-6 z-50 bg-slate-900 border border-emerald-500/40 text-white text-xs font-bold px-4 py-3 rounded-2xl shadow-2xl shadow-emerald-950/50 flex items-center gap-2 animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* ======== TOP HEADER & CONTROLS ======== */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#0F2744] to-slate-800 flex items-center justify-center shadow-lg border border-slate-700">
              <span className="text-base font-black text-emerald-400">VM</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl md:text-2xl font-black text-white">لوحة تحكم Vitalis Maroc™</h1>
                <span className="bg-emerald-500/10 text-emerald-400 text-[10px] font-black px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  مباشر 🟢
                </span>
              </div>
              <p className="text-slate-400 text-xs mt-0.5">
                متابعة المبيعات الحية، تأكيد طلبيات الـ COD، وتحليل الزوار بالمغرب (تصفية الـ VPN).
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 flex-wrap">
            <button
              onClick={fetchDashboardData}
              disabled={isLoading}
              className="bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white px-3.5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-teal-400 ${isLoading ? 'animate-spin' : ''}`} />
              <span>تحديث البيانات</span>
            </button>

            <button
              onClick={handleExportCSV}
              className="bg-slate-950 hover:bg-slate-800 border border-slate-800 text-emerald-400 px-3.5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>تصدير Excel/CSV</span>
            </button>

            <button
              onClick={handleLogout}
              className="bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 text-rose-300 px-3.5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>خروج</span>
            </button>
          </div>
        </div>

        {/* Date Range Selector Pills */}
        <div className="border-t border-slate-800 pt-4 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-slate-400 font-bold ml-1 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-teal-400" />
              <span>فترة التقرير:</span>
            </span>
            {[
              { id: 'today', label: 'اليوم' },
              { id: 'yesterday', label: 'البارحة' },
              { id: '7d', label: 'آخر 7 أيام' },
              { id: '30d', label: 'آخر 30 يوماً' },
              { id: 'all', label: 'كل الأوقات' },
              { id: 'custom', label: 'تاريخ مخصص 📅' },
            ].map((p) => (
              <button
                key={p.id}
                onClick={() => {
                  setDateRange(p.id);
                  if (p.id === 'custom') setCustomDateOpen(true);
                  else setCustomDateOpen(false);
                }}
                className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
                  dateRange === p.id
                    ? 'bg-emerald-500 text-slate-950 font-black shadow-md'
                    : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Custom Date Inputs */}
          {customDateOpen && (
            <div className="flex items-center gap-2 bg-slate-950 p-2 rounded-xl border border-slate-800">
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="bg-slate-900 border border-slate-800 text-white rounded-lg px-2 py-1 text-xs focus:outline-none"
              />
              <span className="text-slate-500">إلى</span>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="bg-slate-900 border border-slate-800 text-white rounded-lg px-2 py-1 text-xs focus:outline-none"
              />
            </div>
          )}
        </div>
      </div>

      {/* ======== KPI SUMMARY CARDS (6 DTC Metrics) ======== */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
        
        {/* 1. Total Revenue */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-lg space-y-1 relative overflow-hidden">
          <div className="flex justify-between items-center text-slate-400 text-xs font-bold">
            <span>إجمالي المبيعات</span>
            <DollarSign className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-xl md:text-2xl font-black text-emerald-400">
            {stats?.kpis.total_revenue.toLocaleString('fr-FR') || '0'} <span className="text-xs font-bold text-slate-300">د.م</span>
          </div>
          <div className="text-[10px] text-slate-500">
            متوسط الطلب: <span className="text-slate-300 font-bold">{stats?.kpis.aov || 0} د.م</span>
          </div>
        </div>

        {/* 2. Total Orders */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-lg space-y-1">
          <div className="flex justify-between items-center text-slate-400 text-xs font-bold">
            <span>إجمالي الطلبات</span>
            <ShoppingBag className="w-4 h-4 text-teal-400" />
          </div>
          <div className="text-xl md:text-2xl font-black text-white">
            {stats?.kpis.total_orders || 0} <span className="text-xs font-bold text-slate-400">طلب</span>
          </div>
          <div className="text-[10px] text-emerald-400 font-bold">
            المؤكد: {stats?.kpis.confirmed_orders || 0} طلب
          </div>
        </div>

        {/* 3. Valid Moroccan Clicks (Filtered - No VPN) */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-lg space-y-1 relative group">
          <div className="flex justify-between items-center text-slate-400 text-xs font-bold">
            <span>نقرات مغربية نظيفة</span>
            <Globe className="w-4 h-4 text-teal-300" />
          </div>
          <div className="text-xl md:text-2xl font-black text-teal-300">
            {stats?.kpis.valid_morocco_clicks.toLocaleString('fr-FR') || 0}
          </div>
          <div className="text-[10px] text-slate-500">
            مستبعد VPN: <span className="text-rose-400 font-bold">{stats?.kpis.blocked_vpn_clicks || 0}</span>
          </div>
        </div>

        {/* 4. Conversion Rate (CVR) */}
        <div className="bg-slate-900 border border-emerald-500/30 rounded-2xl p-4 shadow-lg space-y-1 ring-1 ring-emerald-500/20">
          <div className="flex justify-between items-center text-slate-400 text-xs font-bold">
            <span>معدل التحويل (CVR)</span>
            <TrendingUp className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-xl md:text-2xl font-black text-emerald-400">
            {stats?.kpis.cvr_percent || 0}%
          </div>
          <div className="text-[10px] text-slate-400">
            {Number(stats?.kpis.cvr_percent || 0) >= 3 ? '🔥 تحويل ممتاز جداً' : 'معدل صحي ومستمر'}
          </div>
        </div>

        {/* 5. Upsell Performance */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-lg space-y-1">
          <div className="flex justify-between items-center text-slate-400 text-xs font-bold">
            <span>مبيعات الـ Upsell</span>
            <Zap className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-xl md:text-2xl font-black text-amber-400">
            +{stats?.kpis.upsell_revenue || 0} <span className="text-xs font-bold text-slate-400">د.م</span>
          </div>
          <div className="text-[10px] text-slate-400">
            قبول العرض: <span className="text-amber-400 font-bold">{stats?.kpis.upsell_take_rate || 0}%</span>
          </div>
        </div>

        {/* 6. Traffic Quality / Clean Rate */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-lg space-y-1">
          <div className="flex justify-between items-center text-slate-400 text-xs font-bold">
            <span>جودة الترافيك 🇲🇦</span>
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-xl md:text-2xl font-black text-white">
            {stats && stats.kpis.total_clicks > 0
              ? Math.round((stats.kpis.valid_morocco_clicks / stats.kpis.total_clicks) * 100)
              : 100}%
          </div>
          <div className="text-[10px] text-emerald-400 font-bold">
            حركة زيارات حقيقية
          </div>
        </div>

      </div>

      {/* ======== TABS NAVIGATION ======== */}
      <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
        <button
          onClick={() => setActiveTab('analytics')}
          className={`px-5 py-2.5 rounded-2xl text-xs md:text-sm font-black flex items-center gap-2 transition-all cursor-pointer ${
            activeTab === 'analytics'
              ? 'bg-slate-800 text-emerald-400 border border-slate-700 shadow-md'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <TrendingUp className="w-4 h-4" />
          <span>التحليلات والأداء (Analytics)</span>
        </button>

        <button
          onClick={() => setActiveTab('orders')}
          className={`px-5 py-2.5 rounded-2xl text-xs md:text-sm font-black flex items-center gap-2 transition-all cursor-pointer relative ${
            activeTab === 'orders'
              ? 'bg-slate-800 text-emerald-400 border border-slate-700 shadow-md'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <ShoppingBag className="w-4 h-4" />
          <span>إدارة الطلبات (Orders)</span>
          {orders.length > 0 && (
            <span className="bg-emerald-500 text-slate-950 font-black text-[10px] px-2 py-0.5 rounded-full">
              {orders.length}
            </span>
          )}
        </button>

        <button
          onClick={() => setActiveTab('traffic')}
          className={`px-5 py-2.5 rounded-2xl text-xs md:text-sm font-black flex items-center gap-2 transition-all cursor-pointer ${
            activeTab === 'traffic'
              ? 'bg-slate-800 text-emerald-400 border border-slate-700 shadow-md'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Activity className="w-4 h-4" />
          <span>سجل الزيارات والـ IP (Traffic Quality)</span>
        </button>
      </div>

      {/* =========================================================================
          TAB 1: ANALYTICS & OVERVIEW
         ========================================================================= */}
      {activeTab === 'analytics' && (
        <div className="space-y-6">
          
          {/* Products & Cities Breakdown Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Best Selling Products */}
            <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
              <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-amber-400" />
                  <h3 className="font-black text-sm text-white">أداء المنتجات الثلاثة المعتمدة</h3>
                </div>
                <span className="text-[11px] text-slate-400">الوحدات والمداخيل</span>
              </div>

              <div className="space-y-3">
                {(stats?.product_breakdown || []).map((p, i) => (
                  <div
                    key={i}
                    className="bg-slate-950 p-4 rounded-2xl border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-black text-xs text-white">{p.name}</span>
                        <span className="text-[10px] bg-slate-800 text-teal-400 px-2 py-0.5 rounded font-mono font-bold">
                          {p.sku}
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-500 mt-1 block">
                        الكمية المباعة: <strong className="text-white">{p.units} قطع</strong>
                      </span>
                    </div>

                    <div className="text-left">
                      <span className="text-base font-black text-emerald-400 block">
                        {p.revenue.toLocaleString('fr-FR')} د.م
                      </span>
                      <span className="text-[10px] text-slate-400">
                        {stats && stats.kpis.total_revenue > 0
                          ? Math.round((p.revenue / stats.kpis.total_revenue) * 100)
                          : 0}% من إجمالي المبيعات
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Moroccan Cities */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
              <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <h3 className="font-black text-sm text-white">أعلى المدن طلباً بالمغرب</h3>
                </div>
                <span className="text-[11px] text-slate-400">توزيع الشحنات</span>
              </div>

              <div className="space-y-2.5">
                {(stats?.cities_breakdown || []).length > 0 ? (
                  stats?.cities_breakdown.map((c, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800/60 text-xs"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-slate-800 text-slate-300 text-[10px] font-black flex items-center justify-center">
                          {i + 1}
                        </span>
                        <span className="font-bold text-white">{c.city}</span>
                      </div>
                      <div className="text-left">
                        <span className="font-black text-emerald-400">{c.orders} طلبات</span>
                        <span className="text-[10px] text-slate-500 block">{c.revenue} د.م</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-slate-500 text-xs">
                    لا توجد بيانات مدن كافية في هذه الفترة
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Status Breakdown Distribution */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
            <h3 className="font-black text-sm text-white">حالات الطلبات (Order Status Funnel)</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {Object.entries(stats?.status_breakdown || {}).map(([st, count], i) => (
                <div key={i} className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 text-center space-y-1">
                  <span className="text-[11px] text-slate-400 font-medium block line-clamp-1">{st}</span>
                  <span className="text-xl font-black text-white block">{count}</span>
                  <span className="text-[9px] text-slate-500">
                    {stats && stats.kpis.total_orders > 0 ? Math.round((count / stats.kpis.total_orders) * 100) : 0}%
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* =========================================================================
          TAB 2: ORDERS MANAGEMENT & ATTRACTIVE PREVIEW
         ========================================================================= */}
      {activeTab === 'orders' && (
        <div className="space-y-5">
          
          {/* Filters Bar */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="بحث برقم الطلب، اسم العميل، الهاتف، أو المدينة..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl pr-10 pl-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
              />
              <Search className="w-4 h-4 text-slate-500 absolute right-3 top-3" />
            </div>

            {/* Status Filter Buttons */}
            <div className="flex items-center gap-1.5 flex-wrap text-xs">
              {[
                { id: 'all', label: 'الكل' },
                { id: 'طلب جديد مؤكد (COD)', label: 'جديد ⏳' },
                { id: 'تم التأكيد هاتفياً', label: 'مؤكد 📞' },
                { id: 'قيد الشحن والتوصيل', label: 'بالشحن 🚚' },
                { id: 'تم التسليم بنجاح', label: 'مسلّم ✅' },
                { id: 'ملغي من الزبون', label: 'ملغي ❌' },
              ].map((s) => (
                <button
                  key={s.id}
                  onClick={() => setStatusFilter(s.id)}
                  className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
                    statusFilter === s.id
                      ? 'bg-emerald-500 text-slate-950 font-black'
                      : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Orders Table */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-right text-xs text-slate-300">
                <thead className="bg-slate-950/80 text-slate-400 text-[11px] font-bold border-b border-slate-800">
                  <tr>
                    <th className="p-4">رقم الطلب</th>
                    <th className="p-4">التاريخ</th>
                    <th className="p-4">العميل & الهاتف</th>
                    <th className="p-4">المنتجات المطلوبة</th>
                    <th className="p-4">المبلغ</th>
                    <th className="p-4">المدينة</th>
                    <th className="p-4">الحالة</th>
                    <th className="p-4 text-center">الإجراءات</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-medium">
                  {filteredOrders.length > 0 ? (
                    filteredOrders.map((o) => (
                      <tr key={o.id} className="hover:bg-slate-800/40 transition-colors">
                        <td className="p-4">
                          <button
                            onClick={() => setSelectedOrder(o)}
                            className="font-mono font-black text-emerald-400 hover:underline cursor-pointer flex items-center gap-1"
                          >
                            <span>#{o.orderId}</span>
                            <Eye className="w-3 h-3 text-slate-500" />
                          </button>
                        </td>
                        <td className="p-4 text-[11px] text-slate-400 whitespace-nowrap">
                          {o.createdAt ? new Date(o.createdAt).toLocaleDateString('ar-MA', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }) : '-'}
                        </td>
                        <td className="p-4">
                          <span className="font-bold text-white block">{o.customerName}</span>
                          <span className="text-[11px] text-slate-400 font-mono" dir="ltr">{o.phoneNumber}</span>
                        </td>
                        <td className="p-4 max-w-xs">
                          <div className="space-y-0.5">
                            {(o.items || []).map((itm, idx) => (
                              <span key={idx} className="block text-[11px] text-slate-200 line-clamp-1">
                                • {itm.quantity}x {itm.name.replace(/^\[.*?\]\s*/, '')}
                              </span>
                            ))}
                            {o.hasUpsell && (
                              <span className="inline-block bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[9px] font-bold px-1.5 rounded">
                                + Upsell (+199 د.م)
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="p-4 whitespace-nowrap">
                          <span className="font-black text-emerald-400 text-sm">{o.totalAmount} د.م</span>
                        </td>
                        <td className="p-4 text-slate-300 whitespace-nowrap">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-teal-400" />
                            <span>{o.city || 'المغرب'}</span>
                          </div>
                        </td>
                        <td className="p-4 whitespace-nowrap">
                          {getStatusBadge(o.status)}
                        </td>
                        <td className="p-4 whitespace-nowrap text-center">
                          <div className="flex items-center justify-center gap-2">
                            <button
                              onClick={() => setSelectedOrder(o)}
                              className="bg-slate-950 hover:bg-slate-800 text-white border border-slate-700 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-sm"
                            >
                              معاينة 📋
                            </button>

                            <a
                              href={getWhatsAppLink(o)}
                              target="_blank"
                              rel="noreferrer"
                              className="bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 p-2 rounded-xl transition-all"
                              title="مراسلة في واتساب"
                            >
                              <MessageSquare className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={8} className="p-12 text-center text-slate-500 text-xs">
                        لا توجد طلبات مطابقة للبحث والفترة المحددة
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      )}

      {/* =========================================================================
          TAB 3: TRAFFIC & IP QUALITY LOG (Clean Morocco vs VPNs)
         ========================================================================= */}
      {activeTab === 'traffic' && (
        <div className="space-y-5">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
            <div className="flex justify-between items-center mb-5 pb-3 border-b border-slate-800">
              <div>
                <h3 className="font-black text-sm text-white flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>سجل الزيارات المباشر وفحص عناوين IP المغربية</span>
                </h3>
                <p className="text-slate-400 text-xs mt-0.5">
                  تصفية أوتوماتيكية تعتمد على MaxMind وProxy Detector لاستبعاد الـ VPNs وحساب النقرات الحقيقية فقط.
                </p>
              </div>
              <span className="bg-slate-950 border border-slate-800 px-3 py-1 rounded-xl text-xs text-slate-400 font-bold">
                آخر 50 زيارة
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-right text-xs text-slate-300">
                <thead className="bg-slate-950 text-slate-400 text-[11px] font-bold">
                  <tr>
                    <th className="p-3">الصفحة</th>
                    <th className="p-3">عنوان IP</th>
                    <th className="p-3">الموقع الجغرافي</th>
                    <th className="p-3">فحص الـ VPN / Proxy</th>
                    <th className="p-3">درجة الخطورة</th>
                    <th className="p-3">الوقت</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-medium">
                  {clicks.length > 0 ? (
                    clicks.map((c) => (
                      <tr key={c.id} className="hover:bg-slate-800/30 transition-colors">
                        <td className="p-3 font-mono text-teal-400 text-[11px]">{c.path}</td>
                        <td className="p-3 font-mono text-slate-400 text-[11px]">{c.clientIp}</td>
                        <td className="p-3 text-white">
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-3 h-3 text-teal-400" />
                            <span>{c.city || 'غير محدد'}, {c.country}</span>
                          </div>
                        </td>
                        <td className="p-3">
                          {c.isProxy ? (
                            <span className="bg-rose-500/10 text-rose-400 border border-rose-500/20 px-2 py-0.5 rounded text-[10px] font-bold">
                              ⚠️ VPN / بروكسي محظور
                            </span>
                          ) : c.isValidMorocco ? (
                            <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded text-[10px] font-bold">
                              ✓ زائر مغربي حقيقي
                            </span>
                          ) : (
                            <span className="bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded text-[10px] font-bold">
                              خارج المغرب ({c.country})
                            </span>
                          )}
                        </td>
                        <td className="p-3 font-mono text-[11px]">
                          <span className={c.riskScore > 30 ? 'text-rose-400 font-bold' : 'text-slate-400'}>
                            {c.riskScore}
                          </span>
                        </td>
                        <td className="p-3 text-slate-500 text-[11px] whitespace-nowrap">
                          {c.createdAt ? new Date(c.createdAt).toLocaleTimeString('ar-MA') : '-'}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="p-8 text-center text-slate-500 text-xs">
                        لا توجد زيارات مسجلة مؤخراً
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          ATTRACTIVE ORDER PREVIEW MODAL / DRAWER
         ========================================================================= */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn" dir="rtl">
          <div className="w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-3xl p-6 md:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto space-y-6">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedOrder(null)}
              className="absolute top-5 left-5 text-slate-400 hover:text-white p-2 rounded-xl bg-slate-950 border border-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-5">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-black text-white">تفاصيل الطلب #{selectedOrder.orderId}</h2>
                  {getStatusBadge(selectedOrder.status)}
                </div>
                <span className="text-slate-400 text-xs mt-1 block">
                  تاريخ الحجز: {selectedOrder.createdAt ? new Date(selectedOrder.createdAt).toLocaleString('ar-MA') : '-'}
                </span>
              </div>

              <button
                onClick={() => handleCopyShippingInfo(selectedOrder)}
                className="bg-slate-950 hover:bg-slate-800 border border-slate-700 text-xs font-bold text-slate-200 px-3.5 py-2 rounded-xl flex items-center gap-1.5 transition-all cursor-pointer self-start sm:self-auto"
              >
                {copiedOrderId === selectedOrder.orderId ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">تم النسخ!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-teal-400" />
                    <span>نسخ للـ Livraison</span>
                  </>
                )}
              </button>
            </div>

            {/* Customer Quick Actions Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={getWhatsAppLink(selectedOrder)}
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs py-3 px-4 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>تأكيد في واتساب (رسالة جاهزة) 💬</span>
              </a>

              <a
                href={`tel:${selectedOrder.phoneNumber}`}
                className="bg-slate-950 hover:bg-slate-800 border border-slate-700 text-white font-bold text-xs py-3 px-4 rounded-2xl flex items-center justify-center gap-2 transition-all"
              >
                <Phone className="w-4 h-4 text-teal-400" />
                <span>اتصال هاتفي مباشر ({selectedOrder.phoneNumber})</span>
              </a>
            </div>

            {/* Customer & Location Box */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
                <span className="text-[10px] font-black text-teal-400 uppercase tracking-wider block">
                  معلومات الزبون
                </span>
                <div className="text-xs space-y-1">
                  <div className="flex justify-between">
                    <span className="text-slate-400">الاسم:</span>
                    <span className="font-bold text-white">{selectedOrder.customerName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">الهاتف:</span>
                    <span className="font-bold text-white font-mono" dir="ltr">{selectedOrder.phoneNumber}</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
                <span className="text-[10px] font-black text-teal-400 uppercase tracking-wider block">
                  الموقع الجغرافي والشحن
                </span>
                <div className="text-xs space-y-1">
                  <div className="flex justify-between">
                    <span className="text-slate-400">المدينة:</span>
                    <span className="font-bold text-white">{selectedOrder.city || 'المغرب'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">الجهة / الدولة:</span>
                    <span className="font-bold text-slate-300">{selectedOrder.region || 'المملكة المغربية'} ({selectedOrder.country})</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ordered Items List */}
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3">
              <span className="text-xs font-black text-white block border-b border-slate-800 pb-2">
                المنتجات المحجوزة في الطرد
              </span>
              <div className="space-y-2">
                {(selectedOrder.items || []).map((itm, i) => (
                  <div key={i} className="flex justify-between items-center text-xs p-2.5 bg-slate-900/70 rounded-xl border border-slate-800/80">
                    <div>
                      <span className="font-bold text-white block">• {itm.name}</span>
                      <span className="text-[10px] text-slate-500 font-mono">الرمز: {itm.sku || 'VM-SHW-01'}</span>
                    </div>
                    <div className="text-left">
                      <span className="font-black text-emerald-400 text-sm">الكمية: {itm.quantity}</span>
                      {itm.price && <span className="text-[10px] text-slate-400 block">{itm.price} د.م</span>}
                    </div>
                  </div>
                ))}
              </div>

              {/* Total Summary */}
              <div className="border-t border-slate-800 pt-3 flex justify-between items-center text-sm font-black">
                <span className="text-white">المبلغ الواجب استخلاصه عند التسليم:</span>
                <span className="text-emerald-400 text-lg">{selectedOrder.totalAmount} د.م</span>
              </div>
            </div>

            {/* Fraud & Security Inspection */}
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2 text-xs">
              <span className="text-[10px] font-black text-slate-400 block">
                فحص الأمان والـ IP (MaxMind Fraud Check)
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px]">
                <div className="bg-slate-900 p-2 rounded-lg">
                  <span className="text-slate-500 block text-[9px]">عنوان IP:</span>
                  <span className="font-mono text-slate-300">{selectedOrder.clientIp || '127.0.0.1'}</span>
                </div>
                <div className="bg-slate-900 p-2 rounded-lg">
                  <span className="text-slate-500 block text-[9px]">نوع الاتصال:</span>
                  <span className={selectedOrder.isProxy ? 'text-rose-400 font-bold' : 'text-emerald-400 font-bold'}>
                    {selectedOrder.isProxy ? 'VPN / بروكسي' : 'مباشر (Clean MA)'}
                  </span>
                </div>
                <div className="bg-slate-900 p-2 rounded-lg">
                  <span className="text-slate-500 block text-[9px]">مستوى المخاطرة:</span>
                  <span className="font-mono text-slate-300">{selectedOrder.riskScore} / 100</span>
                </div>
              </div>
            </div>

            {/* Status Changer & Delete */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <label className="text-xs font-bold text-slate-300 whitespace-nowrap">تغيير الحالة:</label>
                <select
                  value={selectedOrder.status}
                  onChange={(e) => handleStatusChange(selectedOrder.orderId, e.target.value)}
                  disabled={isUpdatingStatus}
                  className="bg-slate-950 border border-slate-700 text-white rounded-xl px-3 py-2 text-xs font-bold focus:outline-none focus:border-emerald-500 cursor-pointer w-full sm:w-auto"
                >
                  <option value="طلب جديد مؤكد (COD)">طلب جديد مؤكد (COD)</option>
                  <option value="تم التأكيد هاتفياً">تم التأكيد هاتفياً</option>
                  <option value="قيد الشحن والتوصيل">قيد الشحن والتوصيل</option>
                  <option value="تم التسليم بنجاح">تم التسليم بنجاح</option>
                  <option value="ملغي من الزبون">ملغي من الزبون</option>
                  <option value="مرتجع">مرتجع</option>
                </select>
              </div>

              <button
                onClick={() => handleDeleteOrder(selectedOrder.orderId)}
                className="text-rose-400 hover:text-rose-300 bg-rose-500/10 hover:bg-rose-500/20 px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer w-full sm:w-auto justify-center"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>حذف الطلب</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
