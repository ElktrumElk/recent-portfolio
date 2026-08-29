"use client";
import { useEffect, useRef } from "react";
import "./HelixFlash.css";

const FLASH_MIN = 3500;
const FLASH_MAX = 8000;
const DURATION = 900;
const MAX_RADIUS = 92;

const LIGHT = [112, 168, 255];

const STEP_X = 11;
const STEP_Y = 9.5;
const HEX_RADIUS = 3.4;

function rand(min: number, max: number): number {
  return min + Math.random() * (max - min);
}

function pseudo(col: number, row: number): number {
  const s = Math.sin(col * 127.1 + row * 311.7) * 43758.5453;
  return s - Math.floor(s);
}

function hexCell(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  r: number
) {
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const a = (Math.PI / 6) + (i * Math.PI) / 3;
    const px = x + r * Math.cos(a);
    const py = y + r * Math.sin(a);
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.closePath();
}

export default function HelixFlash() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let timer = 0;
    let startAt = 0;
    let fx = 0;
    let fy = 0;
    let seed = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(window.innerWidth * dpr);
      canvas.height = Math.round(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawBolt = (
      ang: number,
      len: number,
      env: number,
      alpha: number
    ) => {
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.strokeStyle = `rgba(${LIGHT[0]}, ${LIGHT[1]}, ${LIGHT[2]}, 1)`;
      ctx.lineWidth = 1.6;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(fx, fy);
      const steps = 7;
      for (let s = 1; s <= steps; s++) {
        const perp = (pseudo(s, Math.floor(ang * 37) % 1000) - 0.5) * 2;
        const px = fx + Math.cos(ang) * (len / steps) * s + Math.sin(ang) * perp * 4;
        const py = fy + Math.sin(ang) * (len / steps) * s - Math.cos(ang) * perp * 4;
        ctx.lineTo(px, py);
      }
      ctx.stroke();

      ctx.strokeStyle = `rgba(176, 212, 255, ${env * 0.7})`;
      ctx.lineWidth = 4.5;
      ctx.stroke();
      ctx.restore();
    };

    const drawHive = (t: number) => {
      const charge = Math.min(1, Math.pow(t / 0.18, 1.5));
      const lose = 1 - Math.pow(Math.max((t - 0.3) / 0.7, 0), 1.5);
      let env = Math.max(0, Math.min(charge, lose));
      env *= 0.8 + 0.2 * Math.sin(t * 70 + Math.sin(t * 19) * 5);
      if (env <= 0.01) return;

      const growth = 1 - Math.pow(1 - Math.min(t * 1.5, 1), 2.6);
      const wave = MAX_RADIUS * growth;

      const n = Math.ceil((wave + 20) / STEP_X) + 2;
      for (let row = -n; row <= n; row++) {
        for (let col = -n; col <= n; col++) {
          const cx = fx + col * STEP_X + (row % 2) * (STEP_X / 2);
          const cy = fy + row * STEP_Y;
          const d = Math.hypot(cx - fx, cy - fy);
          if (d > wave + 14 || d < 2) continue;

          const band = Math.max(0, 1 - Math.abs(d - wave) / 12);
          if (band <= 0) continue;

          const flick = 0.7 + 0.3 * pseudo(col, row);
          const a = env * band * flick * 0.5;
          if (a <= 0.01) continue;

          ctx.fillStyle = `rgba(${LIGHT[0]}, ${LIGHT[1]}, ${LIGHT[2]}, ${Math.min(a, 1)})`;
          hexCell(ctx, cx, cy, HEX_RADIUS);
          ctx.fill();
        }
      }

      const bolts = 3;
      for (let k = 0; k < bolts; k++) {
        const ang = seed * Math.PI * 2 + k * ((Math.PI * 2) / bolts);
        drawBolt(ang, wave * 1.15, env, env * rand(0.2, 0.38));
      }
    };

    const frame = () => {
      raf = requestAnimationFrame(frame);
      const elapsed = performance.now() - startAt;
      const t = Math.min(elapsed / DURATION, 1);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawHive(t);
      if (t >= 1) {
        cancelAnimationFrame(raf);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        schedule();
      }
    };

    const flash = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      fx = w * rand(0.1, 0.9);
      fy = h * rand(0.14, 0.86);
      seed = Math.random();
      startAt = performance.now();
      raf = requestAnimationFrame(frame);
    };

    const schedule = () => {
      timer = window.setTimeout(flash, rand(FLASH_MIN, FLASH_MAX));
    };

    window.addEventListener("resize", resize);
    resize();
    schedule();

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="helix-flash"
      aria-hidden="true"
      data-testid="helix-flash"
    />
  );
}