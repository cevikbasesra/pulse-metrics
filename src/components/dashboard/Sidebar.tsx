"use client";

import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-4 top-4 z-50 rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white lg:hidden"
      >
        {isOpen ? "Close" : "Menu"}
      </button>

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-56 flex-col bg-slate-900 p-4 text-white transition-transform duration-200 lg:static lg:min-h-screen lg:w-64 lg:translate-x-0 lg:p-6 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h2 className="text-2xl font-bold">PulseMetrics</h2>

        <nav className="mt-8">
          <ul className="space-y-2">
            <li className="rounded-lg bg-slate-800 px-4 py-3">Dashboard</li>

            <li className="rounded-lg px-4 py-3 text-slate-400">Analytics</li>

            <li className="rounded-lg px-4 py-3 text-slate-400">Customers</li>

            <li className="rounded-lg px-4 py-3 text-slate-400">
              Subscriptions
            </li>

            <li className="rounded-lg px-4 py-3 text-slate-400">Events</li>
          </ul>
        </nav>
      </aside>
    </>
  );
}
