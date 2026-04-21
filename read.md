# ColorWeave UI

ColorWeave UI is a modern color palette discovery web application inspired by Color Hunt, built using React + Vite with Glassmorphism + Neumorphism styling.

Users can explore curated palettes, save favorites, switch themes, and manage authentication using Supabase.

---

## Features

- Beautiful palette exploration UI
- Search and filter palettes by category
- Save and remove favorites
- Login / Signup with Supabase Authentication
- Persistent user sessions
- Dark mode support
- Glassmorphism + Neumorphism design system
- Toast notifications
- Scroll to top button
- Auto scroll to top on route change
- Fully responsive layout
- Reusable component architecture

---

## Tech Stack

### Frontend

- React
- Vite
- React Router DOM
- Context API
- CSS (Custom Styling)
- React Icons

### Backend Services

- Supabase
- PostgreSQL
- Supabase Auth
- Row Level Security (RLS)

---

## Project Structure

```text
src/
│
├── components/
│   ├── common/
│   ├── layout/
│   └── palette/
│
├── context/
│   ├── AuthContext.jsx
│   ├── FavoritesContext.jsx
│   ├── ThemeContext.jsx
│   └── ToastContext.jsx
│
├── data/
│   ├── navLinks.js
│   └── palettes.js
│
├── hooks/
│   ├── useAuth.js
│   └── useFavorites.js
│
├── pages/
│   ├── Home.jsx
│   ├── Explore.jsx
│   ├── Favorites.jsx
│   └── Login.jsx
│
├── routes/
│   └── AppRoutes.jsx
│
├── services/
│   ├── supabase.js
│   ├── authService.js
│   └── paletteService.js
│
├── styles/
│   ├── globals.css
│   ├── navbar.css
│   ├── login.css
│   ├── toast.css
│   └── scrollToTop.css
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## Installation

### 1. Clone the project

```bash
git clone your-repository-url
cd colorweave-ui
```

### 2. Install dependencies

```bash
npm install
```

### 3. Install required package

```bash
npm install react-icons @supabase/supabase-js
```

### 4. Run development server

```bash
npm run dev
```

---

## Supabase Setup

### Create `.env` file

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Restart Vite after adding the env file.

---

## Database Setup

Run your SQL schema inside Supabase SQL Editor for:

- profiles table
- favorites table
- RLS policies
- user access permissions

This enables:

- secure authentication
- saved favorites
- user profile sync

---

## Available Scripts

### Start development

```bash
npm run dev
```

### Build production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

---

## Future Improvements

- Google OAuth login
- Protected routes
- User collections
- Palette copy-to-clipboard
- Download palette as image
- AI palette generator
- Admin dashboard
- Premium palette packs

---

## Deployment

Recommended platforms:

- Vercel
- Netlify
- GitHub Pages

Best recommendation: **Vercel**

---

## Author

### Yogesh

Frontend Developer

Built with React, creativity, and probably too much coffee.

---

## License

This project is for learning, portfolio, and personal development purposes.
