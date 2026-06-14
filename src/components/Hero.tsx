"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { profile, heroSubhead, heroMetrics } from "@/lib/data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] } },
};

export default function Hero() {
  const reduce = useReducedMotion();
  const v = reduce ? {} : { variants: container, initial: "hidden", animate: "show" };
  const child = reduce ? {} : { variants: item };

  return (
    <section id="home" className="relative overflow-hidden bg-ink-900 pb-0 pt-[140px] text-white">
      {/* grid texture + glow */}
      <div
        className="grid-texture pointer-events-none absolute inset-0"
        style={{
          maskImage: "radial-gradient(ellipse 80% 70% at 72% 35%, #000 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 72% 35%, #000 40%, transparent 100%)",
        }}
      />
      <div className="pointer-events-none absolute -right-[6%] top-[8%] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(201,162,75,0.16),transparent_62%)] blur-sm" />

      <div className="shell relative grid items-center gap-12 pb-16 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
        {/* left */}
        <motion.div {...v}>
          <motion.div
            {...child}
            className="mb-6 flex items-center gap-3 font-mono text-[12.5px] uppercase tracking-[0.16em] text-accent"
          >
            <span className="h-[7px] w-[7px] rounded-full bg-accent shadow-[0_0_0_4px_rgba(201,162,75,0.22)]" />
            {profile.positioning}
          </motion.div>

          <motion.h1
            {...child}
            className="font-display text-[clamp(44px,6vw,72px)] font-medium leading-[1.0] tracking-[-0.02em]"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            {...child}
            className="mt-3 font-display text-[clamp(19px,2.4vw,26px)] italic leading-snug text-accent"
          >
            Finance, with the data to back it up.
          </motion.p>

          <motion.p {...child} className="mt-5 max-w-[540px] text-[17px] leading-[1.62] text-muted-d">
            {heroSubhead}
          </motion.p>

          <motion.div {...child} className="mt-8 flex flex-wrap gap-[14px]">
            <a href="#resume" className="btn btn-primary">
              View résumé
            </a>
            <a href="#projects" className="btn btn-ghost">
              View projects
            </a>
            <a href="#contact" className="btn btn-ghost">
              Contact me
            </a>
          </motion.div>
        </motion.div>

        {/* right — portrait */}
        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[360px]"
        >
          {/* soft glow + ring frame */}
          <div className="absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle,rgba(201,162,75,0.25),transparent_70%)] blur-xl" />
          <div className="relative aspect-square overflow-hidden rounded-full border border-accent/40 p-2">
            <div className="relative h-full w-full overflow-hidden rounded-full ring-1 ring-white/10">
              <Image
                src={profile.photo}
                alt={`${profile.name} — professional headshot`}
                fill
                priority
                sizes="(max-width: 768px) 280px, 360px"
                className="object-cover"
              />
            </div>
          </div>
          {/* corner accent ticks */}
          <span className="absolute -left-1 top-6 h-8 w-px bg-accent/50" />
          <span className="absolute -right-1 bottom-6 h-8 w-px bg-accent/50" />
        </motion.div>
      </div>

      {/* stat band (signature "performance index") */}
      <div className="relative border-t border-white/10 bg-ink-900/60">
        <div className="shell grid grid-cols-2 divide-white/10 md:grid-cols-4 md:divide-x">
          {heroMetrics.map((m) => (
            <div key={m.name} className="px-1 py-7 md:px-6">
              <div className="flex items-baseline gap-2 font-mono text-[26px] font-semibold text-white">
                {m.value}
                <span className="text-[13px] text-accent">▲</span>
              </div>
              <div className="mt-1.5 text-[12.5px] leading-snug text-muted-d">{m.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
