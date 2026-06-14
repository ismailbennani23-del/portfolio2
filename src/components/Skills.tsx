import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="shell">
        <SectionHeading
          eyebrow="Skills"
          title="A toolkit built for analysis, automation, and reporting."
        />

        <div className="grid gap-[22px] md:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={(i % 2) * 0.08}>
              <div className="rounded-2xl border border-line bg-white p-[26px]">
                <h3 className="mb-[18px] flex items-center gap-2.5 font-mono text-[12px] uppercase tracking-[0.12em] text-accent-600">
                  <span className="text-muted-2">{String(i + 1).padStart(2, "0")} /</span>
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-[9px]">
                  {group.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
