'use client';

import { useEffect, useState } from 'react';

export default function SheetPingPage() {
  const [result, setResult] = useState('جاري إرسال صف تجريبي إلى Google Sheet...');

  useEffect(() => {
    fetch('/api/v1/sheet-ping')
      .then(async (res) => {
        const data = await res.json();
        setResult(data.message || JSON.stringify(data));
      })
      .catch(() => setResult('تعذر الاتصال بمسار الاختبار'));
  }, []);

  return (
    <div className="min-h-screen bg-[#070b14] text-white flex items-center justify-center px-4" dir="rtl">
      <div className="max-w-lg w-full bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center">
        <h1 className="text-xl font-black mb-3">اختبار Google Sheet</h1>
        <p className="text-sm text-slate-300">{result}</p>
        <p className="text-xs text-slate-500 mt-4">إذا نجح الإرسال، افتح الجدول وابحث عن صف vitalis-ping.</p>
      </div>
    </div>
  );
}
