import { useEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import personCutout from "../assets/reuben-original-clean-edge.png";
import moonCutout from "../assets/moon-repaired-only.png";

// Coordinates share the original portrait's 1800 × 2400 viewBox, so the
// landing point and eye overlays stay aligned at every responsive size.
const CATCH_OFFSET = { x: 455, y: -45 };
const CATCH_DISTANCE = 350;
const HOLD_DURATION = 4500;

export default function MoonPortrait() {
  const [moon, setMoon] = useState({ x: 0, y: 0 });
  const [moonPhase, setMoonPhase] = useState<"idle" | "dragging" | "caught">("idle");
  const drag = useRef<{ x: number; y: number; offsetX: number; offsetY: number } | null>(null);
  const resetMoon = useRef<ReturnType<typeof setTimeout>>();
  useEffect(() => () => clearTimeout(resetMoon.current), []);
  const moonPoint = (event: ReactPointerEvent<SVGImageElement>) => {
    const matrix = event.currentTarget.ownerSVGElement?.getScreenCTM();
    return matrix ? new DOMPoint(event.clientX, event.clientY).matrixTransform(matrix.inverse()) : new DOMPoint();
  };
  const catchMoon = () => {
    clearTimeout(resetMoon.current);
    setMoon(CATCH_OFFSET);
    setMoonPhase("caught");
    resetMoon.current = setTimeout(() => { setMoon({ x: 0, y: 0 }); setMoonPhase("idle"); }, HOLD_DURATION);
  };
  return (
        <figure className={`moon-portrait moon-${moonPhase}`}><svg className="portrait-layers" viewBox="0 0 1800 2400" role="group" aria-label="Reuben with his arms raised beneath a giant moon">
          {moonPhase === "caught" && <image className="original-person" href={personCutout} width="1800" height="2400" />}
          <image className="separate-moon" href={moonCutout} x="170" y="310" width="950" height="950"
            role="button" tabIndex={0} aria-label="Drag the moon between my hands, or press Enter to catch it"
            transform={`translate(${moon.x} ${moon.y})`}
            onKeyDown={(event) => { if (!event.repeat && (event.key === "Enter" || event.key === " ")) { event.preventDefault(); catchMoon(); } }}
            onPointerDown={(event) => {
              if (event.button !== 0) return;
              event.preventDefault(); clearTimeout(resetMoon.current);
              const point = moonPoint(event);
              drag.current = { x: point.x, y: point.y, offsetX: moon.x, offsetY: moon.y };
              event.currentTarget.setPointerCapture(event.pointerId);
              setMoonPhase("dragging");
            }}
            onPointerMove={(event) => {
              if (!drag.current) return;
              const point = moonPoint(event);
              setMoon({ x: drag.current.offsetX + point.x - drag.current.x, y: drag.current.offsetY + point.y - drag.current.y });
            }}
            onPointerUp={(event) => {
              if (!drag.current) return;
              const point = moonPoint(event);
              const x = drag.current.offsetX + point.x - drag.current.x;
              const y = drag.current.offsetY + point.y - drag.current.y;
              drag.current = null;
              event.currentTarget.releasePointerCapture(event.pointerId);
              if (Math.hypot(x - CATCH_OFFSET.x, y - CATCH_OFFSET.y) < CATCH_DISTANCE) catchMoon();
              else { setMoon({ x: 0, y: 0 }); setMoonPhase("idle"); }
            }}
            onPointerCancel={() => { drag.current = null; setMoon({ x: 0, y: 0 }); setMoonPhase("idle"); }}
          />
          {moonPhase === "caught" && <g className="moon-catch-ripple" aria-hidden="true"><circle cx="1100" cy="740" r="475" /><circle cx="1100" cy="740" r="475" /></g>}
          {moonPhase !== "caught" && <image className="original-person" href={personCutout} width="1800" height="2400" />}
          {moonPhase === "caught" && <g className="moon-eye-glow" aria-hidden="true">
            <ellipse cx="1030" cy="1404" rx="16" ry="7" />
            <ellipse cx="1095" cy="1402" rx="16" ry="7" />
          </g>}
        </svg></figure>
  );
}
