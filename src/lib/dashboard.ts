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
