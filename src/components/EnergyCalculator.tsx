"use client";

import { useState, useMemo } from "react";

export function EnergyCalculator() {
  const [w, setW] = useState(4);
  const [d, setD] = useState(3);
  const [h, setH] = useState(2.7);
  const [type, setType] = useState<"chiller" | "freezer">("chiller");

  const result = useMemo(() => {
    const volume = w * d * h;
    // Heuristic kWh/day per m³: chiller ~0.4, freezer ~1.1
    const factor = type === "chiller" ? 0.4 : 1.1;
    const kwhDay = volume * factor;
    const kwhYr = kwhDay * 365;
    const costYr = kwhYr * 0.32; // QLD avg c/kWh
    const inefficient = costYr * 1.4;
    return {
      volume: volume.toFixed(1),
      kwhYr: Math.round(kwhYr),
      costYr: Math.round(costYr),
      inefficient: Math.round(inefficient),
      saving: Math.round(inefficient - costYr),
    };
  }, [w, d, h, type]);

  return (
    <div className="card p-6">
      <div className="font-display font-bold text-navy mb-3">Quick energy estimator</div>
      <div className="grid sm:grid-cols-4 gap-3">
        <Range label={`Width: ${w}m`} value={w} min={2} max={12} step={0.5} onChange={setW} />
        <Range label={`Depth: ${d}m`} value={d} min={2} max={12} step={0.5} onChange={setD} />
        <Range label={`Height: ${h}m`} value={h} min={2.4} max={4} step={0.1} onChange={setH} />
        <label className="text-sm font-medium text-navy">
          <span className="block mb-1">Type</span>
          <select className="w-full border border-navy/15 rounded-md px-3 py-2 text-sm" value={type} onChange={(e) => setType(e.target.value as any)}>
            <option value="chiller">Chiller (2–5°C)</option>
            <option value="freezer">Freezer (-18°C)</option>
          </select>
        </label>
      </div>
      <div className="grid sm:grid-cols-3 gap-3 mt-5">
        <Stat label="Volume" value={`${result.volume} m³`} />
        <Stat label="Estimated annual cost (Cherry-spec)" value={`$${result.costYr.toLocaleString()}`} />
        <Stat label="vs old / inefficient install" value={`$${result.inefficient.toLocaleString()}`} sub={`Save ~$${result.saving.toLocaleString()}/yr`} />
      </div>
      <p className="text-xs text-steel mt-3">Estimates only — based on a 32¢/kWh QLD commercial tariff. Real-world figures depend on door usage, stock loading, climate and plant choice.</p>
    </div>
  );
}

function Range({ label, value, min, max, step, onChange }: { label: string; value: number; min: number; max: number; step: number; onChange: (v: number) => void }) {
  return (
    <label className="text-sm font-medium text-navy">
      <span className="block mb-1">{label}</span>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(parseFloat(e.target.value))} className="w-full accent-cherry" onMouseUp={() => (window as any).gtag?.("event", "cost_calc_used")} />
    </label>
  );
}

function Stat({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="bg-ice rounded-lg p-3">
      <div className="text-xs text-steel">{label}</div>
      <div className="font-display font-bold text-navy text-lg tabular">{value}</div>
      {sub && <div className="text-xs text-cherry mt-0.5">{sub}</div>}
    </div>
  );
}
