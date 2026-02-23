import Toastr from './Toastr'

export default {
  title: 'Components/Toastr',
  component: Toastr,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A transient notification component shown to convey information, disappearing automatically after a few seconds (typically 5s).',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['Info', 'Error', 'Success', 'Warning'],
      description: 'Semantic type of the notification',
    },
    context: {
      control: 'select',
      options: ['Console', 'Appli'],
      description: 'Console = solid/vibrant background (white text); Appli = pastel background (dark text)',
    },
    iconLeft: {
      control: 'boolean',
      description: 'Show or hide the left icon',
    },
    message: {
      control: 'text',
      description: 'Notification message text',
    },
  },
}

// ─── Playground ────────────────────────────────────────────────────────────────

export const Playground = {
  args: {
    type: 'Info',
    context: 'Console',
    iconLeft: true,
    message: 'This is a very long text that can take up to two lines.',
  },
}

// ─── Context — Console ─────────────────────────────────────────────────────────

export const ContextConsole = {
  render: () => (
    <div className="flex flex-col gap-4 p-6">
      {['Info', 'Error', 'Success', 'Warning'].map((type) => (
        <Toastr key={type} type={type} context="Console" />
      ))}
    </div>
  ),
  name: 'Context — Console',
}

// ─── Context — Appli ───────────────────────────────────────────────────────────

export const ContextAppli = {
  render: () => (
    <div className="flex flex-col gap-4 p-6">
      {['Info', 'Error', 'Success', 'Warning'].map((type) => (
        <Toastr key={type} type={type} context="Appli" />
      ))}
    </div>
  ),
  name: 'Context — Appli',
}

// ─── Types — All ───────────────────────────────────────────────────────────────

export const AllTypes = {
  render: () => (
    <div className="flex flex-col gap-4 p-6">
      <p className="font-brockmann font-semibold text-[12px] text-[#8c8c8c] uppercase mb-1">Console</p>
      {['Info', 'Error', 'Success', 'Warning'].map((type) => (
        <Toastr key={`console-${type}`} type={type} context="Console" />
      ))}
      <p className="font-brockmann font-semibold text-[12px] text-[#8c8c8c] uppercase mt-4 mb-1">Appli</p>
      {['Info', 'Error', 'Success', 'Warning'].map((type) => (
        <Toastr key={`appli-${type}`} type={type} context="Appli" />
      ))}
    </div>
  ),
  name: 'Types — All',
}

// ─── Content — No Icon ─────────────────────────────────────────────────────────

export const NoIcon = {
  render: () => (
    <div className="flex flex-col gap-4 p-6">
      {['Info', 'Error', 'Success', 'Warning'].map((type) => (
        <Toastr key={type} type={type} context="Console" iconLeft={false} />
      ))}
    </div>
  ),
  name: 'Content — No Icon',
}
