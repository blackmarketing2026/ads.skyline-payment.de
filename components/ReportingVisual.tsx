export function ReportingVisual() {
  return (
    <div className="relative h-40 rounded-md bg-[#10161e] p-4 text-white shadow-premium" aria-hidden="true">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[10px] uppercase text-white/50">Umsatz heute</div>
          <div className="mt-1 text-2xl font-bold">2.840 EUR</div>
        </div>
        <div className="rounded-full border border-gold/50 px-3 py-1 text-xs text-gold-light">Live</div>
      </div>
      <div className="mt-5 flex h-14 items-end gap-2">
        {[32, 48, 38, 62, 50, 72, 58].map((height, index) => (
          <span key={index} style={{ height }} className="flex-1 rounded-t bg-gradient-to-t from-gold to-gold-light" />
        ))}
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
        <div className="rounded bg-white/[0.08] p-2"><span className="text-white/45">Transaktionen</span><b className="ml-2">128</b></div>
        <div className="rounded bg-white/[0.08] p-2"><span className="text-white/45">Ø Bon</span><b className="ml-2">22 EUR</b></div>
      </div>
    </div>
  );
}
