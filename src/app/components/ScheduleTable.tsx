// src/app/components/ScheduleTable.tsx

type ScheduleItem = {
  label: string; // e.g. "Mondays (Preschoolers)"
  time: string; // e.g. "1:20 PM – 2:05 PM"
  dates: readonly string[];
};

type ScheduleTableProps = {
  items: readonly ScheduleItem[];
};

export function ScheduleTable({ items }: ScheduleTableProps) {
  return (
    <div className="w-full">
      {/* ✅ MOBILE (below sm): stacked cards */}
      <div className="sm:hidden space-y-3">
        {items.map((item) => (
          <div
            key={item.label}
            className="rounded-lg border border-white/20 bg-white/5 p-3"
          >
            <div className="text-white font-semibold text-sm">{item.label}</div>
            <div className="text-white/90 text-xs mt-1">{item.time}</div>

            <div className="mt-3">
              <div className="text-white/80 text-[11px] font-semibold mb-2">
                Dates
              </div>

              <div className="flex flex-wrap gap-2">
                {item.dates.map((d) => (
                  <span
                    key={d}
                    className="inline-flex items-center rounded-md bg-white/10 px-2 py-1 text-[11px] text-white/90"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ TABLE (sm+): your original layout, but slightly more robust */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full border-collapse min-w-[720px]">
          <thead>
            <tr className="bg-white/10">
              <th className="text-left p-3 text-sm text-white border-b border-white/20">
                Option
              </th>
              <th className="text-left p-3 text-sm text-white border-b border-white/20 whitespace-nowrap">
                Time
              </th>
              <th className="text-left p-3 text-sm text-white border-b border-white/20">
                Dates
              </th>
            </tr>
          </thead>

          <tbody>
            {items.map((item, idx) => (
              <tr key={idx} className="border-b border-white/10 hover:bg-white/5">
                <td className="p-3 text-sm text-white font-semibold whitespace-nowrap align-top">
                  {item.label}
                </td>
                <td className="p-3 text-sm text-white whitespace-nowrap align-top">
                  {item.time}
                </td>
                <td className="p-3 text-sm text-white/90">
                  <div className="flex flex-wrap gap-x-2 gap-y-2">
                    {item.dates.map((d) => (
                      <span
                        key={d}
                        className="inline-block rounded-md bg-white/10 px-2 py-1 text-xs"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
