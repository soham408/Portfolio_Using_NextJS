
"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

type PageEntranceProps = {
  children: React.ReactNode;
};

export default function PageEntrance({
  children,
}: PageEntranceProps) {
  const container = useRef<HTMLDivElement>(null);
  const overlay = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) {
        gsap.set(overlay.current, { display: "none" });
        return;
      }

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.to(overlay.current, {
        yPercent: -100,
        duration: 0.85,
        delay: 2.10,
        ease: "power4.inOut",
      })
        .fromTo(
          container.current,
          { y: 24, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.7,
          },
          "-=0.45"
        );
    },
    { scope: container }
  );

  return (
  <>
    <div
      ref={overlay}
      aria-hidden="true"
      className="portfolio-intro-overlay"
    >
      <div className="portfolio-intro-content">
        <span className="portfolio-intro-eyebrow">
          DIGITAL EXPERIENCES · BUILT FOR GROWTH
        </span>

        <h1 className="portfolio-intro-heading">
          Take Your Business
          <br />
          <span className="portfolio-intro-highlight">
            Live. Online.
          </span>
        </h1>

        <p className="portfolio-intro-subtitle">
          Let&apos;s build your digital presence.
        </p>

        <span className="portfolio-intro-footer">
          YOUR VISION. MY CODE. LET&apos;S BUILD IT.
        </span>
      </div>
    </div>

    <div ref={container}>
      {children}
    </div>
  </>
);
}
