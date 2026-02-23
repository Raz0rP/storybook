import React from 'react'

// Sparkle/AI icon matching the Figma design
function SparkleIcon({ size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2.5C12 2.5 12.9 8.1 14.9 9.9C16.9 11.7 22 12 22 12C22 12 16.9 12.3 14.9 14.1C12.9 15.9 12 21.5 12 21.5C12 21.5 11.1 15.9 9.1 14.1C7.1 12.3 2 12 2 12C2 12 7.1 11.7 9.1 9.9C11.1 8.1 12 2.5 12 2.5Z" />
    </svg>
  )
}

const COLOR_CLASSES = {
  Yellow: 'bg-yellow text-plum',
  Plum: 'bg-plum text-white',
  Outlined: 'bg-transparent border border-plum text-plum',
  Grey: 'bg-grey-extra-light text-plum',
  Transparent: 'bg-white text-plum',
}

const DISABLED_CLASSES = {
  Yellow: 'bg-grey-extra-light text-grey-default',
  Plum: 'bg-grey-extra-light text-grey-default',
  Outlined: 'bg-transparent border border-grey-dark text-grey-default',
  Grey: 'bg-grey-extra-light text-grey-default',
  Transparent: 'bg-grey-extra-light text-grey-default',
}

// Size classes for text buttons
const TEXT_SIZE_CLASSES = {
  Large: 'h-[50px] px-6 rounded-[12px] gap-4',
  Small: 'h-[34px] px-4 rounded-[12px] gap-2',
  Tiny: 'px-4 py-2 rounded-[12px] gap-2',
}

// Size classes for icon-only buttons
const ICON_SIZE_CLASSES = {
  Large: 'p-4 rounded-[12px]',
  Small: 'h-[34px] p-2 rounded-[12px]',
  Tiny: 'h-[28px] p-[6px] rounded-[8px]',
}

const ICON_SIZE_PX = {
  Large: 24,
  Small: 24,
  Tiny: 12,
}

export default function Button({
  color = 'Yellow',
  size = 'Large',
  state = 'Default',
  type = 'Default',
  iconLeft = false,
  text = 'Prendre un rendez-vous',
  onClick,
  className,
}) {
  const isDisabled = state === 'Disabled'
  const isIconOnly = type === 'Icon'

  const colorClasses = isDisabled ? DISABLED_CLASSES[color] : COLOR_CLASSES[color]
  const sizeClasses = isIconOnly ? ICON_SIZE_CLASSES[size] : TEXT_SIZE_CLASSES[size]

  const classes = [
    'inline-flex items-center justify-center overflow-hidden',
    'font-brockmann font-semibold text-[14px] leading-[1.3]',
    'transition-opacity',
    isDisabled ? 'cursor-not-allowed opacity-100' : 'cursor-pointer hover:opacity-90 active:opacity-80',
    colorClasses,
    sizeClasses,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button
      className={classes}
      disabled={isDisabled}
      onClick={onClick}
      type="button"
    >
      {isIconOnly ? (
        <SparkleIcon size={ICON_SIZE_PX[size]} />
      ) : (
        <>
          {iconLeft && <SparkleIcon size={ICON_SIZE_PX[size]} />}
          <span>{text}</span>
        </>
      )}
    </button>
  )
}
