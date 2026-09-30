type Row = {
  size: string;
  dims: string;
  temp: string;
  typical: string;
};

const rows: Row[] = [
  { size: "Small chiller", dims: "3m × 3m × 2.4m", temp: "2–5°C", typical: "Cafe, small kitchen, florist" },
  { size: "Medium chiller", dims: "5m × 4m × 2.7m", temp: "2–5°C", typical: "Restaurant, grocer, medical" },
  { size: "Freezer room", dims: "5m × 5m × 2.7m", temp: "-18°C", typical: "Butcher, bakery, seafood" },
  { size: "Combi cool/freezer", dims: "6m × 4m × 2.7m", temp: "2°C / -18°C", typical: "Supermarket, distribution" },
  { size: "Industrial cool room", dims: "8m × 6m × 3.6m+", temp: "-22°C", typical: "3PL, cold storage, brewery" },
];

export function PricingTable() {
  return (
    <div className="w-full">
      {/* Mobile: stacked cards */}
      <div className="grid gap-3 sm:hidden">
        {rows.map((r) => (
          <div key={r.size} className="card p-4 tabular">
            <div className="flex items-start justify-between gap-3">
              <div className="font-display font-bold text-navy">{r.size}</div>
              <div className="font-display font-bold text-cherry text-right text-xs">{r.temp}</div>
            </div>
            <dl className="mt-3 grid grid-cols-2 gap-2 text-xs text-steel">
              <div>
                <dt className="text-[11px] uppercase tracking-wider text-navy/60">Typical size</dt>
                <dd className="font-medium text-steel">{r.dims}</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-wider text-navy/60">Common use</dt>
                <dd className="font-medium text-steel">{r.typical}</dd>
              </div>
            </dl>
          </div>
        ))}
      </div>

      {/* Tablet+: real table */}
      <div className="hidden sm:block rounded-xl border border-navy/10 bg-white overflow-hidden">
        <table className="w-full text-left tabular table-fixed">
          <colgroup>
            <col className="w-[26%]" />
            <col className="w-[26%]" />
            <col className="w-[18%]" />
            <col className="w-[30%]" />
          </colgroup>
          <thead className="bg-ice text-navy text-sm">
            <tr>
              <th className="px-4 py-3 font-display font-bold">Cool room type</th>
              <th className="px-4 py-3 font-display font-bold">Typical size</th>
              <th className="px-4 py-3 font-display font-bold">Temperature</th>
              <th className="px-4 py-3 font-display font-bold">Common use</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy/10 text-sm text-steel">
            {rows.map((r) => (
              <tr key={r.size} className="hover:bg-ice/60">
                <td className="px-4 py-4 font-semibold text-navy">{r.size}</td>
                <td className="px-4 py-4">{r.dims}</td>
                <td className="px-4 py-4 font-semibold text-cherry">{r.temp}</td>
                <td className="px-4 py-4">{r.typical}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
