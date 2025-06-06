interface OscillixTextProps {
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
}

export function OscillixText({ className = "", size = "md" }: OscillixTextProps) {
  const sizeClasses = {
    sm: "h-6",
    md: "h-8",
    lg: "h-12",
    xl: "h-16",
  }

  return (
    <svg
      className={`${sizeClasses[size]} ${className}`}
      viewBox="0 0 400 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* O */}
      <path
        d="M15 45C15 52 21 58 30 58C39 58 45 52 45 45V25C45 18 39 12 30 12C21 12 15 18 15 25V45Z"
        stroke="url(#textGradient)"
        strokeWidth="1.5"
        fill="none"
      />

      {/* S */}
      <path
        d="M55 45C55 52 61 58 70 58C79 58 85 52 85 45C85 38 79 32 70 32C61 32 55 26 55 19C55 12 61 6 70 6C79 6 85 12 85 19"
        stroke="url(#textGradient)"
        strokeWidth="1.5"
        fill="none"
      />

      {/* C */}
      <path
        d="M125 19C125 12 119 6 110 6C101 6 95 12 95 19V45C95 52 101 58 110 58C119 58 125 52 125 45"
        stroke="url(#textGradient)"
        strokeWidth="1.5"
        fill="none"
      />

      {/* I */}
      <path d="M135 12L135 58M130 12L140 12M130 58L140 58" stroke="url(#textGradient)" strokeWidth="1.5" fill="none" />

      {/* L */}
      <path d="M150 12L150 58L175 58" stroke="url(#textGradient)" strokeWidth="1.5" fill="none" />

      {/* L */}
      <path d="M185 12L185 58L210 58" stroke="url(#textGradient)" strokeWidth="1.5" fill="none" />

      {/* I */}
      <path d="M220 12L220 58M215 12L225 12M215 58L225 58" stroke="url(#textGradient)" strokeWidth="1.5" fill="none" />

      {/* X */}
      <path d="M235 12L265 58M265 12L235 58" stroke="url(#textGradient)" strokeWidth="1.5" fill="none" />

      <defs>
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(255, 255, 255, 0.9)" />
          <stop offset="25%" stopColor="rgba(220, 220, 220, 0.8)" />
          <stop offset="50%" stopColor="rgba(255, 255, 255, 0.9)" />
          <stop offset="75%" stopColor="rgba(200, 200, 200, 0.7)" />
          <stop offset="100%" stopColor="rgba(255, 255, 255, 0.8)" />
        </linearGradient>
      </defs>
    </svg>
  )
}
