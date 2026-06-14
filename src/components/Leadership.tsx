import Reveal from "./Reveal";
import { leadership } from "@/lib/data";

export default function Leadership() {
  return (
    <section id="leadership" className="section">
      <div className="shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-[22px] bg-ink-900 p-7 text-white md:p-14">
            <div
              className="grid-texture pointer-events-none absolute inset-0"
              style={{
                maskImage: "radial-gradient(ellipse 70% 80% at 85% 50%, #000, transparent)",
                WebkitMaskImage: "radial-gradient(ellipse 70% 80% at 85% 50%, #000, transparent)",
              }}
            />
            <div className="relative grid items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
              <div>
                <span className="eyebrow text-accent">Leadership</span>
                <h2 className="my-[18px] font-display text-[clamp(28px,3.6vw,40px)] font-medium leading-[1.1] tracking-[-0.01em]">
                  {leadership.heading}
                </h2>
                <div className="mb-4 font-mono text-[12.5px] text-muted-d">
                  {leadership.role} · {leadership.org}
                  <span className="mx-2 text-accent">/</span>
                  {leadership.date} · {leadership.location}
                </div>
                <p className="text-[16px] leading-[1.68] text-muted-d">{leadership.body}</p>
              </div>

              <div className="grid gap-4">
                {leadership.stats.map((s) => (
                  <div
                    key={s.n}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-[22px]"
                  >
                    <div className="font-mono text-[34px] font-semibold leading-none text-accent">
                      {s.n}
                    </div>
                    <div className="mt-2 text-[13.5px] text-muted-d">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
