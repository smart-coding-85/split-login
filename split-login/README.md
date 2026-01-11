# Modern Login & Registration UI

A clean, modern login and registration interface built with React, shadcn/ui, Tailwind CSS, and Framer Motion. Features smooth Magic UI-style animations, dark/light mode toggle, URL-based routing, and a fully responsive design.

## ✨ Features

- **Dark/Light Mode** - Beautiful theme toggle with smooth transitions and system preference detection
- **URL Routing** - React Router integration with `/login` and `/register` routes
- **Smooth Animations** - Magic UI-style animations powered by Framer Motion with route transitions
- **Split Background Design** - Unique diagonal split background that adapts to theme
- **Form Validation** - Real-time client-side validation with error messages and visual feedback
- **Loading States** - Loading spinners and disabled states during form submission
- **Responsive Design** - Fully responsive for desktop, tablet, and mobile devices
- **Accessible** - Proper labels, keyboard navigation, ARIA attributes, and screen reader support
- **Modern UI Components** - Built with shadcn/ui components styled with Tailwind CSS
- **Password Visibility Toggle** - Show/hide password functionality for both password fields
- **Theme Persistence** - Theme preference saved in localStorage
- **Auto-focus** - Email field automatically focuses on component mount
- **Touch-friendly** - Optimized for mobile touch interactions

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

### Routes

- `/` - Redirects to `/login`
- `/login` - Login page
- `/register` - Registration page

## 🛠️ Tech Stack

- **React 18** - UI library
- **React Router DOM** - Client-side routing
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
- Smooth route transitions between login/register pages
- Staggered form field animations on page load
- Hover effects on interactive elements
- Theme toggle icon animations
- Error message fade-in animations

### Visual Elements
- **Split Background Design** - Diagonal split background with theme-aware colors
- Glassmorphism cards with backdrop blur
- Clean, minimal design
- Consistent spacing and typography
- Modern color scheme
- Error states with visual feedback (red borders, error icons)

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

## 📝 Form Features

### Login Form
- **Email Address** - With validation (required, valid email format)
- **Password** - With visibility toggle and validation (required, min 6 characters)
- **Remember me** - Checkbox option
- **Forgot password** - Link (placeholder functionality)
- **Real-time validation** - Errors show after field blur or submit
- **Loading state** - Shows spinner and "Signing in..." during submission

### Registration Form
- **Email Address** - With validation (required, valid email format)
- **Password** - With visibility toggle and validation (required, min 6 characters)
- **Confirm Password** - With visibility toggle and validation (must match password)
- **Real-time validation** - Errors show after field blur or submit
- **Loading state** - Shows spinner and "Creating account..." during submission

### Validation Features
- Email format validation
- Password length validation (minimum 6 characters)
- Password match validation (for registration)
- Visual error indicators (red borders, error icons)
- Accessible error messages with ARIA attributes
- Form submission disabled when invalid

## 🌓 Dark/Light Mode

The theme toggle button is located in the top-right corner. Click it to switch between dark and light modes. The preference is automatically saved and will persist across page reloads.

### Features
- System preference detection on first visit
- Smooth transitions between themes
- Persistent theme storage
- Animated toggle button

## 🎯 Future Enhancements

- [x] Dark/light mode toggle
- [x] Form validation with error messages
- [x] Loading states
- [x] URL routing with React Router
- [x] Responsive design improvements
- [x] Split background design
- [ ] Social login options (Google, GitHub, etc.)
- [ ] Password strength indicator
- [ ] Email verification flow
- [ ] Backend integration (API endpoints)
- [ ] Success/error toast notifications
- [ ] Forgot password functionality
- [ ] Remember me functionality persistence

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the component library
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Lucide React](https://lucide.dev/) for icons

---

## 🚦 Routing

The application uses React Router for client-side routing:

- **Route-based navigation** - Each page has its own URL (`/login`, `/register`)
- **Smooth transitions** - Animated route transitions using Framer Motion
- **Browser navigation** - Back/forward buttons work correctly
- **Direct URL access** - Users can directly navigate to login or register pages
- **Default redirect** - Root path (`/`) automatically redirects to `/login`

## 📋 Form Validation

Both forms include comprehensive client-side validation:

- **Email validation** - Checks for valid email format
- **Password validation** - Minimum 6 characters required
- **Password match** - Registration form validates password confirmation
- **Real-time feedback** - Errors appear after field blur or form submission
- **Visual indicators** - Invalid fields show red borders and error icons
- **Accessibility** - Error messages are properly associated with form fields using ARIA

---

Built with ❤️ using React, React Router, Tailwind CSS, and Framer Motion
