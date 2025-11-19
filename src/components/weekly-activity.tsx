interface ActivityPoint {
  day: string;
  activeMinutes: number;
  calories: number;
  workouts: number;
}

interface WeeklyActivityProps {
  data: ActivityPoint[];
}

const MAX_MINUTES = 90;

export function WeeklyActivity({ data }: WeeklyActivityProps) {
  return (
    <div className="rounded-3xl border border-white/5 bg-slate-900/60 p-6 shadow-lg shadow-slate-950/50 backdrop-blur">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">Weekly Activity</h2>
          <p className="text-sm text-slate-400">Active minutes & calories</p>
        </div>
        <span className="rounded-full border border-white/10 bg-slate-900 px-3 py-1 text-xs font-medium text-slate-300">
          Goal 75m/day
        </span>
      </div>
      <div className="mt-6 grid grid-cols-7 gap-3">
        {data.map((point) => {
          const minutesHeight = Math.min(
            (point.activeMinutes / MAX_MINUTES) * 100,
            100,
          );
          const caloriesHeight = Math.min(
            (point.calories / 700) * 100,
            100,
          );

          return (
            <div
              key={point.day}
              className="flex flex-col items-center gap-3 text-xs text-slate-400"
            >
              <div className="flex h-40 w-full items-end justify-center gap-1 rounded-2xl border border-white/5 bg-slate-950/60 p-1">
                <div
                  className="w-3 rounded-full bg-emerald-400/80"
                  style={{ height: `${minutesHeight}%` }}
                />
                <div
                  className="w-3 rounded-full bg-emerald-600/80"
                  style={{ height: `${caloriesHeight}%` }}
                />
              </div>
              <div className="text-center leading-tight">
                <p className="font-semibold text-slate-200">{point.workouts}x</p>
                <p>{point.day}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

