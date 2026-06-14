import Reveal from "./Reveal";
import { profile, resumeBlurb } from "@/lib/data";

export default function Resume() {
  return (
    <section id="resume" className="section bg-mist">
      <div className="shell">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-7 rounded-2xl border border-line bg-white p-8 md:flex-row md:items-center md:p-10">
            <div className="max-w-[640px]">
              <span className="eyebrow-line mb-3.5">Résumé</span>
              <h2 className="font-display text-[clamp(24px,3vw,32px)] font-medium leading-tight tracking-[-0.01em] text-navy">
                The full record, on one page.
              </h2>
              <p className="mt-3 text-[16px] leading-relaxed text-muted">{resumeBlurb}</p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              {/* ← add your résumé to /public as resume.pdf */}
              <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
                View résumé
              </a>
              <a href={profile.resumeUrl} download className="btn btn-outline">
                ↓ Download PDF
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
