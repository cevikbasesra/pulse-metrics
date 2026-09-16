"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
      <div className="max-w-md rounded-xl bg-white p-8 text-center shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900">
          Something went wrong
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          We couldn't load the dashboard data.
        </p>

        <button
          type="button"
          onClick={() => reset()}
          className="mt-6 rounded-lg bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
