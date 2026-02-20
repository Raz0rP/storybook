import Button from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['Yellow', 'Plum', 'Outlined', 'Grey', 'Transparent'],
      description: 'Visual color variant',
    },
    size: {
      control: 'select',
      options: ['Large', 'Small', 'Tiny'],
      description: 'Button size',
    },
    state: {
      control: 'select',
      options: ['Default', 'Disabled'],
      description: 'Interactive state',
    },
    type: {
      control: 'select',
      options: ['Default', 'Icon'],
      description: 'Default shows text (+ optional icon), Icon shows icon only',
    },
    iconLeft: {
      control: 'boolean',
      description: 'Show icon to the left of the label (type=Default only)',
    },
    text: {
      control: 'text',
      description: 'Button label (type=Default only)',
    },
  },
}

// ─── Playground ────────────────────────────────────────────────────────────────

export const Playground = {
  args: {
    color: 'Yellow',
    size: 'Large',
    state: 'Default',
    type: 'Default',
    iconLeft: false,
    text: 'Prendre un rendez-vous',
  },
}

// ─── Colors ────────────────────────────────────────────────────────────────────

export const AllColors = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4 p-6 bg-white">
      <Button color="Yellow" text="Yellow" />
      <Button color="Plum" text="Plum" />
      <Button color="Outlined" text="Outlined" />
      <Button color="Grey" text="Grey" />
      <Button color="Transparent" text="Transparent" />
    </div>
  ),
  name: 'Colors — All',
}

// ─── Sizes ─────────────────────────────────────────────────────────────────────

export const AllSizes = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4 p-6">
      <Button size="Large" text="Large" />
      <Button size="Small" text="Small" />
      <Button size="Tiny" text="Tiny" />
    </div>
  ),
  name: 'Sizes — All',
}

// ─── States ────────────────────────────────────────────────────────────────────

export const DisabledState = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4 p-6">
      <Button color="Yellow" state="Disabled" text="Yellow" />
      <Button color="Plum" state="Disabled" text="Plum" />
      <Button color="Outlined" state="Disabled" text="Outlined" />
      <Button color="Grey" state="Disabled" text="Grey" />
      <Button color="Transparent" state="Disabled" text="Transparent" />
    </div>
  ),
  name: 'State — Disabled',
}

// ─── With icon ─────────────────────────────────────────────────────────────────

export const WithIconLeft = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4 p-6">
      <Button color="Yellow" iconLeft text="Prendre un rendez-vous" size="Large" />
      <Button color="Plum" iconLeft text="Prendre un rendez-vous" size="Large" />
      <Button color="Outlined" iconLeft text="Prendre un rendez-vous" size="Large" />
      <Button color="Yellow" iconLeft text="Small avec icône" size="Small" />
    </div>
  ),
  name: 'Type — With Left Icon',
}

// ─── Icon only ─────────────────────────────────────────────────────────────────

export const IconOnly = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4 p-6">
      <Button type="Icon" color="Yellow" size="Large" />
      <Button type="Icon" color="Plum" size="Large" />
      <Button type="Icon" color="Outlined" size="Large" />
      <Button type="Icon" color="Grey" size="Large" />
      <Button type="Icon" color="Yellow" size="Small" />
      <Button type="Icon" color="Plum" size="Small" />
      <Button type="Icon" color="Outlined" size="Small" />
      <Button type="Icon" color="Yellow" size="Tiny" />
      <Button type="Icon" color="Plum" size="Tiny" />
      <Button type="Icon" color="Outlined" size="Tiny" />
    </div>
  ),
  name: 'Type — Icon Only',
}

// ─── Full matrix ───────────────────────────────────────────────────────────────

export const FullMatrix = {
  render: () => {
    const colors = ['Yellow', 'Plum', 'Outlined', 'Grey', 'Transparent']
    const sizes = ['Large', 'Small', 'Tiny']

    return (
      <div className="p-6 space-y-8">
        {colors.map((color) => (
          <div key={color}>
            <p className="text-xs font-semibold text-grey-default uppercase mb-3 tracking-widest">
              {color}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              {sizes.map((size) => (
                <Button key={size} color={color} size={size} text={`${size}`} />
              ))}
              {sizes.map((size) => (
                <Button key={`${size}-disabled`} color={color} size={size} state="Disabled" text={`${size} disabled`} />
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  },
  name: 'Matrix — All Variants',
}
