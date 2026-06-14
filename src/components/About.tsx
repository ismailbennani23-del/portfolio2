import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { aboutParagraphs, snapshot } from "@/lib/data";
import { renderBold } from "@/lib/text";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="shell">
        <SectionHeading eyebrow="About" title="Where financial rigor meets data fluency." />

        <div className="grid items-start gap-14 md:grid-cols-[1.3fr_0.9fr]">
          <Reveal>
            <div className="space-y-[18px]">
              {aboutParagraphs.map((p, i) => (
                <p key={i} className="text-[17px] leading-[1.7] text-muted">
                  {renderBold(p)}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-line bg-mist">
              <div className="flex items-center justify-between bg-ink-800 px-5 py-4 font-mono text-[11px] uppercase tracking-[0.14em] text-white">
                <span>Snapshot</span>
                <span className="text-accent">2026</span>
              </div>
              {snapshot.map((row, i) => (
                <div
                  key={row.k}
                  className={`flex items-center justify-between gap-4 px-5 py-[14px] text-[14.5px] ${
                    i < snapshot.length - 1 ? "border-b border-line" : ""
                  }`}
                >
                  <span className="font-mono text-[12px] uppercase tracking-[0.04em] text-muted-2">
                    {row.k}
                  </span>
                  <span className="text-right font-semibold text-navy">{row.v}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
