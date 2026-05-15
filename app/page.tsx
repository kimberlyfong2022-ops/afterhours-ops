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

      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.22),transparent_32%),radial-gradient(circle_at_top_right,rgba(37,99,235,0.18),transparent_30%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.08),transparent_35%),linear-gradient(to_bottom,#020617,#000)]" />

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-blue-400/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex items-end gap-1">
              <div className="text-4xl text-blue-400 drop-shadow-[0_0_22px_rgba(59,130,246,1)]">
                ✦
              </div>
              <div className="mb-4 text-sm text-blue-400 drop-shadow-[0_0_18px_rgba(59,130,246,1)]">
                ✦
              </div>
              <div className="mb-1 text-sm text-blue-400 drop-shadow-[0_0_18px_rgba(59,130,246,1)]">
                ✦
              </div>
            </div>

            <div>
              <h1 className="text-2xl font-bold tracking-tight">
                AfterHours <span className="text-blue-400">Ops</span>
              </h1>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                AI for hotel operations
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-white/85 md:flex">
            <a href="#features" className="hover:text-blue-400">
              Features
            </a>
            <a href="#how-it-works" className="hover:text-blue-400">
              How It Works
            </a>
            <a href="#demo" className="hover:text-blue-400">
              Demo
            </a>
            <a href="#manager-view" className="hover:text-blue-400">
              What We're Building
            </a>
            <a href="#founder" className="hover:text-blue-400">
              Founder
            </a>
            <a href="#founding" className="hover:text-blue-400">
              14-Day Founder Access
            </a>
          </nav>

          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-xl bg-blue-400 px-5 py-3 text-sm font-bold text-white shadow-[0_0_28px_rgba(59,130,246,0.65)] transition hover:scale-[1.03] hover:shadow-[0_0_42px_rgba(59,130,246,0.95)] sm:inline-flex"
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
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-blue-400">
              Founding Hotel Access Now Open
            </p>

            <h2 className="text-6xl font-black leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
              <span className="block text-blue-400 drop-shadow-[0_0_40px_rgba(59,130,246,0.9)]">
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
                className="rounded-xl bg-blue-400 px-7 py-4 text-center text-sm font-bold text-white shadow-[0_0_30px_rgba(59,130,246,0.7)] transition hover:scale-[1.03] hover:shadow-[0_0_45px_rgba(59,130,246,1)]"
              >
                Apply for 14-Day Founder Access →
              </a>

              <a
                href="#demo"
                className="rounded-xl border border-blue-400/50 px-7 py-4 text-center text-sm font-bold text-white shadow-[0_0_18px_rgba(59,130,246,0.15)] transition hover:bg-blue-400/10 hover:shadow-[0_0_28px_rgba(59,130,246,0.45)]"
              >
                See the Live Demo
              </a>
            </div>

            <p className="mt-6 text-sm text-white/65">
              ✦ Onboarding our first founding hotel partners. Limited early
              access.
            </p>
          </div>

          {/* RIGHT SIDE — CONSTELLATION */}
          <div className="relative flex min-h-[420px] items-center justify-center">
            <div className="absolute h-80 w-80 animate-pulse rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative flex flex-col items-center text-center">
              <div className="flex items-end gap-2">
                <div className="animate-pulse text-[140px] text-blue-400 drop-shadow-[0_0_55px_rgba(59,130,246,1)]">
                  ✦
                </div>

                <div className="mb-14 text-2xl text-blue-400 drop-shadow-[0_0_22px_rgba(59,130,246,1)]">
                  ✦
                </div>

                <div className="mb-4 text-2xl text-blue-400 drop-shadow-[0_0_22px_rgba(59,130,246,1)]">
                  ✦
                </div>
              </div>

              <div className="mt-8 max-w-md rounded-[2rem] border border-blue-400/25 bg-blue-400/[0.04] px-8 py-7 shadow-[0_0_40px_rgba(59,130,246,0.18)] backdrop-blur-xl">
                <p className="text-xl font-bold tracking-wide text-blue-400">
                  When the constellation appears…
                </p>

                <p className="mt-3 text-lg text-white/85">
                  your team isn’t alone.
                </p>

                <p className="mt-2 text-xl font-bold text-blue-400">
                  Every shift is empowered.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* VALUE STRIP */}
        <div
          id="features"
          className="mt-16 rounded-[1.75rem] border border-blue-400/25 bg-blue-400/[0.04] p-7 shadow-[0_0_40px_rgba(59,130,246,0.12)]"
        >
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex gap-5">
              <div className="text-5xl text-blue-400 drop-shadow-[0_0_18px_rgba(59,130,246,0.75)]">
                ◷
              </div>
              <div>
                <h3 className="text-2xl font-bold">After-Hours Support</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  Operational guidance when the desk needs answers fast.
                </p>
              </div>
            </div>

            <div className="flex gap-5 border-blue-400/15 md:border-l md:pl-8">
              <div className="text-5xl text-blue-400 drop-shadow-[0_0_18px_rgba(59,130,246,0.75)]">
                ▱
              </div>
              <div>
                <h3 className="text-2xl font-bold">3 Layers</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  SOP guidance, real-world ideas, and escalation support.
                </p>
              </div>
            </div>

            <div className="flex gap-5 border-blue-400/15 md:border-l md:pl-8">
              <div className="text-5xl text-blue-400 drop-shadow-[0_0_18px_rgba(59,130,246,0.75)]">
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
        <div className="rounded-[1.75rem] border border-blue-400/25 bg-blue-400/[0.045] p-8 shadow-[0_0_40px_rgba(59,130,246,0.12)] lg:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
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
            <div className="rounded-2xl border border-blue-400/20 bg-blue-400/[0.04] p-6 shadow-[0_0_20px_rgba(59,130,246,0.12)] transition hover:border-blue-400/50 hover:shadow-[0_0_35px_rgba(59,130,246,0.35)]">
              <p className="font-bold text-blue-400">Week 1</p>
              <h4 className="mt-3 text-xl font-bold">Discovery</h4>
              <p className="mt-3 text-white/70">
                We learn your operation, team structure, and SOPs.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-400/20 bg-blue-400/[0.04] p-6 shadow-[0_0_20px_rgba(59,130,246,0.12)] transition hover:border-blue-400/50 hover:shadow-[0_0_35px_rgba(59,130,246,0.35)]">
              <p className="font-bold text-blue-400">Week 2</p>
              <h4 className="mt-3 text-xl font-bold">Activation</h4>
              <p className="mt-3 text-white/70">
                Your team begins using real-time guidance during live shifts.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-400/20 bg-blue-400/[0.04] p-6 shadow-[0_0_20px_rgba(59,130,246,0.12)] transition hover:border-blue-400/50 hover:shadow-[0_0_35px_rgba(59,130,246,0.35)]">
              <p className="font-bold text-blue-400">Week 3</p>
              <h4 className="mt-3 text-xl font-bold">Refinement</h4>
              <p className="mt-3 text-white/70">
                We review patterns, edge cases, and training opportunities.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-400/20 bg-blue-400/[0.04] p-6 shadow-[0_0_20px_rgba(59,130,246,0.12)] transition hover:border-blue-400/50 hover:shadow-[0_0_35px_rgba(59,130,246,0.35)]">
              <p className="font-bold text-blue-400">Week 4+</p>
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
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
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
              className="mt-8 inline-flex rounded-xl bg-blue-400 px-7 py-4 text-sm font-bold text-white shadow-[0_0_28px_rgba(59,130,246,0.6)] transition hover:scale-[1.03] hover:shadow-[0_0_42px_rgba(59,130,246,0.95)]"
            >
              Launch Interactive Demo →
            </a>
          </div>

          <div
            id="how-it-works"
            className="space-y-8 border-blue-400/15 lg:border-l lg:pl-12"
          >
            <div className="flex gap-6">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-400/10 text-3xl text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.22)]">
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
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-400/10 text-3xl text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.22)]">
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
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-400/10 text-3xl text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.22)]">
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
        <div className="overflow-hidden rounded-[1.75rem] border border-blue-400/25 bg-blue-400/[0.045] shadow-[0_0_45px_rgba(59,130,246,0.12)]">
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
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
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
                <p className="text-blue-400">Founder, AfterHours Ops</p>
              </div>
            </div>

            <div className="border-blue-400/15 p-8 lg:border-l lg:p-10">
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-400/10 text-2xl text-blue-400 shadow-[0_0_18px_rgba(59,130,246,0.18)]">
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
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-400/10 text-2xl text-blue-400 shadow-[0_0_18px_rgba(59,130,246,0.18)]">
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
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-400/10 text-2xl text-blue-400 shadow-[0_0_18px_rgba(59,130,246,0.18)]">
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

      {/* WHAT WE'RE BUILDING */}
      <section id="manager-view" className="mx-auto max-w-7xl px-6 py-12">
        <div className="border-t border-blue-400/15 pt-12">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
                What We're Building
              </p>

              <h3 className="mt-4 text-4xl font-black leading-tight">
                The full operational picture.
              </h3>

              <p className="mt-5 text-lg leading-8 text-white/75">
                Today, AfterHours helps teams solve real-time operational
                questions. Tomorrow, leadership gains visibility into the
                patterns behind them.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-blue-400/20 bg-blue-400/[0.04] p-6 shadow-[0_0_22px_rgba(59,130,246,0.12)] transition hover:border-blue-400/50 hover:shadow-[0_0_34px_rgba(59,130,246,0.32)]">
                <h4 className="text-xl font-bold text-blue-400">
                  Question Tracking
                </h4>
                <p className="mt-3 leading-7 text-white/72">
                  See what your agents are asking most often.
                </p>
              </div>

              <div className="rounded-2xl border border-blue-400/20 bg-blue-400/[0.04] p-6 shadow-[0_0_22px_rgba(59,130,246,0.12)] transition hover:border-blue-400/50 hover:shadow-[0_0_34px_rgba(59,130,246,0.32)]">
                <h4 className="text-xl font-bold text-blue-400">
                  Training Gaps
                </h4>
                <p className="mt-3 leading-7 text-white/72">
                  Spot where SOPs, coaching, or communication need clarity.
                </p>
              </div>

              <div className="rounded-2xl border border-blue-400/20 bg-blue-400/[0.04] p-6 shadow-[0_0_22px_rgba(59,130,246,0.12)] transition hover:border-blue-400/50 hover:shadow-[0_0_34px_rgba(59,130,246,0.32)]">
                <h4 className="text-xl font-bold text-blue-400">
                  Escalation Patterns
                </h4>
                <p className="mt-3 leading-7 text-white/72">
                  Understand when and why issues are being escalated.
                </p>
              </div>

              <div className="rounded-2xl border border-blue-400/20 bg-blue-400/[0.04] p-6 shadow-[0_0_22px_rgba(59,130,246,0.12)] transition hover:border-blue-400/50 hover:shadow-[0_0_34px_rgba(59,130,246,0.32)]">
                <h4 className="text-xl font-bold text-blue-400">
                  Manager Learning
                </h4>
                <p className="mt-3 leading-7 text-white/72">
                  Store proven resolutions so the system improves over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDING ACCESS CTA */}
      <section id="founding" className="mx-auto max-w-7xl px-6 py-14">
        <div className="rounded-[1.75rem] border border-blue-400/30 bg-blue-400/[0.045] p-8 shadow-[0_0_50px_rgba(59,130,246,0.18)] lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.25fr_1fr_0.45fr] lg:items-center">
            <div className="flex items-center gap-4">
              <div className="text-6xl text-blue-400 drop-shadow-[0_0_22px_rgba(59,130,246,0.85)]">
                ▣
              </div>
              <div>
                <p className="text-5xl font-black">$199</p>
                <p className="text-xl font-bold">FOUNDING RATE</p>
              </div>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
                14-Day Founder Access
              </p>

              <h3 className="mt-3 text-4xl font-black">
                Join before public launch.
              </h3>

              <p className="mt-3 text-white/72">
                Founding hotels receive 14-day access, founder-level onboarding,
                and locked-in pricing before the standard $299/month rate.
              </p>
            </div>

            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-blue-400 px-7 py-4 text-center text-sm font-bold text-white shadow-[0_0_30px_rgba(59,130,246,0.7)] transition hover:scale-[1.03] hover:shadow-[0_0_45px_rgba(59,130,246,1)]"
            >
              Apply for 14-Day Access →
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-blue-400/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-end gap-1">
              <div className="text-3xl text-blue-400 drop-shadow-[0_0_18px_rgba(59,130,246,0.75)]">
                ✦
              </div>
              <div className="mb-3 text-xs text-blue-400 drop-shadow-[0_0_14px_rgba(59,130,246,0.75)]">
                ✦
              </div>
              <div className="text-xs text-blue-400 drop-shadow-[0_0_14px_rgba(59,130,246,0.75)]">
                ✦
              </div>
            </div>

            <div>
              <p className="text-xl font-bold">
                AfterHours <span className="text-blue-400">Ops</span>
              </p>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                AI for hotel operations
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-white/70">
            <a href="#features" className="hover:text-blue-400">
              Features
            </a>
            <a href="#how-it-works" className="hover:text-blue-400">
              How It Works
            </a>
            <a href="#demo" className="hover:text-blue-400">
              Demo
            </a>
            <a href="#manager-view" className="hover:text-blue-400">
              What We're Building
            </a>
            <a href="#founder" className="hover:text-blue-400">
              Founder
            </a>
            <a href="#founding" className="hover:text-blue-400">
              14-Day Founder Access
            </a>
          </div>

          <p className="text-sm text-white/55">© 2026 AfterHours Ops</p>
        </div>
      </footer>
    </main>
  );
}