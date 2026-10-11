"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
import {
  Download,
  Menu,
  Moon,
  Settings2,
  Sun,
  X,
  Monitor,
  Github, LinkedinIcon
} from "lucide-react";

import { Button } from "@/components/ui/button";

type Theme = "light" | "dark" | "system";

function ThemeOption({
  active,
  icon: Icon,
  label,
  onClick,
}: {
  active: boolean;
  icon: typeof Sun;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`flex min-w-0 flex-1 flex-col items-center gap-2 rounded-xl border px-2 py-3 text-xs font-medium transition-colors ${
        active
          ? "border-red-200/70 bg-red-500/10 text-red-200"
          : "border-border bg-muted/30 text-muted-foreground hover:border-red-200/40 hover:text-foreground"
      }`}
    >
      <Icon aria-hidden="true" className="size-4" />
      {label}
    </button>
  );
}

export default function NavbarComponent() {
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");

  // Apply selected theme
  useEffect(() => {
    const root = document.documentElement;

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const shouldUseDark =
      theme === "dark" || (theme === "system" && prefersDark);

    root.classList.toggle("dark", shouldUseDark);
    root.classList.toggle("light", !shouldUseDark);
  }, [theme]);

  return (
    <>
      {/* Navbar */}
      <header className="sticky top-0 z-40 border-b border-red-900/50 bg-[#140303]/95 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          
          {/* Infinity Logo */}
          <div className="flex items-center gap-2">
            <a
              href="#top"
              className="text-4xl font-bold tracking-wider text-gray-400 transition-colors hover:text-red-400"
              aria-label="Back to top"
            >
              ∞
            </a>
          </div>

          {/* Navigation */}
          <nav aria-label="Main navigation">
            <ul className="flex items-center gap-4 sm:gap-8">
              <li>
                <a
                  href="#projects"
                  className="text-xs font-medium uppercase tracking-wider text-white/80 transition-colors hover:text-red-500 sm:text-sm"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#techstack"
                  className="text-xs font-medium uppercase tracking-wider text-white/80 transition-colors hover:text-red-500 sm:text-sm"
                >
                  Tech Stack
                </a>
              </li>
            </ul>
          </nav>

          {/* Settings Button */}
          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="outline"
              size="icon"
              aria-label={
                isSliderOpen ? "Close settings" : "Open settings"
              }
              aria-expanded={isSliderOpen}
              onClick={() => setIsSliderOpen(true)}
              className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              {isSliderOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </header>

      {/* Background Overlay */}
      {isSliderOpen && (
        <button
          type="button"
          aria-label="Close settings"
          onClick={() => setIsSliderOpen(false)}
          className="fixed inset-0 z-40 bg-black/60"
        />
      )}

      {/* Settings Side Panel */}
      <aside
        aria-label="Site settings"
        aria-hidden={!isSliderOpen}
        className={`fixed right-0 top-0 z-50 flex h-dvh w-[min(22rem,90vw)] flex-col border-l border-red-900/60 bg-[#140303] p-6 text-white shadow-2xl transition-transform duration-300 ${
          isSliderOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Panel Header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-400">
              {/* Control panel */}
              More About Me &
            </p>

            <h2 className="mt-2 text-xl font-semibold text-white">
              P R E F E R E N C E S
            </h2>
          </div>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label="Close settings"
            onClick={() => setIsSliderOpen(false)}
            className="text-white/70 hover:bg-white/10 hover:text-white"
          >
            <X />
          </Button>
        </div>

        {/* Panel Content */}
        <div className="mt-10 flex flex-col gap-8">

          {/* Resume */}
          <section aria-labelledby="resume-heading">
            <h3
              id="resume-heading"
              className="mb-3 text-sm font-medium text-white"
            >
              RESUME
            </h3>

            <Button
              asChild
              className="w-full bg-orange-600 text-white hover:bg-orange-700"
            >
              <a
                href="/resume/soham_02.pdf"
                download="Soham-Bambade-Resume.pdf"
              >
                <Download
                  data-icon="inline-start"
                  className="mr-2 size-4"
                />
                DOWNLOAD RESUME
              </a>
            </Button>
          </section>

          {/* Theme */}
          <section aria-labelledby="theme-heading">
            <div className="mb-3 flex items-center gap-2">
              <Settings2
                className="size-4 text-red-400"
                aria-hidden="true"
              />

              <h3
                id="theme-heading"
                className="text-sm font-medium text-white"
              >
                APPEARANCE
              </h3>
            </div>

            

            <div
              className="flex gap-2"
              role="group"
              aria-label="Theme options"
            >
              <ThemeOption
                active={theme === "light"}
                icon={Sun}
                label="Light"
                onClick={() => setTheme("light")}
              />

              <ThemeOption
                active={theme === "dark"}
                icon={Moon}
                label="Dark"
                onClick={() => setTheme("dark")}
              />

              <ThemeOption
                active={theme === "system"}
                icon={Monitor}
                label="System"
                onClick={() => setTheme("system")}
              />
            </div>

            {/*AVAILABILITY*/}

            <div aria-labelledby="resume-heading" className="mt-10">
            <h3
              id="resume-heading"
              className="mb-5 text-sm font-medium text-white"
            >
              AVAILABILITY
            </h3>

            <div className="flex items-center gap-2.5 rounded-lg border border-emerald-400/20 bg-emerald-400/5 px-4 py-3">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
            <span className="text-sm font-medium text-emerald-300">
              Available for opportunities
            </span>
             </div>

          </div>

          {/* Contacts */}

         {/* Social Contacts */}
<div className="mt-8 grid grid-cols-4 gap-3 border-t border-white/15 pt-5">
  {/* GitHub */}
  <Link
    href="https://github.com/soham408"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub profile"
    className="flex h-11 w-full items-center justify-center rounded-lg border border-white/30 bg-white/5 text-white transition-colors hover:bg-white/15 hover:border-red-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
  >
    <Github className="h-5 w-5 shrink-0" />
  </Link>

  {/* LinkedIn */}
  <Link
    href="https://www.linkedin.com/in/soham408/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn profile"
    className="flex h-11 w-full items-center justify-center rounded-lg border border-white/30 bg-white/5 text-white transition-colors hover:bg-white/15 hover:border-red-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
  >
    <LinkedinIcon className="h-5 w-5 shrink-0" />
  </Link>

  {/* X */}
  <Link
    href="https://x.com/soham_bambade"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="X profile"
    className="flex h-11 w-full items-center justify-center rounded-lg border border-white/30 bg-white/5 text-white transition-colors hover:bg-white/15 hover:border-red-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
  >
    <X className="h-5 w-5 shrink-0" />
  </Link>

  {/* Email */}
  <Link
    href="mailto:slbambade01@gmail.com"
    aria-label="Send email"
    className="flex h-11 w-full items-center justify-center rounded-lg border border-white/30 bg-white/5 text-white transition-colors hover:bg-white/15 hover:border-red-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
  >
    <Mail className="h-5 w-5 shrink-0" />
  </Link>
</div>

          </section>
        </div>
      </aside>
    </>
  );
}
