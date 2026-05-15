import Image from "next/image";
import Script from "next/script";

const CALENDLY_URL = "https://calendly.com/kimberlyfong2022/afterhours-op";
const DEMO_URL = "https://night-shift-support.replit.app/";

export const metadata = {
  title: "AfterHours Ops — Stop the 2AM Call",
  description:
    "Real-time operational support for hotel front desk teams and night auditors.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <Script
        id="mailerlite-universal"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,e,u,f,l,n){
              w[f]=w[f]||function(){(w[f].q=w[f].q||[]).push(arguments);};
              l=d.createElement(e);
              l.async=1;
              l.src=u;
              n=d.getElementsByTagName(e)[0];
              n.parentNode.insertBefore(l,n);
            })(window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
            ml('account', '2254140');
          `,
        }}
      />

      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.22),transparent_32%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.18),transparent_30%),radial-gradient(circle_at_bottom,rgba(34,211,238,0.08),transparent_35%),linear-gradient(to_bottom,#020617,#000)]" />

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-cyan-400/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5">
          <a href="#top" className="flex items-center gap-3">
            <div className="text-4xl text-cyan-300 drop-shadow-[0_0_18px_rgba(34,211,238,0.9)]">
              ✦
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">
                AfterHours <span className="text-cyan-300">Ops</span>
              </h1>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                AI for hotel operations
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-white/85 md:flex">
            <a href="#features" className="hover:text-cyan-300">
              Features
            </a>
            <a href="#how-it-works" className="hover:text-cyan-300">
              How It Works
            </a>
            <a href="#demo" className="hover:text-cyan-300">
              Demo
            </a>
            <a href="#manager-view" className="hover:text-cyan-300">
              What We're Building
            </a>
            <a href="#founder" className="hover:text-cyan-300">
              Founder
            </a>
            <a href="#founding" className="hover:text-cyan-300">
              14-Day Founder Access
            </a>
          </nav>

          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-xl bg-cyan-300 px-5 py-3 text-sm font-bold text-black shadow-[0_0_28px_rgba(34,211,238,0.65)] transition hover:scale-[1.03] hover:shadow-[0_0_42px_rgba(34,211,238,0.95)] sm:inline-flex"
          >
            Apply for Access
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        id="top"
        className="mx-auto max-w-7xl px-6 pt-14 pb-10 lg:pt-20 lg:pb-14"
      >
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
              Founding Hotel Access Now Open
            </p>

            <h2 className="text-6xl font-black leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
              <span className="block text-cyan-300 drop-shadow-[0_0_40px_rgba(34,211,238,0.9)]">
                STOP
              </span>
              <span className="block">THE 2AM CALL.</span>
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-white/82">
              Real-time operational support for hotel front desk teams and night
              auditors — built to help teams make confident decisions after
              hours using SOPs, manager insight, and proven real-world
              resolutions.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-cyan-300 px-7 py-4 text-center text-sm font-bold text-black shadow-[0_0_30px_rgba(34,211,238,0.7)] transition hover:scale-[1.03] hover:shadow-[0_0_45px_rgba(34,211,238,1)]"
              >
                Apply for 14-Day Founder Access →
              </a>

              <a
                href="#demo"
                className="rounded-xl border border-cyan-300/50 px-7 py-4 text-center text-sm font-bold text-white shadow-[0_0_18px_rgba(34,211,238,0.15)] transition hover:bg-cyan-300/10 hover:shadow-[0_0_28px_rgba(34,211,238,0.45)]"
              >
                See the Live Demo
              </a>
            </div>

            <p className="mt-6 text-sm text-white/65">
              ✦ Onboarding our first founding hotel partners. Limited early
              access.
            </p>
          </div>

          {/* RIGHT SIDE — FLOATING STAR */}
          <div className="relative flex min-h-[420px] items-center justify-center">
            <div className="absolute h-80 w-80 animate-pulse rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative flex flex-col items-center text-center">
              <div className="animate-pulse text-[140px] text-cyan-300 drop-shadow-[0_0_55px_rgba(34,211,238,1)]">
                ✦
              </div>

              <div className="mt-8 max-w-md rounded-[2rem] border border-cyan-300/25 bg-cyan-300/[0.04] px-8 py-7 shadow-[0_0_40px_rgba(34,211,238,0.18)] backdrop-blur-xl">
                <p className="text-xl font-bold tracking-wide text-cyan-300">
                  When the star appears…
                </p>

                <p className="mt-3 text-lg text-white/85">
                  your team isn’t alone.
                </p>

                <p className="mt-2 text-xl font-bold text-cyan-300">
                  Every shift is empowered.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* VALUE STRIP */}
        <div
          id="features"
          className="mt-16 rounded-[1.75rem] border border-cyan-300/25 bg-cyan-300/[0.04] p-7 shadow-[0_0_40px_rgba(34,211,238,0.12)]"
        >
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex gap-5">
              <div className="text-5xl text-cyan-300 drop-shadow-[0_0_18px_rgba(34,211,238,0.75)]">
                ◷
              </div>
              <div>
                <h3 className="text-2xl font-bold">After-Hours Support</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  Operational guidance when the desk needs answers fast.
                </p>
              </div>
            </div>

            <div className="flex gap-5 border-cyan-300/15 md:border-l md:pl-8">
              <div className="text-5xl text-cyan-300 drop-shadow-[0_0_18px_rgba(34,211,238,0.75)]">
                ▱
              </div>
              <div>
                <h3 className="text-2xl font-bold">3 Layers</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  SOP guidance, real-world ideas, and escalation support.
                </p>
              </div>
            </div>

            <div className="flex gap-5 border-cyan-300/15 md:border-l md:pl-8">
              <div className="text-5xl text-cyan-300 drop-shadow-[0_0_18px_rgba(34,211,238,0.75)]">
                ↗
              </div>
              <div>
                <h3 className="text-2xl font-bold">Stronger Teams</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  Fewer 2AM calls. More confidence. Better guest experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDING JOURNEY */}
      <section id="founding-journey" className="mx-auto max-w-7xl px-6 py-12">
        <div className="rounded-[1.75rem] border border-cyan-300/25 bg-cyan-300/[0.045] p-8 shadow-[0_0_40px_rgba(34,211,238,0.12)] lg:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
            Founding Hotel Experience
          </p>

          <h3 className="mt-4 text-4xl font-black">
            Help shape the future of hotel operations.
          </h3>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/75">
            Our founding hotels do more than use AfterHours Ops — they help
            build it. Your real operational questions, SOPs, and team feedback
            help shape the workflows that future hotels will rely on.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.04] p-6 shadow-[0_0_20px_rgba(34,211,238,0.12)] transition hover:border-cyan-300/50 hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]">
              <p className="font-bold text-cyan-300">Week 1</p>
              <h4 className="mt-3 text-xl font-bold">Discovery</h4>
              <p className="mt-3 text-white/70">
                We learn your operation, team structure, and SOPs.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.04] p-6 shadow-[0_0_20px_rgba(34,211,238,0.12)] transition hover:border-cyan-300/50 hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]">
              <p className="font-bold text-cyan-300">Week 2</p>
              <h4 className="mt-3 text-xl font-bold">Activation</h4>
              <p className="mt-3 text-white/70">
                Your team begins using real-time guidance during live shifts.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.04] p-6 shadow-[0_0_20px_rgba(34,211,238,0.12)] transition hover:border-cyan-300/50 hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]">
              <p className="font-bold text-cyan-300">Week 3</p>
              <h4 className="mt-3 text-xl font-bold">Refinement</h4>
              <p className="mt-3 text-white/70">
                We review patterns, edge cases, and training opportunities.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.04] p-6 shadow-[0_0_20px_rgba(34,211,238,0.12)] transition hover:border-cyan-300/50 hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]">
              <p className="font-bold text-cyan-300">Week 4+</p>
              <h4 className="mt-3 text-xl font-bold">Scale</h4>
              <p className="mt-3 text-white/70">
                Your workflows help shape the platform for future hotels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DEMO */}
      <section id="demo" className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
              Live Demo
            </p>

            <h3 className="mt-4 text-4xl font-black leading-tight">
              See the platform <br /> in action
            </h3>

            <p className="mt-5 max-w-md text-lg leading-8 text-white/78">
              Try real front desk and night audit scenarios. The demo shows the
              core guidance experience we are building with founding hotels.
            </p>

            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-xl bg-cyan-300 px-7 py-4 text-sm font-bold text-black shadow-[0_0_28px_rgba(34,211,238,0.6)] transition hover:scale-[1.03] hover:shadow-[0_0_42px_rgba(34,211,238,0.95)]"
            >
              Launch Interactive Demo →
            </a>
          </div>

          <div
            id="how-it-works"
            className="space-y-8 border-cyan-300/15 lg:border-l lg:pl-12"
          >
            <div className="flex gap-6">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-cyan-300/10 text-3xl text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.22)]">
                💬
              </div>
              <div>
                <h4 className="text-xl font-bold">
                  Ask any operational question
                </h4>
                <p className="mt-2 leading-7 text-white/72">
                  Type what’s happening — just like you would ask a manager.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-cyan-300/10 text-3xl text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.22)]">
                ✓
              </div>
              <div>
                <h4 className="text-xl font-bold">
                  Get step-by-step guidance
                </h4>
                <p className="mt-2 leading-7 text-white/72">
                  Receive clear next steps based on SOPs, manager notes, and
                  past resolutions.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-cyan-300/10 text-3xl text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.22)]">
                👥
              </div>
              <div>
                <h4 className="text-xl font-bold">Escalate with confidence</h4>
                <p className="mt-2 leading-7 text-white/72">
                  When needed, escalate with complete context and recommended
                  communication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER STORY */}
      <section id="founder" className="mx-auto max-w-7xl px-6 py-12">
        <div className="overflow-hidden rounded-[1.75rem] border border-cyan-300/25 bg-cyan-300/[0.045] shadow-[0_0_45px_rgba(34,211,238,0.12)]">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1fr_0.9fr]">
            <div className="relative min-h-[360px] bg-slate-900">
              <Image
                src="/founder-kimberly.PNG"
                alt="Kimberly Fong, Founder of AfterHours Ops"
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            <div className="p-8 lg:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
                Founder Story
              </p>

              <h3 className="mt-4 text-4xl font-black leading-tight">
                Built by someone <br /> who lived it.
              </h3>

              <p className="mt-6 text-lg leading-8 text-white/78">
                I worked 12+ hour shifts. I supported teams without a front
                office manager. I saw what happens after training ends.
              </p>

              <p className="mt-4 text-lg leading-8 text-white/78">
                AfterHours Ops was built inside real hotel operations — from
                night audit breakdowns, guest escalations, and the pressure
                leaders face every day.
              </p>

              <p className="mt-4 text-lg leading-8 text-white/78">
                We are now onboarding our first founding hotel partners to shape
                what operational AI becomes in hospitality.
              </p>

              <div className="mt-7">
                <p className="font-bold">— Kimberly Fong</p>
                <p className="text-cyan-300">Founder, AfterHours Ops</p>
              </div>
            </div>

            <div className="border-cyan-300/15 p-8 lg:border-l lg:p-10">
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-cyan-300/10 text-2xl text-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.18)]">
                    ♙
                  </div>
                  <div>
                    <h4 className="font-bold">Former Front Desk Agent</h4>
                    <p className="mt-1 text-white/70">
                      I understand the pressure.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-cyan-300/10 text-2xl text-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.18)]">
                    ♡
                  </div>
                  <div>
                    <h4 className="font-bold">Passionate About People</h4>
                    <p className="mt-1 text-white/70">
                      Hospitality is about people.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-cyan-300/10 text-2xl text-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.18)]">
                    ☆
                  </div>
                  <div>
                    <h4 className="font-bold">Built for Hotel Teams</h4>
                    <p className="mt-1 text-white/70">
                      Tools that support, not replace.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}