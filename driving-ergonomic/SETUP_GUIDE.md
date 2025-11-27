# Quick Setup & Customization Guide

## 🚀 Immediate Next Steps

### 1. Start the Development Server
```bash
cd driving-ergonomic
npm install
npm run dev
```
Visit http://localhost:3000

### 2. Replace Placeholder Content

#### Add Your Team Information
**File**: `app/team/page.tsx`

Find this section and update:
```typescript
const teamMembers = [
  {
    name: "Your Name Here",
    role: "Your Role (e.g., Project Lead & AI Developer)",
    bio: "Your bio description",
    image: "👤", // You can use emojis or add image paths
  },
  // Add more team members...
];
```

#### Add Your Video Link
**File**: `app/page.tsx` (Line ~135)

Replace the video placeholder section with your embedded video or link:
```html
<!-- Replace this placeholder div with your video embed -->
<iframe 
  src="YOUR_GOOGLE_DRIVE_VIDEO_LINK_HERE" 
  className="w-full aspect-video rounded-xl"
  allowFullScreen
/>
```

#### Add Resource Download Links
**File**: `app/gallery/page.tsx` (Line ~20-70)

Update the href attributes:
```tsx
<a href="YOUR_VIDEO_LINK_HERE">2-Minute Demo Video</a>
<a href="YOUR_POSTER_PPTX_LINK">Project Poster (PPTX)</a>
<a href="YOUR_POSTER_PDF_LINK">Project Poster (PDF)</a>
<a href="YOUR_ABSTRACT_DOC_LINK">Abstract (.doc)</a>
<a href="YOUR_ABSTRACT_PDF_LINK">Abstract (.pdf)</a>
```

### 3. Add Your Images

#### Project Images Location
Place your images in: `public/images/`

Then reference them in your pages:
```tsx
<img src="/images/your-image.jpg" alt="Description" />
// or with Next.js Image component:
import Image from 'next/image';
<Image src="/images/your-image.jpg" alt="Description" width={800} height={600} />
```

#### Key Places to Add Images:

1. **Home Page** (`app/page.tsx`):
   - Hero section image (line ~25)
   - Feature images

2. **Product Page** (`app/product/page.tsx`):
   - Problem illustration (line ~58)
   - Solution diagram (line ~118)

3. **Research Page** (`app/research/page.tsx`):
   - Research data visualizations (line ~130)
   - Design iteration images (line ~375-415)

4. **Gallery Page** (`app/gallery/page.tsx`):
   - Timeline milestone images (line ~130-350)
   - Gallery grid items (line ~365-465)

### 4. Customize Branding

#### Update Project Title & Tagline
**File**: `components/Navigation.tsx` & `components/Footer.tsx`

Change "SMART Drive" to your preferred name if needed.

#### Update Metadata
**File**: `app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: "Your Project Title",
  description: "Your project description",
};
```

### 5. Content Customization Checklist

- [ ] Add team member names, roles, and bios
- [ ] Upload and link project video
- [ ] Add poster download links (PPTX & PDF)
- [ ] Add abstract download links (DOC & PDF)
- [ ] Replace all placeholder images
- [ ] Update research findings with your data
- [ ] Add usability testing results
- [ ] Update timeline with your milestones
- [ ] Add your project screenshots to gallery
- [ ] Test all links and downloads

## 🎨 Design Customization

### Change Color Scheme

The site uses Tailwind CSS classes. To change colors:

**Main Colors Used:**
- Blue: `bg-blue-600`, `text-blue-600`, `border-blue-600`
- Purple: `bg-purple-600`, `text-purple-600`, `border-purple-600`
- Indigo: `bg-indigo-600`, `text-indigo-600`, `border-indigo-600`

Find and replace these throughout the files to use your preferred colors.

### Modify Layout

Each page follows this structure:
```tsx
<div className="pt-16"> {/* Accounts for fixed navigation */}
  {/* Hero Section */}
  <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
    {/* Content */}
  </section>
  
  {/* More sections */}
</div>
```

## 📱 Responsive Design

The site is already responsive! Test at different screen sizes:
- Mobile: < 640px
- Tablet: 640px - 1024px  
- Desktop: > 1024px

## 🐛 Troubleshooting

### If images don't load:
1. Ensure files are in `public/` folder
2. Reference with `/filename.ext` (leading slash)
3. Check file names match exactly (case-sensitive)

### If styles look wrong:
1. Run `npm run dev` again
2. Clear browser cache
3. Check for CSS syntax errors

### If build fails:
1. Run `npm install` again
2. Delete `.next` folder and rebuild
3. Check for TypeScript errors

## 🎯 Before Final Submission

1. ✅ Test all pages and links
2. ✅ Ensure all resources are downloadable
3. ✅ Check mobile responsiveness
4. ✅ Verify video plays correctly
5. ✅ Proofread all content
6. ✅ Test in different browsers
7. ✅ Build production version: `npm run build`
8. ✅ Deploy to hosting platform

## 📞 Need Help?

- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS Docs: https://tailwindcss.com/docs
- React Docs: https://react.dev

---

Good luck with your project! 🚀
