"use client";

import { useEffect, useState } from "react";
import { profile, navItems } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onTop = !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-line bg-white/85 backdrop-blur-md" : ""
      }`}
    >
      <div className="shell flex h-[70px] items-center justify-between">
        <a
          href="#home"
          className={`flex items-center gap-3 font-bold tracking-[-0.01em] ${
            onTop ? "text-white" : "text-navy"
          }`}
        >
          <span
            className={`grid h-[34px] w-[34px] place-items-center rounded-lg font-mono text-sm font-semibold ${
              onTop ? "bg-white text-ink-800" : "bg-ink-800 text-white"
            }`}
          >
            {profile.initials}
          </span>
          {profile.name}
        </a>

        {/* desktop nav */}
        <nav className="hidden items-center gap-[30px] md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-[14.5px] font-medium transition-colors ${
                onTop ? "text-white/80 hover:text-white" : "text-muted hover:text-accent-600"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary px-[18px] py-[9px] text-sm">
            Get in touch
          </a>
        </nav>

        {/* burger */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`flex flex-col gap-[5px] p-1.5 md:hidden ${onTop ? "text-white" : "text-navy"}`}
        >
          <span className="block h-0.5 w-[22px] bg-current" />
          <span className="block h-0.5 w-[22px] bg-current" />
          <span className="block h-0.5 w-[22px] bg-current" />
        </button>
      </div>

      {/* mobile menu */}
      <nav
        className={`absolute inset-x-0 top-[70px] origin-top border-b border-line bg-white shadow-[0_18px_40px_-20px_rgba(7,22,38,0.3)] transition-transform duration-300 ease-smooth md:hidden ${
          open ? "translate-y-0" : "-translate-y-[140%]"
        }`}
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className="block px-7 py-[14px] text-navy"
          >
            {item.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="btn btn-primary m-7 mt-[10px] w-[calc(100%-3.5rem)] justify-center"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
}
