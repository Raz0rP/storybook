import Banner from './Banner'

export default {
  title: 'Components/Banner',
  component: Banner,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['Info', 'Error', 'Success', 'Warning', 'Default'],
      description: 'Visual style conveying the nature of the message',
    },
    iconType: {
      control: 'select',
      options: ['Small', 'Big'],
      description: 'Small uses contextual icons; Big uses the dépistage ribbon with a pill background',
    },
    showButton: {
      control: 'boolean',
      description: 'Show or hide the action button',
    },
    showIcon: {
      control: 'boolean',
      description: 'Show or hide the icon (applies to Small variant only)',
    },
    showTitle: {
      control: 'boolean',
      description: 'Show or hide the title above the description',
    },
    title: {
      control: 'text',
      description: 'Title text — visible when showTitle is true',
    },
    description: {
      control: 'text',
      description: 'Main message text',
    },
    buttonText: {
      control: 'text',
      description: 'Label for the action button',
    },
  },
}

// ─── Playground ────────────────────────────────────────────────────────────────

export const Playground = {
  args: {
    type: 'Info',
    iconType: 'Small',
    showButton: true,
    showIcon: true,
    showTitle: false,
    title: 'One line title - lorem ipsum dolor',
    description: 'This is a very long text that can take up to two lines.',
    buttonText: 'Button text',
  },
}

// ─── Types — Small ─────────────────────────────────────────────────────────────

export const TypesSmall = {
  render: () => (
    <div className="flex flex-col gap-4 p-6">
      {['Info', 'Error', 'Success', 'Warning', 'Default'].map((type) => (
        <Banner key={type} type={type} iconType="Small" />
      ))}
    </div>
  ),
  name: 'Types — Small',
}

// ─── Types — Big ───────────────────────────────────────────────────────────────

export const TypesBig = {
  render: () => (
    <div className="flex flex-col gap-4 p-6">
      {['Info', 'Error', 'Success', 'Warning', 'Default'].map((type) => (
        <Banner key={type} type={type} iconType="Big" />
      ))}
    </div>
  ),
  name: 'Types — Big',
}

// ─── Content — With Title ──────────────────────────────────────────────────────

export const WithTitle = {
  render: () => (
    <div className="flex flex-col gap-4 p-6">
      {['Info', 'Error', 'Success', 'Warning', 'Default'].map((type) => (
        <Banner key={type} type={type} showTitle />
      ))}
    </div>
  ),
  name: 'Content — With Title',
}

// ─── Content — No Button ───────────────────────────────────────────────────────

export const NoButton = {
  render: () => (
    <div className="flex flex-col gap-4 p-6">
      {['Info', 'Error', 'Success', 'Warning', 'Default'].map((type) => (
        <Banner key={type} type={type} showButton={false} />
      ))}
    </div>
  ),
  name: 'Content — No Button',
}

// ─── Content — No Icon ─────────────────────────────────────────────────────────

export const NoIcon = {
  render: () => (
    <div className="flex flex-col gap-4 p-6">
      {['Info', 'Error', 'Success', 'Warning', 'Default'].map((type) => (
        <Banner key={type} type={type} showIcon={false} />
      ))}
    </div>
  ),
  name: 'Content — No Icon',
}

// ─── Content — Full ────────────────────────────────────────────────────────────

export const Full = {
  render: () => (
    <div className="flex flex-col gap-4 p-6">
      {['Info', 'Error', 'Success', 'Warning', 'Default'].map((type) => (
        <Banner key={type} type={type} showTitle showButton />
      ))}
    </div>
  ),
  name: 'Content — Full (Title + Description + Button)',
}
