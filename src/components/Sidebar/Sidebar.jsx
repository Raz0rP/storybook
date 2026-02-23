import React, { useState } from 'react'

// ─── Logo ──────────────────────────────────────────────────────────────────────

function Logo() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="#3a1c33" aria-hidden="true">
      <path d="M10 1C10.8 5.8 12.5 7.2 14.3 7.8C16.1 8.4 19 10 19 10C19 10 16.1 11.6 14.3 12.2C12.5 12.8 10.8 14.2 10 19C9.2 14.2 7.5 12.8 5.7 12.2C3.9 11.6 1 10 1 10C1 10 3.9 8.4 5.7 7.8C7.5 7.2 9.2 5.8 10 1Z" />
    </svg>
  )
}

// ─── Nav Icons ─────────────────────────────────────────────────────────────────

export function HomeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M10 1C10.8 5.8 12.5 7.2 14.3 7.8C16.1 8.4 19 10 19 10C19 10 16.1 11.6 14.3 12.2C12.5 12.8 10.8 14.2 10 19C9.2 14.2 7.5 12.8 5.7 12.2C3.9 11.6 1 10 1 10C1 10 3.9 8.4 5.7 7.8C7.5 7.2 9.2 5.8 10 1Z" />
    </svg>
  )
}

export function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 5.5V10.5L13.5 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="2" y="4.5" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2 7L10 12L18 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function UsersIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="8" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2 18C2 14.686 4.686 12 8 12C11.314 12 14 14.686 14 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 11.5C15.5 11.5 16.5 12.5 17 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="14" cy="7.5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

// ─── Default Nav Items ─────────────────────────────────────────────────────────

export const DEFAULT_NAV_ITEMS = [
  { id: 'home',         label: 'Home',         Icon: HomeIcon },
  { id: 'appointments', label: 'Appointments', Icon: ClockIcon },
  { id: 'messages',     label: 'Messages',     Icon: MailIcon },
  { id: 'patients',     label: 'Patients',     Icon: UsersIcon },
]

// ─── Sidebar Cell ──────────────────────────────────────────────────────────────

function SidebarCell({ item, isActive, onClick }) {
  const { label, Icon } = item

  const cellClasses = [
    'flex items-center p-[8px] cursor-pointer transition-colors',
    isActive
      ? 'w-[52px] justify-end bg-[#d2d2d2] rounded-tr-[12px] rounded-br-[12px]'
      : 'hover:opacity-70',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button
      className={cellClasses}
      onClick={() => onClick(item.id)}
      aria-label={label}
      aria-current={isActive ? 'page' : undefined}
    >
      {isActive ? (
        <div className="size-[36px] flex items-center justify-center rounded-full bg-[#3a1c33] text-white shrink-0">
          <Icon />
        </div>
      ) : (
        <div className="size-[36px] flex items-center justify-center text-[#8c8c8c] shrink-0">
          <Icon />
        </div>
      )}
    </button>
  )
}

// ─── Component ─────────────────────────────────────────────────────────────────

export default function Sidebar({
  navItems = DEFAULT_NAV_ITEMS,
  activeId,
  defaultActiveId,
  onNavigate,
  userName = 'JP',
  avatarSrc,
  className,
}) {
  const isControlled = activeId !== undefined
  const [internalActiveId, setInternalActiveId] = useState(
    defaultActiveId ?? (navItems[0]?.id || null)
  )

  const currentActiveId = isControlled ? activeId : internalActiveId

  function handleItemClick(id) {
    if (!isControlled) setInternalActiveId(id)
    onNavigate?.(id)
  }

  const initials = userName
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  const containerClasses = [
    'relative bg-[#f5f5f5] w-[68px] h-full min-h-screen flex flex-col',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={containerClasses}>
      {/* Logo */}
      <div className="absolute left-[16px] top-[11px]">
        <Logo />
      </div>

      {/* Nav icon list */}
      <div className="absolute left-0 top-[84px] flex flex-col gap-[8px] items-end w-[52px]">
        {navItems.map((item) => (
          <SidebarCell
            key={item.id}
            item={item}
            isActive={item.id === currentActiveId}
            onClick={handleItemClick}
          />
        ))}
      </div>

      {/* User section */}
      {avatarSrc && (
        <div className="absolute bottom-[75px] left-1/2 -translate-x-1/2">
          <img
            src={avatarSrc}
            alt={userName}
            className="size-[30px] rounded-[7.5px] object-cover block"
          />
        </div>
      )}

      <div className="absolute bottom-[32px] left-1/2 -translate-x-1/2 size-[30px] bg-[rgba(34,175,92,0.2)] rounded-[7.5px] flex items-center justify-center">
        <span className="font-brockmann font-semibold text-[12px] leading-[1.3] text-[#3a1c33]">
          {initials}
        </span>
      </div>
    </div>
  )
}
