import { Suspense, lazy } from "react";

const VarRemoteApp = lazy(() => import("var_remote/Button"));

function App() {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-5xl items-center justify-center px-6 py-16">
      <section className="w-full rounded-3xl border border-[color:var(--border)] bg-[color:var(--panel)] p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur max-sm:p-5">
        <div className="mb-8 flex flex-col gap-3">
          <p className="font-mono text-sm uppercase tracking-[0.22em] text-[color:var(--accent)]">
            Module Federation Host
          </p>
          <h1 className="text-4xl leading-tight font-semibold tracking-[-0.04em] text-[color:var(--text-h)] max-sm:text-3xl">
            Loading{" "}
            <code className="rounded bg-[color:var(--code-bg)] px-2 py-1 text-[0.9em]">
              var_remote/App
            </code>
          </h1>
          <p className="max-w-2xl text-[color:var(--text)]">
            This host resolves the remote container from{" "}
            <code className="rounded bg-[color:var(--code-bg)] px-2 py-1 text-[0.95em]">
              http://localhost:3001/remoteEntry.js
            </code>{" "}
            and renders the exposed remote app below.
          </p>
        </div>

        <div className="min-h-64 rounded-2xl border border-dashed border-[color:var(--accent-border)] bg-[color:var(--accent-bg)] p-4">
          <Suspense
            fallback={
              <div className="flex min-h-56 items-center justify-center rounded-xl border border-[color:var(--border)] bg-[color:var(--bg)] px-6 text-center font-mono text-sm text-[color:var(--text)]">
                Waiting for var_remote to load...
              </div>
            }
          >
            <VarRemoteApp />
          </Suspense>
        </div>
      </section>
    </main>
  );
}

export default App;
