'use client';

import React, { useEffect, useMemo, useState } from 'react';
import {
  Calculator, Target, TrendingUp, DollarSign, Package, AlertTriangle,
  Scale, Users, Truck, RotateCcw, Warehouse, PhoneCall
} from 'lucide-react';

const CONFIRM_FEE = 1.7;
const DELIVER_FEE = 4;
const RETURN_FEE = 1.3;
const WAREHOUSE_FEE = 0.8;
const DEFAULT_MAD_PER_USD = 10;
const STORAGE_KEY = 'vm_profit_calc';

export interface ProfitCalculatorStats {
  aov?: number;
  lifetime_aov?: number;
  lifetime_orders?: number;
  lifetime_units?: number;
  avg_units_per_order?: number;
}

interface CalcInputs {
  leads: number;
  cpl: number;
  confirmRate: number;
  deliveryRate: number;
  productCost: number;
  aovMad: number;
  avgUnits: number;
  madPerUsd: number;
}

interface FunnelResult {
  leads: number;
  confirmed: number;
  shipped: number;
  delivered: number;
  returned: number;
  aovUsd: number;
  revenue: number;
  ads: number;
  confirmCost: number;
  warehouseCost: number;
  deliveryCost: number;
  returnCost: number;
  cogs: number;
  opsCost: number;
  totalCost: number;
  profit: number;
  margin: number;
  roas: number;
  profitPerDelivered: number;
  cmPerLead: number;
  maxCpl: number;
  maxCpa: number;
  maxCostPerConfirmed: number;
}

function num(value: string | number, fallback = 0): number {
  const n = typeof value === 'number' ? value : parseFloat(String(value).replace(',', '.'));
  return Number.isFinite(n) ? n : fallback;
}

function money(value: number, digits = 2): string {
  if (!Number.isFinite(value)) return '—';
  return value.toLocaleString('en-US', { minimumFractionDigits: digits, maximumFractionDigits: digits });
}

function runCodMath(input: CalcInputs): FunnelResult {
  const leads = Math.max(0, input.leads);
  const cpl = Math.max(0, input.cpl);
  const cr = Math.min(1, Math.max(0, input.confirmRate / 100));
  const dr = Math.min(1, Math.max(0, input.deliveryRate / 100));
  const productCost = Math.max(0, input.productCost);
  const avgUnits = Math.max(0.01, input.avgUnits);
  const fx = input.madPerUsd > 0 ? input.madPerUsd : DEFAULT_MAD_PER_USD;
  const aovUsd = Math.max(0, input.aovMad) / fx;

  const confirmed = leads * cr;
  const shipped = confirmed;
  const delivered = shipped * dr;
  const returned = shipped * (1 - dr);

  const revenue = delivered * aovUsd;
  const ads = leads * cpl;
  const confirmCost = confirmed * CONFIRM_FEE;
  const warehouseCost = shipped * WAREHOUSE_FEE;
  const deliveryCost = delivered * DELIVER_FEE;
  const returnCost = returned * RETURN_FEE;
  const cogs = delivered * avgUnits * productCost;
  const opsCost = confirmCost + warehouseCost + deliveryCost + returnCost + cogs;
  const totalCost = ads + opsCost;
  const profit = revenue - totalCost;
  const margin = revenue > 0 ? (profit / revenue) * 100 : 0;
  const roas = ads > 0 ? revenue / ads : 0;
  const profitPerDelivered = delivered > 0 ? profit / delivered : 0;

  const cmPerLead =
    cr * (
      dr * aovUsd
      - CONFIRM_FEE
      - WAREHOUSE_FEE
      - dr * DELIVER_FEE
      - (1 - dr) * RETURN_FEE
      - dr * avgUnits * productCost
    );
  const deliveredPerLead = cr * dr;
  const confirmedPerLead = cr;

  return {
    leads,
    confirmed,
    shipped,
    delivered,
    returned,
    aovUsd,
    revenue,
    ads,
    confirmCost,
    warehouseCost,
    deliveryCost,
    returnCost,
    cogs,
    opsCost,
    totalCost,
    profit,
    margin,
    roas,
    profitPerDelivered,
    cmPerLead,
    maxCpl: cmPerLead,
    maxCpa: deliveredPerLead > 0 ? cmPerLead / deliveredPerLead : 0,
    maxCostPerConfirmed: confirmedPerLead > 0 ? cmPerLead / confirmedPerLead : 0,
  };
}

function Field({
  label,
  hint,
  value,
  onChange,
  suffix,
  step = '0.01',
}: {
  label: string;
  hint?: string;
  value: number;
  onChange: (n: number) => void;
  suffix?: string;
  step?: string;
}) {
  return (
    <label className="block space-y-1.5">
      <span className="text-[11px] font-bold text-slate-300">{label}</span>
      <div className="relative">
        <input
          type="number"
          min={0}
          step={step}
          value={Number.isFinite(value) ? value : 0}
          onChange={(e) => onChange(num(e.target.value))}
          className="w-full bg-slate-950 border border-slate-800 focus:border-teal-500/50 rounded-xl px-3 py-2.5 text-sm text-white font-bold focus:outline-none"
        />
        {suffix && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[10px] font-black text-slate-500">
            {suffix}
          </span>
        )}
      </div>
      {hint && <span className="block text-[10px] text-slate-500">{hint}</span>}
    </label>
  );
}

function Stat({
  label,
  value,
  tone = 'default',
  sub,
}: {
  label: string;
  value: string;
  tone?: 'default' | 'good' | 'bad' | 'accent';
  sub?: string;
}) {
  const toneClass =
    tone === 'good' ? 'text-emerald-400' :
    tone === 'bad' ? 'text-rose-400' :
    tone === 'accent' ? 'text-amber-400' :
    'text-white';
  return (
    <div className="bg-slate-950 border border-slate-800 rounded-2xl p-3.5 space-y-1">
      <div className="text-[10px] font-bold text-slate-500">{label}</div>
      <div className={`text-lg font-black ${toneClass}`}>{value}</div>
      {sub && <div className="text-[10px] text-slate-500">{sub}</div>}
    </div>
  );
}

function Row({ label, value, icon }: { label: string; value: string; icon?: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-3 py-2 border-b border-slate-800/70 last:border-0">
      <span className="text-[11px] text-slate-400 flex items-center gap-1.5">
        {icon}
        {label}
      </span>
      <span className="text-[11px] font-black text-white font-mono">{value}</span>
    </div>
  );
}

export default function ProfitCalculator({ stats }: { stats: ProfitCalculatorStats | null }) {
  const lifetimeAov = stats?.lifetime_aov || stats?.aov || 0;
  const lifetimeUnits = stats?.avg_units_per_order || 1;

  const [inputs, setInputs] = useState<CalcInputs>({
    leads: 1000,
    cpl: 0.8,
    confirmRate: 55,
    deliveryRate: 70,
    productCost: 5,
    aovMad: lifetimeAov,
    avgUnits: lifetimeUnits,
    madPerUsd: DEFAULT_MAD_PER_USD,
  });
  const [hydrated, setHydrated] = useState(false);
  const [appliedLive, setAppliedLive] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw) as Partial<CalcInputs>;
        setInputs((prev) => ({ ...prev, ...saved }));
      }
    } catch {
      /* keep defaults */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated || appliedLive) return;
    if (lifetimeAov <= 0) return;
    setInputs((prev) => ({
      ...prev,
      aovMad: lifetimeAov,
      avgUnits: lifetimeUnits || prev.avgUnits,
    }));
    setAppliedLive(true);
  }, [hydrated, appliedLive, lifetimeAov, lifetimeUnits]);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(inputs));
  }, [inputs, hydrated]);

  const patch = (partial: Partial<CalcInputs>) => setInputs((prev) => ({ ...prev, ...partial }));

  const useLiveAov = () => {
    if (lifetimeAov > 0) patch({ aovMad: lifetimeAov, avgUnits: lifetimeUnits || 1 });
  };

  const base = useMemo(() => runCodMath(inputs), [inputs]);
  const scale2x = useMemo(() => runCodMath({ ...inputs, leads: inputs.leads * 2 }), [inputs]);
  const scale5x = useMemo(() => runCodMath({ ...inputs, leads: inputs.leads * 5 }), [inputs]);

  const broken = base.maxCpl <= 0;

  return (
    <div className="space-y-6">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 md:p-6 shadow-xl space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <h3 className="font-black text-white text-sm flex items-center gap-2">
              <Calculator className="w-4 h-4 text-emerald-400" />
              حاسبة أرباح الدفع عند الاستلام (COD)
            </h3>
            <p className="text-slate-400 text-xs mt-1">
              AOV مدى الحياة يتحوّل للدولار. التكلفة على المؤكد، المشحون، المسلّم، والمرتجع.
            </p>
          </div>
          <button
            onClick={useLiveAov}
            className="bg-slate-950 hover:bg-slate-800 border border-slate-800 text-teal-300 px-3.5 py-2 rounded-xl text-[11px] font-bold cursor-pointer"
          >
            سحب AOV الحقيقي من الطلبات
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Stat
            label="AOV مدى الحياة"
            value={`${money(inputs.aovMad, 2)} د.م`}
            tone="accent"
            sub={`${money(base.aovUsd)} $  ·  ${stats?.lifetime_orders || 0} طلب`}
          />
          <Stat
            label="متوسط القطع في الطلب"
            value={`${money(inputs.avgUnits, 2)} قطعة`}
            sub={`${stats?.lifetime_units || 0} قطعة إجمالاً`}
          />
          <Stat
            label="سعر الصرف"
            value={`1 $ = ${money(inputs.madPerUsd, 2)} د.م`}
          />
          <Stat
            label="هامش المساهمة قبل الإعلان"
            value={`${money(base.cmPerLead)} $ / عميل`}
            tone={broken ? 'bad' : 'good'}
            sub={broken ? 'العمليات أغلى من AOV' : 'هذا سقف تكلفة العميل المحتمل'}
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-[10px] text-slate-400">
          <div className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2">تأكيد: <strong className="text-white">{CONFIRM_FEE}$</strong> لكل مؤكد</div>
          <div className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2">توصيل: <strong className="text-white">{DELIVER_FEE}$</strong> لكل مسلّم</div>
          <div className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2">مرتجع: <strong className="text-white">{RETURN_FEE}$</strong> لكل راجع</div>
          <div className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2">مستودع: <strong className="text-white">{WAREHOUSE_FEE}$</strong> لكل مشحون</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3">
          <Field label="عدد العملاء المحتملين" value={inputs.leads} onChange={(n) => patch({ leads: n })} suffix="Leads" step="1" />
          <Field label="تكلفة العميل المحتمل" value={inputs.cpl} onChange={(n) => patch({ cpl: n })} suffix="$" hint="CPL" />
          <Field label="معدل التأكيد" value={inputs.confirmRate} onChange={(n) => patch({ confirmRate: n })} suffix="%" step="0.1" hint="مؤكد ÷ العملاء المحتملين" />
          <Field label="معدل التوصيل" value={inputs.deliveryRate} onChange={(n) => patch({ deliveryRate: n })} suffix="%" step="0.1" hint="مسلّم ÷ المشحون (بعد التأكيد)" />
          <Field label="تكلفة المنتج للقطعة" value={inputs.productCost} onChange={(n) => patch({ productCost: n })} suffix="$" hint="COGS على الطلبات المسلّمة" />
          <Field label="سعر صرف الدولار" value={inputs.madPerUsd} onChange={(n) => patch({ madPerUsd: n })} suffix="د.م" />
          <Field label="AOV (درهم)" value={inputs.aovMad} onChange={(n) => patch({ aovMad: n })} suffix="د.م" hint="قابل للتعديل للتجربة" />
          <Field label="متوسط القطع" value={inputs.avgUnits} onChange={(n) => patch({ avgUnits: n })} suffix="قطعة" step="0.01" />
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <section className="bg-slate-900 border border-slate-800 rounded-3xl p-5 md:p-6 shadow-xl space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
            <Target className="w-4 h-4 text-amber-400" />
            <h4 className="font-black text-sm text-white">نقطة التعادل (Breakeven)</h4>
          </div>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            أقصى ما تقدر تخلّص على العميل المحتمل باش الربح يساوي صفر، بعد التأكيد والتوصيل والإرجاع وتكلفة المنتج.
          </p>

          {broken && (
            <div className="flex items-start gap-2 bg-rose-500/10 border border-rose-500/30 text-rose-300 rounded-2xl px-3 py-2.5 text-[11px] font-bold">
              <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
              حتى بصفر إعلان ما كتربحش. زيد معدل التأكيد/التوصيل أو نقص تكلفة المنتج.
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Stat label="أقصى CPL" value={`${money(base.maxCpl)} $`} tone={broken ? 'bad' : 'good'} sub="تكلفة العميل المحتمل" />
            <Stat label="أقصى تكلفة تأكيد" value={`${money(base.maxCostPerConfirmed)} $`} sub="لكل طلب مؤكد" />
            <Stat label="أقصى CPA مسلّم" value={`${money(base.maxCpa)} $`} sub="لكل طلب واصل" />
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3">
            <Row label="مدخول لكل عميل محتمل" value={`${money(base.leads > 0 ? base.revenue / base.leads : 0)} $`} icon={<DollarSign className="w-3 h-3 text-emerald-400" />} />
            <Row label="عمليات + بضاعة لكل عميل" value={`${money(base.leads ? base.opsCost / base.leads : 0)} $`} icon={<Package className="w-3 h-3 text-amber-400" />} />
            <Row label="AOV بالدولار" value={`${money(base.aovUsd)} $`} />
            <Row
              label="تكلفة البضاعة للطلب المسلّم"
              value={`${money(inputs.avgUnits * inputs.productCost)} $  (${money(inputs.avgUnits, 2)} × ${money(inputs.productCost)} $)`}
            />
          </div>
        </section>

        <section className="bg-slate-900 border border-slate-800 rounded-3xl p-5 md:p-6 shadow-xl space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
            <Scale className="w-4 h-4 text-teal-400" />
            <h4 className="font-black text-sm text-white">الأرباح عند التوسيع (Scaling)</h4>
          </div>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            نفس النسب الحالية. غيّر عدد العملاء المحتملين أو الـ CPL باش تشوف الربح على 1× و 2× و 5×.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <Stat label="الربح الصافي" value={`${money(base.profit)} $`} tone={base.profit >= 0 ? 'good' : 'bad'} sub={`${money(base.profit * inputs.madPerUsd, 0)} د.م`} />
            <Stat label="هامش الربح" value={`${money(base.margin, 1)}%`} tone={base.margin >= 0 ? 'good' : 'bad'} />
            <Stat label="ROAS" value={`${money(base.roas, 2)}x`} />
            <Stat label="ربح / طلب مسلّم" value={`${money(base.profitPerDelivered)} $`} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3">
              <div className="text-[10px] font-black text-slate-500 mb-1">القمع</div>
              <Row label="عملاء محتملون" value={money(base.leads, 0)} icon={<Users className="w-3 h-3 text-teal-400" />} />
              <Row label="مؤكدون" value={money(base.confirmed, 1)} icon={<PhoneCall className="w-3 h-3 text-emerald-400" />} />
              <Row label="مشحونون من المستودع" value={money(base.shipped, 1)} icon={<Warehouse className="w-3 h-3 text-amber-400" />} />
              <Row label="مسلّمون" value={money(base.delivered, 1)} icon={<Truck className="w-3 h-3 text-emerald-400" />} />
              <Row label="مرتجعون" value={money(base.returned, 1)} icon={<RotateCcw className="w-3 h-3 text-rose-400" />} />
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3">
              <div className="text-[10px] font-black text-slate-500 mb-1">التكاليف بالدولار</div>
              <Row label="إعلانات" value={`${money(base.ads)} $`} />
              <Row label={`تأكيد × ${CONFIRM_FEE}$`} value={`${money(base.confirmCost)} $`} />
              <Row label={`مستودع × ${WAREHOUSE_FEE}$`} value={`${money(base.warehouseCost)} $`} />
              <Row label={`توصيل × ${DELIVER_FEE}$`} value={`${money(base.deliveryCost)} $`} />
              <Row label={`إرجاع × ${RETURN_FEE}$`} value={`${money(base.returnCost)} $`} />
              <Row label="تكلفة المنتج" value={`${money(base.cogs)} $`} />
              <Row label="المدخول" value={`${money(base.revenue)} $`} />
            </div>
          </div>
        </section>
      </div>

      <section className="bg-slate-900 border border-slate-800 rounded-3xl p-5 md:p-6 shadow-xl space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
          <TrendingUp className="w-4 h-4 text-emerald-400" />
          <h4 className="font-black text-sm text-white">سيناريوهات التوسيع بنفس الـ CPL والنسب</h4>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-right text-xs">
            <thead className="text-slate-500 text-[11px]">
              <tr className="border-b border-slate-800">
                <th className="p-3 font-bold">السيناريو</th>
                <th className="p-3 font-bold">Leads</th>
                <th className="p-3 font-bold">مسلّم</th>
                <th className="p-3 font-bold">مدخول</th>
                <th className="p-3 font-bold">إعلانات</th>
                <th className="p-3 font-bold">عمليات + بضاعة</th>
                <th className="p-3 font-bold">ربح</th>
                <th className="p-3 font-bold">هامش</th>
              </tr>
            </thead>
            <tbody className="text-white font-bold">
              {[
                { name: 'الحجم الحالي', row: base },
                { name: 'توسعة ×2', row: scale2x },
                { name: 'توسعة ×5', row: scale5x },
              ].map((s) => (
                <tr key={s.name} className="border-b border-slate-800/70">
                  <td className="p-3 text-slate-300">{s.name}</td>
                  <td className="p-3 font-mono">{money(s.row.leads, 0)}</td>
                  <td className="p-3 font-mono">{money(s.row.delivered, 1)}</td>
                  <td className="p-3 font-mono text-emerald-400">{money(s.row.revenue)} $</td>
                  <td className="p-3 font-mono">{money(s.row.ads)} $</td>
                  <td className="p-3 font-mono">{money(s.row.opsCost)} $</td>
                  <td className={`p-3 font-mono ${s.row.profit >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {money(s.row.profit)} $
                  </td>
                  <td className="p-3 font-mono">{money(s.row.margin, 1)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
