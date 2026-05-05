export function PricingTable() {
  const rows = [
    { size: "Small chiller", dims: "3m × 3m × 2.4m", temp: "2–5°C", price: "$4,000 – $8,000" },
    { size: "Medium chiller", dims: "5m × 4m × 2.7m", temp: "2–5°C", price: "$8,000 – $15,000" },
    { size: "Freezer room", dims: "5m × 5m × 2.7m", temp: "-18°C", price: "$12,000 – $25,000" },
    { size: "Combi cool/freezer", dims: "6m × 4m × 2.7m", temp: "2°C / -18°C", price: "$18,000 – $32,000" },
    { size: "Industrial cold room", dims: "8m × 6m × 3.6m+", temp: "-22°C", price: "$25,000 – $40,000+" },
  ];
  return (
    <div className="overflow-x-auto rounded-xl border border-navy/10 bg-white">
      <table className="w-full text-left tabular">
        <thead className="bg-ice text-navy text-sm">
          <tr>
            <th className="px-4 py-3 font-display font-bold">Cold room type</th>
            <th className="px-4 py-3 font-display font-bold">Typical size</th>
            <th className="px-4 py-3 font-display font-bold">Temperature</th>
            <th className="px-4 py-3 font-display font-bold">Installed price (Brisbane)</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-navy/10 text-sm text-steel">
          {rows.map((r) => (
            <tr key={r.size} className="hover:bg-ice/60">
              <td className="px-4 py-4 font-semibold text-navy">{r.size}</td>
              <td className="px-4 py-4">{r.dims}</td>
              <td className="px-4 py-4">{r.temp}</td>
              <td className="px-4 py-4 font-semibold text-cherry">{r.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
