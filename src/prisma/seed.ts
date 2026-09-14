import { db } from "./db";

async function main() {
  console.log("🌱 Seeding database...");

  // Organization
  const organization = await db.orm.public.Organization.create({
    name: "PulseMetrics Demo",
  });

  // Users
  const user1 = await db.orm.public.User.create({
    email: "alex@pulsemetrics.dev",
    name: "Alex Johnson",
    createdAt: "2026-04-10T00:00:00.000Z",
  });

  const user2 = await db.orm.public.User.create({
    email: "sarah@pulsemetrics.dev",
    name: "Sarah Williams",
    createdAt: "2026-05-12T00:00:00.000Z",
  });

  const user3 = await db.orm.public.User.create({
    email: "mike@pulsemetrics.dev",
    name: "Mike Davis",
    createdAt: "2026-06-15T00:00:00.000Z",
  });

  const user4 = await db.orm.public.User.create({
    email: "emma@pulsemetrics.dev",
    name: "Emma Wilson",
    createdAt: "2026-07-08T00:00:00.000Z",
  });

  const user5 = await db.orm.public.User.create({
    email: "daniel@pulsemetrics.dev",
    name: "Daniel Brown",
    createdAt: "2026-08-05T00:00:00.000Z",
  });

  const user6 = await db.orm.public.User.create({
    email: "olivia@pulsemetrics.dev",
    name: "Olivia Taylor",
    createdAt: "2026-09-01T00:00:00.000Z",
  });

  // Organization members
  const users = [user1, user2, user3, user4, user5, user6];

  for (const user of users) {
    await db.orm.public.OrganizationMember.create({
      userId: user.id,
      organizationId: organization.id,
    });
  }

  // Subscriptions
  await db.orm.public.Subscription.create({
    userId: user1.id,
    organizationId: organization.id,
    plan: "starter",
    status: "active",
    monthlyPrice: "39",
    startedAt: "2026-04-10T00:00:00.000Z",
  });

  await db.orm.public.Subscription.create({
    userId: user2.id,
    organizationId: organization.id,
    plan: "starter",
    status: "active",
    monthlyPrice: "59",
    startedAt: "2026-05-12T00:00:00.000Z",
  });

  await db.orm.public.Subscription.create({
    userId: user3.id,
    organizationId: organization.id,
    plan: "pro",
    status: "active",
    monthlyPrice: "79",
    startedAt: "2026-06-15T00:00:00.000Z",
  });

  await db.orm.public.Subscription.create({
    userId: user4.id,
    organizationId: organization.id,
    plan: "pro",
    status: "active",
    monthlyPrice: "89",
    startedAt: "2026-07-08T00:00:00.000Z",
  });

  await db.orm.public.Subscription.create({
    userId: user5.id,
    organizationId: organization.id,
    plan: "pro",
    status: "active",
    monthlyPrice: "109",
    startedAt: "2026-08-05T00:00:00.000Z",
  });

  await db.orm.public.Subscription.create({
    userId: user6.id,
    organizationId: organization.id,
    plan: "pro",
    status: "active",
    monthlyPrice: "127",
    startedAt: "2026-09-01T00:00:00.000Z",
  });

  // Events
  await db.orm.public.Event.create({
    userId: user1.id,
    organizationId: organization.id,
    name: "login",
  });

  await db.orm.public.Event.create({
    userId: user1.id,
    organizationId: organization.id,
    name: "checkout_completed",
  });

  await db.orm.public.Event.create({
    userId: user2.id,
    organizationId: organization.id,
    name: "login",
  });

  await db.orm.public.Event.create({
    userId: user2.id,
    organizationId: organization.id,
    name: "dashboard_viewed",
  });

  await db.orm.public.Event.create({
    userId: user3.id,
    organizationId: organization.id,
    name: "login",
  });

  await db.orm.public.Event.create({
    userId: user4.id,
    organizationId: organization.id,
    name: "feature_used",
  });

  await db.orm.public.Event.create({
    userId: user5.id,
    organizationId: organization.id,
    name: "checkout_completed",
  });

  await db.orm.public.Event.create({
    userId: user6.id,
    organizationId: organization.id,
    name: "login",
  });

  await db.orm.public.Event.create({
    userId: user6.id,
    organizationId: organization.id,
    name: "dashboard_viewed",
  });

  console.log("✅ Database seeded successfully!");
}

main().catch((error) => {
  console.error("❌ Seed failed:", error);
  process.exit(1);
});
