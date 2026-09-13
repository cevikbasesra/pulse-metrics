import Sidebar from "@/components/dashboard/Sidebar";
import MetricCard from "@/components/dashboard/MetricCard";
import RevenueChart from "@/components/dashboard/RevenueChart";
import UserGrowthChart from "@/components/dashboard/UserGrowthChart";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <section className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>

        <p className="mt-2 text-slate-500">Welcome to PulseMetrics</p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard title="MRR" value="$24,500" change="+12.5%" />

          <MetricCard title="Active Users" value="1,248" change="+8.2%" />

          <MetricCard title="Churn Rate" value="2.4%" change="-0.8%" />

          <MetricCard title="ARPU" value="$48.20" change="+5.2%" />
        </div>

        <div className="mt-8">
          <RevenueChart />
        </div>

        <div className="mt-8">
          <UserGrowthChart />
        </div>
      </section>
    </main>
  );
}
