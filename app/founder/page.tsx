"use client";

import Script from "next/script";

export default function FounderPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.22),_transparent_28%),radial-gradient(circle_at_20%_30%,_rgba(59,130,246,0.18),_transparent_22%),radial-gradient(circle_at_80%_20%,_rgba(168,85,247,0.12),_transparent_18%),radial-gradient(circle_at_50%_80%,_rgba(14,165,233,0.16),_transparent_25%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.94))]" />

      <Script id="mailerlite-universal-founder" strategy="afterInteractive">
        {`
          (function(w,d,e,u,f,l,n){
            w[f]=w[f]||function(){(w[f].q=w[f].q||[]).push(arguments);};
            l=d.createElement(e);l.async=1;l.src=u;
            n=d.getElementsByTagName(e)[0];n.parentNode.insertBefore(l,n);
          })(window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
          ml('account', '2254140');
        `}
      </Script>

      <header className="sticky top-0 z-50 border-b border-cyan-400/10 bg-black/55 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-400/10 text-cyan-300 shadow-[0_0_22px_rgba(34,211,238,0.35)]">
              ✦
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/70">
                Founder access
              </p>
              <h1 className="text-lg font-semibold tracking-wide text-white">
                AfterHours Ops
              </h1>
            </div>
          </a>

          <a
            href="/"
            className="rounded-full border border-cyan-300/40 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 shadow-[0_0_16px_rgba(34,211,238,0.18)] transition hover:bg-cyan-400/20"
          >
            Back to Main Site
          </a>
        </div>
      </header>

      <section className="relative">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200/90">
              <span className="text-base">✦</span>
              Founder pricing for early believers
            </div>

            <h2 className="max-w-4xl text-6xl md:text-7xl font-semibold leading-tight tracking-tight text-white">
              Thank you.
              <span className="mt-4 block text-cyan-300 drop-shadow-[0_0_22px_rgba(34,211,238,0.6)]">
                You deserve something special.
              </span>
            </h2>
            <div className="mt-10 flex items-center gap-3 text-cyan-300/80">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-400/10 text-cyan-300 shadow-[0_0_22px_rgba(34,211,238,0.35)]">
                ✦
              </div>
              <span className="text-sm tracking-[0.35em] uppercase">AfterHours Ops</span>
            </div>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">
             You saw the vision,
              understood the problem, and made the quick decision to lean in early.
            </p>

            <div className="mt-10 max-w-xl">
              <div className="relative overflow-hidden rounded-[1.75rem] border border-cyan-300/30 bg-gradient-to-r from-cyan-400/15 via-sky-300/10 to-cyan-400/15 p-[1px] shadow-[0_0_35px_rgba(34,211,238,0.18)]">
                <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.14)_18%,transparent_36%)]" />
                <div className="relative rounded-[1.7rem] bg-black/80 px-8 py-6 backdrop-blur-xl">
                  <div className="flex items-center justify-between gap-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/75">
                        Founder Price
                      </p>
                      <p className="mt-2 text-sm text-white/60">
                        Locked in for life
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-5xl font-semibold tracking-tight text-cyan-300 drop-shadow-[0_0_18px_rgba(34,211,238,0.55)] md:text-6xl">
                        $36.66
                      </div>
                      <p className="mt-1 text-xs uppercase tracking-[0.28em] text-white/45">
                        Monthly
                      </p>
                    </div>
                  </div>
        
                </div>
              </div>
            </div>
            </div>
        

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-cyan-400/10 blur-3xl" />
            <div className="relative rounded-[2rem] border border-cyan-300/20 bg-white/5 p-6 shadow-[0_0_50px_rgba(34,211,238,0.08)] backdrop-blur-xl">
              <div className="rounded-[1.6rem] border border-cyan-300/20 bg-black/70 p-6">
                <div className="mb-6 border-b border-white/10 pb-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">
                    Founder waitlist
                  </p>
                  <h3 className="mt-2 text-3xl font-semibold text-white">
                    Save your spot early.
                  </h3>
                  <p className="mt-3 text-white/72">
                    Join the founder list to get launch updates, early access details, and founder pricing before the wider rollout.
                  </p>
                </div>

                <div className="rounded-[1.25rem] border border-white/10 bg-black/35 p-4">
                  <div className="ml-embedded" data-form="KkRSHe"></div>
                </div>

                <p className="mt-4 text-sm leading-6 text-white/55">
                  Quick decision energy is exactly what this list is for. This is where early interest gets noticed first.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-white/55 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© 2026 AfterHours Ops. Founder access page.</p>
          <div className="flex gap-6">
            <a href="/" className="transition hover:text-cyan-300">
              Main Site
            </a>
            <a href="#" className="transition hover:text-cyan-300">
              Founder Waitlist
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
