# GFG Campus Body - Frontend Only

A modern React application for GFG Campus Body built with Vite, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern UI with Tailwind CSS and Radix UI components
- ⚡ Fast development with Vite
- 📱 Responsive design
- 🎯 TypeScript for better development experience
- 🚀 Optimized for Windows development

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── lib/           # Utility functions and configurations
│   │   ├── hooks/         # Custom React hooks
│   │   └── assets/        # Static assets
│   └── index.html         # HTML entry point
├── attached_assets/        # Project assets and images
├── dist/                  # Build output (generated)
└── node_modules/          # Dependencies (generated)
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd GFG-Campus-Body
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Building for Production

Build the application:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

### Type Checking

Run TypeScript type checking:
```bash
npm run check
```

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible UI components
- **React Router** - Client-side routing
- **React Query** - Data fetching and state management
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Windows Compatibility

This project is optimized for Windows development:

- Uses Windows-compatible path separators
- Configured for Windows PowerShell/Command Prompt
- No Unix-specific dependencies
- Simplified build process

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - TypeScript type checking

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License
