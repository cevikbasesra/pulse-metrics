export default function Sidebar() {
  return (
    <aside className="flex min-h-screen w-64 flex-col bg-slate-900 p-6 text-white">
      <h2 className="text-2xl font-bold">PulseMetrics</h2>

      <nav className="mt-8">
        <ul className="space-y-2">
          <li className="rounded-lg bg-slate-800 px-4 py-3">Dashboard</li>

          <li className="rounded-lg px-4 py-3 text-slate-400">Analytics</li>

          <li className="rounded-lg px-4 py-3 text-slate-400">Customers</li>

          <li className="rounded-lg px-4 py-3 text-slate-400">Subscriptions</li>

          <li className="rounded-lg px-4 py-3 text-slate-400">Events</li>
        </ul>
      </nav>
    </aside>
  );
}
