import { db } from "./db";

async function main() {
  console.log("🌱 Seeding database...");

  const organization = await db.orm.public.Organization.create({
    name: "PulseMetrics Demo",
  });

  const user1 = await db.orm.public.User.create({
    email: "alex@pulsemetrics.dev",
    name: "Alex Johnson",
  });

  const user2 = await db.orm.public.User.create({
    email: "sarah@pulsemetrics.dev",
    name: "Sarah Williams",
  });

  const user3 = await db.orm.public.User.create({
    email: "mike@pulsemetrics.dev",
    name: "Mike Davis",
  });

  await db.orm.public.OrganizationMember.create({
    userId: user1.id,
    organizationId: organization.id,
  });

  await db.orm.public.OrganizationMember.create({
    userId: user2.id,
    organizationId: organization.id,
  });

  await db.orm.public.OrganizationMember.create({
    userId: user3.id,
    organizationId: organization.id,
  });

  await db.orm.public.Subscription.create({
    userId: user1.id,
    organizationId: organization.id,
    plan: "pro",
    status: "active",
    monthlyPrice: "49",
  });

  await db.orm.public.Subscription.create({
    userId: user2.id,
    organizationId: organization.id,
    plan: "pro",
    status: "active",
    monthlyPrice: "49",
  });

  await db.orm.public.Subscription.create({
    userId: user3.id,
    organizationId: organization.id,
    plan: "starter",
    status: "active",
    monthlyPrice: "29",
  });

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

  console.log("✅ Database seeded successfully!");
}

main().catch((error) => {
  console.error("❌ Seed failed:", error);
  process.exit(1);
});
