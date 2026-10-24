import { useEffect, useRef, useState } from "react";
import { Bodies, Body, Composite, Engine } from "matter-js";
import { IconX } from "@tabler/icons-react";
import bookCover from "../assets/designing-data-intensive-applications-cover.png";

const BOOK_COVERS = [bookCover];
type Book = { body: Body; width: number; height: number; cover: HTMLImageElement };

export default function FallingBooks({ drop, onClear }: { drop: number; onClear: () => void }) {
  const [viewport, setViewport] = useState(() => ({ width: window.innerWidth, height: window.innerHeight }));
  useEffect(() => {
    const resize = () => setViewport({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);
  const canvas = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (!drop || !canvas.current) return;
    const surface = canvas.current;
    const ctx = surface.getContext("2d");
    if (!ctx) return;
    const coverImages = BOOK_COVERS.map(src => {
      const image = new Image();
      image.src = src;
      return image;
    });
    const engine = Engine.create({ enableSleeping: true, gravity: { x: 0, y: 1.3 } });
    engine.positionIterations = 8;
    const { width, height } = viewport;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    surface.width = width * dpr;
    surface.height = height * dpr;
    ctx.scale(dpr, dpr);
    Composite.add(engine.world, [
      Bodies.rectangle(width / 2, height + 30, width + 200, 60, { isStatic: true }),
      Bodies.rectangle(-30, height / 2, 60, height * 4, { isStatic: true }),
      Bodies.rectangle(width + 30, height / 2, 60, height * 4, { isStatic: true }),
    ]);
    const books: Book[] = [];
    const total = width < 600 ? 18 : 32;
    let frame = 0;
    let last = 0;
    let elapsed = 0;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const spawn = () => {
      const scale = width < 600 ? .72 : 1;
      const w = (65 + Math.random() * 20) * scale;
      const cover = coverImages[0];
      const h = w * (cover.naturalWidth ? cover.naturalHeight / cover.naturalWidth : 1.5);
      const body = Bodies.rectangle(w + Math.random() * (width - w * 2), reduced ? height - 100 - books.length * 15 : -h - 30, w, h, {
        restitution: .16, friction: .65, frictionAir: .006, chamfer: { radius: 3 },
      });
      Body.setAngle(body, (Math.random() - .5) * .8);
      Body.setAngularVelocity(body, (Math.random() - .5) * .045);
      Composite.add(engine.world, body);
      books.push({ body, width: w, height: h, cover: coverImages[books.length % coverImages.length] });
    };
    if (reduced) {
      for (let i = 0; i < total; i++) spawn();
      // Settle offscreen so reduced-motion visitors see a static pile.
      for (let i = 0; i < 360; i++) Engine.update(engine, 16.67);
    }
    const draw = (time: number) => {
      const delta = last ? Math.min(time - last, 32) : 16.67;
      last = time;
      elapsed += delta;
      if (!reduced) {
        if (books.length < total && elapsed > books.length * 220) spawn();
        Engine.update(engine, delta / 2);
        Engine.update(engine, delta / 2);
      }
      ctx.clearRect(0, 0, width, height);
      for (const book of books) {
        const { body, width: w, height: h, cover: coverImage } = book;
        ctx.save();
        ctx.translate(body.position.x, body.position.y);
        ctx.rotate(body.angle);
        ctx.shadowColor = "#00000045";
        ctx.shadowBlur = 7;
        ctx.shadowOffsetY = 3;
        ctx.fillStyle = "#f7f6ed";
        ctx.beginPath(); ctx.roundRect(-w / 2, -h / 2, w, h, 3); ctx.fill();
        ctx.shadowColor = "transparent";
        if (coverImage.complete && coverImage.naturalWidth) {
          ctx.save(); ctx.clip();
          ctx.drawImage(coverImage, -w / 2, -h / 2, w, h);
          ctx.restore();
        }
        ctx.fillStyle = "#00000018"; ctx.fillRect(-w / 2, -h / 2, 4, h);
        ctx.restore();
      }
      if (!reduced && (books.length < total || books.some(book => !book.body.isSleeping))) frame = requestAnimationFrame(draw);
    };
    frame = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(frame); Composite.clear(engine.world, false); Engine.clear(engine); ctx.clearRect(0, 0, width, height); };
  }, [drop, viewport]);
  return <>
    <canvas ref={canvas} className="falling-books-canvas" aria-hidden="true" />
    {drop > 0 && <div className="book-pile-controls">
      <button type="button" onClick={onClear}><IconX size={16} />clear books</button>
    </div>}
  </>;
}
