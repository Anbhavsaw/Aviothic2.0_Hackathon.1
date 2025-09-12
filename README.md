# Aviothic 2.0 - Internal Hackathon Website

A fully responsive, modern internal hackathon website built with React and Tailwind CSS. Features a dark theme with blue accents, smooth animations, and optimized for all devices.

## 🚀 Features

- **Fully Responsive Design** - Optimized for desktop, tablet, and mobile
- **Dark Theme** - Professional blackish background with blue accents
- **Smooth Animations** - Subtle hover effects and transitions
- **SEO Optimized** - Meta tags, alt text, and performance optimized
- **Modern UI/UX** - Clean typography and intuitive navigation
- **Interactive Components** - Image sliders, coordinator cards, and smooth scrolling

## 📋 Sections

1. **Header/Navbar** - Sticky navigation with mobile hamburger menu
2. **Hero Section** - Full-screen landing with event details
3. **About Section** - Event information and Aviothic 1.0 history slider
4. **Themes Section** - Innovation domains with interactive cards
5. **Rewards Section** - Prize pool and recognition details
6. **Registration Section** - Team registration information and rules
7. **Coordinators Section** - Team member profiles with slider
8. **Contact Section** - Contact information and social links
9. **Footer Section** - Links, logos, and additional information

## 🛠️ Tech Stack

- **React 18** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript (JSX)** - No TypeScript, pure JSX
- **Responsive Design** - Mobile-first approach
- **Modern CSS** - Custom animations and transitions

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd aviothic-hackathon
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the website

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Customization

### Colors
The website uses a custom color palette defined in `tailwind.config.js`:
- **Primary Blue**: Various shades for buttons and accents
- **Dark Theme**: Blackish backgrounds with gray variations
- **Gradients**: Blue gradients for text and backgrounds

### Components
All components are modular and can be easily customized:
- Located in `src/components/`
- Each component is self-contained
- Props can be added for dynamic content

### Styling
- Global styles in `src/index.css`
- Component-specific styles using Tailwind classes
- Custom animations and transitions defined in Tailwind config

## 📝 Content Updates

### Event Details
Update the following files for event-specific information:
- `src/components/Hero.js` - Main event details
- `src/components/About.js` - Event description and history
- `src/components/Registration.js` - Registration rules and fees

### Coordinators
Update coordinator information in `src/components/Coordinators.js`:
- Add/remove coordinator objects
- Update profile images, names, roles, and descriptions
- Modify LinkedIn links

### Contact Information
Update contact details in `src/components/Contact.js`:
- Email addresses
- Phone numbers
- Social media links
- Venue information

## 🔗 External Links

The website includes placeholder links that should be updated:
- **Registration Form**: `https://forms.google.com/register`
- **Social Media**: Instagram, Twitter, LinkedIn profiles
- **Maps**: Google Maps venue link

## 📸 Images

The website uses placeholder images from `/api/placeholder/`. Replace with actual images:
- Coordinator profile photos
- Aviothic 1.0 history images
- Event photos and graphics

## 🚀 Deployment

### Netlify
1. Build the project: `npm run build`
2. Drag the `build` folder to Netlify
3. Configure custom domain if needed

### Vercel
1. Connect your GitHub repository
2. Vercel will automatically detect React and build
3. Deploy with zero configuration

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
3. Deploy: `npm run deploy`

## 📊 Performance

The website is optimized for:
- **Fast Loading** - Minimal dependencies and optimized assets
- **SEO** - Meta tags, structured data, and semantic HTML
- **Accessibility** - Alt text, ARIA labels, and keyboard navigation
- **Mobile Performance** - Responsive images and touch-friendly interactions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support or questions:
- Email: aviothic2.0@kit.ac.in
- Phone: +91 98765 43210
- Contact section on the website

---

**Built with ❤️ for Aviothic 2.0 Hackathon**










