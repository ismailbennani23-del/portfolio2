import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="section bg-mist">
      <div className="shell">
        <SectionHeading
          eyebrow="Education"
          title="A degree built at the intersection of finance and data."
        />

        <div className="grid gap-7 md:grid-cols-[0.9fr_1.1fr]">
          {/* degree card */}
          <Reveal>
            <div className="h-full rounded-2xl border border-line bg-white p-7">
              <div className="font-mono text-[12px] uppercase tracking-[0.12em] text-accent-600">
                {education.graduation}
              </div>
              <h3 className="mt-3 font-display text-[26px] font-semibold leading-tight tracking-[-0.01em] text-navy">
                {education.school}
              </h3>
              <p className="mt-1 text-[14px] text-muted-2">{education.location}</p>

              <div className="mt-5 space-y-1.5 border-t border-line pt-5 text-[15px]">
                <p className="font-semibold text-navy">{education.degree}</p>
                <p className="text-muted">{education.minor}</p>
                <p className="pt-2 font-mono text-[13px] text-accent-600">{education.gpa}</p>
              </div>
            </div>
          </Reveal>

          {/* coursework */}
          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border border-line bg-white p-7">
              <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-2">
                Relevant Coursework
              </div>
              <div className="space-y-5">
                {education.coursework.map((c) => (
                  <div key={c.group}>
                    <h4 className="mb-2.5 text-[14px] font-semibold text-navy">{c.group}</h4>
                    <div className="flex flex-wrap gap-[9px]">
                      {c.items.map((item) => (
                        <span key={item} className="chip">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
