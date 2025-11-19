interface WorkoutSession {
  id: string;
  name: string;
  focus: string;
  intensity: "Low" | "Moderate" | "High";
  start: string;
  duration: string;
  coach?: string;
}

interface WorkoutPlanProps {
  sessions: WorkoutSession[];
}

const intensityColor: Record<WorkoutSession["intensity"], string> = {
  Low: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
  Moderate: "bg-teal-500/10 text-teal-300 border-teal-500/30",
  High: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
};

export function WorkoutPlan({ sessions }: WorkoutPlanProps) {
  return (
    <div className="rounded-3xl border border-white/5 bg-slate-900/60 p-6 shadow-lg shadow-slate-950/50 backdrop-blur">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">Upcoming Workouts</h2>
          <p className="text-sm text-slate-400">Your next scheduled sessions</p>
        </div>
        <button className="rounded-full border border-white/10 bg-slate-900 px-3 py-1 text-xs font-semibold text-slate-200 transition hover:border-emerald-400/50 hover:text-emerald-300">
          View All
        </button>
      </div>
      <ul className="space-y-4">
        {sessions.map((session) => (
          <li
            key={session.id}
            className="flex flex-col gap-3 rounded-2xl border border-white/5 bg-slate-950/50 p-4 md:flex-row md:items-center md:justify-between"
          >
            <div>
              <p className="text-sm font-semibold text-emerald-300">
                {session.start} · {session.duration}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-white">
                {session.name}
              </h3>
              <p className="text-sm text-slate-400">
                Focus: {session.focus}
                {session.coach ? ` · Coach ${session.coach}` : ""}
              </p>
            </div>
            <span
              className={`inline-flex h-9 items-center justify-center rounded-full border px-4 text-xs font-semibold uppercase tracking-wide ${intensityColor[session.intensity]}`}
            >
              {session.intensity} Intensity
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

