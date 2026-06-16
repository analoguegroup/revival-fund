import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";
import SideNav from "@/components/SideNav";

export default function Header() {
  const [location] = useLocation();
  const isHome = location === "/";
  const [revealed, setRevealed] = useState(!isHome);

  useEffect(() => {
    if (!isHome) {
      setRevealed(true);
      return;
    }
    const update = () => {
      const hero = document.querySelector('[data-testid="hero-block"]');
      if (hero) {
        setRevealed(hero.getBoundingClientRect().bottom < 120);
      } else {
        setRevealed(window.scrollY > window.innerHeight * 0.7);
      }
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [isHome]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-[999]"
        aria-hidden={!revealed}
        {...(!revealed ? { inert: "" as unknown as boolean } : {})}
        style={{
          padding: "0.9rem var(--gutter) 5rem",
          background:
            "linear-gradient(to bottom, var(--accent-live-translucent, rgba(12, 57, 129, 0.78)) 0%, var(--accent-live-translucent, rgba(12, 57, 129, 0.78)) 18%, var(--accent-live-transparent, rgba(12, 57, 129, 0)) 100%)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 30%, transparent 100%)",
          opacity: revealed ? 1 : 0,
          transform: revealed ? "translateY(0)" : "translateY(-100%)",
          pointerEvents: revealed ? "auto" : "none",
          transition: "opacity 0.5s ease, transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <div
          className="flex items-center justify-between gap-4 pb-[0.9rem]"
          style={{ borderBottom: "1px solid rgba(245, 246, 248, 0.25)" }}
        >
          <Link
            href="/"
            className="sm:text-[1.5rem] no-underline min-w-0 text-[1.25rem] leading-none"
            style={{ color: "#f5f6f8", fontFamily: "var(--font-display)" }}
            data-testid="link-home"
          >
            The RevivaL Fund
          </Link>
        </div>
      </header>
      <SideNav revealed={revealed} />
    </>
  );
}
