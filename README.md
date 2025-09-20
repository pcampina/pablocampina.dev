# Retro Portfolio

This is a retro-themed portfolio website built with Next.js and Tailwind CSS. It features a terminal-style design and fetches project information dynamically from the GitHub API.

## Features

- Retro terminal-style design
- Dynamic project fetching from GitHub API
- Smooth scrolling navigation
- Contact form with email sending functionality
- Responsive design

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework for production
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript at scale
- [lucide-react](https://lucide.dev/) - Beautiful and consistent icons
- [Netlify](https://www.netlify.com/) - Deployment platform

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18 or later)
- pnpm (or npm/yarn)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/pcampina/pablocampina.dev.git
   ```
2. Install PNPM packages
   ```sh
   pnpm install
   ```
3. Create a `.env.local` file in the root of the project and add the following environment variables for the contact form to work:
    ```
    EMAIL_HOST=your_email_host
    EMAIL_PORT=your_email_port
    EMAIL_USER=your_email_user
    EMAIL_PASS=your_email_password
    EMAIL_TO=your_email_address
    ```
    You can copy the `.env.example` file to get started.

4. Run the development server
    ```sh
    pnpm dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This project is configured for deployment on Netlify. Simply connect your GitHub repository to Netlify and the `netlify.toml` file will handle the build settings.
