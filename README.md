# Chrome Extension Template - React + Vite + TailwindCSS + shadcn/ui

<div align="center">

![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-green?logo=googlechrome)
![React](https://img.shields.io/badge/React-19.1.0-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.0.5-646CFF?logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4.1.18-38B2AC?logo=tailwindcss)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-latest-black)

A modern, production-ready Chrome extension template with React, TypeScript, Vite, TailwindCSS v4, and shadcn/ui components.

📦 **Install instantly**: `npm create crx-template@latest my-extension`

[Features](#features) • [Installation](#-installation) • [Quick Start](#quick-start) • [Documentation](#documentation) • [Project Structure](#project-structure)

</div>

---

## 🚀 Features

### Core Technologies
- ⚡ **Vite 7** - Lightning-fast HMR and optimized builds
- ⚛️ **React 19** - Latest React with modern hooks and features
- 📘 **TypeScript** - Full type safety across the extension
- 🎨 **TailwindCSS v4** - Latest Tailwind with native CSS support
- 🎭 **shadcn/ui** - Beautiful, accessible component library
- 🔧 **CRXJS Vite Plugin** - Seamless Chrome extension development

### Chrome Extension Features
- 📌 **Popup** - Extension popup interface
- 📱 **Side Panel** - Modern side panel support (Chrome 114+)
- 📝 **Content Scripts** - Inject UI into web pages
- 🔐 **Manifest V3** - Latest Chrome extension manifest
- 📦 **Auto-reload** - Instant updates during development
- 🗜️ **Production Build** - Optimized and zipped for distribution

### UI/UX Features
- 🎨 **Pre-configured Theme** - Light/dark mode with CSS variables
- 🧩 **Reusable Components** - Button, Card, and more from shadcn/ui
- 💅 **Modern Styling** - Utility-first with Tailwind
- ♿ **Accessible** - ARIA compliant components
- 📐 **Responsive** - Mobile-first design approach

---

## � Installation

Get started with a single command:

```bash
# Using npm (recommended)
npm create crx-template@latest my-extension

# Or using pnpm
pnpm create crx-template@latest my-extension

# Or using yarn
yarn create crx-template@latest my-extension
```

Then follow the prompts and start building!

```bash
cd my-extension
npm run dev
```

---

## 🚀 Features

### Core Technologies
- ⚡ **Vite 7** - Lightning-fast HMR and optimized builds
- ⚛️ **React 19** - Latest React with modern hooks and features
- 📘 **TypeScript** - Full type safety across the extension
- 🎨 **TailwindCSS v4** - Latest Tailwind with native CSS support
- 🎭 **shadcn/ui** - Beautiful, accessible component library
- 🔧 **CRXJS Vite Plugin** - Seamless Chrome extension development

### Chrome Extension Features
- 📌 **Popup** - Extension popup interface
- 📱 **Side Panel** - Modern side panel support (Chrome 114+)
- 📝 **Content Scripts** - Inject UI into web pages
- 🔐 **Manifest V3** - Latest Chrome extension manifest
- 📦 **Auto-reload** - Instant updates during development
- 🗜️ **Production Build** - Optimized and zipped for distribution

### UI/UX Features
- 🎨 **Pre-configured Theme** - Light/dark mode with CSS variables
- 🧩 **Reusable Components** - Button, Card, and more from shadcn/ui
- 💅 **Modern Styling** - Utility-first with Tailwind
- ♿ **Accessible** - ARIA compliant components
- 📐 **Responsive** - Mobile-first design approach

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **npm**, **pnpm**, or **yarn**
- **Google Chrome** or **Chromium-based browser**

---

## 🏁 Quick Start

### Option 1: Create New Project (Recommended)

```bash
npm create crx-template@latest my-extension
cd my-extension
npm run dev
```

### Option 2: Clone Repository

```bash
# Clone this repository
git clone https://github.com/evildevill/crx-react-tailwind-shadcn-template.git
cd crx-react-tailwind-shadcn-template

# Install dependencies
npm install

# Start development
npm run dev
```

### Load Extension in Chrome

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable **Developer mode** (toggle in top-right corner)
3. Click **Load unpacked**
4. Select the `dist` folder from your project

### 5. Start Building! 🎉

Edit files in `src/` and see changes instantly reload in your extension.

---

## 📁 Project Structure

```
chrome-extension-template/
├── public/                      # Static assets
│   └── logo.png                # Extension icon
├── src/
│   ├── assets/                 # Images, SVGs, etc.
│   │   ├── crx.svg
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── components/             # Shared React components
│   │   ├── ui/                 # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   └── card.tsx
│   │   └── HelloWorld.tsx      # Example component
│   ├── lib/                    # Utility functions
│   │   └── utils.ts            # shadcn/ui utilities
│   ├── content/                # Content scripts
│   │   ├── views/
│   │   │   └── App.tsx         # Content script UI
│   │   ├── index.css           # Content script styles
│   │   └── main.tsx            # Content script entry
│   ├── popup/                  # Extension popup
│   │   ├── App.tsx             # Popup UI
│   │   ├── index.css           # Popup styles (with theme)
│   │   ├── index.html
│   │   └── main.tsx            # Popup entry
│   └── sidepanel/              # Side panel
│       ├── App.tsx             # Side panel UI
│       ├── index.css           # Side panel styles
│       ├── index.html
│       └── main.tsx            # Side panel entry
├── components.json             # shadcn/ui configuration
├── manifest.config.ts          # Chrome extension manifest
├── package.json
├── tsconfig.json               # TypeScript config (root)
├── tsconfig.app.json           # TypeScript config (app)
├── tsconfig.node.json          # TypeScript config (node)
└── vite.config.ts              # Vite configuration
```

---

## 🛠️ Development Guide

### Available Scripts

```bash
# Start development server with hot reload
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Add shadcn/ui components
pnpm dlx shadcn@latest add <component-name>
```

### Adding shadcn/ui Components

This template comes with `button` and `card` components. Add more:

```bash
# Add single component
pnpm dlx shadcn@latest add dialog

# Add multiple components
pnpm dlx shadcn@latest add dropdown-menu input label select

# See all available components
pnpm dlx shadcn@latest add
```

Available components: `accordion`, `alert`, `badge`, `checkbox`, `dialog`, `dropdown-menu`, `input`, `label`, `select`, `separator`, `switch`, `tabs`, `toast`, and [many more](https://ui.shadcn.com/docs/components).

### Project Configuration

#### Manifest Configuration (`manifest.config.ts`)

```typescript
import { defineManifest } from '@crxjs/vite-plugin'

export default defineManifest({
  manifest_version: 3,
  name: 'Your Extension Name',
  version: '1.0.0',
  permissions: ['sidePanel', 'activeTab', 'storage'],
  // ... more configuration
})
```

#### Vite Configuration (`vite.config.ts`)

```typescript
import tailwindcss from '@tailwindcss/vite'
import { crx } from '@crxjs/vite-plugin'

export default defineConfig({
  plugins: [
    tailwindcss(),      // TailwindCSS v4 plugin
    react(),            // React plugin
    crx({ manifest }), // CRXJS plugin
  ],
})
```

---

## 🎨 Styling Guide

### TailwindCSS v4

This template uses the latest TailwindCSS v4 with native CSS support:

```css
/* No tailwind.config.js needed! */
@import "tailwindcss";
@import "tw-animate-css";

/* Theme variables in CSS */
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  /* ... */
}
```

### Using Tailwind Classes

```tsx
export default function MyComponent() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <h1 className="text-4xl font-bold text-foreground">
        Hello World
      </h1>
    </div>
  )
}
```

### Using shadcn/ui Components

```tsx
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome</CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="default">Click me</Button>
      </CardContent>
    </Card>
  )
}
```

### Theme Customization

Edit the CSS variables in `src/popup/index.css` (or other index.css files):

```css
:root {
  --radius: 0.5rem;        /* Border radius */
  --primary: oklch(...);   /* Primary color */
  --secondary: oklch(...); /* Secondary color */
  /* ... more variables */
}
```

---

## 🏗️ Building for Production

### Create Production Build

```bash
pnpm build
```

This will:
- Type-check your code
- Build optimized bundles
- Generate `dist/` folder
- Create a ZIP file in `release/` folder

### Testing Production Build

1. Build the extension: `pnpm build`
2. Go to `chrome://extensions/`
3. Remove the development version
4. Load unpacked from the `dist/` folder
5. Test all features

### Publishing to Chrome Web Store

1. Build your extension: `pnpm build`
2. The ZIP file will be in `release/` folder
3. Go to [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole)
4. Click **New Item** and upload the ZIP file
5. Fill in the required information
6. Submit for review

---

## 📚 Extension Capabilities

### Popup

The popup appears when users click the extension icon in the toolbar.

**Location:** `src/popup/`

```tsx
// src/popup/App.tsx
export default function App() {
  return (
    <div className="w-96 p-4">
      <h1>My Extension Popup</h1>
      {/* Your UI here */}
    </div>
  )
}
```

### Side Panel

Modern side panel interface (Chrome 114+).

**Location:** `src/sidepanel/`

```tsx
// src/sidepanel/App.tsx
export default function App() {
  return (
    <div className="min-h-screen p-6">
      <h1>Side Panel</h1>
      {/* Your UI here */}
    </div>
  )
}
```

### Content Scripts

Inject UI and functionality into web pages.

**Location:** `src/content/`

```tsx
// src/content/views/App.tsx
function App() {
  return (
    <div className="fixed bottom-4 right-4">
      {/* Floating UI on web pages */}
    </div>
  )
}
```

**Configure matches in** `manifest.config.ts`:

```typescript
content_scripts: [{
  js: ['src/content/main.tsx'],
  matches: ['https://*.example.com/*'],  // Specify URLs
}]
```

---

## 🔧 Common Tasks

### Change Extension Name

Edit `package.json`:

```json
{
  "name": "my-awesome-extension",
  "version": "1.0.0"
}
```

The `manifest.config.ts` automatically uses these values.

### Add Chrome Permissions

Edit `manifest.config.ts`:

```typescript
permissions: [
  'storage',      // Chrome storage API
  'activeTab',    // Access active tab
  'tabs',         // Access all tabs
  'scripting',    // Execute scripts
  'notifications' // Show notifications
]
```

### Add Background Service Worker

Create `src/background/index.ts`:

```typescript
chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed')
})
```

Update `manifest.config.ts`:

```typescript
background: {
  service_worker: 'src/background/index.ts'
}
```

### Use Chrome Storage API

```typescript
// Save data
await chrome.storage.local.set({ key: 'value' })

// Get data
const { key } = await chrome.storage.local.get('key')
```

### Communicate Between Components

```typescript
// Send message from content script
chrome.runtime.sendMessage({ type: 'HELLO' })

// Listen in background or popup
chrome.runtime.onMessage.addListener((message) => {
  if (message.type === 'HELLO') {
    console.log('Received message')
  }
})
```

---

## 🎯 Best Practices

### TypeScript

- Use strict mode (enabled by default)
- Define types for all props and state
- Use Chrome API types from `@types/chrome`

### Performance

- Lazy load heavy components: `const Component = lazy(() => import('./Component'))`
- Use `React.memo()` for expensive components
- Optimize images and assets

### Security

- Validate all user inputs
- Use Content Security Policy (CSP)
- Avoid `eval()` and inline scripts
- Sanitize HTML content

### Code Organization

- Keep components small and focused
- Use custom hooks for shared logic
- Separate business logic from UI
- Use TypeScript interfaces for data structures

---

## 🐛 Troubleshooting

### Extension doesn't load

- Check console for errors in `chrome://extensions/`
- Ensure `pnpm dev` is running
- Try reloading the extension
- Clear the `dist/` folder and rebuild

### Styles not applying

- Check if CSS is imported in main.tsx files
- Verify Tailwind classes are correct
- Check browser DevTools for CSS errors

### HMR not working

- Restart the dev server: `pnpm dev`
- Reload the extension in Chrome
- Check Vite config for correct paths

### Content script not injecting

- Verify `matches` pattern in `manifest.config.ts`
- Check permissions in manifest
- Test on correct URLs
- Check console for CSP errors

---

## 📖 Documentation & Resources

### Official Documentation

- [Chrome Extensions Docs](https://developer.chrome.com/docs/extensions/)
- [Manifest V3 Migration](https://developer.chrome.com/docs/extensions/mv3/intro/)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Vite Documentation](https://vite.dev/)
- [TailwindCSS Documentation](https://tailwindcss.com/)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [CRXJS Documentation](https://crxjs.dev/vite-plugin)

### Community & Support

- [Chrome Extensions Google Group](https://groups.google.com/a/chromium.org/g/chromium-extensions)
- [Stack Overflow - Chrome Extensions](https://stackoverflow.com/questions/tagged/google-chrome-extension)
- [shadcn/ui Discord](https://discord.gg/shadcn)

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🌟 Acknowledgments

- [Vite](https://vite.dev/) - Next generation frontend tooling
- [CRXJS](https://crxjs.dev/) - Chrome extension development made easy
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful component library
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- [React](https://react.dev/) - JavaScript library for UI

---

<div align="center">

**Built with ❤️ for Chrome Extension Developers**

[⭐ Star this repo](https://github.com/evildevill/crx-react-tailwind-shadcn-template) if you find it helpful!

</div>
