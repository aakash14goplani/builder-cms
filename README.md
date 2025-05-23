# Svelte Components & Custom Elements Starter

This starter project provides a foundation for building both Svelte components and Custom Elements (Web Components) from the same codebase.

## Features

- 📦 Build regular Svelte components for use in Svelte apps
- 🌐 Build Custom Elements (Web Components) that work in any framework
- 🔄 Share logic and styling between both formats
- 🎨 Includes sample components to get started
- 🛠️ TypeScript support built-in
- 📱 Responsive and accessible components

## Directory Structure

```
svelte-components/
├── dist/               # Build output
├── src/
│   ├── lib/            # Regular Svelte components
│   │   ├── components/ # Individual Svelte components
│   │   └── index.ts    # Main export file
│   ├── elements/       # Custom Elements definitions
│   │   └── index.ts    # Custom Elements registration
│   └── demo/           # Demo pages
└── public/             # Static assets
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
# Start development server
npm run dev

# Check TypeScript errors
npm run check
```

### Building

```bash
# Build both Svelte components and Custom Elements
npm run build

# Build only Custom Elements
npm run build:elements

# Package components for distribution
npm run package
```

## Usage

### Using Svelte Components

In a Svelte application:

```svelte
<script>
  import { Button, Card, Input } from 'svelte-components';
</script>

<Card title="My Card" subtitle="Card subtitle">
  <p>Card content goes here</p>

  <svelte:fragment slot="footer">
    <Button text="Cancel" variant="secondary" />
    <Button text="Submit" />
  </svelte:fragment>
</Card>

<Input label="Username" required />
```

### Using Custom Elements

In any HTML page or framework:

```html
<!-- Include the elements script -->
<script type="module" src="path/to/svelte-elements.js"></script>

<!-- Use the custom elements -->
<svelte-card title="My Card" subtitle="Card subtitle">
  <p>Card content goes here</p>

  <div slot="footer">
    <svelte-button text="Cancel" variant="secondary"></svelte-button>
    <svelte-button text="Submit"></svelte-button>
  </div>
</svelte-card>

<svelte-input label="Username" required></svelte-input>
```

## Available Components

### Button

A customizable button component with different variants and sizes.

```svelte
<Button
  text="Click Me"
  variant="primary"
  size="medium"
  disabled={false}
  fullWidth={false}
/>
```

### Card

A versatile card component for displaying content in a contained context.

```svelte
<Card
  title="Card Title"
  subtitle="Optional subtitle"
  elevation={1}
  padding="16px"
>
  <p>Card content here</p>

  <svelte:fragment slot="footer">
    Footer content
  </svelte:fragment>
</Card>
```

### Input

A form input component with built-in validation and helper text.

```svelte
<Input
  type="text"
  label="Username"
  value={username}
  placeholder="Enter username"
  disabled={false}
  required={true}
  error={errorMessage}
  helperText="Your unique username"
/>
```

## License

MIT
