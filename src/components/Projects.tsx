import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="section bg-mist">
      <div className="shell">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work — from portfolio risk to liquidity modeling."
          description="A sample of analytical projects spanning quantitative finance, data engineering, and applied modeling."
        />

        <div className="grid gap-[22px] md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.08}>
              <div
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white p-7
                           transition-all duration-300 ease-smooth hover:-translate-y-[5px]
                           hover:border-[#dcd3bb] hover:shadow-[0_22px_50px_-28px_rgba(7,22,38,0.34)]"
              >
                <span className="absolute left-0 top-0 h-[3px] w-0 bg-accent transition-all duration-300 ease-smooth group-hover:w-full" />

                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-md bg-accent-100 px-2.5 py-[5px] font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-accent-600">
                    {p.tools}
                  </span>
                  <span className="font-mono text-[13px] text-muted-2">{p.no}</span>
                </div>

                <h3 className="mb-2.5 font-display text-[22px] font-semibold tracking-[-0.01em] text-navy">
                  {p.title}
                </h3>
                <p className="text-[14.5px] leading-[1.6] text-muted">{p.description}</p>

                {/* skills demonstrated */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded border border-line px-2 py-1 text-[11.5px] font-medium text-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between border-t border-line pt-4">
                  <div className="flex items-baseline gap-2.5">
                    <span className="font-mono text-[20px] font-semibold text-navy">{p.metric}</span>
                    <span className="text-[12.5px] text-muted-2">{p.metricLabel}</span>
                  </div>
                  {/* ← replace href with a GitHub repo or write-up link in src/lib/data.ts */}
                  <a
                    href={p.link ?? "#"}
                    className="font-mono text-[12px] text-accent-600 transition-colors hover:text-navy"
                  >
                    View project →
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
