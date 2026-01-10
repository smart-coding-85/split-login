# Modern Login & Registration UI

A clean, modern login and registration interface built with React, shadcn/ui, Tailwind CSS, and Framer Motion. Features smooth Magic UI-style animations, dark/light mode toggle, and a responsive design.

## ✨ Features

- **Dark/Light Mode** - Beautiful theme toggle with smooth transitions and system preference detection
- **Smooth Animations** - Magic UI-style animations powered by Framer Motion
- **Clean Design** - Minimal, modern interface with glassmorphism cards
- **Responsive Design** - Fully responsive for desktop, tablet, and mobile devices
- **Accessible** - Proper labels, keyboard navigation, and ARIA attributes
- **Modern UI Components** - Built with shadcn/ui components styled with Tailwind CSS
- **Form Validation** - Client-side validation for forms
- **Password Visibility Toggle** - Show/hide password functionality
- **Theme Persistence** - Theme preference saved in localStorage

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **shadcn/ui** - Re-usable component library
- **Lucide React** - Icon library

## 📁 Project Structure

```
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   ├── Login.jsx        # Login form component
│   │   ├── Register.jsx     # Registration form component
│   │   └── ThemeToggle.jsx  # Dark/light mode toggle
│   ├── contexts/
│   │   └── ThemeContext.jsx # Theme management context
│   ├── lib/
│   │   └── utils.js         # Utility functions
│   ├── App.jsx              # Main app component
│   ├── App.css              # Additional styles
│   ├── index.css            # Global styles & Tailwind
│   └── main.jsx              # Entry point
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Design Features

### Theme System
- **Dark Mode** - Elegant dark theme with glassmorphism effects
- **Light Mode** - Clean light theme with subtle shadows
- **Smooth Transitions** - 300ms transitions between themes
- **System Preference** - Automatically detects OS theme preference
- **Persistent** - Theme preference saved in localStorage

### Animations
- Smooth page transitions between login/register
- Staggered form field animations
- Hover effects on interactive elements
- Theme toggle icon animations

### Visual Elements
- Glassmorphism cards with backdrop blur
- Clean, minimal design
- Consistent spacing and typography
- Modern color scheme

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔧 Customization

### Theme Colors
Edit the color scheme in `src/index.css`:

```css
:root {
  /* Light mode colors */
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  /* ... more colors */
}

.dark {
  /* Dark mode colors */
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... more colors */
}
```

### Animations
Adjust animation timings and effects in component files using Framer Motion props.

### Components
All UI components are in `src/components/ui/` and can be customized to match your design system.

## 📝 Form Fields

### Login Form
- Email Address
- Password (with visibility toggle)
- Remember me checkbox
- Forgot password link

### Registration Form
- Email Address
- Password (with visibility toggle)
- Confirm Password (with visibility toggle)

## 🌓 Dark/Light Mode

The theme toggle button is located in the top-right corner. Click it to switch between dark and light modes. The preference is automatically saved and will persist across page reloads.

### Features
- System preference detection on first visit
- Smooth transitions between themes
- Persistent theme storage
- Animated toggle button

## 🎯 Future Enhancements

- [x] Dark/light mode toggle
- [ ] Form validation with error messages
- [ ] Social login options
- [ ] Password strength indicator
- [ ] Email verification flow
- [ ] Backend integration
- [ ] Loading states
- [ ] Success/error notifications

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the component library
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Lucide React](https://lucide.dev/) for icons

---

Built with ❤️ using React, Tailwind CSS, and Framer Motion
