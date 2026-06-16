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
// import Portfolio from "@/pages/portfolio"; // hidden until portfolios are released
import Projects from "@/pages/projects";
import Writings from "@/pages/writings";
import NotFound from "@/pages/not-found";
import Header from "@/components/Header";

function Routes() {
  return (
    <Switch>
      <Route path="/" component={About} />
      {/* <Route path="/portfolio" component={Portfolio} /> hidden until portfolios are released */}
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
  const contentRef = useRef<HTMLDivElement>(null);
  const animating = useRef(false);
  const pendingLocation = useRef<string | null>(null);

  const makeTable = (progress: number) => {
    const steps = 24;
    const softness = 0.15;
    const vals: number[] = [];
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const diff = t - progress;
      vals.push(diff > softness ? 1 : diff < 0 ? 0 : Math.round((diff / softness) * 100) / 100);
    }
    return vals.join(' ');
  };

  const easeInOut = (t: number) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

  const generateCloudMask = useCallback((size: number) => {
    const c = document.createElement('canvas');
    c.width = size;
    c.height = size;
    const ctx = c.getContext('2d')!;
    const img = ctx.createImageData(size, size);
    const d = img.data;

    const octaves = 5;
    const noise2d = (ox: number, oy: number, freq: number) => {
      const v = Math.sin(ox * freq * 1.3 + oy * freq * 0.7) *
                Math.cos(oy * freq * 1.1 - ox * freq * 0.9) *
                Math.sin((ox + oy) * freq * 0.6);
      return v;
    };

    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        let val = 0;
        let amp = 1;
        let totalAmp = 0;
        for (let o = 0; o < octaves; o++) {
          const freq = 0.008 * Math.pow(2, o);
          val += noise2d(x + Math.random() * 0.5, y + Math.random() * 0.5, freq) * amp;
          totalAmp += amp;
          amp *= 0.5;
        }
        val = val / totalAmp;
        const normalized = (val + 1) * 0.5;
        const contrast = 0.35;
        const v = Math.max(0, Math.min(255, Math.round((normalized * contrast + (1 - contrast) * 0.5) * 255)));
        const idx = (y * size + x) * 4;
        d[idx] = v;
        d[idx + 1] = v;
        d[idx + 2] = v;
        d[idx + 3] = 255;
      }
    }
    ctx.putImageData(img, 0, 0);

    ctx.filter = 'blur(3px)';
    ctx.drawImage(c, 0, 0);
    ctx.filter = 'none';

    return c.toDataURL();
  }, []);

  const runTransition = useCallback((targetPath: string) => {
    animating.current = true;
    const el = contentRef.current;
    const funcA = document.getElementById('grain-threshold');
    const turbulence = document.getElementById('grain-noise');
    if (!el || !funcA) {
      setShownPath(targetPath);
      window.scrollTo(0, 0);
      animating.current = false;
      return;
    }

    const cloudUrl = generateCloudMask(256);
    const setMask = (url: string) => {
      el.style.setProperty('-webkit-mask-image', `url(${url})`);
      el.style.setProperty('mask-image', `url(${url})`);
      el.style.setProperty('-webkit-mask-size', '512px 512px');
      el.style.setProperty('mask-size', '512px 512px');
      el.style.setProperty('-webkit-mask-repeat', 'repeat');
      el.style.setProperty('mask-repeat', 'repeat');
    };
    const clearMask = () => {
      ['-webkit-mask-image', 'mask-image', '-webkit-mask-size', 'mask-size', '-webkit-mask-repeat', 'mask-repeat'].forEach(p => el.style.removeProperty(p));
    };

    setMask(cloudUrl);
    el.style.filter = 'url(#grain-dissolve)';
    el.style.opacity = '1';

    const isMobile = window.matchMedia('(max-width: 639px)').matches;
    const outDuration = isMobile ? 200 : 280;
    const inDuration = isMobile ? 240 : 300;
    let start = performance.now();

    const dissolveOut = (time: number) => {
      const p = Math.min((time - start) / outDuration, 1);
      const eased = easeInOut(p);
      funcA.setAttribute('tableValues', makeTable(eased));
      el.style.opacity = String(1 - eased);

      if (p < 1) {
        requestAnimationFrame(dissolveOut);
      } else {
        window.scrollTo(0, 0);
        const next = pendingLocation.current || targetPath;
        pendingLocation.current = null;
        setShownPath(next);
        if (turbulence) turbulence.setAttribute('seed', String(Math.floor(Math.random() * 1000)));
        setMask(generateCloudMask(256));
        el.style.opacity = '0';
        start = performance.now();
        requestAnimationFrame(dissolveIn);
      }
    };

    const dissolveIn = (time: number) => {
      const p = Math.min((time - start) / inDuration, 1);
      const eased = easeInOut(p);
      funcA.setAttribute('tableValues', makeTable(1 - eased));
      el.style.opacity = String(eased);

      if (p < 1) {
        requestAnimationFrame(dissolveIn);
      } else {
        el.style.filter = 'none';
        el.style.opacity = '1';
        clearMask();
        funcA.setAttribute('tableValues', '1 1');
        animating.current = false;
        if (pendingLocation.current) {
          const queued = pendingLocation.current;
          pendingLocation.current = null;
          runTransition(queued);
        }
      }
    };

    requestAnimationFrame(dissolveOut);
  }, [generateCloudMask]);

  useEffect(() => {
    if (location === shownPath) return;
    if (animating.current) {
      pendingLocation.current = location;
      return;
    }
    runTransition(location);
  }, [location, shownPath, runTransition]);

  const frozenHook = useCallback(() => {
    return [shownPath, navigate] as [string, (to: string) => void];
  }, [shownPath, navigate]);

  return (
    <>
      <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
        <defs>
          <filter id="grain-dissolve" x="0%" y="0%" width="100%" height="100%" colorInterpolationFilters="sRGB">
            <feTurbulence id="grain-noise" type="fractalNoise" baseFrequency="0.035" numOctaves="4" seed="42" result="noise" />
            <feColorMatrix in="noise" type="saturate" values="0" result="gray" />
            <feComponentTransfer in="gray" result="mask">
              <feFuncA id="grain-threshold" type="table" tableValues="1 1" />
            </feComponentTransfer>
            <feComposite in="SourceGraphic" in2="mask" operator="in" />
          </filter>
        </defs>
      </svg>
      <Header />
      <WouterRouter hook={frozenHook}>
        <div ref={contentRef} className="pb-28 sm:pb-0 sm:pl-[150px] lg:pl-[170px]">
          <Routes />
        </div>
      </WouterRouter>
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
