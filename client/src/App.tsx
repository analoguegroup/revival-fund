import { Switch, Route, useLocation, Router as WouterRouter } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect, useRef, useState, useCallback } from "react";
import About from "@/pages/about";
import FAQ from "@/pages/faq";
import Team from "@/pages/team";
import Apply from "@/pages/apply";
import Portfolio from "@/pages/portfolio";
import Grantee from "@/pages/grantee";
import Projects from "@/pages/projects";
import Writings from "@/pages/writings";
import NotFound from "@/pages/not-found";
import Header from "@/components/Header";

function Routes() {
  return (
    <Switch>
      <Route path="/" component={About} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/portfolio/:slug" component={Grantee} />
      <Route path="/projects" component={Projects} />
      <Route path="/writings" component={Writings} />
      <Route path="/faq" component={FAQ} />
      <Route path="/team" component={Team} />
      <Route path="/apply" component={Apply} />
      <Route component={NotFound} />
    </Switch>
  );
}

function Router() {
  const [location, navigate] = useLocation();
  const [shownPath, setShownPath] = useState(location);
  const [transitionStep, setTransitionStep] = useState<"idle" | "fade-out" | "sweep">("idle");
  const contentRef = useRef<HTMLDivElement>(null);
  const animating = useRef(false);
  const pendingLocation = useRef<string | null>(null);

  const runTransition = useCallback((targetPath: string) => {
    animating.current = true;
    setTransitionStep("fade-out");
    document.documentElement.classList.add("overflow-hidden");

    setTimeout(() => {
      setShownPath(targetPath);
      setTransitionStep("sweep");
      window.scrollTo(0, 0);
    }, 600);

    setTimeout(() => {
      setTransitionStep("idle");
      animating.current = false;
      window.scrollTo(0, 0);
      document.documentElement.classList.remove("overflow-hidden");
      if (pendingLocation.current) {
        const queued = pendingLocation.current;
        pendingLocation.current = null;
        runTransition(queued);
      }
    }, 2000);
  }, []);

  useEffect(() => {
    if (location === shownPath) return;
    if (animating.current) {
      pendingLocation.current = location;
      return;
    }
    runTransition(location);
  }, [location, shownPath, runTransition]);

  const frozenIncomingHook = useCallback(() => {
    return [shownPath, navigate] as [string, (to: string) => void];
  }, [shownPath, navigate]);

  return (
    <>
      <Header isTransitioning={transitionStep !== "idle"} />
      {/* Incoming Page (Clipped/masked container) */}
      <div 
        ref={contentRef} 
        className={`pb-28 sm:pb-0 sm:pl-[150px] lg:pl-[170px] ${
          transitionStep === "fade-out" 
            ? "animate-fade-out-only" 
            : transitionStep === "sweep" 
              ? "animate-reveal-clip" 
              : ""
        }`}
        style={{
          height: transitionStep !== "idle" ? "100vh" : "auto",
          overflow: transitionStep !== "idle" ? "hidden" : "visible",
          position: "relative",
          zIndex: 20,
        }}
      >
        <WouterRouter hook={frozenIncomingHook}>
          <Routes />
        </WouterRouter>
      </div>

      {/* T-Square Drafting Sweep Overlay */}
      {transitionStep !== "idle" && (
        <div 
          className={`fixed inset-x-0 h-[1px] bg-[#0c3981] dark:bg-slate-400 z-[99999] pointer-events-none ${
            transitionStep === "sweep" ? "animate-sweep" : ""
          }`}
          style={{ top: 0, transform: transitionStep === "fade-out" ? "translate3d(0, 0, 0)" : undefined }}
        >
          {/* T-Square Left readout label */}
          <div className="absolute left-6 top-[-18px] font-mono text-[9px] tracking-wider text-slate-500/90 dark:text-slate-400/90 uppercase whitespace-nowrap bg-background/80 dark:bg-[#0a0c12]/80 px-1 border border-slate-200 dark:border-slate-800 pointer-events-none select-none">
            [Y_SWEEP // AXIS-Y]
          </div>
          
          {/* T-Square Center Crosshair alignment node */}
          <div className="absolute left-[50%] top-[-5px] -translate-x-1/2 w-2.5 h-2.5 rounded-full border border-[#0c3981] dark:border-slate-400 bg-background dark:bg-[#0a0c12] flex items-center justify-center pointer-events-none select-none">
            <div className="w-1 h-1 bg-[#0c3981] dark:bg-slate-400 rounded-full" />
          </div>
          
          {/* T-Square Right readout label */}
          <div className="absolute right-6 top-[-18px] font-mono text-[9px] tracking-wider text-slate-500/90 dark:text-slate-400/90 uppercase whitespace-nowrap bg-background/80 dark:bg-[#0a0c12]/80 px-1 border border-slate-200 dark:border-slate-800 pointer-events-none select-none">
            [SYS_TRANSITION // PHI]
          </div>
        </div>
      )}
    </>
  );
}


function ScrollPatina() {
  useEffect(() => {
    const patinaStart = [12, 57, 129];
    const bronzeTarget = [9, 42, 99];

    const update = () => {
      const scrollH = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollH > 0 ? Math.min(window.scrollY / scrollH, 1) : 0;
      const eased = progress * progress;

      const r = Math.round(patinaStart[0] + (bronzeTarget[0] - patinaStart[0]) * eased);
      const g = Math.round(patinaStart[1] + (bronzeTarget[1] - patinaStart[1]) * eased);
      const b = Math.round(patinaStart[2] + (bronzeTarget[2] - patinaStart[2]) * eased);

      document.documentElement.style.setProperty('--accent-live', `rgb(${r}, ${g}, ${b})`);
      document.documentElement.style.setProperty('--accent-live-transparent', `rgba(${r}, ${g}, ${b}, 0)`);
      document.documentElement.style.setProperty('--accent-live-translucent', `rgba(${r}, ${g}, ${b}, 0.78)`);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return null;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div>
          <ScrollPatina />
          <Toaster />
          <Router />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
