import Tag from './Tag'

export default {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['Succes', 'Danger', 'Neutral', 'Info', 'Warning', 'Running', 'Pink', 'White'],
      description: 'Visual and semantic variant of the tag',
    },
    fontSize: {
      control: 'select',
      options: ['Default', 'Capslock'],
      description: 'Default = 12px normal case; Capslock = 11px uppercase',
    },
    showIcon: {
      control: 'boolean',
      description: 'Show or hide the left icon',
    },
    showAvatar: {
      control: 'boolean',
      description: 'Show a user avatar (requires avatarSrc)',
    },
    label: {
      control: 'text',
      description: 'Tag label — defaults to the type's canonical French label if not set',
    },
    avatarSrc: {
      control: 'text',
      description: 'URL of the avatar image (used when showAvatar is true)',
    },
  },
}

// ─── Playground ────────────────────────────────────────────────────────────────

export const Playground = {
  args: {
    type: 'Succes',
    fontSize: 'Default',
    showIcon: true,
    showAvatar: false,
  },
}

// ─── Types — Default ───────────────────────────────────────────────────────────

export const TypesDefault = {
  render: () => (
    <div className="flex flex-wrap gap-3 p-6">
      {['Succes', 'Danger', 'Neutral', 'Info', 'Warning', 'Running', 'Pink'].map((type) => (
        <Tag key={type} type={type} fontSize="Default" />
      ))}
      <div className="bg-plum rounded-[8px] p-2">
        <Tag type="White" fontSize="Default" />
      </div>
    </div>
  ),
  name: 'Types — Default',
}

// ─── Types — Capslock ──────────────────────────────────────────────────────────

export const TypesCapslock = {
  render: () => (
    <div className="flex flex-wrap gap-3 p-6">
      {['Succes', 'Danger', 'Neutral', 'Info', 'Warning', 'Running', 'Pink'].map((type) => (
        <Tag key={type} type={type} fontSize="Capslock" />
      ))}
      <div className="bg-plum rounded-[8px] p-2">
        <Tag type="White" fontSize="Capslock" />
      </div>
    </div>
  ),
  name: 'Types — Capslock',
}

// ─── Content — No Icon ─────────────────────────────────────────────────────────

export const NoIcon = {
  render: () => (
    <div className="flex flex-wrap gap-3 p-6">
      {['Succes', 'Danger', 'Neutral', 'Info', 'Warning', 'Running', 'Pink'].map((type) => (
        <Tag key={type} type={type} showIcon={false} />
      ))}
    </div>
  ),
  name: 'Content — No Icon',
}

// ─── Font Size — Comparison ────────────────────────────────────────────────────

export const FontSizeComparison = {
  render: () => (
    <div className="flex flex-col gap-4 p-6">
      <div className="flex flex-wrap gap-3">
        {['Succes', 'Danger', 'Neutral', 'Info', 'Warning'].map((type) => (
          <Tag key={type} type={type} fontSize="Default" />
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        {['Succes', 'Danger', 'Neutral', 'Info', 'Warning'].map((type) => (
          <Tag key={type} type={type} fontSize="Capslock" />
        ))}
      </div>
    </div>
  ),
  name: 'Font Size — Comparison',
}
