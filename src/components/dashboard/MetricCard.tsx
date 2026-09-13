type MetricCardProps = {
  title: string;
  value: string;
  change: string;
};

export default function MetricCard({ title, value, change }: MetricCardProps) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <p className="text-sm font-medium text-slate-500">{title}</p>

      <p className="mt-2 text-3xl font-bold text-slate-900">{value}</p>

      <p className="mt-2 text-sm text-emerald-600">{change}</p>
    </div>
  );
}
