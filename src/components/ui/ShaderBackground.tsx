import { useEffect, useState } from "react";
import {
  ChromaFlow,
  FilmGrain,
  FlutedGlass,
  Shader,
  Swirl,
} from "shaders/react";

export function ShaderBackground() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [unavailable, setUnavailable] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (event: MediaQueryListEvent) => setReducedMotion(event.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  if (reducedMotion || unavailable) {
    return (
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-white/70 via-cream to-brand/10"
      />
    );
  }

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-10">
      <Shader className="h-full w-full" onUnavailable={() => setUnavailable(true)}>
        <Swirl colorA="#ffffff" colorB="#f9f3e8" detail={1.7} />
        <ChromaFlow
          baseColor="#ffffff"
          upColor="#e87722"
          downColor="#e87722"
          leftColor="#e87722"
          rightColor="#e87722"
          momentum={13}
          radius={3.5}
        />
        <FlutedGlass
          aberration={0.61}
          angle={31}
          frequency={8}
          highlight={0.12}
          highlightSoftness={0}
          lightAngle={-90}
          refraction={4}
          shape="rounded"
          softness={1}
          speed={0.15}
        />
        <FilmGrain strength={0.05} />
      </Shader>
    </div>
  );
}
