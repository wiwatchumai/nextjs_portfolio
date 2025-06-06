"use client"

import { motion } from "framer-motion"

interface AnimatedLogoProps {
  className?: string
}

export function AnimatedLogo({ className = "w-12 h-12" }: AnimatedLogoProps) {
  return (
    <motion.svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0, rotate: -10 }}
      animate={{ opacity: 1, rotate: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Hexagon outline */}
      <motion.path
        d="M60 10L103.3 32.5V77.5L60 100L16.7 77.5V32.5L60 10Z"
        stroke="url(#hexGradient)"
        strokeWidth="1.5"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />

      {/* Animated wavy lines */}
      {[35, 45, 55, 65, 75].map((y, index) => (
        <motion.path
          key={y}
          d={`M30 ${y}C35 ${y + 5} 45 ${y - 5} 55 ${y}C65 ${y + 5} 75 ${y - 5} 80 ${y}`}
          stroke={`url(#waveGradient${index + 1})`}
          strokeWidth={1 + index * 0.2}
          fill="none"
          opacity={0.6 + index * 0.1}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 + index * 0.1 }}
          transition={{
            duration: 1.5,
            delay: 0.5 + index * 0.2,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Detail lines */}
      <motion.path
        d="M25 40C30 42 40 38 50 40C60 42 70 38 85 40"
        stroke="url(#detailGradient1)"
        strokeWidth="0.8"
        fill="none"
        opacity="0.4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      />
      <motion.path
        d="M25 70C30 68 40 72 50 70C60 68 70 72 85 70"
        stroke="url(#detailGradient2)"
        strokeWidth="0.8"
        fill="none"
        opacity="0.4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 1.7 }}
      />

      <defs>
        <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(255, 255, 255, 0.9)" />
          <stop offset="30%" stopColor="rgba(220, 220, 220, 0.8)" />
          <stop offset="70%" stopColor="rgba(200, 200, 200, 0.7)" />
          <stop offset="100%" stopColor="rgba(180, 180, 180, 0.6)" />
        </linearGradient>

        {[1, 2, 3, 4, 5].map((i) => (
          <linearGradient key={i} id={`waveGradient${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={`rgba(255, 255, 255, ${0.1 + i * 0.1})`} />
            <stop offset="50%" stopColor={`rgba(255, 255, 255, ${0.3 + i * 0.1})`} />
            <stop offset="100%" stopColor={`rgba(255, 255, 255, ${0.1 + i * 0.1})`} />
          </linearGradient>
        ))}

        <linearGradient id="detailGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(255, 255, 255, 0.1)" />
          <stop offset="50%" stopColor="rgba(255, 255, 255, 0.3)" />
          <stop offset="100%" stopColor="rgba(255, 255, 255, 0.1)" />
        </linearGradient>

        <linearGradient id="detailGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(255, 255, 255, 0.1)" />
          <stop offset="50%" stopColor="rgba(255, 255, 255, 0.3)" />
          <stop offset="100%" stopColor="rgba(255, 255, 255, 0.1)" />
        </linearGradient>
      </defs>
    </motion.svg>
  )
}
