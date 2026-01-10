# Modern 3D Login & Registration UI

A premium, futuristic login and registration interface built with React, shadcn/ui, Tailwind CSS, and Framer Motion. Features stunning 3D glassmorphism effects, smooth animations, and a responsive design.

## ✨ Features

- **3D Glassmorphism Cards** - Beautiful frosted glass effect with depth and shadows
- **Smooth 3D Animations** - Powered by Framer Motion with hover effects and transitions
- **Gradient Background** - Animated gradient background with floating abstract shapes
- **Responsive Design** - Fully responsive for desktop, tablet, and mobile devices
- **Accessible** - Proper labels, keyboard navigation, and ARIA attributes
- **Modern UI Components** - Built with shadcn/ui components styled with Tailwind CSS
- **Form Validation** - Client-side validation for forms
- **Password Visibility Toggle** - Show/hide password functionality

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
│   │   ├── ui/          # shadcn/ui components
│   │   ├── Login.jsx    # Login form component
│   │   └── Register.jsx # Registration form component
│   ├── lib/
│   │   └── utils.js     # Utility functions
│   ├── App.jsx          # Main app component
│   ├── App.css          # Additional styles
│   ├── index.css        # Global styles & Tailwind
│   └── main.jsx         # Entry point
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Design Features

### 3D Effects
- Glassmorphism cards with backdrop blur
- Depth and shadow effects
- 3D hover animations
- Perspective transforms

### Animations
- Smooth page transitions
- Floating background shapes
- Glowing orbs with pulsing effects
- Staggered form field animations

### Visual Elements
- Animated gradient background
- Floating abstract shapes
- Decorative grid pattern
- Soft glowing accents

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔧 Customization

### Colors
Edit the color scheme in `tailwind.config.js` and `src/index.css`:

```javascript
colors: {
  primary: 'hsl(var(--primary))',
  // ... more colors
}
```

### Animations
Adjust animation timings and effects in component files using Framer Motion props.

### Background
Modify the gradient background in `src/index.css`:

```css
.gradient-bg {
  background: linear-gradient(135deg, #667eea 0%, ...);
}
```

## 📝 Form Fields

### Login Form
- Email
- Password (with visibility toggle)
- Remember me checkbox
- Forgot password link

### Registration Form
- Full Name
- Email
- Password (with visibility toggle)
- Confirm Password (with visibility toggle)

## 🎯 Future Enhancements

- [ ] Form validation with error messages
- [ ] Social login options
- [ ] Dark/light mode toggle
- [ ] Password strength indicator
- [ ] Email verification flow
- [ ] Backend integration

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the component library
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Tailwind CSS](https://tailwindcss.com/) for styling

---

Built with ❤️ using React, Tailwind CSS, and Framer Motion
