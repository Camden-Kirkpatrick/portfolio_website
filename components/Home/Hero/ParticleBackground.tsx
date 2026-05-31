"use client";

import { useEffect, useRef } from "react";
import {
  tsParticles,
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

let enginePromise: Promise<void> | null = null;
const ensureEngine = () => {
  if (!enginePromise) {
    enginePromise = loadSlim(tsParticles).then(() => undefined);
  }
  return enginePromise;
};

const options: ISourceOptions = {
  background: { color: { value: "transparent" } },
  fullScreen: { enable: false },
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: { enable: true, mode: "push" },
      onHover: { enable: true, mode: "repulse" },
    },
    modes: {
      push: { quantity: 4 },
      repulse: { distance: 100, duration: 0.4 },
    },
  },
  particles: {
    color: { value: "#ffffff" },
    links: {
      color: "#0000ff",
      distance: 150,
      enable: true,
      opacity: 0.4,
      width: 1,
    },
    move: {
      direction: MoveDirection.none,
      enable: true,
      outModes: { default: OutMode.out },
      speed: 2,
    },
    number: {
      density: { enable: true, width: 1920, height: 1080 },
      value: 60,
    },
    opacity: { value: 0.5 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 4 } },
  },
  detectRetina: true,
};

export default function ParticlesHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    let particles: Container | undefined;

    (async () => {
      await ensureEngine();
      if (cancelled || !containerRef.current) return;
      particles = await tsParticles.load({
        element: containerRef.current,
        options,
      });
      if (cancelled) {
        particles?.destroy();
        particles = undefined;
      }
    })();

    return () => {
      cancelled = true;
      particles?.destroy();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
    />
  );
}
