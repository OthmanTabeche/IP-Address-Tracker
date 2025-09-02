# 🌍 IP Address Tracker

A modern, responsive web application that tracks and displays detailed information about IP addresses with interactive maps. Built with React, TypeScript, and modern web technologies.

![IP Address Tracker](https://img.shields.io/badge/React-19.1.1-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.0.4-646CFF?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.11-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- **🌐 Real-time IP Detection**: Automatically detects and displays your current IP address
- **📍 Interactive Maps**: Beautiful, zoomable maps powered by Leaflet showing exact location
- **📊 Comprehensive Data**: Detailed information including:
  - IP Address
  - Geographic location (Country, Region, City)
  - Timezone information
  - ISP details
  - Network information
- **🎨 Modern UI/UX**: Clean, responsive design with beautiful background patterns
- **⚡ Fast Performance**: Built with Vite for lightning-fast development and builds
- **📱 Mobile Responsive**: Optimized for all device sizes
- **🔒 Type Safe**: Full TypeScript implementation for robust development

## 🚀 Live Demo

[View Live Demo](https://ip-address-tracker-six-delta.vercel.app/)

## 🛠️ Tech Stack

### Frontend
- **React 19.1.1** - Modern React with latest features
- **TypeScript 5.8.3** - Type-safe JavaScript
- **Vite 7.0.4** - Fast build tool and dev server
- **Tailwind CSS 4.1.11** - Utility-first CSS framework

### Maps & APIs
- **Leaflet 1.9.4** - Open-source mapping library
- **React Leaflet 5.0.0** - React components for Leaflet
- **IPAPI.co** - IP geolocation API

### Development Tools
- **ESLint** - Code linting and formatting
- **TypeScript ESLint** - TypeScript-specific linting rules

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ip-address-tracker.git
   cd ip-address-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Build & Deploy

### Development
```bash
npm run dev          # Start development server
npm run lint         # Run ESLint
```

### Production
```bash
npm run build        # Build for production
npm run preview      # Preview production build
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── InfoIp.tsx      # IP information display
│   └── Map.tsx         # Interactive map component
├── types/              # TypeScript type definitions
│   └── dataType.ts     # IP data interface
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## 🎯 Key Components

### InfoIp Component
- Displays comprehensive IP information
- Beautiful card-based layout with background patterns
- Responsive design with proper spacing and typography
- Loading states and error handling

### Map Component
- Interactive Leaflet map integration
- Automatic centering on IP location
- Custom zoom levels for optimal viewing
- Marker with popup information

## 🔧 Configuration

### Environment Variables
No environment variables required - the app uses public APIs.

### API Integration
- **IPAPI.co**: Free IP geolocation service
- **OpenStreetMap**: Free map tiles
- **Leaflet**: Client-side mapping

## 🎨 Design Features

- **Modern UI**: Clean, professional design
- **Background Patterns**: Beautiful desktop/mobile patterns
- **Responsive Layout**: Works perfectly on all devices
- **Smooth Animations**: Subtle transitions and hover effects
- **Typography**: Carefully chosen fonts and spacing
- **Color Scheme**: Professional color palette

## 🚀 Performance Optimizations

- **Vite Build System**: Fast development and optimized production builds
- **React 19**: Latest React features for better performance
- **Lazy Loading**: Components load only when needed
- **Optimized Assets**: Compressed images and efficient CSS

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Othman

**Othman Tabeche**
- LinkedIn: [My LinkedIn](https://www.linkedin.com/in/othmantabeche/)

## 🙏 Acknowledgments

- [IPAPI.co](https://ipapi.co/) for providing the IP geolocation API
- [Leaflet](https://leafletjs.com/) for the amazing mapping library
- [OpenStreetMap](https://www.openstreetmap.org/) for free map tiles
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

---

⭐ **Star this repository if you found it helpful!**