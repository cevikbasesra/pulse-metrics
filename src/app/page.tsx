import Sidebar from "@/components/dashboard/Sidebar";
import MetricCard from "@/components/dashboard/MetricCard";
import RevenueChart from "@/components/dashboard/RevenueChart";
import UserGrowthChart from "@/components/dashboard/UserGrowthChart";
import { getDashboardMetrics } from "@/lib/dashboard";

export default async function Home() {
  const metrics = await getDashboardMetrics();

  return (
    <main className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <section className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>

        <p className="mt-2 text-slate-500">Welcome to PulseMetrics</p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="MRR"
            value={`$${metrics.mrr.toFixed(2)}`}
            change="From active subscriptions"
          />

          <MetricCard
            title="Active Users"
            value={metrics.activeUsers.toString()}
            change="Registered users"
          />

          <MetricCard
            title="ARPU"
            value={`$${metrics.arpu.toFixed(2)}`}
            change="Average revenue per user"
          />

          <MetricCard
            title="Events"
            value={metrics.eventCount.toString()}
            change="Tracked events"
          />
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
