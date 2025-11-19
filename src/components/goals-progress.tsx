interface Goal {
  label: string;
  current: number;
  target: number;
  unit: string;
}

interface GoalsProgressProps {
  goals: Goal[];
}

export function GoalsProgress({ goals }: GoalsProgressProps) {
  return (
    <div className="rounded-3xl border border-white/5 bg-slate-900/60 p-6 shadow-lg shadow-slate-950/50 backdrop-blur">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">Goal Progress</h2>
          <p className="text-sm text-slate-400">Daily targets at a glance</p>
        </div>
        <span className="rounded-full border border-white/10 bg-slate-900 px-3 py-1 text-xs font-medium text-slate-300">
          Auto-sync
        </span>
      </div>
      <ul className="mt-6 space-y-5">
        {goals.map((goal) => {
          const progress = Math.min((goal.current / goal.target) * 100, 100);
          return (
            <li key={goal.label} className="space-y-2">
              <div className="flex items-center justify-between text-sm font-medium text-slate-200">
                <span>{goal.label}</span>
                <span className="text-slate-400">
                  {goal.current}
                  {goal.unit} / {goal.target}
                  {goal.unit}
                </span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-slate-800">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-400 transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

