import { db } from "@/prisma/db";

export async function getDashboardMetrics() {
  const activeSubscriptions = await db.orm.public.Subscription.where({
    status: "active",
  }).all();

  const users = await db.orm.public.User.all();

  const events = await db.orm.public.Event.all();

  const mrr = activeSubscriptions.reduce(
    (total, subscription) => total + Number(subscription.monthlyPrice),
    0,
  );

  const revenueData = await getRevenueData();

  const currentMrr = revenueData[revenueData.length - 1]?.revenue ?? 0;

  const previousMrr = revenueData[revenueData.length - 2]?.revenue ?? 0;

  const revenueGrowth =
    previousMrr > 0 ? ((currentMrr - previousMrr) / previousMrr) * 100 : 0;

  const activeUsers = users.length;

  const arpu = activeUsers > 0 ? mrr / activeUsers : 0;

  const arr = mrr * 12;

  return {
    mrr,
    arr,
    activeUsers,
    arpu,
    eventCount: events.length,
    revenueGrowth,
  };
}
export async function getRevenueData() {
  const subscriptions = await db.orm.public.Subscription.all();

  const monthlyRevenue = new Map<string, number>();

  for (const subscription of subscriptions) {
    const date = new Date(subscription.startedAt);

    const monthKey = `${date.getFullYear()}-${String(
      date.getMonth() + 1,
    ).padStart(2, "0")}`;

    const currentRevenue = monthlyRevenue.get(monthKey) ?? 0;

    monthlyRevenue.set(
      monthKey,
      currentRevenue + Number(subscription.monthlyPrice),
    );
  }

  const sortedMonths = Array.from(monthlyRevenue.entries()).sort(([a], [b]) =>
    a.localeCompare(b),
  );

  let cumulativeRevenue = 0;

  return sortedMonths.map(([monthKey, revenue]) => {
    cumulativeRevenue += revenue;

    return {
      month: new Date(`${monthKey}-01T00:00:00`).toLocaleDateString("en-US", {
        month: "short",
      }),
      revenue: cumulativeRevenue,
    };
  });
}
export async function getUserGrowthData() {
  const users = await db.orm.public.User.all();

  const monthlyUsers = new Map<string, number>();

  for (const user of users) {
    const date = new Date(user.createdAt);

    const monthKey = `${date.getFullYear()}-${String(
      date.getMonth() + 1,
    ).padStart(2, "0")}`;

    const currentUsers = monthlyUsers.get(monthKey) ?? 0;

    monthlyUsers.set(monthKey, currentUsers + 1);
  }

  const sortedMonths = Array.from(monthlyUsers.entries()).sort(([a], [b]) =>
    a.localeCompare(b),
  );

  let totalUsers = 0;

  return sortedMonths.map(([monthKey, newUsers]) => {
    totalUsers += newUsers;

    return {
      month: new Date(`${monthKey}-01T00:00:00`).toLocaleDateString("en-US", {
        month: "short",
      }),
      users: totalUsers,
    };
  });
}
