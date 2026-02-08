# Content-Management-Kit

A modern, full-featured Content Management System (CMS) landing page and admin dashboard built with Next.js 15, React 19, and TypeScript. This project provides a comprehensive solution for managing websites, pages, templates, and user authentication with a beautiful and responsive user interface.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Dependencies](#dependencies)
- [Development](#development)
- [Building for Production](#building-for-production)

---

## Features

✨ **Key Features:**

- 🔐 User authentication with OTP verification
- 👥 User profile management
- 📄 Page management system
- 🎨 Website theme customization
- 📑 Template management
- 📊 Dashboard with analytics
- 🎯 Product and order management
- 💾 File upload capabilities
- 🌙 Dark/Light theme support
- 📱 Fully responsive design
- 🛡️ Form validation with React Hook Form
- 🔄 State management with Zustand
- 🌐 RESTful API integration with Axios

---

## Tech Stack

### Framework & Core

- **Next.js 15.2.3** - React framework with server-side rendering and static generation
- **React 19.0.0** - Modern React library for building user interfaces
- **TypeScript 5** - Static typing for JavaScript
- **Node.js 20+** - JavaScript runtime environment

### State Management & Forms

- **Zustand 5.0.3** - Lightweight state management library
- **React Hook Form 7.55.0** - Performant, flexible form validation
- **@hookform/resolvers 5.0.1** - Validation resolvers for React Hook Form
- **Yup 1.6.1** - Schema validation library

### UI & Styling

- **Tailwind CSS 4.0.0** - Utility-first CSS framework
- **@tailwindcss/postcss 4.0.14** - PostCSS plugin for Tailwind CSS
- **Autoprefixer 10.0.1** - PostCSS plugin to parse CSS and add vendor prefixes
- **Tailwind Merge 3.0.2** - Utility to merge Tailwind CSS classes
- **CLSX 2.1.1** - Utility for constructing conditional className strings

### HTTP & API

- **Axios 1.8.3** - Promise-based HTTP client for making API requests
- **Bearer Token Authentication** - JWT token-based API authentication

### UI Components & Notifications

- **React Hot Toast 2.5.2** - Notification library for toast messages
- **React Loading Skeleton 3.5.0** - Loading skeleton component library
- **Custom UI Components** - Button, Input, Modal, Dropdown, FileUploader, etc.

### Development Tools

- **ESLint 9** - JavaScript linter for code quality
- **ESLint Config Next 15.2.3** - ESLint configuration for Next.js
- **PostCSS 8** - Tool for transforming CSS
- **@types/\* packages** - TypeScript type definitions for React and Node.js

### Build & Deployment

- **Docker** - Containerization support (Dockerfile included)
- **Turbopack** - Next.js bundler for fast development builds

---

## Project Structure

```
Content-Management-Kit/
├── public/                          # Static assets
│   └── assets/
│       └── fonts/                  # Custom fonts (IranSans, Morabba)
├── src/
│   ├── app/                        # Next.js app directory
│   │   ├── layout.tsx              # Root layout component
│   │   ├── page.tsx                # Landing page
│   │   ├── not-found.tsx           # 404 page
│   │   ├── globals.css             # Global styles
│   │   ├── auth/                   # Authentication pages
│   │   │   ├── login/
│   │   │   │   ├── page.tsx
│   │   │   │   └── OTPVerify.tsx
│   │   │   └── signup/
│   │   │       └── page.tsx
│   │   ├── themes/                 # Theme management page
│   │   ├── web-info/               # Website info management
│   │   ├── websites/               # Website management
│   │   └── (other routes)
│   ├── components/                 # React components
│   │   └── ui/                     # Reusable UI components
│   │       ├── AppBar/
│   │       ├── Button/
│   │       ├── CheckBox/
│   │       ├── ColorBox/
│   │       ├── DropDown/
│   │       ├── FileUploader/
│   │       ├── FontBox/
│   │       ├── Icons/              # Icon components
│   │       ├── IconBox/
│   │       ├── ItemsBox/
│   │       ├── Modal/
│   │       ├── MultiSelect/
│   │       ├── TextInput/
│   │       ├── TextArea/
│   │       ├── Toast/
│   │       ├── ToolTip/
│   │       ├── UserProfile/
│   │       └── (other components)
│   ├── constants/                  # Constants and configuration
│   │   ├── api.ts                  # API endpoints
│   │   ├── PageUrls.ts             # Route definitions
│   │   └── index.tsx
│   ├── hooks/                      # Custom React hooks
│   │   ├── useFetch.ts             # Data fetching hook
│   │   ├── usePost.ts              # POST request hook
│   │   ├── usePut.ts               # PUT request hook
│   │   ├── useDelete.ts            # DELETE request hook
│   │   └── useOutsideClick.ts      # Click outside detection
│   ├── services/                   # API services
│   │   ├── index.ts                # Axios instance setup
│   │   ├── auth.d.ts               # Auth service types
│   │   ├── pages.d.ts              # Pages service types
│   │   ├── templates.d.ts          # Templates service types
│   │   └── website.d.ts            # Website service types
│   ├── store/                      # Zustand state stores
│   │   ├── useUserInfo.ts          # User info state
│   │   └── useWebInfoStore.ts      # Web info state
│   ├── types/                      # TypeScript type definitions
│   │   └── index.d.ts
│   └── utils/                      # Utility functions
│       ├── addCommas.ts
│       ├── toPersianDigits.ts
│       ├── getCurrentPageSize.ts
│       ├── Uploader.ts
│       └── index.ts
├── Dockerfile                       # Docker configuration
├── eslint.config.mjs               # ESLint configuration
├── next.config.ts                  # Next.js configuration
├── tsconfig.json                   # TypeScript configuration
├── postcss.config.mjs              # PostCSS configuration
├── tailwind.config.ts              # Tailwind CSS configuration
├── package.json                    # Project dependencies
└── README.md                        # This file
```

---

## Installation

### Prerequisites

- **Node.js**: Version 18.17 or higher
- **npm** or **yarn**: Package manager

### Setup Steps

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd landing
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables**
   Create a `.env.local` file in the root directory (see [Environment Variables](#environment-variables) section)

---

## Getting Started

### Development Server

Start the development server with Turbopack for fast builds:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

---

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# API Configuration
NEXT_PUBLIC_API_URL=<your-api-base-url>

# Example:
# NEXT_PUBLIC_API_URL=https://api.example.com/v1
```

**Important Notes:**

- Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser
- Private API keys should be stored in `.env.local` without the `NEXT_PUBLIC_` prefix
- Store sensitive data in environment variables, never commit them to version control

---

## Available Scripts

```bash
# Development - runs with Turbopack for optimal performance
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run ESLint to check code quality
npm run lint
```

---

## Dependencies

### Production Dependencies

| Package                    | Version | Purpose                              |
| -------------------------- | ------- | ------------------------------------ |
| **Next.js**                | 15.2.3  | React framework with SSR/SSG support |
| **React**                  | 19.0.0  | UI library                           |
| **React DOM**              | 19.0.0  | React DOM binding                    |
| **TypeScript**             | 5.x     | Static typing                        |
| **Zustand**                | 5.0.3   | State management                     |
| **React Hook Form**        | 7.55.0  | Form state management                |
| **@hookform/resolvers**    | 5.0.1   | Form validation resolvers            |
| **Yup**                    | 1.6.1   | Schema validation                    |
| **Axios**                  | 1.8.3   | HTTP client                          |
| **Tailwind CSS**           | 4.0.0   | CSS framework                        |
| **@tailwindcss/postcss**   | 4.0.14  | Tailwind PostCSS plugin              |
| **Tailwind Merge**         | 3.0.2   | Merge Tailwind classes               |
| **CLSX**                   | 2.1.1   | Conditional className utility        |
| **React Hot Toast**        | 2.5.2   | Toast notifications                  |
| **React Loading Skeleton** | 3.5.0   | Loading skeletons                    |

### Development Dependencies

| Package                | Version | Purpose                    |
| ---------------------- | ------- | -------------------------- |
| **TypeScript**         | 5.x     | Type checking              |
| **ESLint**             | 9.x     | Code linting               |
| **ESLint Config Next** | 15.2.3  | Next.js ESLint rules       |
| **Autoprefixer**       | 10.0.1  | CSS vendor prefixes        |
| **PostCSS**            | 8.x     | CSS transformation         |
| **@types/node**        | 20.x    | Node.js type definitions   |
| **@types/react**       | 19.x    | React type definitions     |
| **@types/react-dom**   | 19.x    | React DOM type definitions |

---

## Development

### Code Quality

This project uses ESLint to maintain code quality standards. Run the linter:

```bash
npm run lint
```

### Key Features to Understand

#### Authentication

- **Location**: `src/app/auth/`
- Users can login with OTP verification
- Authentication token is stored in localStorage
- API requests automatically include the Bearer token via Axios interceptors

#### State Management with Zustand

- **Location**: `src/store/`
- `useUserInfo.ts` - Manages user information
- `useWebInfoStore.ts` - Manages website information

#### Custom Hooks

- **Location**: `src/hooks/`
- `useFetch.ts` - GET requests
- `usePost.ts` - POST requests
- `usePut.ts` - PUT requests
- `useDelete.ts` - DELETE requests
- `useOutsideClick.ts` - Detects clicks outside elements

#### UI Components

- **Location**: `src/components/ui/`
- Pre-built reusable components like Button, Modal, Input, etc.
- Icon components for commonly used icons

#### API Integration

- **Location**: `src/services/index.ts`
- Axios instance with automatic Bearer token injection
- 401 error handling with automatic logout

---

## Building for Production

### Build the Application

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

### Run Production Build

```bash
npm start
```

The application will be available at `http://localhost:3000`

### Docker Support

A Dockerfile is included for containerization:

```bash
# Build Docker image
docker build -t content-management-kit:latest .

# Run Docker container
docker run -p 3000:3000 content-management-kit:latest
```

---

## Project Information

- **Project Name**: Content-Management-Kit
- **Version**: 0.1.0
- **License**: Proprietary
- **Private**: Yes

---

## Support & Contribution

For bug reports, feature requests, or contributions, please contact the development team or submit an issue through the project repository.

---

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Zustand Documentation](https://zustand-demo.vercel.app)
- [React Hook Form Documentation](https://react-hook-form.com)
- [Axios Documentation](https://axios-http.com)

---

**Last Updated**: February 2026
