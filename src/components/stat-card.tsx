import { ReactNode } from "react";
import clsx from "clsx";

type Trend = "up" | "down";

interface StatCardProps {
  title: string;
  value: string;
  change?: {
    amount: string;
    trend: Trend;
    label: string;
  };
  icon: ReactNode;
  accent?: string;
}

const trendCopy: Record<Trend, string> = {
  up: "text-emerald-400",
  down: "text-rose-400",
};

export function StatCard({
  title,
  value,
  change,
  icon,
  accent = "from-emerald-500/20 to-transparent",
}: StatCardProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-slate-900/60 p-5 shadow-lg shadow-slate-950/50 backdrop-blur">
      <div
        className={clsx(
          "pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br opacity-70",
          accent,
        )}
        aria-hidden
      />
      <div className="flex items-start justify-between">
        <div className="space-y-5">
          <div className="flex items-center gap-3 text-sm font-medium text-slate-300">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-slate-900/80 text-emerald-300 shadow-inner">
              {icon}
            </span>
            <span>{title}</span>
          </div>
          <p className="text-4xl font-semibold text-white">{value}</p>
        </div>
        {change && (
          <div className="flex flex-col items-end text-xs font-medium text-slate-400">
            <span className={clsx("text-sm", trendCopy[change.trend])}>
              {change.trend === "up" ? "▲" : "▼"} {change.amount}
            </span>
            <span>{change.label}</span>
          </div>
        )}
      </div>
    </div>
  );
}

