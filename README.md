# Kyma Website

Website for the [Kyma TUI](https://github.com/museslabs/kyma) tool. Built with React, TypeScript, and Framer Motion for smooth animations and interactive elements.

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS 4.x with custom design system
- **Animations**: Framer Motion 12.x
- **State Management**: TanStack Query for server state
- **Build Tool**: Vite 6.x
- **GitHub API**: Octokit for fetching release data
- **Fonts**: Geist Sans & Geist Mono

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd kyma-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Add your GitHub token to `.env`:
   ```env
   VITE_GITHUB_TOKEN=your_github_token_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

### Environment Configuration

The website requires a GitHub token to fetch the latest Kyma release version:

1. Create a GitHub Personal Access Token with `public_repo` permissions
2. Add it to your `.env` file as `VITE_GITHUB_TOKEN`
3. The website will automatically display the latest release tag

### Components

```
src/components/
├── ui/
│   ├── hero.tsx          # Main hero section
│   ├── typewriter-effect.tsx  # Animated typewriter component
│   └── button.tsx        # Reusable button component
```

## Contributing

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Run the linter**
   ```bash
   npm run lint
   ```
5. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
6. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### Development Guidelines

- Follow the existing TypeScript and React patterns
- Use semantic commit messages
- Ensure all animations are performant and accessible
- Test responsive design across different screen sizes
- Maintain the terminal/CLI aesthetic in new features

## Acknowledgements

- **[Framer Motion](https://www.framer.com/motion/)** - For incredible animation capabilities
- **[Tailwind CSS](https://tailwindcss.com/)** - For the utility-first CSS framework
- **[Geist Font](https://vercel.com/font)** - For the beautiful typography
- **[Lucide React](https://lucide.dev/)** - For the clean, consistent icons
- **[shadcn/ui](https://ui.shadcn.com/)** - For component design inspiration
- **[Aceternity](https://ui.aceternity.com/)** - For the Typewriter Component
