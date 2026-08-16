"use client";

import { motion, useReducedMotion, TargetAndTransition } from "framer-motion";
import { Code2, Cpu, Zap, Layers, Globe, Layout } from "lucide-react";

interface OrbitalNode {
  id: string;
  label: string;
  icon: typeof Code2;
  angle: number; // degrees for layout positioning
  radius: number; // percentage radius from center (0 - 50)
  active?: boolean;
}

const NODES: OrbitalNode[] = [
  { id: "web", label: "Web Applications", icon: Globe, angle: 300, radius: 42 },
  { id: "api", label: "API Development", icon: Cpu, angle: 30, radius: 42 },
  { id: "arch", label: "Clean Architecture", icon: Layers, angle: 100, radius: 44 },
  { id: "perf", label: "Performance", icon: Zap, angle: 175, radius: 42, active: true },
  { id: "ux", label: "User Experience", icon: Layout, angle: 235, radius: 44 },
];

export function EngineeringVisualization() {
  const shouldReduceMotion = useReducedMotion();

  // Floating animation variant respecting prefers-reduced-motion
  const floatAnimation: TargetAndTransition = shouldReduceMotion
    ? {}
    : {
        y: [0, -6, 0],
        transition: {
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
        },
      };

  // Slow orbital rotation variant
  const orbitRotation: TargetAndTransition = shouldReduceMotion
    ? {}
    : {
        rotate: 360,
        transition: {
          duration: 120,
          ease: "linear",
          repeat: Infinity,
        },
      };

  const counterRotation: TargetAndTransition = shouldReduceMotion
    ? {}
    : {
        rotate: -360,
        transition: {
          duration: 120,
          ease: "linear",
          repeat: Infinity,
        },
      };

  return (
    <div className="relative flex w-full max-w-110 aspect-square items-center justify-center mx-auto select-none">
      {/* SVG Background Orbits and Connecting Vectors */}
      <svg
        className="absolute inset-0 h-full w-full pointer-events-none"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Orbit Path */}
        <circle
          cx="200"
          cy="200"
          r="165"
          stroke="#E4E4E7"
          strokeWidth="1"
          strokeDasharray="4 4"
        />

        {/* Inner Orbit Path */}
        <circle
          cx="200"
          cy="200"
          r="105"
          stroke="#F4F4F5"
          strokeWidth="1"
        />

        {/* Subtle Radial Axis Hairlines */}
        <line x1="200" y1="35" x2="200" y2="365" stroke="#F4F4F5" strokeWidth="1" />
        <line x1="35" y1="200" x2="365" y2="200" stroke="#F4F4F5" strokeWidth="1" />
      </svg>

      {/* Orbiting Container */}
      <motion.div
        animate={orbitRotation}
        className="absolute inset-0 h-full w-full flex items-center justify-center"
      >
        {/* Render Orbiting Nodes */}
        {NODES.map((node) => {
          const radian = (node.angle * Math.PI) / 180;
          // Radius calculation mapped to 400px viewBox scale
          const distancePx = (node.radius / 100) * 400;
          const x = Math.cos(radian) * (distancePx / 2);
          const y = Math.sin(radian) * (distancePx / 2);
          const Icon = node.icon;

          return (
            <div
              key={node.id}
              className="absolute"
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              {/* Counter-rotate individual node content so labels remain upright */}
              <motion.div animate={counterRotation}>
                <motion.div
                  animate={floatAnimation}
                  whileHover={{ scale: 1.05 }}
                  className="group flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3.5 py-1.5 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)] transition-all duration-200 hover:border-zinc-400 hover:shadow-xs cursor-pointer"
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      node.active ? "bg-emerald-500 animate-pulse" : "bg-zinc-400 group-hover:bg-zinc-950"
                    }`}
                  />
                  <Icon className="h-3.5 w-3.5 text-zinc-500 group-hover:text-zinc-950 transition-colors" />
                  <span className="text-xs font-medium text-zinc-700 group-hover:text-zinc-950 transition-colors whitespace-nowrap">
                    {node.label}
                  </span>
                </motion.div>
              </motion.div>
            </div>
          );
        })}
      </motion.div>

      {/* Central Core Floating Node */}
      <motion.div
        animate={floatAnimation}
        className="relative z-10 flex flex-col items-center justify-center"
      >
        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-zinc-200 bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:scale-105">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-100 bg-zinc-50">
            <Code2 className="h-6 w-6 text-zinc-950" />
          </div>
        </div>
        <div className="mt-2.5 rounded-full border border-zinc-200/80 bg-white px-2.5 py-0.5 text-[10px] font-mono font-medium text-zinc-500 uppercase tracking-wider">
          Architecture
        </div>
      </motion.div>
    </div>
  );
}
