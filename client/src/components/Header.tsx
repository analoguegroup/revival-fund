import { Link, useLocation } from "wouter";
import { useEffect, useRef, useState } from "react";
import SideNav from "@/components/SideNav";

export default function Header({ isTransitioning = false }: { isTransitioning?: boolean }) {
  const [location] = useLocation();
  const isHome = location === "/";
  const [isDesktop, setIsDesktop] = useState(false);
  const [revealed, setRevealed] = useState(!isHome);
  const [mobilePastHero, setMobilePastHero] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 640px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!isDesktop) {
      lastScrollY.current = window.scrollY;

      if (!isHome) {
        // Mobile non-home: visible at top, scroll-direction aware; nav always available
        setRevealed(window.scrollY <= 10);
        setMobilePastHero(true);
        const update = () => {
          const currentY = window.scrollY;
          if (currentY <= 10) {
            setRevealed(true);
          } else if (currentY < lastScrollY.current - 4) {
            setRevealed(true);
          } else if (currentY > lastScrollY.current + 4) {
            setRevealed(false);
          }
          lastScrollY.current = currentY;
        };
        window.addEventListener("scroll", update, { passive: true });
        return () => window.removeEventListener("scroll", update);
      }

      // Mobile home: hidden on hero, nav appears after 60px scroll
      const isPastHero = () => {
        const hero = document.querySelector('[data-testid="hero-block"]');
        return hero
          ? hero.getBoundingClientRect().bottom < 0
          : window.scrollY > window.innerHeight * 0.9;
      };
      setRevealed(false);
      setMobilePastHero(true);
      const update = () => {
        const currentY = window.scrollY;
        const past = isPastHero();
        if (!past) {
          setRevealed(false);
        } else if (currentY < lastScrollY.current - 4) {
          setRevealed(true);
        } else if (currentY > lastScrollY.current + 4) {
          setRevealed(false);
        }
        lastScrollY.current = currentY;
      };
      window.addEventListener("scroll", update, { passive: true });
      return () => window.removeEventListener("scroll", update);
    }
    if (!isHome) {
      // Non-home pages: visible at top, hides on scroll down, shows on scroll up
      lastScrollY.current = window.scrollY;
      setRevealed(window.scrollY <= 10);
      const update = () => {
        const currentY = window.scrollY;
        if (currentY <= 10) {
          setRevealed(true);
        } else if (currentY < lastScrollY.current - 4) {
          setRevealed(true);
        } else if (currentY > lastScrollY.current + 4) {
          setRevealed(false);
        }
        lastScrollY.current = currentY;
      };
      window.addEventListener("scroll", update, { passive: true });
      return () => window.removeEventListener("scroll", update);
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
  }, [isHome, isDesktop]);

  return (
    <>
      <header
        className="fixed z-[999]"
        aria-hidden={!revealed}
        {...(!revealed ? { inert: "" as unknown as boolean } : {})}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          paddingTop: isDesktop ? "1.75rem" : "calc(0.9rem + env(safe-area-inset-top, 0px))",
          paddingLeft: "var(--gutter)",
          paddingRight: "var(--gutter)",
          paddingBottom: isDesktop ? "3rem" : "1.6rem",
          background: isDesktop
            ? "linear-gradient(to bottom, var(--accent-live-translucent, rgba(12, 57, 129, 0.78)) 0%, var(--accent-live-translucent, rgba(12, 57, 129, 0.78)) 18%, var(--accent-live-transparent, rgba(12, 57, 129, 0)) 100%)"
            : "linear-gradient(to bottom, var(--accent-live-translucent, rgba(12, 57, 129, 0.78)) 0%, var(--accent-live-translucent, rgba(12, 57, 129, 0.78)) 35%, var(--accent-live-transparent, rgba(12, 57, 129, 0)) 100%)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          opacity: revealed ? 1 : 0,
          transform: revealed ? "translate3d(0, 0, 0)" : "translate3d(0, -100%, 0)",
          pointerEvents: revealed ? "auto" : "none",
          transition: "opacity 0.35s ease, transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <div
          className="flex items-center justify-between gap-4 pb-[0.9rem]"
          style={{ borderBottom: "none" }}
        >
          <Link
            href="/"
            className="sm:text-[1.125rem] no-underline min-w-0 text-[0.94rem] leading-none"
            style={{ color: "#f5f6f8", fontFamily: "var(--font-display)" }}
            data-testid="link-home"
          >
            {"The\u00a0\u00a0\u00a0\u00a0RevivaL\u00a0\u00a0\u00a0\u00a0Fund"}
          </Link>
        </div>
      </header>
      <SideNav revealed={revealed && !isTransitioning} mobilePastHero={mobilePastHero} />
    </>
  );
}
