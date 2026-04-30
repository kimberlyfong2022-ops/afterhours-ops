import Script from "next/script";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.22),_transparent_28%),radial-gradient(circle_at_20%_30%,_rgba(59,130,246,0.18),_transparent_22%),radial-gradient(circle_at_80%_20%,_rgba(168,85,247,0.12),_transparent_18%),radial-gradient(circle_at_50%_80%,_rgba(14,165,233,0.16),_transparent_25%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.92))]" />

      <Script id="mailerlite-universal" strategy="afterInteractive">
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
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-400/10 text-cyan-300 shadow-[0_0_22px_rgba(34,211,238,0.35)]">
              ✦
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/70">
                AI for hotel operations
              </p>
              <h1 className="text-lg font-semibold tracking-wide text-white">
                AfterHours Ops
              </h1>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
            <a href="#features" className="transition hover:text-cyan-300">
              Features
            </a>
            <a href="#how-it-works" className="transition hover:text-cyan-300">
              How It Works
            </a>
            <a href="#demo" className="transition hover:text-cyan-300">
              Demo
            </a>
            <a href="#manager-view" className="transition hover:text-cyan-300">
              Manager View
            </a>
            <a href="#waitlist" className="transition hover:text-cyan-300">
              Waitlist
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#waitlist"
              className="rounded-full border border-cyan-300/40 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 shadow-[0_0_16px_rgba(34,211,238,0.18)] transition hover:bg-cyan-400/20"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      </header>

      <section id="top" className="relative">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200/90">
              <span className="text-base">✦</span>
              Built for front desk teams, night audit, and hotel leaders
            </div>

            <h2 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              Stop late-night manager calls.
              <span className="mt-2 block text-cyan-300 drop-shadow-[0_0_18px_rgba(34,211,238,0.55)]">
                Give your team instant operational support.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">
              Your hotel is switching to cloud-based technology. AfterHours Ops
              gives leaders an opportunity to instantly support the people behind
              the screen with real-time operational guidance, escalation support,
              and clearer next steps when leadership steps away.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#waitlist"
                className="rounded-full bg-cyan-300 px-6 py-3 text-center text-sm font-semibold text-black transition hover:scale-[1.01]"
              >
                Join the Founder Waitlist
              </a>

              <a
                href="#features"
                className="rounded-full border border-white/15 px-6 py-3 text-center text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:text-cyan-200"
              >
                Explore Features
              </a>
            </div>

            <p className="mt-4 text-sm text-white/60">
              Built to support real hotel scenarios in seconds.
            </p>

            <div className="mt-10 grid gap-4 text-sm text-white/75 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <p className="text-2xl font-semibold text-cyan-300">24/7</p>
                <p className="mt-1">
                  Operational guidance when the desk needs answers fast.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <p className="text-2xl font-semibold text-cyan-300">3 Layers</p>
                <p className="mt-1">
                  SOP guidance, real-world resolution ideas, and escalation support.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <p className="text-2xl font-semibold text-cyan-300">
                  Manager Data
                </p>
                <p className="mt-1">
                  Tracks questions, uncertainty, and training opportunities.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-cyan-400/10 blur-3xl" />
            <div className="relative rounded-[2rem] border border-cyan-300/20 bg-white/5 p-6 shadow-[0_0_50px_rgba(34,211,238,0.08)] backdrop-blur-xl">
              <div className="rounded-[1.6rem] border border-cyan-300/20 bg-black/70 p-5">
                <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-400/10 text-cyan-300">
                      ✦
                    </div>
                    <div>
                      <p className="text-sm text-white/60">AfterHours Ops</p>
                      <p className="text-base font-medium text-white">
                        What’s going on?
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                    Live support concept
                  </span>
                </div>

                <div className="space-y-4 text-sm leading-7">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white/80">
                    Guest room AC failed at 1:47 AM. No clean comparable room is
                    ready. Guest is upset and asking what we can do now.
                  </div>

                  <div className="rounded-2xl border border-cyan-300/20 bg-cyan-400/10 p-4 text-cyan-100">
                    <p className="font-semibold text-cyan-200">
                      Layer 1 · Immediate next steps
                    </p>
                    <p className="mt-2 text-white/85">
                      Verify alternate room options, offer approved recovery based
                      on your property guidelines, document the incident, and
                      prepare the correct follow-up communication.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white/80">
                    <p className="font-semibold text-cyan-200">
                      Layer 2 · Real-world resolution support
                    </p>
                    <p className="mt-2">
                      Surface prior resolutions and manager-backed suggestions when
                      standard steps do not solve the issue.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white/80">
                    <p className="font-semibold text-cyan-200">
                      Layer 3 · Escalation and communication
                    </p>
                    <p className="mt-2">
                      Identify who needs to know and generate the message the agent
                      can use right away.
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <a
                    href="#demo"
                    className="inline-flex rounded-full border border-cyan-300/40 px-5 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-300/10 hover:text-white"
                  >
                    View Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-black/30 p-6">
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/75">
                Real-time support
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                Not just answers. Action.
              </h3>
              <p className="mt-3 leading-7 text-white/70">
                AfterHours Ops does not just restate policy. It guides the next
                move and helps the team execute with more clarity.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/30 p-6">
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/75">
                Training reinforcement
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                Support people while they work.
              </h3>
              <p className="mt-3 leading-7 text-white/70">
                Teams learn faster when support fits naturally into the moment
                they need it, especially overnight.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/30 p-6">
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/75">
                Leadership visibility
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                Give managers a clearer view.
              </h3>
              <p className="mt-3 leading-7 text-white/70">
                Track uncertainty, recurring questions, and operational friction
                points so leaders can coach with real insight.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-[2rem] border border-cyan-300/20 bg-cyan-300/5 p-8 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Modern hotel operations
          </p>

          <h3 className="mt-4 max-w-4xl text-3xl font-semibold tracking-tight text-white lg:text-5xl">
            The industry is moving to the cloud. Now your operational support
            should too.
          </h3>

          <p className="mt-6 max-w-3xl text-base leading-8 text-white/70 lg:text-lg">
            Hotels are investing in faster systems, real-time visibility, and
            cloud-based operations. Your PMS is evolving. Your reporting is
            evolving. Your guest communication is evolving.
          </p>

          <p className="mt-4 max-w-3xl text-base leading-8 text-white/70 lg:text-lg">
            AfterHours Ops creates an opportunity to instantly support the people
            behind the screen with real-time decision support, department
            communication guidance, and after-hours operational coverage without
            adding another complicated workflow.
          </p>

          <p className="mt-4 max-w-3xl text-base font-medium leading-8 text-cyan-300 lg:text-lg">
            Healthy teams create healthier service.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/founder"
              className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.01]"
            >
              Join Founder Access
            </a>

            <a
              href="#demo"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-300"
            >
              View Demo
            </a>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/75">
            How it works
          </p>
          <h3 className="mt-3 text-4xl font-semibold text-white">
            Built around how hotel teams actually work.
          </h3>
          <p className="mt-5 text-lg leading-8 text-white/70">
            Powerful tools only matter if they fit naturally into operations.
            AfterHours Ops is designed to support hesitation moments, surface
            guidance quickly, and keep the operation moving.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-cyan-300/15 bg-cyan-400/5 p-7">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
              01
            </div>
            <h4 className="mt-4 text-2xl font-semibold text-white">
              Ask what is happening
            </h4>
            <p className="mt-3 leading-7 text-white/70">
              Agents enter the situation in a quick, natural way without leaving
              their flow.
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-300/15 bg-cyan-400/5 p-7">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
              02
            </div>
            <h4 className="mt-4 text-2xl font-semibold text-white">
              Get the best next step
            </h4>
            <p className="mt-3 leading-7 text-white/70">
              Pull from SOPs, standards, manager notes, and past resolutions to
              guide the next action.
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-300/15 bg-cyan-400/5 p-7">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
              03
            </div>
            <h4 className="mt-4 text-2xl font-semibold text-white">
              Capture insight for leadership
            </h4>
            <p className="mt-3 leading-7 text-white/70">
              Record what teams ask, where they hesitate, and where managers can
              strengthen training and clarity.
            </p>
          </div>
        </div>
      </section>

      <section id="demo" className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="rounded-[2rem] border border-cyan-300/20 bg-cyan-400/10 p-8 shadow-[0_0_40px_rgba(34,211,238,0.08)] lg:p-10">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/80">
              Live demo
            </p>
            <h3 className="mt-3 text-4xl font-semibold text-white">
              Experience AfterHours Ops in real time
            </h3>
            <p className="mt-5 text-lg leading-8 text-white/80">
              Explore the live demo in a new tab to see how AfterHours Ops
              responds to real hotel scenarios with immediate action, guest
              communication, and operational follow-up guidance.
            </p>
          </div>

          <div className="mt-10 rounded-[1.5rem] border border-cyan-300/20 bg-slate-950/80 p-10 text-center shadow-[0_0_35px_rgba(34,211,238,0.12)]">
            <p className="text-lg text-white/80">
              Open the live demo in a new tab to explore the experience.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://night-shift-support.replit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.01]"
            >
              Open Full Demo
            </a>

            <a
              href="#waitlist"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:text-cyan-200"
            >
              Join the Waitlist
            </a>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/75">
            Features
          </p>
          <h3 className="mt-3 text-4xl font-semibold text-white">
            A support tool for agents and a visibility tool for leaders.
          </h3>
        </div>

        <div className="mt-12">
          <div className="rounded-[2rem] border border-cyan-300/25 bg-cyan-400/10 p-8 shadow-[0_0_35px_rgba(34,211,238,0.08)]">
            <div className="inline-flex rounded-full border border-cyan-200/30 bg-black/30 px-4 py-2 text-sm text-cyan-100">
              Full product vision
            </div>
            <h4 className="mt-5 text-3xl font-semibold text-white">
              Built to go deeper than one moment.
            </h4>
            <p className="mt-4 text-white/78">
              AfterHours Ops supports real-time decisions, escalation guidance,
              manager visibility, and a stronger operational learning loop for
              the hotel teams using it.
            </p>
            <ul className="mt-6 space-y-3 text-white/85">
              <li>• SOP and knowledge upload support</li>
              <li>• Escalation and communication guidance</li>
              <li>• Manager dashboard and analytics visibility</li>
              <li>• Resolution learning from recurring situations</li>
              <li>• SOP update alerts and training reinforcement</li>
              <li>
                • Question tracking to surface where teams need support most
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/75">
            Founder pricing
          </p>
          <h3 className="mt-3 text-4xl font-semibold text-white">
            One clear offer for early supporters.
          </h3>
        </div>

        <div className="mt-12 max-w-3xl">
          <div className="rounded-[2rem] border border-cyan-300/25 bg-cyan-400/10 p-8 shadow-[0_0_35px_rgba(34,211,238,0.08)]">
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-100/80">
              Founder pricing
            </p>
            <h4 className="mt-4 text-3xl font-semibold text-white">
              Full Product
            </h4>
            <p className="mt-2 text-5xl font-semibold text-cyan-300">
              $36.66<span className="text-lg text-white/70">/month</span>
            </p>
            <p className="mt-4 text-white/78">
              Limited founder pricing, locked in for life.
            </p>
            <ul className="mt-6 space-y-3 text-white/85">
              <li>• Real-time hotel operations support</li>
              <li>• Escalation support</li>
              <li>• Resolution learning</li>
              <li>• Manager dashboard</li>
              <li>• Training insights</li>
            </ul>
            <a
              href="/founder"
              className="mt-8 inline-flex rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.01]"
            >
              Reserve Founder Pricing
            </a>
          </div>
        </div>
      </section>

      <section id="manager-view" className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/75">
                Manager view
              </p>
              <h3 className="mt-3 text-4xl font-semibold text-white">
                This is not only an agent tool.
              </h3>
              <p className="mt-5 text-lg leading-8 text-white/70">
                AfterHours Ops helps create a space where teams can ask questions,
                surface uncertainty, and get support in real time. That matters
                for performance, coaching, and culture.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-black/25 p-5">
                <h4 className="text-xl font-semibold text-white">
                  Question tracking
                </h4>
                <p className="mt-2 text-white/68">
                  Capture the questions agents ask most so leaders can see what
                  support is needed repeatedly.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/25 p-5">
                <h4 className="text-xl font-semibold text-white">
                  Training insight
                </h4>
                <p className="mt-2 text-white/68">
                  Use real data to coach more intentionally and close knowledge
                  gaps faster.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/25 p-5">
                <h4 className="text-xl font-semibold text-white">
                  Operational patterns
                </h4>
                <p className="mt-2 text-white/68">
                  Spot recurring issues, escalation points, and moments that slow
                  the desk down.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/25 p-5">
                <h4 className="text-xl font-semibold text-white">
                  Safer team culture
                </h4>
                <p className="mt-2 text-white/68">
                  When people feel supported enough to ask, leaders gain a
                  stronger team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="waitlist" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-[2rem] border border-cyan-300/20 bg-cyan-400/10 p-8 shadow-[0_0_40px_rgba(34,211,238,0.08)] lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/80">
                Join the waitlist
              </p>
              <h3 className="mt-3 text-4xl font-semibold text-white">
                Support your team as hotel technology evolves.
              </h3>
              <p className="mt-5 text-lg leading-8 text-white/80">
                Join the founder waitlist to get product updates, early access
                opportunities, and a front-row view as we build real support for
                hotel teams.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href="/founder"
                  className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.01]"
                >
                  Reserve Founder Pricing
                </a>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-black/35 p-6 backdrop-blur-sm">
              <div className="ml-embedded" data-form="dheoxc"></div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-white/55 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© 2026 AfterHours Ops. Built for hotel operations.</p>

          <div className="flex flex-wrap gap-6">
            <a href="#features" className="transition hover:text-cyan-300">
              Features
            </a>
            <a href="#demo" className="transition hover:text-cyan-300">
              Demo
            </a>
            <a href="#manager-view" className="transition hover:text-cyan-300">
              Manager View
            </a>
            <a
              href="/founder"
              className="inline-flex rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.01]"
            >
              Reserve Founder Pricing
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}