import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiActivity, FiLayers, FiCpu } from 'react-icons/fi'

const NODES = [
  { id: 'gw', label: 'FASTAPI GATEWAY', x: 50, y: 22, type: 'core' },
  { id: 'ast', label: 'AST ANALYZER', x: 22, y: 44, type: 'engine' },
  { id: 'redis', label: 'REDIS CACHE', x: 78, y: 42, type: 'cache' },
  { id: 'spring', label: 'SPRING CORE', x: 50, y: 55, type: 'core' },
  { id: 'db', label: 'POSTGRESQL', x: 25, y: 74, type: 'store' },
  { id: 'ai', label: 'HYBRID AI / LLM', x: 75, y: 74, type: 'engine' },
]

const EDGES = [
  ['gw', 'ast'],
  ['gw', 'spring'],
  ['gw', 'redis'],
  ['spring', 'redis'],
  ['spring', 'db'],
  ['spring', 'ai'],
  ['ast', 'spring'],
]

export default function HeroVisual() {
  const [activeNode, setActiveNode] = useState(null)
  const [pulseIndex, setPulseIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setPulseIndex((prev) => (prev + 1) % EDGES.length)
    }, 1800)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full max-w-[420px] mx-auto aspect-[4/5] sm:aspect-[3/4] bg-[var(--surface)] border border-[var(--border)] rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between p-5 sm:p-6 select-none group">
      {/* Background Precision Grid */}
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(var(--border) 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        }}
      />

      {/* Top Telemetry Header */}
      <div className="relative z-10 flex justify-between items-center text-[10px] font-mono text-[var(--muted)] border-b border-[var(--border)] pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-bold text-[var(--text)]">SYSTEM_TOPOLOGY // V2.6</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline">NODES: 06</span>
          <span className="text-emerald-400">LATENCY: 14ms</span>
        </div>
      </div>

      {/* Center Interactive Node Graph */}
      <div className="relative flex-1 w-full flex items-center justify-center my-2">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full max-w-[360px] max-h-[360px] overflow-visible"
        >
          {/* Connecting Edges */}
          {EDGES.map(([fromId, toId], idx) => {
            const from = NODES.find((n) => n.id === fromId)
            const to = NODES.find((n) => n.id === toId)
            const isPulsing = pulseIndex === idx

            return (
              <g key={`${fromId}-${toId}`}>
                <line
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke="var(--border)"
                  strokeWidth="0.8"
                  strokeDasharray="2 2"
                  className="transition-colors duration-300 group-hover:stroke-[var(--text)]/40"
                />
                {/* Animated Data Packet */}
                <motion.circle
                  r="1.2"
                  fill="var(--text)"
                  initial={{ cx: from.x, cy: from.y, opacity: 0 }}
                  animate={{
                    cx: [from.x, to.x],
                    cy: [from.y, to.y],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    delay: idx * 0.35,
                    ease: 'easeInOut',
                  }}
                />
              </g>
            )
          })}

          {/* Interactive Topology Nodes */}
          {NODES.map((node) => {
            const isHovered = activeNode === node.id

            return (
              <g
                key={node.id}
                className="cursor-pointer"
                onMouseEnter={() => setActiveNode(node.id)}
                onMouseLeave={() => setActiveNode(null)}
              >
                {/* Outer Ring */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={isHovered ? 6 : 4}
                  fill="var(--surface)"
                  stroke={isHovered ? 'var(--text)' : 'var(--border)'}
                  strokeWidth={isHovered ? '1.5' : '1'}
                  className="transition-all duration-300"
                />

                {/* Core Center */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={isHovered ? 2.5 : 1.6}
                  fill={isHovered ? 'var(--text)' : 'var(--muted)'}
                  className="transition-all duration-300"
                />

                {/* Node Text Label */}
                <text
                  x={node.x}
                  y={node.y + 7.5}
                  textAnchor="middle"
                  className={`font-mono text-[4px] font-bold tracking-wider transition-colors duration-200 uppercase ${
                    isHovered
                      ? 'fill-[var(--text)] font-extrabold'
                      : 'fill-[var(--muted)]'
                  }`}
                >
                  {node.label}
                </text>
              </g>
            )
          })}
        </svg>

        {/* Central Geometric Concentric Radar */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
          <div className="w-48 h-48 rounded-full border border-dashed border-[var(--text)] animate-[spin_40s_linear_infinite]" />
          <div className="absolute w-32 h-32 rounded-full border border-[var(--text)]" />
        </div>
      </div>

      {/* Bottom Architectural HUD Strip */}
      <div className="relative z-10 pt-3 border-t border-[var(--border)] flex justify-between items-end font-mono text-[9px] text-[var(--muted)]">
        <div>
          <span className="block text-[var(--text)] font-bold">
            {activeNode
              ? `SELECTED: ${NODES.find((n) => n.id === activeNode)?.label}`
              : 'DETERMINISTIC ROUTING: ENGAGED'}
          </span>
          <span className="text-[8px]">CLUSTER STATUS: HEALTHY &bull; 0 BREAKS</span>
        </div>

        <div className="text-right">
          <span className="block font-bold text-emerald-400">100% RECALL</span>
          <span className="text-[8px]">AST DEPENDENCY GRAPH</span>
        </div>
      </div>
    </div>
  )
}
