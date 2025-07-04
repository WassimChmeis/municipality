# 🏛️ Municipality Website Assets

This folder contains all static assets for the Kefraya Municipality website.

## 📁 Folder Structure

```
src/assets/
├── images/          # Photos and images
│   ├── village/     # Village photos (landscapes, landmarks)
│   ├── committee/   # Committee member photos
│   ├── projects/    # Project photos for donations
│   └── news/        # News article images
├── icons/           # Custom icons (SVG preferred)
├── logos/           # Municipality logo and official emblems
└── README.md        # This file
```

## 🖼️ How to Use Assets in Components

### 1. Images in Templates
```typescript
// In your component template
<img src="assets/images/village/kefraya-view.jpg" alt="Kefraya Village View" class="w-full h-64 object-cover">
```

### 2. Dynamic Images in TypeScript
```typescript
// In your component class
export class HomeComponent {
  villageImage = 'assets/images/village/kefraya-view.jpg';
  mayorPhoto = 'assets/images/committee/mayor-ahmad.jpg';
}
```

### 3. CSS Background Images
```css
.hero-background {
  background-image: url('assets/images/village/kefraya-panorama.jpg');
}
```

## 📋 Recommended Image Types

### Village Photos
- `kefraya-panorama.jpg` - Hero section panoramic view
- `kefraya-center.jpg` - Village center/main street
- `kefraya-mosque.jpg` - Local mosque
- `kefraya-landscape.jpg` - Surrounding landscape

### Committee Photos
- `mayor-ahmad.jpg` - Mayor Ahmad Mahmoud
- `deputy-mayor-layla.jpg` - Deputy Mayor Layla Khoury
- `committee-group.jpg` - Group photo of committee

### Project Photos
- `healthcare-center.jpg` - Healthcare center project
- `playground.jpg` - Children's playground
- `road-maintenance.jpg` - Road maintenance work

### News Images
- `community-center.jpg` - Community center opening
- `festival-2024.jpg` - Annual village festival

## 🎨 Icon Guidelines

- Use SVG format for scalability
- Maximum size: 64x64px for regular icons
- Use consistent stroke width (2px recommended)
- Follow the green/blue color scheme

## 📝 File Naming Convention

- Use kebab-case: `kefraya-village-view.jpg`
- Be descriptive: `mayor-ahmad-mahmoud.jpg`
- Include dimensions for specific sizes: `logo-municipality-256x256.png`

## 🔧 Image Optimization

- JPEG for photos (80-90% quality)
- PNG for logos/graphics with transparency
- SVG for icons and simple graphics
- WebP format for better compression (optional)

## 🌍 Multi-language Assets

For Arabic/English versions:
- `kefraya-welcome-en.jpg`
- `kefraya-welcome-ar.jpg` 