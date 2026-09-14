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

  const activeUsers = users.length;

  const arpu = activeUsers > 0 ? mrr / activeUsers : 0;

  return {
    mrr,
    activeUsers,
    arpu,
    eventCount: events.length,
  };
}
export async function getRevenueData() {
  const subscriptions = await db.orm.public.Subscription.all();

  const monthlyRevenue = new Map<string, number>();

  for (const subscription of subscriptions) {
    const month = new Date(subscription.startedAt).toLocaleDateString("en-US", {
      month: "short",
    });

    const currentRevenue = monthlyRevenue.get(month) ?? 0;

    monthlyRevenue.set(
      month,
      currentRevenue + Number(subscription.monthlyPrice),
    );
  }

  return Array.from(monthlyRevenue.entries()).map(([month, revenue]) => ({
    month,
    revenue,
  }));
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
