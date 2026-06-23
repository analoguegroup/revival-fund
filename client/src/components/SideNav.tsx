import { Link, useLocation } from "wouter";
import { useCallback, useEffect, useRef, useState } from "react";

type Leaf =
  | { label: string; kind: "scroll"; target: string; path: string }
  | { label: string; kind: "link"; href: string }
  | { label: string; kind: "external"; href: string };

type Group = Leaf & { children?: Leaf[] };

const NAV_TREE: Group[] = [
  {
    label: "About",
    kind: "scroll",
    target: "about",
    path: "/",
    children: [
      { label: "FAQ", kind: "scroll", target: "faq", path: "/faq" },
      { label: "Team", kind: "scroll", target: "team", path: "/team" },
    ],
  },
  { label: "Projects", kind: "link", href: "/projects" },
  { label: "PortfoLio", kind: "link", href: "/portfolio" },
  { label: "Substack", kind: "external", href: "https://analogue.press/" },
  { label: "X", kind: "external", href: "https://x.com/analoguegroup" },
];

const FLAT: Leaf[] = NAV_TREE.flatMap((item) => [
  item,
  ...(item.children ?? []),
]);

export default function SideNav({ revealed = true }: { revealed?: boolean }) {
  const [location, navigate] = useLocation();
  const [isDesktop, setIsDesktop] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const pendingScroll = useRef<string | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 640px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Scroll spy: highlight the hole matching the section currently in view
  // (only on the home route, where About / Team / FAQ are stacked sections).
  useEffect(() => {
    if (location !== "/") return;
    const ids = ["about", "faq", "team"];
    let raf = 0;
    const compute = () => {
      raf = 0;
      const threshold = window.innerHeight * 0.35;
      let current = "about";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= threshold) current = id;
      }
      setActiveSection(current);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(compute);
    };
    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [location]);

  const scrollToSection = useCallback((target: string) => {
    if (target === "about") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return true;
    }
    const el = document.getElementById(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      return true;
    }
    return false;
  }, []);

  // After navigating home, scroll to the queued section once it has mounted.
  useEffect(() => {
    if (location !== "/" || !pendingScroll.current) return;
    let raf = 0;
    let attempts = 0;
    const run = () => {
      if (!pendingScroll.current) return;
      if (scrollToSection(pendingScroll.current) || attempts++ > 120) {
        pendingScroll.current = null;
        return;
      }
      raf = requestAnimationFrame(run);
    };
    raf = requestAnimationFrame(run);
    return () => cancelAnimationFrame(raf);
  }, [location, scrollToSection]);

  const handleScrollTab = useCallback(
    (target: string) => {
      if (location === "/") {
        scrollToSection(target);
      } else {
        pendingScroll.current = target;
        navigate("/");
      }
    },
    [location, navigate, scrollToSection]
  );

  const isActive = (item: Leaf) => {
    if (item.kind === "link") return location === item.href;
    if (item.kind === "external") return false;
    return location === "/"
      ? activeSection === item.target
      : location === item.path;
  };

  // ── Punched "hole" + label ────────────────────────────────────────────────
  const Hole = ({ active, sub, kind }: { active: boolean; sub?: boolean; kind?: string }) => {
    if (kind === "external") {
      return (
        <span
          aria-hidden="true"
          className="relative z-10 shrink-0 border transition-all duration-200 bg-[#dfe1e6]/60 border-[#7a766e] group-hover:border-[#0c3981] group-hover:bg-[#0c3981]/20"
          style={{
            width: 10,
            height: 10,
            marginLeft: 4,
            marginRight: 4,
            transform: "rotate(45deg)",
            boxShadow: "inset 0 1px 2px rgba(0, 0, 0, 0.12)",
          }}
        />
      );
    }
    return (
      <span
        aria-hidden="true"
        className={`relative z-10 shrink-0 rounded-full border-2 transition-all duration-200 ${
          active
            ? "bg-[#0c3981] border-[#0c3981]"
            : "bg-[#dfe1e6] border-[#0c3981] group-hover:bg-[#0c3981]/40"
        }`}
        style={{
          width: sub ? 12 : 18,
          height: sub ? 12 : 18,
          boxShadow: active
            ? "0 0 0 4px rgba(12, 57, 129, 0.16)"
            : "inset 0 1px 2px rgba(0, 0, 0, 0.18)",
        }}
      />
    );
  };

  const Label = ({
    label,
    active,
    sub,
    kind,
  }: {
    label: string;
    active: boolean;
    sub?: boolean;
    kind?: string;
  }) => (
    <span
      className={`relative z-10 font-mono uppercase whitespace-nowrap transition-colors duration-200 flex items-center gap-1 ${
        active
          ? "text-[#0c3981] font-bold"
          : "text-[#7a766e] group-hover:text-[#0c3981]"
      }`}
      style={{
        fontSize: sub ? "0.6rem" : "0.65rem",
        letterSpacing: "0.16em",
      }}
    >
      {label}
      {kind === "external" && (
        <span className="text-[0.55rem] opacity-60 group-hover:opacity-100 transition-opacity">
          ↗
        </span>
      )}
    </span>
  );

  const renderExternalItem = (item: Leaf) => {
    if (item.kind !== "external") return null;
    const testId = `link-nav-${item.label.toLowerCase()}`;
    return (
      <a
        key={item.label}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-1 font-mono text-[0.62rem] tracking-[0.16em] uppercase text-[#7a766e] hover:text-[#0c3981] transition-colors duration-200 no-underline"
        data-testid={testId}
      >
        {item.label}
        <span className="text-[0.55rem] opacity-65 group-hover:opacity-100 transition-opacity duration-200">
          ↗
        </span>
      </a>
    );
  };

  const renderItem = (item: Leaf, sub: boolean) => {
    if (item.kind === "external") return null;
    const active = isActive(item);
    const testId = `link-nav-${item.label.toLowerCase()}`;
    const className = `group flex items-center ${
      sub ? "gap-3" : "gap-3.5"
    } bg-transparent border-0 p-0 cursor-pointer text-left`;
    const children = (
      <>
        <Hole active={active} sub={sub} kind={item.kind} />
        <Label label={item.label} active={active} sub={sub} kind={item.kind} />
      </>
    );

    if (item.kind === "link") {
      return (
        <Link
          key={item.label}
          href={item.href}
          className={`${className} no-underline`}
          data-testid={testId}
        >
          {children}
        </Link>
      );
    }
    return (
      <button
        key={item.label}
        type="button"
        className={className}
        onClick={() => handleScrollTab(item.target)}
        data-testid={testId}
      >
        {children}
      </button>
    );
  };

  // ── Desktop: vertical ring-binder margin with nested sub-holes ────────────
  const renderDesktop = () => {
    const internalItems = NAV_TREE.filter((item) => item.kind !== "external");
    const externalItems = NAV_TREE.filter((item) => item.kind === "external");

    return (
      <div className="relative flex flex-col gap-6 py-3 pl-6 pr-4">
        {/* Internal links with binder rod running through them */}
        <div className="relative flex flex-col gap-7 pb-2">
          <span
            aria-hidden="true"
            className="absolute top-3 bottom-0"
            style={{
              left: "9px",
              width: "2px",
              transform: "translateX(-1px)",
              background: "rgba(12, 57, 129, 0.22)",
            }}
          />
          {internalItems.map((item) => (
            <div key={item.label} className="flex flex-col gap-4">
              {renderItem(item, false)}
              {item.children && location === "/" && (
                <div className="flex flex-col gap-4 pl-7">
                  {item.children.map((child) => renderItem(child, true))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Subtle separator */}
        <div className="h-px bg-stone-300/40 my-1 mx-2" style={{ marginLeft: "9px" }} />

        {/* External/social links section without the binder rod */}
        <div className="flex flex-col gap-3.5 pt-1" style={{ paddingLeft: "32px" }}>
          {externalItems.map((item) => renderExternalItem(item))}
        </div>
      </div>
    );
  };

  // ── Mobile: horizontal row of holes (flattened) ──────────────────────────
  const renderMobile = () => {
    const items = location === "/" ? FLAT : NAV_TREE;
    const internalItems = items.filter((item) => item.kind !== "external");
    const externalItems = items.filter((item) => item.kind === "external");

    return (
      <div className="flex flex-col items-center gap-3">
        {/* Main navigation links */}
        <div className="flex flex-row flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {internalItems.map((item) => renderItem(item, false))}
        </div>
        {/* Small separator and external links */}
        {externalItems.length > 0 && (
          <div className="flex flex-row items-center justify-center gap-5 border-t border-[#7a766e]/20 pt-2 w-full max-w-[240px]">
            {externalItems.map((item) => renderExternalItem(item))}
          </div>
        )}
      </div>
    );
  };

  return (
    <nav
      className="nav-bottom-bar fixed z-[1000] left-0 right-0 bottom-0 px-4 py-3 flex justify-center sm:left-0 sm:right-auto sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 sm:block sm:px-0 sm:py-0 sm:bg-none"
      data-testid="nav-side"
      aria-hidden={!revealed}
      {...(!revealed ? { inert: "" as unknown as boolean } : {})}
      style={{
        opacity: revealed ? 1 : 0,
        pointerEvents: revealed ? "auto" : "none",
        transition: "opacity 0.4s ease",
      }}
    >
      {isDesktop ? renderDesktop() : renderMobile()}
    </nav>
  );
}
