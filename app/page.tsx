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
            <div className="flex items-end gap-1">

              <div className="text-4xl text-cyan-300 drop-shadow-[0_0_22px_rgba(34,211,238,1)]">
                ✦
              </div>

              <div className="mb-4 text-sm text-cyan-300 drop-shadow-[0_0_18px_rgba(34,211,238,1)]">
                ✦
              </div>

              <div className="mb-1 text-sm text-cyan-300 drop-shadow-[0_0_18px_rgba(34,211,238,1)]">
                ✦
              </div>

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
        </div>
      </header>


      {/* HERO */}
      <section
        id="top"
        className="mx-auto max-w-7xl px-6 pt-14 pb-10 lg:pt-20 lg:pb-14"
      >
        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* LEFT */}
          <div>

            <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
              Founding Hotel Access Now Open
            </p>

            <h2 className="text-6xl font-black leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">

              <span className="block text-cyan-300 drop-shadow-[0_0_40px_rgba(34,211,238,0.9)]">
                STOP
              </span>

              <span className="block">
                THE 2AM CALL.
              </span>

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
                className="rounded-xl bg-cyan-300 px-7 py-4 text-center text-sm font-bold text-black shadow-[0_0_30px_rgba(34,211,238,0.7)]"
              >
                Apply for 14-Day Founder Access →
              </a>

              <a
                href="#demo"
                className="rounded-xl border border-cyan-300/50 px-7 py-4 text-center text-sm font-bold text-white"
              >
                See the Live Demo
              </a>

            </div>

          </div>


          {/* RIGHT — CONSTELLATION */}
          <div className="relative flex min-h-[420px] items-center justify-center">

            <div className="absolute h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl animate-pulse" />

            <div className="relative flex flex-col items-center text-center">

              {/* Constellation */}
              <div className="flex items-end gap-2">

                <div className="animate-pulse text-[140px] text-cyan-300 drop-shadow-[0_0_55px_rgba(34,211,238,1)]">
                  ✦
                </div>

                <div className="mb-14 text-2xl text-cyan-300 drop-shadow-[0_0_22px_rgba(34,211,238,1)]">
                  ✦
                </div>

                <div className="mb-4 text-2xl text-cyan-300 drop-shadow-[0_0_22px_rgba(34,211,238,1)]">
                  ✦
                </div>

              </div>


              {/* Message */}
              <div className="mt-8 max-w-md rounded-[2rem] border border-cyan-300/25 bg-cyan-300/[0.04] px-8 py-7 shadow-[0_0_40px_rgba(34,211,238,0.18)]">

                <p className="text-xl font-bold tracking-wide text-cyan-300">
                  When the constellation appears…
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
      </section>
    </main>
  );
}