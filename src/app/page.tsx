import {
  BoltIcon,
  FireIcon,
  MoonIcon,
  SparklesIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";
import { StatCard } from "@/components/stat-card";
import { WeeklyActivity } from "@/components/weekly-activity";
import { GoalsProgress } from "@/components/goals-progress";
import { WorkoutPlan } from "@/components/workout-plan";

const summaryMetrics = [
  {
    title: "Active Calories",
    value: "2,310 kcal",
    change: { amount: "+12%", trend: "up" as const, label: "vs last week" },
    accent: "from-orange-500/20 via-rose-500/10 to-transparent",
    icon: <FireIcon className="h-6 w-6" />,
  },
  {
    title: "Workout Streak",
    value: "8 Days",
    change: { amount: "+2", trend: "up" as const, label: "personal best" },
    accent: "from-emerald-500/20 via-teal-500/10 to-transparent",
    icon: <TrophyIcon className="h-6 w-6" />,
  },
  {
    title: "Sleep Quality",
    value: "92%",
    change: { amount: "+6%", trend: "up" as const, label: "last night" },
    accent: "from-indigo-500/20 via-blue-500/10 to-transparent",
    icon: <MoonIcon className="h-6 w-6" />,
  },
  {
    title: "VO₂ Max",
    value: "46 ml/kg/min",
    change: { amount: "+1.4", trend: "up" as const, label: "since March" },
    accent: "from-cyan-500/20 via-sky-500/10 to-transparent",
    icon: <BoltIcon className="h-6 w-6" />,
  },
];

const weeklyActivityData = [
  { day: "Mon", activeMinutes: 68, calories: 430, workouts: 1 },
  { day: "Tue", activeMinutes: 74, calories: 502, workouts: 2 },
  { day: "Wed", activeMinutes: 52, calories: 361, workouts: 1 },
  { day: "Thu", activeMinutes: 83, calories: 590, workouts: 2 },
  { day: "Fri", activeMinutes: 64, calories: 421, workouts: 1 },
  { day: "Sat", activeMinutes: 92, calories: 642, workouts: 2 },
  { day: "Sun", activeMinutes: 48, calories: 315, workouts: 1 },
];

const goalProgress = [
  { label: "Daily Steps", current: 9.1, target: 10, unit: "k" },
  { label: "Protein Intake", current: 124, target: 150, unit: "g" },
  { label: "Hydration", current: 2.4, target: 3, unit: "L" },
];

const upcomingSessions = [
  {
    id: "1",
    name: "Strength · Lower Body Power",
    focus: "Barbell complex & plyometrics",
    intensity: "High" as const,
    start: "Today · 5:30 PM",
    duration: "55 min",
    coach: "Chloe",
  },
  {
    id: "2",
    name: "Mobility & Core Stability",
    focus: "Active recovery · mobility flow",
    intensity: "Moderate" as const,
    start: "Tomorrow · 7:00 AM",
    duration: "35 min",
  },
  {
    id: "3",
    name: "Endurance Ride",
    focus: "Zone 2 cardio · cadence work",
    intensity: "Low" as const,
    start: "Wed · 6:15 AM",
    duration: "45 min",
    coach: "Miguel",
  },
];

const bodyFocus = [
  {
    metric: "Bodyweight",
    value: "162.4 lbs",
    delta: "-0.8 lbs",
    badge: "Weekly average",
  },
  {
    metric: "Body Fat",
    value: "18.6%",
    delta: "-0.3%",
    badge: "Smart scale",
  },
  {
    metric: "Recovery",
    value: "High",
    delta: "+12 HRV",
    badge: "Readiness",
  },
];

const habitChecks = [
  { label: "Morning mobility routine", completed: true },
  { label: "Post-workout stretch", completed: false },
  { label: "Log nutrition before 9 PM", completed: true },
  { label: "Mindful breathing (5 min)", completed: false },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.15),_rgba(10,12,23,0.75))]" />
      <main className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 pb-16 pt-12 sm:px-8">
        <header className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.38em] text-emerald-300/80">
              Radiant Fitness
            </p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Your performance at a glance
            </h1>
            <p className="mt-3 max-w-2xl text-base text-slate-400">
              Stay on top of training load, recovery, and habit streaks with a
              unified dashboard that syncs your wearable, nutrition, and coach
              plans in real time.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="rounded-full border border-white/10 bg-slate-900 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-emerald-400/70 hover:text-emerald-300">
              Export Report
            </button>
            <button className="rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:from-emerald-300 hover:via-teal-300 hover:to-sky-300">
              Start Quick Workout
            </button>
          </div>
        </header>

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {summaryMetrics.map((metric) => (
            <StatCard key={metric.title} {...metric} />
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <WeeklyActivity data={weeklyActivityData} />
          <div className="flex flex-col gap-6">
            <div className="rounded-3xl border border-white/5 bg-slate-900/60 p-6 shadow-lg shadow-slate-950/50 backdrop-blur">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-white">
                    Recovery & Readiness
                  </h2>
                  <p className="text-sm text-slate-400">
                    HRV, resting heart rate & sleep debt
                  </p>
                </div>
                <SparklesIcon className="h-6 w-6 text-emerald-300" />
              </div>
              <div className="mt-6 grid gap-4 text-sm text-slate-300">
                <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-slate-950/50 px-4 py-3">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-400">
                      HRV Trend
                    </p>
                    <p className="text-lg font-semibold text-white">
                      74 ms · ▲ 12
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300">
                    Optimal
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-slate-950/50 px-4 py-3">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-400">
                      Resting HR
                    </p>
                    <p className="text-lg font-semibold text-white">
                      52 bpm · ▼ 3
                    </p>
                  </div>
                  <span className="rounded-full bg-sky-500/15 px-3 py-1 text-xs font-semibold text-sky-300">
                    Improving
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-slate-950/50 px-4 py-3">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-400">
                      Sleep Debt
                    </p>
                    <p className="text-lg font-semibold text-white">
                      42 min remaining
                    </p>
                  </div>
                  <span className="rounded-full bg-indigo-500/15 px-3 py-1 text-xs font-semibold text-indigo-300">
                    Catch-up plan
                  </span>
                </div>
              </div>
            </div>
            <GoalsProgress goals={goalProgress} />
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <WorkoutPlan sessions={upcomingSessions} />
          <div className="flex flex-col gap-6">
            <div className="rounded-3xl border border-white/5 bg-slate-900/60 p-6 shadow-lg shadow-slate-950/50 backdrop-blur">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-white">
                  Body Composition
                </h2>
                <span className="rounded-full border border-white/10 bg-slate-900 px-3 py-1 text-xs font-medium text-slate-300">
                  Last sync · 2h ago
                </span>
              </div>
              <ul className="space-y-4">
                {bodyFocus.map((item) => (
                  <li
                    key={item.metric}
                    className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-white/5 bg-slate-950/50 px-4 py-3"
                  >
                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-400">
                        {item.badge}
                      </p>
                      <p className="text-lg font-semibold text-white">
                        {item.metric}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-slate-100">
                        {item.value}
                      </p>
                      <p className="text-sm text-emerald-300">{item.delta}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-white/5 bg-slate-900/60 p-6 shadow-lg shadow-slate-950/50 backdrop-blur">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-white">Habit Loop</h2>
                <span className="text-xs font-medium text-slate-400">
                  12-day streak
                </span>
              </div>
              <ul className="mt-5 space-y-3">
                {habitChecks.map((habit) => (
                  <li
                    key={habit.label}
                    className="flex items-center gap-3 rounded-2xl border border-white/5 bg-slate-950/50 px-4 py-3 text-sm"
                  >
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-full ${
                        habit.completed
                          ? "border border-emerald-400/40 bg-emerald-500/20 text-emerald-200"
                          : "border border-white/10 text-slate-500"
                      }`}
                    >
                      {habit.completed ? "✓" : "○"}
                    </span>
                    <span className="text-slate-200">{habit.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
