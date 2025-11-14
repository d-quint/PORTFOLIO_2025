# Portfolio Website Structure & Style Guide

> **Purpose**: This document serves as a comprehensive reference for the existing structure, styles, and patterns used in Dane Ross Quintano's portfolio website. Use this as context when creating new pages or modifying existing ones.

**Last Updated**: November 14, 2025  
**Project**: PORTFOLIO_2025

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [HTML Structure Patterns](#html-structure-patterns)
4. [CSS Architecture](#css-architecture)
5. [JavaScript Functionality](#javascript-functionality)
6. [Design System](#design-system)
7. [Component Library](#component-library)
8. [Page Templates](#page-templates)
9. [Best Practices](#best-practices)

---

## Project Overview

### Description
A modern, responsive portfolio website showcasing professional profile, projects, education, skills, and achievements. The site uses a clean, professional design with animations and interactive elements.

### File Structure
```
QUINTANO_FOLDER/
├── index.html                  # Homepage with hero, about, services preview, contact
├── education.html              # Academic background
├── experience.html             # Work experience
├── skills.html                 # Technical and soft skills
├── certification.html          # Professional certifications
├── advocacy.html               # Values and advocacy
├── portfolio.html              # Project showcase
├── assets/
│   ├── css/
│   │   └── main.css           # Main stylesheet (2376 lines)
│   ├── js/
│   │   └── main.js            # Main JavaScript functionality
│   ├── img/
│   │   ├── profile/           # Profile images
│   │   ├── portfolio/         # Project screenshots
│   │   └── misc/              # Signature, logos, etc.
│   ├── vendor/                # Third-party libraries
│   │   ├── bootstrap/
│   │   ├── bootstrap-icons/
│   │   ├── aos/               # Animate On Scroll
│   │   ├── glightbox/         # Lightbox for images
│   │   ├── swiper/            # Slider/carousel
│   │   ├── isotope-layout/    # Filtering and layout
│   │   ├── imagesloaded/
│   │   └── waypoints/
│   └── videos/                # Project demo videos
└── forms/
    └── contact.php            # Contact form handler
```

---

## Tech Stack

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Custom properties (CSS variables), Flexbox, Grid
- **JavaScript (ES6+)**: Vanilla JS, no frameworks

### Libraries & Frameworks
| Library | Version | Purpose |
|---------|---------|---------|
| Bootstrap | 5.x | Grid system, utilities |
| Bootstrap Icons | Latest | Icon set |
| AOS (Animate On Scroll) | Latest | Scroll animations |
| GLightbox | Latest | Image/video lightbox |
| Isotope | Latest | Filtering & masonry layouts |
| ImagesLoaded | Latest | Image loading detection |
| Waypoints | Latest | Scroll-triggered events |
| Swiper | Latest | Carousels/sliders |

### Fonts
- **Primary**: Questrial (400)
- **Fallback**: System fonts (-apple-system, Segoe UI, Roboto, etc.)
- **Google Fonts**: Roboto, Noto Sans, Questrial

---

## HTML Structure Patterns

### Standard Page Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <title>[Page Title] - Professional Profile</title>
  <meta name="description" content="[Page description]">
  <meta name="keywords" content="[keywords]">

  <!-- Favicons -->
  <link href="assets/img/favicon.png" rel="icon">
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

  <!-- Fonts -->
  <link href="https://fonts.googleapis.com" rel="preconnect">
  <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Questrial:wght@400&display=swap" rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  <link href="assets/vendor/aos/aos.css" rel="stylesheet">
  <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
  <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">

  <!-- Main CSS File -->
  <link href="assets/css/main.css" rel="stylesheet">
</head>

<body class="index-page">
  <!-- Header -->
  <header id="header" class="header d-flex align-items-center sticky-top">
    <!-- Header content -->
  </header>

  <main class="main">
    <!-- Page Title (for non-homepage) -->
    <div class="page-title" data-aos="fade">
      <div class="container">
        <nav class="breadcrumbs">
          <ol>
            <li><a href="index.html">Home</a></li>
            <li class="current">[Page Name]</li>
          </ol>
        </nav>
      </div>
    </div>

    <!-- Main Content Sections -->
    <section id="[section-id]" class="[section-class] section">
      <!-- Section content -->
    </section>
  </main>

  <!-- Scroll Top Button -->
  <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center">
    <i class="bi bi-arrow-up-short"></i>
  </a>

  <!-- Vendor JS Files -->
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/php-email-form/validate.js"></script>
  <script src="assets/vendor/aos/aos.js"></script>
  <script src="assets/vendor/waypoints/noframework.waypoints.js"></script>
  <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
  <script src="assets/vendor/imagesloaded/imagesloaded.pkgd.min.js"></script>
  <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>

  <!-- Main JS File -->
  <script src="assets/js/main.js"></script>
</body>
</html>
```

### Header Structure (Consistent Across All Pages)

```html
<header id="header" class="header d-flex align-items-center sticky-top">
  <div class="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
    
    <!-- Logo -->
    <a href="index.html" class="logo d-flex align-items-center me-auto me-xl-0">
      <img src="assets/img/logo.png" alt="Dane Logo" style="max-height: 40px; margin-right: 10px;">
      <h1 class="sitename"><strong>Dane Ross</strong></h1>
    </a>

    <!-- Navigation Menu -->
    <nav id="navmenu" class="navmenu">
      <ul>
        <li><a href="index.html" class="active">Home</a></li>
        <li><a href="education.html">Education</a></li>
        <li><a href="experience.html">Experience</a></li>
        <li><a href="skills.html">Skills</a></li>
        <li><a href="certification.html">Certification & Training</a></li>
        <li><a href="advocacy.html">Advocacy</a></li>
        <li><a href="portfolio.html">Portfolio</a></li>
        <li><a href="index.html#contact">Contact</a></li>
      </ul>
      <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
    </nav>

    <!-- Social Links -->
    <div class="header-social-links">
      <a href="https://github.com/d-quint" target="_blank" class="github">
        <i class="bi bi-github"></i>
      </a>
      <a href="https://linkedin.com/in/drquintano/" target="_blank" class="linkedin">
        <i class="bi bi-linkedin"></i>
      </a>
      <a href="mailto:quintanodr@gmail.com" class="email">
        <i class="bi bi-envelope"></i>
      </a>
    </div>
  </div>
</header>
```

---

## CSS Architecture

### CSS Variables (Design Tokens)

```css
/* Fonts */
:root {
  --default-font: "Questrial", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  --heading-font: "Questrial", sans-serif;
  --nav-font: "Questrial", sans-serif;
}

/* Colors */
:root { 
  --background-color: #ffffff;
  --default-color: #0a0f14;          /* Text color */
  --heading-color: #0f2943;          /* Headings */
  --accent-color: #07a255;           /* Brand green */
  --surface-color: #ffffff;          /* Cards, boxes */
  --contrast-color: #ffffff;         /* Text on accent */
}

/* Navigation Colors */
:root {
  --nav-color: #0a0f14;
  --nav-hover-color: #07a255;
  --nav-mobile-background-color: #ffffff;
  --nav-dropdown-background-color: #ffffff;
  --nav-dropdown-color: #0a0f14;
  --nav-dropdown-hover-color: #07a255;
}

/* Global Settings */
:root {
  letter-spacing: -0.25px;
  scroll-behavior: smooth;
}
```

### Color Presets

```css
/* Light Background */
.light-background {
  --background-color: #faf9fb;
  --surface-color: #ffffff;
}

/* Dark Background */
.dark-background {
  --background-color: #060606;
  --default-color: #ffffff;
  --heading-color: #ffffff;
  --surface-color: #252525;
  --contrast-color: #ffffff;
}
```

### Spacing & Layout Conventions

- **Section Padding**: `30px 0` (mobile), `60px 0` or `80px 0` (desktop)
- **Container**: Uses Bootstrap's `.container` (max-width: 1140px on lg+)
- **Gaps**: Bootstrap's gap utilities (`g-4`, `g-5`) or custom `15px`, `20px`
- **Border Radius**: Cards: `10px-15px`, Buttons: `20px-50px` (pill-shaped)
- **Box Shadows**: `0 5px 25px rgba(0,0,0,0.05)` for cards

---

## Design System

### Typography

| Element | Font Size | Weight | Line Height | Color |
|---------|-----------|--------|-------------|-------|
| H1 (Hero) | 3.5rem (2.5rem mobile) | 700 | 1.2 | --heading-color |
| H2 (Section Title) | 42px (32px mobile) | 700 | 1.2 | --heading-color (gradient) |
| H3 | 1.25rem - 2rem | 600-700 | 1.2-1.4 | --heading-color |
| Body Text | 15-16px | 400 | 1.6-1.8 | --default-color |
| Lead Text | 1.1-1.25rem | 400 | 1.6-1.8 | color-mix transparent 20-25% |
| Small Text | 0.875-0.9rem | 400-500 | 1.4-1.6 | color-mix transparent 40% |

### Color Palette

```css
/* Primary Colors */
--accent-color: #07a255;           /* Brand Green */
--heading-color: #0f2943;          /* Dark Blue */
--default-color: #0a0f14;          /* Almost Black */

/* Gradients */
background: linear-gradient(120deg, var(--heading-color), var(--accent-color));

/* Color Mixing (transparency) */
color-mix(in srgb, var(--accent-color), transparent 25%)   /* 75% opacity */
color-mix(in srgb, var(--default-color), transparent 50%)  /* 50% opacity */
```

### Animations

#### AOS (Animate On Scroll)
```html
<!-- Fade up with delay -->
<div data-aos="fade-up" data-aos-delay="100">Content</div>

<!-- Fade left/right -->
<div data-aos="fade-left" data-aos-delay="200">Content</div>
<div data-aos="fade-right" data-aos-delay="200">Content</div>

<!-- Common delays: 100, 200, 300, 400, 500, 600 -->
```

**AOS Settings (main.js)**:
```javascript
AOS.init({
  duration: 600,
  easing: 'ease-in-out',
  once: true,
  mirror: false
});
```

#### CSS Transitions
```css
/* Standard transition */
transition: all 0.3s ease;
transition: 0.3s;

/* Transform effects */
transition: transform 0.3s ease;
transform: translateY(-10px);  /* Hover lift */
transform: scale(1.05);         /* Hover scale */
```

#### Custom Keyframe Animations

**Shooting Stars (Hero Section)**:
```css
@keyframes shoot {
  0% {
    transform: translateX(0) translateY(0) rotate(20deg);
    opacity: 1;
  }
  100% {
    transform: translateX(120vw) translateY(50vh) rotate(20deg);
    opacity: 0;
  }
}
```

**Morph Shape**:
```css
@keyframes morphShape {
  0% { border-radius: 30% 70% 70% 30%/30% 30% 70% 70%; }
  25% { border-radius: 58% 42% 75% 25%/76% 46% 54% 24%; }
  50% { border-radius: 50% 50% 33% 67%/55% 27% 73% 45%; }
  75% { border-radius: 33% 67% 58% 42%/63% 68% 32% 37%; }
  100% { border-radius: 30% 70% 70% 30%/30% 30% 70% 70%; }
}
```

**Color Shift (Hero Name)**:
```css
@keyframes colorShift {
  0% {
    color: #07a255;
    text-shadow: 0 0 20px rgba(7, 162, 85, 0.8);
  }
  50% {
    color: #06c17c;
    text-shadow: 0 0 20px rgba(6, 240, 166, 0.8);
  }
  100% {
    color: #07a255;
    text-shadow: 0 0 20px rgba(7, 162, 85, 0.8);
  }
}
```

---

## Component Library

### 1. Section Title

```html
<div class="container section-title" data-aos="fade-up">
  <h2>Section Title</h2>
  <div class="title-shape">
    <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" 
            fill="none" stroke="currentColor" stroke-width="2"></path>
    </svg>
  </div>
  <p>Optional subtitle/description text goes here</p>
</div>
```

**Features**:
- Gradient text effect on h2
- Decorative SVG wave shape
- Centered layout
- Max-width: 700px for description

### 2. Service/Feature Cards

```html
<div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
  <div class="service-item h-100">
    <i class="bi bi-mortarboard icon"></i>
    <h3><a href="page.html">Card Title</a></h3>
    <p>Description text about this service or feature.</p>
    <a href="page.html" class="btn btn-sm btn-outline-primary mt-3">View Details</a>
  </div>
</div>
```

**CSS**:
- Background: `var(--surface-color)`
- Padding: `30px`
- Border-radius: `10px`
- Box-shadow: `0 5px 15px rgba(0,0,0,0.1)`
- Hover: `transform: scale(1.05)`

### 3. Timeline (Education/Experience)

```html
<div class="timeline">
  <div class="timeline-item" data-aos="fade-up" data-aos-delay="200">
    <div class="timeline-left">
      <h4 class="company">Company/Institution Name</h4>
      <span class="period">2022 - 2026</span>
    </div>
    <div class="timeline-dot"></div>
    <div class="timeline-right">
      <h3 class="position">Position/Degree Title</h3>
      <p class="description">Brief description of the role or program.</p>
      <ul>
        <li>Achievement or detail 1</li>
        <li>Achievement or detail 2</li>
      </ul>
    </div>
  </div>
</div>
```

**Features**:
- Vertical line connecting dots
- Left side: Company name + dates (20% width)
- Right side: Details (70% width)
- Responsive: Stacks vertically on mobile

### 4. Portfolio Card

```html
<div class="col-lg-4 col-md-6 isotope-item filter-[category]">
  <div class="portfolio-card">
    <!-- Image with overlay -->
    <div class="portfolio-image">
      <img src="assets/img/portfolio/project.png" alt="Project" class="img-fluid">
      <div class="portfolio-overlay">
        <div class="portfolio-actions">
          <a href="assets/img/portfolio/project.png" class="glightbox" 
             title="Project Name">
            <i class="bi bi-zoom-in"></i>
          </a>
          <a href="#" class="portfolio-video-btn" 
             data-video="path/to/video.mp4" 
             data-bs-toggle="modal" data-bs-target="#videoModal">
            Demo Video
          </a>
        </div>
      </div>
    </div>
    
    <!-- Content -->
    <div class="portfolio-content">
      <span class="category">Category Name</span>
      <h3>Project Title</h3>
      <p>Brief description of the project and its purpose.</p>
      
      <!-- Tech Stack Badges -->
      <div class="tech-stack mt-3 mb-3">
        <span class="tech-badge">React</span>
        <span class="tech-badge">Node.js</span>
        <span class="tech-badge">MongoDB</span>
      </div>
      
      <!-- Project Links -->
      <div class="project-links">
        <a href="https://github.com/..." target="_blank" 
           class="btn btn-sm btn-outline-primary me-2">
          <i class="bi bi-github me-1"></i> GitHub
        </a>
        <a href="https://demo.com" target="_blank" 
           class="btn btn-sm btn-outline-primary">
          <i class="bi bi-box-arrow-up-right me-1"></i> Live Demo
        </a>
      </div>
    </div>
  </div>
</div>
```

**Special Features**:
- Hover overlay with actions
- Image zoom on hover: `transform: scale(1.1)`
- Card lift: `transform: translateY(-10px)`
- Award medals for winning projects

### 5. Award Medal (Portfolio)

```html
<div class="award-medal">
  <i class="bi bi-trophy-fill"></i>
</div>
<div class="award-tooltip">
  <span class="award-primary">🥈 Second Place<br>🌟 Most Innovative<br>🤖 Best Use of AI</span>
  <span class="award-secondary">TechHustle Hackathon 2024</span>
  <a href="proof-url" target="_blank">View Proof</a>
</div>
```

**Structure**:
- **Primary Text** (`.award-primary`): Main achievement/placement
  - Bold, gold color (#ffd700)
  - Larger font (14px)
  - Can include emojis and line breaks
- **Secondary Text** (`.award-secondary`): Contest/competition name
  - Regular weight, lighter color (85% white)
  - Smaller font (12px)
  - Context information

**CSS**:
- Position: `absolute` (top: 60px, right: 15px)
- Gold gradient background with gold border
- Hover: Scale and rotate effect
- Tooltip appears on hover with smooth transition

### 6. Certification Card

```html
<div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
  <div class="cert-card" style="background: var(--surface-color); border-radius: 12px; 
       box-shadow: 0 4px 20px rgba(0,0,0,0.08); overflow: hidden; 
       border-top: 3px solid var(--accent-color); height: 100%;">
    <div class="p-4">
      <!-- Icon + Title -->
      <div class="d-flex align-items-start justify-content-between mb-3">
        <div class="d-flex align-items-center gap-3">
          <i class="bi bi-award-fill" style="font-size: 2.5rem; color: var(--accent-color);"></i>
          <div>
            <h4 class="mb-1" style="font-size: 1.1rem; font-weight: 600;">Certification Name</h4>
            <small class="text-muted">Issuing Organization</small>
          </div>
        </div>
        <span class="badge" style="background: var(--accent-color); font-size: 0.7rem;">ACTIVE</span>
      </div>
      
      <!-- Info Cards -->
      <div class="row g-2 mb-3">
        <div class="col-6">
          <div class="info-mini-card p-2" style="background: rgba(7, 162, 85, 0.1); 
               border-radius: 8px; text-align: center;">
            <small class="d-block text-muted" style="font-size: 0.7rem;">Score</small>
            <strong style="font-size: 1.1rem; color: var(--accent-color);">1000/1000</strong>
          </div>
        </div>
        <!-- More info cards... -->
      </div>
      
      <!-- Description -->
      <p class="mb-3" style="font-size: 0.9rem; line-height: 1.5;">
        Description of the certification and what it validates.
      </p>
      
      <!-- Link (optional) -->
      <a href="cert-url" class="btn btn-sm btn-outline-primary w-100" target="_blank">
        <i class="bi bi-box-arrow-up-right me-1"></i> View Certificate
      </a>
    </div>
  </div>
</div>
```

### 7. Contact Form

```html
<form action="forms/contact.php" method="post" class="php-email-form">
  <div class="row gy-4">
    <div class="col-12">
      <input type="text" name="name" class="form-control" 
             placeholder="Your Name" required="">
    </div>
    <div class="col-12">
      <input type="email" class="form-control" name="email" 
             placeholder="Your Email" required="">
    </div>
    <div class="col-12">
      <input type="text" class="form-control" name="subject" 
             placeholder="Subject" required="">
    </div>
    <div class="col-12">
      <textarea class="form-control" name="message" rows="6" 
                placeholder="Message" required=""></textarea>
    </div>
    <div class="col-12 text-center">
      <div class="loading">Loading</div>
      <div class="error-message"></div>
      <div class="sent-message">Your message has been sent. Thank you!</div>
      <button type="submit" class="btn btn-submit w-100">Submit Message</button>
    </div>
  </div>
</form>
```

### 8. Buttons

```css
/* Primary Button */
.btn-primary {
  background-color: var(--accent-color);
  border-color: var(--accent-color);
  color: var(--contrast-color);
  padding: 0.8rem 2rem;
  border-radius: 50px;
}

/* Outline Button */
.btn-outline-primary {
  color: var(--accent-color);
  border: 1.5px solid var(--accent-color);
  border-radius: 20px;
}

/* Small Button */
.btn-sm {
  font-size: 13px;
  padding: 6px 16px;
}
```

---

## JavaScript Functionality

### Main Features (main.js)

1. **Mobile Navigation Toggle**
   ```javascript
   function mobileNavToogle() {
     document.querySelector('body').classList.toggle('mobile-nav-active');
     mobileNavToggleBtn.classList.toggle('bi-list');
     mobileNavToggleBtn.classList.toggle('bi-x');
   }
   ```

2. **Scroll Top Button**
   - Shows when scrolled > 100px
   - Smooth scroll to top on click

3. **AOS Initialization**
   ```javascript
   AOS.init({
     duration: 600,
     easing: 'ease-in-out',
     once: true,
     mirror: false
   });
   ```

4. **Navmenu Scrollspy**
   - Highlights active section in navigation
   - Updates on scroll

5. **Isotope (Portfolio Filtering)**
   ```javascript
   initIsotope = new Isotope('.isotope-container', {
     itemSelector: '.isotope-item',
     layoutMode: 'masonry',
     filter: filter,
     transitionDuration: '0.6s',
     stagger: 30
   });
   ```

6. **GLightbox (Image Lightbox)**
   ```javascript
   const glightbox = GLightbox({
     selector: '.glightbox'
   });
   ```

7. **Skills Animation (Waypoints)**
   - Animates progress bars when scrolled into view

8. **Video Modal Handler**
   ```javascript
   videoButtons.forEach(button => {
     button.addEventListener('click', function(e) {
       const videoSrc = this.getAttribute('data-video');
       videoElement.querySelector('source').src = videoSrc;
       videoElement.load();
     });
   });
   ```

---

## Page Templates

### Homepage (index.html)

**Sections**:
1. **Hero Section** - Animated starry background with name and tagline
2. **About/Bio** - Profile image + personal info cards
3. **Menu Details** - 6 service cards linking to main pages
4. **Contact** - Form + contact info

**Key Features**:
- Shooting star animation
- Hero name color shift animation
- Service cards with icons
- Contact form with PHP backend

### Internal Pages (education.html, portfolio.html, etc.)

**Structure**:
1. **Breadcrumbs** - Home > Current Page
2. **Section Title** - With decorative SVG shape
3. **Main Content** - Varies by page
4. **Scroll Top Button**

**Common Patterns**:
- Timeline layout (Education, Experience)
- Card grid (Certifications, Portfolio)
- Achievement cards with icons
- Responsive columns (col-lg-6, col-md-6)

---

## Best Practices

### HTML

1. **Always include AOS attributes** for animations
   ```html
   <div data-aos="fade-up" data-aos-delay="100">
   ```

2. **Use semantic HTML5 elements**
   - `<header>`, `<main>`, `<section>`, `<nav>`

3. **Maintain consistent spacing**
   - Bootstrap classes: `mb-3`, `mt-4`, `py-5`

4. **Add aria labels for accessibility**
   ```html
   <button aria-label="Close" class="btn-close"></button>
   ```

### CSS

1. **Use CSS variables** for colors and fonts
   ```css
   color: var(--accent-color);
   font-family: var(--default-font);
   ```

2. **Leverage color-mix() for transparency**
   ```css
   color: color-mix(in srgb, var(--default-color), transparent 25%);
   ```

3. **Responsive breakpoints**
   - Mobile-first approach
   - Use Bootstrap breakpoints: `576px`, `768px`, `992px`, `1200px`

4. **Consistent transitions**
   ```css
   transition: all 0.3s ease;
   ```

### JavaScript

1. **Check for element existence** before adding listeners
   ```javascript
   if (element) {
     element.addEventListener('click', handler);
   }
   ```

2. **Use event delegation** for dynamic elements

3. **Clean up** on modal close
   ```javascript
   videoModal.addEventListener('hidden.bs.modal', function() {
     videoElement.pause();
     videoElement.currentTime = 0;
   });
   ```

### Performance

1. **Lazy load images** when possible
2. **Use ImagesLoaded** before initializing Isotope
3. **AOS once: true** - Animate only on first view
4. **Minified vendor files** in production

### Accessibility

1. **Alt text** for all images
2. **Keyboard navigation** support
3. **ARIA labels** for icon buttons
4. **Focus states** for interactive elements
5. **Color contrast** meets WCAG guidelines

---

## Common Code Snippets

### Adding a New Page

1. **Copy template structure** from existing page
2. **Update page title** and meta tags
3. **Set active class** on correct nav item
4. **Add breadcrumb** with correct page name
5. **Create section title** with SVG shape
6. **Add main content** using existing components
7. **Test responsiveness** at all breakpoints

### Portfolio Filter Categories

```html
<!-- Add to isotope-filters -->
<li data-filter=".filter-your-category">
  <i class="bi bi-icon-name"></i> Category Name
</li>

<!-- Add to portfolio item -->
<div class="col-lg-4 col-md-6 isotope-item filter-your-category">
  <!-- Portfolio card -->
</div>
```

### Adding Animation Delays

Progressive delays for staggered animations:
```html
<div data-aos="fade-up" data-aos-delay="100">Item 1</div>
<div data-aos="fade-up" data-aos-delay="200">Item 2</div>
<div data-aos="fade-up" data-aos-delay="300">Item 3</div>
```

### Bootstrap Grid Patterns

```html
<!-- 3 columns on desktop, 2 on tablet, 1 on mobile -->
<div class="row g-4">
  <div class="col-lg-4 col-md-6">Column 1</div>
  <div class="col-lg-4 col-md-6">Column 2</div>
  <div class="col-lg-4 col-md-6">Column 3</div>
</div>

<!-- 2 columns on desktop, 1 on mobile -->
<div class="row g-4">
  <div class="col-lg-6">Column 1</div>
  <div class="col-lg-6">Column 2</div>
</div>
```

---

## Notes for Future Development

### Planned Features
- Complete portfolio with all projects
- Blog section (potential)
- Dark mode toggle
- Multi-language support

### Maintenance
- Update copyright year annually
- Keep vendor libraries updated
- Optimize images regularly
- Test across browsers (Chrome, Firefox, Safari, Edge)

### Known Issues
- Video modal autoplay may be blocked on some browsers
- AOS animations disabled on mobile for performance

---

## Quick Reference: Icon Classes

**Common Bootstrap Icons Used**:
```html
<i class="bi bi-mortarboard"></i>       <!-- Education -->
<i class="bi bi-briefcase"></i>          <!-- Experience -->
<i class="bi bi-tools"></i>              <!-- Skills -->
<i class="bi bi-award"></i>              <!-- Certifications -->
<i class="bi bi-people"></i>             <!-- Advocacy -->
<i class="bi bi-folder2-open"></i>       <!-- Portfolio -->
<i class="bi bi-envelope"></i>           <!-- Email -->
<i class="bi bi-github"></i>             <!-- GitHub -->
<i class="bi bi-linkedin"></i>           <!-- LinkedIn -->
<i class="bi bi-zoom-in"></i>            <!-- Zoom/View -->
<i class="bi bi-box-arrow-up-right"></i> <!-- External link -->
<i class="bi bi-trophy"></i>             <!-- Award/Trophy -->
<i class="bi bi-code-slash"></i>         <!-- Code/Programming -->
<i class="bi bi-cpu"></i>                <!-- AI/ML -->
<i class="bi bi-controller"></i>         <!-- Games -->
```

---

## Contact & Credits

**Developer**: Dane Ross Quintano  
**Email**: quintanodr@gmail.com  
**GitHub**: [@d-quint](https://github.com/d-quint)  
**LinkedIn**: [drquintano](https://linkedin.com/in/drquintano/)

---

*This guide is a living document. Update it whenever significant changes are made to the project structure or design system.*
