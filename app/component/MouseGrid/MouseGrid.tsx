"use client";
import { useEffect, useRef } from "react";
import "./MouseGrid.css";

const CELL = 22;
const ROW_H = 17;
const RADIUS = 10;
const SPREAD = 270;
const MAX_ALPHA = 0.75;
const POP = 0.45;
const EASE = 0.16;
const POWER = 2.6;
const IDLE_MS = 1200;
const WAVE = 3;

type RGB = [number, number, number];

function readAccent(root: HTMLElement): RGB {
  const value = getComputedStyle(root).getPropertyValue("--primary").trim();
  const hex = /^#([0-9a-f]{6})$/i.exec(value);
  if (hex) {
    const n = parseInt(hex[1], 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  const rgb = value.match(/(\d+)[\s,]+(\d+)[\s,]+(\d+)/);
  if (rgb) return [Number(rgb[1]), Number(rgb[2]), Number(rgb[3])];
  return [59, 130, 246];
}

function pseudo(col: number, row: number): number {
  const s = Math.sin(col * 127.1 + row * 311.7) * 43758.5453;
  return s - Math.floor(s);
}

export default function MouseGrid() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const root = document.documentElement;

    let raf = 0;
    let running = false;
    let cols = 0;
    let rows = 0;
    let alphas = new Float32Array(0);
    let mouseX = -9999;
    let mouseY = -9999;
    let lastMove = -Infinity;
    let accent = readAccent(root);

    const applyBlend = () => {
      canvas.style.mixBlendMode =
        root.getAttribute("data-theme") === "dark" ? "screen" : "multiply";
    };
    applyBlend();

    const themeObserver = new MutationObserver(() => {
      accent = readAccent(root);
      applyBlend();
    });
    themeObserver.observe(root, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(window.innerWidth * dpr);
      canvas.height = Math.round(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(window.innerWidth / CELL) + 1;
      rows = Math.ceil(window.innerHeight / ROW_H) + 2;
      alphas = new Float32Array(cols * rows);
    };

    const hexPath = (x: number, y: number, r: number) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const a = (Math.PI / 6) + (i * Math.PI) / 3;
        const px = x + r * Math.cos(a);
        const py = y + r * Math.sin(a);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
    };

    const tick = () => {
      raf = requestAnimationFrame(tick);
      const active = performance.now() - lastMove < IDLE_MS;
      const [r, g, b] = accent;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const loX = Math.max(0, Math.floor((mouseX - SPREAD) / CELL));
      const hiX = Math.min(cols - 1, Math.ceil((mouseX + SPREAD) / CELL));
      const loY = Math.max(0, Math.floor((mouseY - SPREAD) / ROW_H));
      const hiY = Math.min(rows - 1, Math.ceil((mouseY + SPREAD) / ROW_H));

      let drawing = false;
      for (let row = loY; row <= hiY; row++) {
        for (let col = loX; col <= hiX; col++) {
          const waveX = Math.sin(col * 0.9 + row * 0.7) * WAVE;
          const waveY = Math.cos(col * 0.5 - row * 0.8) * WAVE * 0.8;
          const x = col * CELL + (row % 2) * (CELL / 2) + waveX;
          const y = row * ROW_H + waveY;

          const dist = Math.hypot(x - mouseX, y - mouseY);
          const t = active ? 1 - Math.min(dist / SPREAD, 1) : 0;
          const target = t <= 0 ? 0 : Math.pow(t, POWER) * MAX_ALPHA;
          const idx = row * cols + col;
          const next = alphas[idx] + (target - alphas[idx]) * EASE;
          alphas[idx] = next;
          if (next < 0.004) continue;
          drawing = true;

          const baseRadius = RADIUS * (0.8 + 0.25 * pseudo(col, row));
          const radius = baseRadius * (1 + POP * t);
          ctx.globalAlpha = Math.min(next, 1);
          ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
          hexPath(x, y, radius);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;

      if (!drawing) {
        running = false;
        cancelAnimationFrame(raf);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };

    const start = () => {
      if (!running) {
        running = true;
        raf = requestAnimationFrame(tick);
      }
    };

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      lastMove = performance.now();
      start();
    };

    const onLeave = () => {
      lastMove = -Infinity;
      start();
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseout", onLeave);
    window.addEventListener("resize", resize);
    resize();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
      window.removeEventListener("resize", resize);
      themeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="mouse-grid"
      aria-hidden="true"
      data-testid="mouse-grid"
    />
  );
}