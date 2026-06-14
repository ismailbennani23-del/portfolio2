import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { experiences } from "@/lib/data";
import { renderBold } from "@/lib/text";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="shell">
        <SectionHeading
          eyebrow="Experience"
          title="Operating where finance, accounting, and analytics meet."
        />

        <div>
          {experiences.map((xp, i) => (
            <Reveal
              key={xp.role}
              className={`grid gap-9 py-[30px] md:grid-cols-[200px_1fr] ${
                i === 0 ? "" : "border-t border-line"
              } ${i === 0 ? "pt-0" : ""}`}
            >
              <div>
                <div className="font-mono text-[12.5px] tracking-[0.03em] text-accent-600">
                  {xp.date}
                </div>
                <div className="mt-1.5 font-mono text-[11.5px] text-muted-2">{xp.location}</div>
              </div>

              <div>
                <h3 className="font-display text-[23px] font-semibold tracking-[-0.01em] text-navy">
                  {xp.role}
                </h3>
                <div className="mt-1 text-[15px] font-semibold text-navy">{xp.org}</div>
                <ul className="mt-3.5 grid gap-[9px]">
                  {xp.bullets.map((b, j) => (
                    <li
                      key={j}
                      className="relative pl-[22px] text-[15px] leading-[1.55] text-muted"
                    >
                      <span className="absolute left-0 top-[9px] h-[6px] w-[6px] rotate-45 rounded-[1px] bg-accent" />
                      {renderBold(b)}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
