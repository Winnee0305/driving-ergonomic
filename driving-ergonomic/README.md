# SMART Driving Ergonomic Assistant

A modern, professional website for the SMART Driving Ergonomic Assistant project - an AI-Based Detection and Haptic Feedback system for safer driving.

## 🎯 Project Overview

This website showcases our Human Computer Interaction (HCI) project, demonstrating how AI-powered posture detection combined with haptic feedback technology can improve driving ergonomics and safety.

## ✨ Features

### 5 Main Pages

1. **Home / Landing Page** - Hero section, key features, and video demonstration
2. **About the Team** - Team member profiles, roles, and contributions
3. **About the Product** - Problem statement, solution overview, and technology stack
4. **Research & Process** - Research methodology, usability testing, and design iterations
5. **Gallery & Milestones** - Project timeline, visual gallery, and downloadable resources

## 🚀 Getting Started

### Installation

Navigate to the project directory and install dependencies:

```bash
cd driving-ergonomic
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Design Features

- **Modern Dashboard Aesthetics**: Clean, professional design with card-based layouts
- **Gradient Accents**: Blue, purple, and indigo gradients
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Smooth Animations**: Subtle transitions and hover effects
- **Consistent Branding**: Unified color palette throughout

## 📝 Customization Guide

### Adding Team Members

Edit `app/team/page.tsx` and update the `teamMembers` array.

### Adding Images/Videos

1. Place media files in the `public/` folder
2. Reference them using `/filename.ext`
3. Replace placeholder sections with your content

### Adding Resource Links

Update links in:
- `app/page.tsx` (Home page video section)
- `app/gallery/page.tsx` (Resource cards)
- `components/Footer.tsx` (Footer links)

## 📂 Project Structure

```
driving-ergonomic/
├── app/
│   ├── page.tsx          # Home page
│   ├── team/page.tsx     # Team page
│   ├── product/page.tsx  # Product page
│   ├── research/page.tsx # Research page
│   ├── gallery/page.tsx  # Gallery page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── Navigation.tsx    # Header
│   └── Footer.tsx        # Footer
└── public/               # Static assets
```

## 🛠️ Built With

- **Next.js 16** - React framework
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS
- **React 19** - UI library

## 📦 Building for Production

```bash
npm run build
npm run start
```

## 🌐 Deployment

Deploy to Vercel (recommended):
1. Push code to GitHub
2. Import repository on [Vercel](https://vercel.com)
3. Deploy automatically

## 📋 Requirements Checklist

- ✅ Minimum 5 pages with navigation
- ✅ Consistent branding
- ✅ Video link section
- ✅ Poster links (PPTX & PDF)
- ✅ Downloadable abstract
- ✅ Team information
- ✅ Product description
- ✅ Research process
- ✅ Visual timeline

## 🎓 Academic Context

**Course**: Human Computer Interaction  
**Level**: Bachelor in Computer Science - Year 3, Semester 2  
**Project**: SMART Driving Ergonomic Assistant

---

**Note**: Replace all placeholder content with your actual project materials before submission.
