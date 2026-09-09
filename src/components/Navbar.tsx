"use client";

import { useEffect, useState } from "react";
import { clsx } from "clsx";
import { navItems, profile } from "@/lib/data";
import { Led } from "./ui/Led";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "backdrop-blur-md bg-ink/85 border-b border-graphite" : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="hazard-stripe h-[3px] w-full opacity-90" />
      <nav
        className={clsx(
          "mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-300 sm:px-8",
          scrolled ? "py-3" : "py-5",
        )}
      >
        <a href="#home" className="group flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-sm border border-volt-dim bg-ink-3 font-mono-label text-xs font-bold text-volt transition-shadow group-hover:shadow-[0_0_12px_rgba(255,212,0,0.5)]">
            {profile.initials}
          </span>
          <span className="hidden font-mono-label text-xs uppercase tracking-[0.25em] text-paper-dim sm:inline">
            {profile.name}
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="group relative flex items-center gap-1.5 rounded-sm px-3 py-2 font-mono-label text-[11px] uppercase tracking-widest text-paper-dim transition-colors hover:text-volt"
              >
                <span className="text-[9px] text-steel group-hover:text-volt-dim">{item.code}</span>
                {item.label}
                <span className="absolute inset-x-2 -bottom-0.5 h-px scale-x-0 bg-volt transition-transform duration-200 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <Led size={7} />
          <span className="font-mono-label text-[10px] uppercase tracking-widest text-paper-dim">
            System Online
          </span>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-sm border border-graphite-2 bg-ink-3 lg:hidden"
        >
          <span className={clsx("h-px w-5 bg-volt transition-transform", open && "translate-y-[6.5px] rotate-45")} />
          <span className={clsx("h-px w-5 bg-volt transition-opacity", open && "opacity-0")} />
          <span className={clsx("h-px w-5 bg-volt transition-transform", open && "-translate-y-[6.5px] -rotate-45")} />
        </button>
      </nav>

      <div
        className={clsx(
          "overflow-hidden border-t border-graphite bg-ink/98 backdrop-blur-md transition-[max-height] duration-300 lg:hidden",
          open ? "max-h-[420px]" : "max-h-0 border-t-0",
        )}
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded-sm px-3 py-3 font-mono-label text-sm uppercase tracking-widest text-paper-dim active:text-volt"
              >
                <span className="text-[10px] text-volt-dim">{item.code}</span>
                {item.label}
              </a>
            </li>
          ))}
          <li className="mt-2 flex items-center gap-2 px-3 py-2">
            <Led size={7} />
            <span className="font-mono-label text-[10px] uppercase tracking-widest text-paper-dim">
              System Online
            </span>
          </li>
        </ul>
      </div>
    </header>
  );
}
