import React from 'react'

// ─── Icons ─────────────────────────────────────────────────────────────────────

function CheckIcon({ color }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8.5l3 3 7-7" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function WarningTriangleIcon({ color }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 2.5L1.5 13.5h13L8 2.5z" stroke={color} strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M8 7v3" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="8" cy="11.5" r="0.75" fill={color} />
    </svg>
  )
}

function QuestionIcon({ color }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="6" stroke={color} strokeWidth="1.2" />
      <path d="M6.5 6.5C6.5 5.7 7.2 5 8 5C8.8 5 9.5 5.7 9.5 6.5C9.5 7.3 8 8 8 9" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="8" cy="11" r="0.75" fill={color} />
    </svg>
  )
}

function InfoTagIcon({ color }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="6" stroke={color} strokeWidth="1.2" />
      <circle cx="8" cy="5.5" r="0.75" fill={color} />
      <path d="M8 7.5v3" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

function WaveIcon({ color }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M2 8C3 6 4.5 6 5.5 8C6.5 10 8 10 9 8C10 6 11.5 6 12.5 8C13.5 10 14 9 14 8"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function HourglassIcon({ color }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 2h8M4 14h8" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M5 2L8 7L11 2" stroke={color} strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M5 14L8 9L11 14" stroke={color} strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  )
}

function DotsIcon({ color }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="5" cy="5" r="1.5" fill={color} />
      <circle cx="11" cy="5" r="1.5" fill={color} />
      <circle cx="8" cy="8" r="1.5" fill={color} />
      <circle cx="5" cy="11" r="1.5" fill={color} />
      <circle cx="11" cy="11" r="1.5" fill={color} />
    </svg>
  )
}

// ─── Type Config ───────────────────────────────────────────────────────────────

const TYPE_CONFIG = {
  Succes:  { bg: 'bg-[rgba(34,175,92,0.2)]',        textColor: '#22af5c', defaultLabel: 'À jour',         Icon: CheckIcon },
  Danger:  { bg: 'bg-[#ffdede]',                     textColor: '#ff5a5a', defaultLabel: 'En Retard',      Icon: WarningTriangleIcon },
  Neutral: { bg: 'bg-[#f5f5f5]',                     textColor: '#3a1c33', defaultLabel: 'Non renseigné',  Icon: QuestionIcon },
  Info:    { bg: 'bg-[#ccd6f8]',                     textColor: '#312e81', defaultLabel: 'À faire',        Icon: InfoTagIcon },
  Warning: { bg: 'bg-[rgba(242,113,20,0.15)]',       textColor: '#f27114', defaultLabel: 'Warning',        Icon: WaveIcon },
  Running: { bg: 'bg-[#faedb1]',                     textColor: '#3a1c33', defaultLabel: 'Running',        Icon: HourglassIcon },
  Pink:    { bg: 'bg-[#f8d4ea]',                     textColor: '#3a1c33', defaultLabel: 'Pink',           Icon: DotsIcon },
  White:   { bg: 'border border-white bg-transparent', textColor: '#ffffff', defaultLabel: 'Running',      Icon: HourglassIcon },
}

// ─── Component ─────────────────────────────────────────────────────────────────

export default function Tag({
  type = 'Succes',
  fontSize = 'Default',
  showIcon = true,
  showAvatar = false,
  label,
  avatarSrc,
  className,
}) {
  const config = TYPE_CONFIG[type]
  const isCapslock = fontSize === 'Capslock'
  const displayLabel = label ?? config.defaultLabel
  const { bg, textColor, Icon } = config

  const containerClasses = [
    'inline-flex gap-[4px] h-[24px] items-center justify-center px-[4px]',
    'rounded-[4px]',
    bg,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const textClasses = [
    'font-brockmann font-semibold leading-[1.3] shrink-0',
    isCapslock ? 'text-[11px] uppercase' : 'text-[12px]',
  ].join(' ')

  return (
    <div className={containerClasses}>
      {showAvatar && avatarSrc && (
        <img
          src={avatarSrc}
          alt=""
          className="rounded-[5.5px] shrink-0 size-[20px] object-cover"
        />
      )}
      <div className="flex gap-[4px] items-center shrink-0">
        {showIcon && <Icon color={textColor} />}
        <p className={textClasses} style={{ color: textColor }}>
          {displayLabel}
        </p>
      </div>
    </div>
  )
}
