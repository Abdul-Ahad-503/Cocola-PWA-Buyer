<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

## Project Overview

A modern Progressive Web App (PWA) e-commerce platform built with React, TypeScript, Tailwind CSS, and Vite. This project features a pixel-perfect UI inspired by the provided Figma design, with a focus on seamless user experience, modular components, and responsive design.

## Features

- **Modern Header** with search, category dropdown, and user menu
- **Login & Registration Modals** with smooth transitions and image-based icons
- **Centralized Asset Management** for all images and icons
- **Responsive Design** for desktop and mobile
- **Category Navigation** with icons
- **User Account Dropdown** with quick links (Orders, Saved Items, Referrals, etc.)
- **Cart Integration**
- **Clean, maintainable codebase** using React functional components and hooks
- **Tailwind CSS** for rapid, consistent styling

## Getting Started

### Prerequisites
- Node.js (v16 or newer recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Abdul-Ahad-503/Cocola-PWA-Buyer.git
cd Cocola-PWA-Buyer

# Install dependencies
npm install
# or
yarn install
```

### Running the App

```bash
# Start the development server
npm run dev
# or
yarn dev
```

The app will be available at `http://localhost:5173` (or the port shown in your terminal).

### Building for Production

```bash
npm run build
# or
yarn build
```

### Linting & Formatting

```bash
npm run lint
# or
yarn lint
```

## Project Structure

```
├── public/                # Static assets (images, icons)
├── src/
│   ├── assets/            # Additional static assets
│   ├── Constants.tsx      # Centralized image and constant management
│   ├── Layouts/
│   │   └── Header/        # Header component and related UI
│   ├── User/
│   │   ├── LoginPopup.tsx         # Login modal component
│   │   └── RegistrationPopup.tsx  # Registration modal component
│   ├── App.tsx            # Main app entry
│   └── ...
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

## Figma Design

- [Figma File Link](https://www.figma.com/design/rHAai9ysSW9ZSM1Z53CnSd/Colala-PWA-Buyer?node-id=0-1&t=dqsrewfaNJtuoQ3U-1)

## Customization
- All image paths are managed in `src/Constants.tsx` for easy updates.
- To add new categories or user menu items, update the relevant arrays/components in the header.

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](LICENSE)

---

**Colala PWA Buyer** — Modern, modular, and beautiful e-commerce for the web.
