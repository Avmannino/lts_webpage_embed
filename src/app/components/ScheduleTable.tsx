type ScheduleItem = {
  label: string; // e.g. "Mondays (Preschoolers)"
  time: string; // e.g. "1:20 PM – 2:05 PM"
  dates: string[]; // e.g. ["Mar 16, 2026", ...]
};

type ScheduleTableProps = {
  items: ScheduleItem[];
};

export function ScheduleTable({ items }: ScheduleTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-white/10">
            <th className="text-left p-2 sm:p-3 text-xs sm:text-sm text-white border-b border-white/20">
              Option
            </th>
            <th className="text-left p-2 sm:p-3 text-xs sm:text-sm text-white border-b border-white/20">
              Time
            </th>
            <th className="text-left p-2 sm:p-3 text-xs sm:text-sm text-white border-b border-white/20">
              Dates
            </th>
          </tr>
        </thead>

        <tbody>
          {items.map((item, idx) => (
            <tr key={idx} className="border-b border-white/10 hover:bg-white/5">
              <td className="p-2 sm:p-3 text-xs sm:text-sm text-white font-semibold whitespace-nowrap">
                {item.label}
              </td>
              <td className="p-2 sm:p-3 text-xs sm:text-sm text-white whitespace-nowrap">
                {item.time}
              </td>
              <td className="p-2 sm:p-3 text-[11px] sm:text-sm text-white/90">
                <div className="flex flex-wrap gap-x-2 gap-y-1">
                  {item.dates.map((d) => (
                    <span
                      key={d}
                      className="inline-block rounded-md bg-white/10 px-2 py-1"
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
  );
}
