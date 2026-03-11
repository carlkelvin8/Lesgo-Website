# LeSgo Courier Services Website

A modern, high-performance courier and delivery services website built with Next.js, React, and Tailwind CSS. Features real-time tracking, multiple service offerings (food delivery, courier, errands), and a premium user experience with smooth animations.

## Features

- 🚀 **Fast & Responsive** - Optimized for all devices with Next.js 16
- 🎨 **Premium Design** - Glassmorphism effects, smooth animations, gradient backgrounds
- 📍 **Real-time Tracking** - Live GPS tracking for deliveries
- 🛡️ **Verified Riders** - Background-checked professional riders
- 💬 **AI Chatbot** - Interactive customer support
- 📱 **Mobile Optimized** - Fully responsive design
- 🔍 **SEO Ready** - Optimized metadata and schema markup
- ⚡ **Performance** - React Compiler enabled for optimal performance

## Services

- **LeSeat** - Fast food delivery service
- **LeSgo** - Courier and parcel delivery
- **LeSbuy** - Errand shopping and delivery

## Tech Stack

- **Framework**: Next.js 16.1.6
- **UI Library**: React 19.2.3
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion 12.23.12
- **Icons**: Lucide React 0.544.0
- **Language**: TypeScript 5

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/carlkelvin8/Lesgo-Website.git
cd lesgo-website

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Project Structure

```
lesgo-website/
├── src/
│   └── app/
│       ├── page.tsx              # Main landing page
│       ├── layout.tsx            # Root layout with SEO
│       ├── navbar.tsx            # Navigation bar
│       ├── footer.tsx            # Footer component
│       ├── hero.tsx              # Hero section
│       ├── ai-chatbot.tsx        # AI chatbot widget
│       ├── custom-cursor.tsx     # Custom cursor effect
│       ├── progress-bar.tsx      # Scroll progress bar
│       ├── marketing-popups.tsx  # Marketing notifications
│       ├── popup-banner.tsx      # Popup banner
│       ├── top-banner.tsx        # Top banner
│       ├── theme-provider.tsx    # Theme configuration
│       └── globals.css           # Global styles
├── public/                       # Static assets
├── next.config.ts               # Next.js configuration
├── tsconfig.json                # TypeScript configuration
├── tailwind.config.ts           # Tailwind CSS configuration
└── package.json                 # Dependencies

```

## Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your GitHub repository
5. Vercel will auto-detect Next.js and configure the build settings
6. Click "Deploy"

Your site will be live at `https://your-project.vercel.app`

### Environment Variables

Create a `.env.local` file for local development (not committed to git):

```env
# Add any environment variables here
```

## Performance Optimizations

- ✅ React Compiler enabled for automatic optimization
- ✅ Image optimization with Next.js Image component
- ✅ Font optimization with next/font
- ✅ Code splitting and lazy loading
- ✅ CSS-in-JS with Tailwind CSS
- ✅ Reduced motion support for accessibility

## SEO

The website includes:
- Optimized meta tags and descriptions
- Open Graph tags for social sharing
- Twitter card tags
- JSON-LD LocalBusiness schema markup
- Canonical URLs
- Sitemap-ready structure

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is private and proprietary to LeSgo Courier Services.

## Support

For support, email hello@lesgo.ph or visit our website.

## Changelog

### v0.1.0 (Initial Release)
- Complete landing page with all sections
- Premium UI with animations
- Responsive design
- SEO optimization
- AI chatbot integration
- Marketing popups
- Custom cursor and progress bar
