import React from 'react'

// ─── Color Maps ────────────────────────────────────────────────────────────────

const BG_COLORS = {
  Info:    { Console: 'bg-[#436cfc]',  Appli: 'bg-[#ccd6f8]' },
  Error:   { Console: 'bg-[#ff5a5a]',  Appli: 'bg-[#ffdede]' },
  Success: { Console: 'bg-[#22af5c]',  Appli: 'bg-[#d3efde]' },
  Warning: { Console: 'bg-[#f27114]',  Appli: 'bg-[#fcbb96]' },
}

// ─── Icons ─────────────────────────────────────────────────────────────────────

function InfoIcon({ color }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9.5" stroke={color} strokeWidth="1.5" />
      <circle cx="12" cy="8.5" r="1" fill={color} />
      <path d="M12 11.5v4" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function ErrorIcon({ color }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 4L2.5 20.5h19L12 4z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M12 10v5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="17.5" r="1" fill={color} />
    </svg>
  )
}

function SuccessIcon({ color }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4.5 12.5l5 5 10-10"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function WarningIcon({ color }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 5v1M12 8v6" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M6 3.5C4.5 5.5 4 8 4 10.5C4 16 7.6 21 12 21C16.4 21 20 16 20 10.5C20 8 19.5 5.5 18 3.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M8 2.5C9.2 3.2 10.6 3.5 12 3.5C13.4 3.5 14.8 3.2 16 2.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="17" r="1" fill={color} />
    </svg>
  )
}

function CloseIcon({ color }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M4.5 4.5l9 9M13.5 4.5l-9 9"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

const TYPE_ICONS = { Info: InfoIcon, Error: ErrorIcon, Success: SuccessIcon, Warning: WarningIcon }

// ─── Component ─────────────────────────────────────────────────────────────────

export default function Toastr({
  type = 'Info',
  context = 'Console',
  iconLeft = true,
  message = 'This is a very long text that can take up to two lines.',
  onClose,
  className,
}) {
  const isConsole = context === 'Console'
  const iconColor = isConsole ? '#ffffff' : '#101010'
  const textColor = isConsole ? 'text-white' : 'text-[#101010]'
  const Icon = TYPE_ICONS[type]

  const containerClasses = [
    'flex gap-[16px] items-start p-[16px] rounded-[8px] w-[327px]',
    BG_COLORS[type][context],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={containerClasses}>
      <div className="flex flex-1 gap-[8px] items-center min-w-0">
        {iconLeft && (
          <div className="shrink-0">
            <Icon color={iconColor} />
          </div>
        )}
        <p className={['font-brockmann font-normal text-[16px] leading-[1.3] flex-1 min-w-0', textColor].join(' ')}>
          {message}
        </p>
      </div>

      <button
        onClick={onClose}
        className="shrink-0 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
        aria-label="Close"
      >
        <CloseIcon color={iconColor} />
      </button>
    </div>
  )
}
