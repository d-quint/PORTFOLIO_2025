# Project Gallery Dynamic Image Loader

## Overview
This system automatically loads gallery images for project detail pages based on the HTML filename.

## Directory Structure
```
assets/img/portfolio/
├── trashscan.png              # Main project thumbnail
├── trashscan-imgs/            # Gallery images directory
│   ├── 1.png                  # Gallery image 1
│   ├── 2.png                  # Gallery image 2
│   ├── 3.png                  # Gallery image 3
│   └── ...
├── glutaga.png
├── glutaga-imgs/
│   ├── 1.png
│   └── ...
└── ...
```

## How It Works

### For HTML file: `trashscan.html`
The script looks for images in: `assets/img/portfolio/trashscan-imgs/`

### For HTML file: `glutaga.html`
The script looks for images in: `assets/img/portfolio/glutaga-imgs/`

## Setup Instructions

### Step 1: Configure Your Project

Open `assets/js/project-gallery.js` and add your project to the `galleryConfig` object:

```javascript
const galleryConfig = {
  'trashscan': [
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png'
  ],
  'your-project': [  // <-- Add your project here
    '1.png',
    '2.png',
    '3.png'
  ]
};
```

### Step 2: Add Your Images

1. Create a directory: `assets/img/portfolio/[project-name]-imgs/`
2. Add your images with the filenames listed in the config
3. Done! The gallery will automatically load them.

## Why This Approach?

**Problem:** Browsers block `fetch()` requests to local files (CORS policy), preventing us from reading `images.json` files when developing locally.

**Solution:** Configuration is embedded directly in the JavaScript file, avoiding CORS issues entirely.

**Benefits:**
- ✅ Works with `file://` protocol (local development)
- ✅ Works on web servers (production)
- ✅ Explicit control over image order
- ✅ Validates images exist before displaying
- ✅ Automatic fallback for unconfigured projects

## Fallback Behavior

If a project is not configured in `galleryConfig`, the script will:
1. Try common naming patterns (1.png, 2.png, etc.)
2. Check if each image exists
3. Display only valid images
4. Use main project thumbnail if no gallery images found

## Usage in Project Pages

### 1. Include the Script
Add to the bottom of your HTML (already included in boilerplate):

```html
<!-- Project Gallery Dynamic Loader -->
<script src="../assets/js/project-gallery.js"></script>
```

### 2. Gallery Section Structure
The gallery section should have this structure:

```html
<section class="gallery-section">
  <div class="container">
    <h2 class="text-center" data-aos="fade-up">Project Gallery</h2>
    <div class="screenshot-carousel swiper init-swiper" data-aos="fade-up" data-aos-delay="100">
      <!-- Swiper config and wrapper -->
      <div class="swiper-wrapper">
        <!-- Images will be dynamically loaded here -->
      </div>
    </div>
  </div>
</section>
```

## Helper Tool: Generate images.json

Open your browser console on any project page and run:

```javascript
generateImagesJSON(['image1.png', 'image2.png', 'image3.png'])
```

This will output properly formatted JSON that you can copy to `images.json`.

## Features

✅ **Automatic Loading** - No need to manually add `<img>` tags  
✅ **Lightbox Support** - All images open in GLightbox fullscreen  
✅ **Swiper Integration** - Automatic carousel functionality  
✅ **Fallback System** - Multiple detection methods  
✅ **Error Handling** - Graceful degradation if images not found  

## Image Recommendations

- **Format:** PNG or JPG
- **Size:** 1920x1080 or similar HD resolution
- **Optimization:** Compress images for web (use tools like TinyPNG)
- **Naming:** Use sequential numbers (1.png, 2.png) for simplicity
- **Count:** 3-6 images per project is ideal

## Troubleshooting

### Images not loading?
1. Check the directory name matches the HTML filename + `-imgs`
2. Verify `images.json` exists and is valid JSON
3. Check browser console for error messages
4. Ensure image paths are correct (case-sensitive on some servers)

### Wrong order?
- Use `images.json` method to control exact order
- Order in the JSON array = order in carousel

### Only one image showing?
- The main project thumbnail is used as fallback
- Add images to the `-imgs` directory

## Example Setup

For `trashscan.html`:

```bash
# Create directory
mkdir assets/img/portfolio/trashscan-imgs

# Add your images
# - trashscan-imgs/1.png
# - trashscan-imgs/2.png
# - trashscan-imgs/3.png

# Create images.json
echo '{"images": ["1.png", "2.png", "3.png"]}' > assets/img/portfolio/trashscan-imgs/images.json
```

Done! The gallery will automatically load these 3 images.
