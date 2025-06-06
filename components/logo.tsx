export function Logo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Hexagon outline */}
      <path
        d="M60 10L103.3 32.5V77.5L60 100L16.7 77.5V32.5L60 10Z"
        stroke="url(#hexGradient)"
        strokeWidth="1.5"
        fill="none"
        className="animate-pulse"
      />

      {/* Inner wavy lines - representing oscillations/vibrations */}
      <path
        d="M30 35C35 40 45 30 55 35C65 40 75 30 80 35"
        stroke="url(#waveGradient1)"
        strokeWidth="1"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M30 45C35 50 45 40 55 45C65 50 75 40 80 45"
        stroke="url(#waveGradient2)"
        strokeWidth="1.2"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M30 55C35 60 45 50 55 55C65 60 75 50 80 55"
        stroke="url(#waveGradient3)"
        strokeWidth="1.5"
        fill="none"
        opacity="0.8"
      />
      <path
        d="M30 65C35 70 45 60 55 65C65 70 75 60 80 65"
        stroke="url(#waveGradient4)"
        strokeWidth="1.8"
        fill="none"
        opacity="0.9"
      />
      <path
        d="M30 75C35 80 45 70 55 75C65 80 75 70 80 75"
        stroke="url(#waveGradient5)"
        strokeWidth="2"
        fill="none"
        opacity="1"
      />

      {/* Additional detail lines for more complexity */}
      <path
        d="M25 40C30 42 40 38 50 40C60 42 70 38 85 40"
        stroke="url(#detailGradient1)"
        strokeWidth="0.8"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M25 70C30 68 40 72 50 70C60 68 70 72 85 70"
        stroke="url(#detailGradient2)"
        strokeWidth="0.8"
        fill="none"
        opacity="0.4"
      />

      <defs>
        <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(255, 255, 255, 0.9)" />
          <stop offset="30%" stopColor="rgba(220, 220, 220, 0.8)" />
          <stop offset="70%" stopColor="rgba(200, 200, 200, 0.7)" />
          <stop offset="100%" stopColor="rgba(180, 180, 180, 0.6)" />
        </linearGradient>

        <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(255, 255, 255, 0.2)" />
          <stop offset="50%" stopColor="rgba(255, 255, 255, 0.5)" />
          <stop offset="100%" stopColor="rgba(255, 255, 255, 0.2)" />
        </linearGradient>

        <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(255, 255, 255, 0.3)" />
          <stop offset="50%" stopColor="rgba(255, 255, 255, 0.6)" />
          <stop offset="100%" stopColor="rgba(255, 255, 255, 0.3)" />
        </linearGradient>

        <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(255, 255, 255, 0.4)" />
          <stop offset="50%" stopColor="rgba(255, 255, 255, 0.7)" />
          <stop offset="100%" stopColor="rgba(255, 255, 255, 0.4)" />
        </linearGradient>

        <linearGradient id="waveGradient4" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(255, 255, 255, 0.5)" />
          <stop offset="50%" stopColor="rgba(255, 255, 255, 0.8)" />
          <stop offset="100%" stopColor="rgba(255, 255, 255, 0.5)" />
        </linearGradient>

        <linearGradient id="waveGradient5" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(255, 255, 255, 0.6)" />
          <stop offset="50%" stopColor="rgba(255, 255, 255, 0.9)" />
          <stop offset="100%" stopColor="rgba(255, 255, 255, 0.6)" />
        </linearGradient>

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
    </svg>
  )
}
