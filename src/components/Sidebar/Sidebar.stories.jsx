import React, { useState } from 'react'
import Sidebar, {
  DEFAULT_NAV_ITEMS,
  HomeIcon,
  ClockIcon,
  MailIcon,
  UsersIcon,
} from './Sidebar'

export default {
  title: 'Components/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Console-only vertical navigation sidebar. 68px wide, fixed to the left edge. Clicking an icon selects it — the active cell expands into a grey tab with the icon on a dark plum circle.',
      },
    },
  },
  argTypes: {
    activeId: {
      control: 'select',
      options: ['home', 'appointments', 'messages', 'patients'],
      description: 'Controlled active nav item id',
    },
    defaultActiveId: {
      control: 'select',
      options: ['home', 'appointments', 'messages', 'patients'],
      description: 'Default active item id (uncontrolled)',
    },
    userName: {
      control: 'text',
      description: 'User display name — first two initials are shown in the badge',
    },
    avatarSrc: {
      control: 'text',
      description: 'URL for the user avatar image',
    },
  },
}

// ─── Playground ────────────────────────────────────────────────────────────────

export const Playground = {
  args: {
    defaultActiveId: 'appointments',
    userName: 'Jean-Paul',
  },
  decorators: [
    (Story) => (
      <div style={{ height: '100vh', display: 'flex' }}>
        <Story />
      </div>
    ),
  ],
}

// ─── Default ───────────────────────────────────────────────────────────────────

export const Default = {
  render: () => (
    <div style={{ height: '100vh', display: 'flex' }}>
      <Sidebar defaultActiveId="home" userName="Jean-Paul" />
      <div className="flex-1 bg-white" />
    </div>
  ),
  name: 'State — Default (home active)',
}

// ─── All Active States ─────────────────────────────────────────────────────────

export const AllActiveStates = {
  render: () => (
    <div className="flex gap-8 p-6 bg-white">
      {DEFAULT_NAV_ITEMS.map((item) => (
        <div key={item.id} className="flex flex-col items-center gap-2">
          <div style={{ height: 400 }}>
            <Sidebar defaultActiveId={item.id} userName="JP" />
          </div>
          <span className="font-brockmann text-[12px] text-[#8c8c8c]">{item.label}</span>
        </div>
      ))}
    </div>
  ),
  name: 'State — All Active Items',
}

// ─── Interactive ───────────────────────────────────────────────────────────────

export const Interactive = {
  render: () => {
    const [activeId, setActiveId] = useState('home')
    return (
      <div style={{ height: '100vh', display: 'flex' }}>
        <Sidebar
          activeId={activeId}
          onNavigate={setActiveId}
          userName="Jean-Paul"
        />
        <div className="flex-1 bg-white flex items-center justify-center">
          <p className="font-brockmann text-[16px] text-[#3a1c33]">
            Active section: <strong>{activeId}</strong>
          </p>
        </div>
      </div>
    )
  },
  name: 'Behaviour — Interactive',
}

// ─── With Avatar ───────────────────────────────────────────────────────────────

export const WithAvatar = {
  render: () => (
    <div style={{ height: '100vh', display: 'flex' }}>
      <Sidebar
        defaultActiveId="appointments"
        userName="Jean-Paul"
        avatarSrc="https://i.pravatar.cc/30?img=5"
      />
      <div className="flex-1 bg-white" />
    </div>
  ),
  name: 'User — With Avatar',
}

// ─── Custom Nav Items ──────────────────────────────────────────────────────────

export const CustomNavItems = {
  render: () => (
    <div style={{ height: '100vh', display: 'flex' }}>
      <Sidebar
        navItems={[
          { id: 'dashboard', label: 'Dashboard', Icon: HomeIcon },
          { id: 'calendar',  label: 'Calendar',  Icon: ClockIcon },
          { id: 'inbox',     label: 'Inbox',     Icon: MailIcon },
        ]}
        defaultActiveId="calendar"
        userName="Marie Curie"
      />
      <div className="flex-1 bg-white" />
    </div>
  ),
  name: 'Slots — Custom Nav Items',
}
