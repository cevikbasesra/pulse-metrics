import Sidebar from "@/components/dashboard/Sidebar";
import MetricCard from "@/components/dashboard/MetricCard";
import RevenueChart from "@/components/dashboard/RevenueChart";
import UserGrowthChart from "@/components/dashboard/UserGrowthChart";
import {
  getDashboardMetrics,
  getRevenueData,
  getUserGrowthData,
} from "@/lib/dashboard";

export default async function Home() {
  const metrics = await getDashboardMetrics();
  const revenueData = await getRevenueData();
  const userGrowthData = await getUserGrowthData();

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
            title="ARR"
            value={`$${metrics.arr.toFixed(2)}`}
            change="Annual recurring revenue"
          />

          <MetricCard
            title="Revenue Growth"
            value={`${metrics.revenueGrowth.toFixed(2)}%`}
            change="Compared to previous MRR"
          />

          <MetricCard
            title="Churn Rate"
            value={`${metrics.churnRate.toFixed(2)}%`}
            change="Canceled subscriptions"
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
          <RevenueChart data={revenueData} />
        </div>

        <div className="mt-8">
          <UserGrowthChart data={userGrowthData} />
        </div>
      </section>
    </main>
  );
}
