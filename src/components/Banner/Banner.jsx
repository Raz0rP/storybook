import React from 'react'

// ─── Color Maps ────────────────────────────────────────────────────────────────

const BG_COLORS = {
  Info: 'bg-[rgba(204,214,248,0.5)]',
  Error: 'bg-[#ffdede]',
  Success: 'bg-[rgba(34,175,92,0.2)]',
  Warning: 'bg-[#fcbb96]',
  Default: 'bg-[#f5f5f5]',
}

// ─── Icons ─────────────────────────────────────────────────────────────────────

function InfoIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9.5" stroke="#312e81" strokeWidth="1.5" />
      <circle cx="12" cy="8.5" r="1" fill="#312e81" />
      <path d="M12 11.5v4" stroke="#312e81" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function ErrorIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9.5" stroke="#3a1c33" strokeWidth="1.5" />
      <path d="M12 8v4.5" stroke="#3a1c33" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="16" r="1" fill="#3a1c33" />
    </svg>
  )
}

function SuccessIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4.5 12.5l5 5 10-10"
        stroke="#3a1c33"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function WarningIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 4L2.5 20.5h19L12 4z"
        stroke="#3a1c33"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M12 10v5" stroke="#3a1c33" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="17.5" r="1" fill="#3a1c33" />
    </svg>
  )
}

function RibbonIcon({ color = '#3a1c33' }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3C10 3 8.5 4.5 8.5 6.5C8.5 8.5 10 10 12 10C14 10 15.5 8.5 15.5 6.5C15.5 4.5 14 3 12 3Z"
        stroke={color}
        strokeWidth="1.5"
      />
      <path
        d="M15.5 6.5C17.5 8 18.5 10.5 17 13L14 17L12 21L10 17L7 13C5.5 10.5 6.5 8 8.5 6.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const SMALL_ICONS = {
  Info: <InfoIcon />,
  Error: <ErrorIcon />,
  Success: <SuccessIcon />,
  Warning: <WarningIcon />,
  Default: <WarningIcon />,
}

// ─── Component ─────────────────────────────────────────────────────────────────

export default function Banner({
  type = 'Info',
  iconType = 'Small',
  showButton = true,
  showIcon = true,
  showTitle = false,
  title = 'One line title - lorem ipsum dolor',
  description = 'This is a very long text that can take up to two lines.',
  buttonText = 'Button text',
  onButtonClick,
  className,
}) {
  const isBig = iconType === 'Big'
  const isInfoBig = type === 'Info' && isBig
  const textColor = isInfoBig ? 'text-[#312e81]' : 'text-[#3a1c33]'

  const containerClasses = [
    'flex gap-[16px] items-start p-[16px] w-[348px]',
    isBig ? 'rounded-[20px]' : 'rounded-[8px]',
    BG_COLORS[type],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={containerClasses}>
      {isBig ? (
        <div className="bg-[rgba(255,255,255,0.4)] flex items-center p-[8px] rounded-[50px] shrink-0">
          <RibbonIcon color={isInfoBig ? '#312e81' : '#3a1c33'} />
        </div>
      ) : (
        showIcon && <div className="shrink-0">{SMALL_ICONS[type]}</div>
      )}

      <div className="flex flex-1 flex-col gap-[8px] items-start min-w-0">
        {showTitle && (
          <p
            className={[
              'font-brockmann font-semibold text-[16px] leading-[1.3] w-full',
              textColor,
            ].join(' ')}
          >
            {title}
          </p>
        )}
        <p
          className={[
            'font-brockmann font-normal text-[16px] leading-[1.3] w-full',
            textColor,
          ].join(' ')}
        >
          {description}
        </p>
        {showButton && (
          <button
            onClick={onButtonClick}
            className="bg-white border border-[#3a1c33] flex gap-[8px] items-center justify-center px-[16px] py-[8px] rounded-[12px] shrink-0 cursor-pointer hover:opacity-90 active:opacity-80 transition-opacity"
          >
            <span className="font-brockmann font-semibold text-[14px] leading-[1.3] text-[#3a1c33]">
              {buttonText}
            </span>
          </button>
        )}
      </div>
    </div>
  )
}
