import { profile } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line py-[34px]">
      <div className="shell flex flex-wrap items-center justify-between gap-3.5 text-[13.5px] text-muted-2">
        <span className="font-mono uppercase tracking-[0.04em]">
          {profile.initials} · {profile.name} © {year}
        </span>
        <span>Finance & Data Analytics Candidate · Built with Next.js</span>
      </div>
    </footer>
  );
}
