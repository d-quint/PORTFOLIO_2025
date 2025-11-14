/**
 * Project Gallery Dynamic Image Loader
 * 
 * Automatically loads all images from a directory matching the current HTML file name.
 * Directory structure: assets/img/portfolio/[project-name]-imgs/
 * 
 * Example: 
 * - For trashscan.html -> loads from assets/img/portfolio/trashscan-imgs/
 * - For glutaga.html -> loads from assets/img/portfolio/glutaga-imgs/
 * 
 * CONFIGURATION: Define your project images in the galleryConfig object below
 */

(function() {
  'use strict';

  /**
   * GALLERY CONFIGURATION
   * Add your project images here for each project
   * Key = project filename (without .html)
   * Value = array of image filenames in the [project-name]-imgs directory
   * Supports: .png, .jpg, .jpeg, .gif, .webp
   */
  const galleryConfig = {
    'trashscan': [
      '6.jpg',
      '7.jpg',
      '8.jpg',
      '9.jpg',
      '10.jpg',
      '11.jpg',
      '12.jpg',
      '13.jpg',
      '14.jpg',
      '15.jpg',
      '16.jpg',
      '17.jpg'
    ],
    'glutaga': [
      '1.jpg',
      '2.jpg',
      '3.jpg',
      '4.jpg',
      '5.jpg',
    ],
    'nexus': [
      '1.jpg',
      '2.jpg',
      '3.jpg'
    ],
    'sari': [
      '1.jpg',
      '2.jpg',
      '3.jpg',
      '4.jpg',
      '5.jpg',
      '6.jpg',
      '7.jpg',
    ],
    'bebol': [
      '1.jpg',
      '2.jpg',
      '3.jpg',
      '4.jpg',
      '5.jpg',
      '6.jpg',
      '7.jpg',
      '8.jpg'
    ]
    // Add more projects here as needed
  };

  /**
   * Get the current project name from the HTML filename
   * @returns {string} Project name (e.g., "trashscan" from "trashscan.html")
   */
  function getProjectName() {
    const path = window.location.pathname;
    const filename = path.split('/').pop();
    const projectName = filename.replace('.html', '');
    return projectName;
  }

  /**
   * Get images for the current project
   * @param {string} projectName - Name of the project
   * @returns {Array} Array of image paths
   */
  function getProjectImages(projectName) {
    const imageDir = `../assets/img/portfolio/${projectName}-imgs/`;
    
    // Check if project is configured
    if (galleryConfig[projectName]) {
      return galleryConfig[projectName].map(img => imageDir + img);
    }
    
    // Fallback: try common numbered filenames
    console.warn(`No gallery configuration found for "${projectName}". Using fallback detection.`);
    return generateFallbackImages(imageDir, projectName);
  }

  /**
   * Generate fallback image paths with common naming patterns
   * @param {string} imageDir - Directory path
   * @param {string} projectName - Project name
   * @returns {Array} Array of potential image paths
   */
  function generateFallbackImages(imageDir, projectName) {
    const fallbackImages = [];
    const extensions = ['png', 'jpg', 'jpeg', 'gif', 'webp'];
    
    // Try numbered images 1-20 with all extensions
    for (let i = 1; i <= 20; i++) {
      for (const ext of extensions) {
        fallbackImages.push(imageDir + i + '.' + ext);
      }
    }
    
    // Try zero-padded numbers
    for (let i = 1; i <= 20; i++) {
      const padded = String(i).padStart(2, '0');
      for (const ext of extensions) {
        fallbackImages.push(imageDir + padded + '.' + ext);
      }
    }
    
    // Try common screenshot names
    const commonNames = ['screenshot', 'img', 'image'];
    for (const name of commonNames) {
      for (let i = 1; i <= 10; i++) {
        for (const ext of extensions) {
          fallbackImages.push(imageDir + name + i + '.' + ext);
        }
      }
    }
    
    // If nothing works, use main project image
    fallbackImages.push(`../assets/img/portfolio/${projectName}.png`);
    fallbackImages.push(`../assets/img/portfolio/${projectName}.jpg`);
    
    return fallbackImages;
  }

  /**
   * Check if an image exists by attempting to load it
   * @param {string} url - Image URL
   * @returns {Promise<boolean>} True if image exists
   */
  function imageExists(url) {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;
    });
  }

  /**
   * Filter out non-existent images from the array
   * @param {Array} imagePaths - Array of image paths to check
   * @returns {Promise<Array>} Array of valid image paths
   */
  async function filterValidImages(imagePaths) {
    const validImages = [];
    
    for (const imgPath of imagePaths) {
      if (await imageExists(imgPath)) {
        validImages.push(imgPath);
      }
    }
    
    return validImages;
  }

  /**
   * Sort images numerically if they have numeric filenames
   * @param {Array} imagePaths - Array of image paths
   * @returns {Array} Sorted array of image paths
   */
  function sortImagesNumerically(imagePaths) {
    return imagePaths.sort((a, b) => {
      // Extract filename from path
      const filenameA = a.split('/').pop();
      const filenameB = b.split('/').pop();
      
      // Extract number from filename (e.g., "6.jpg" -> 6, "screenshot12.png" -> 12)
      const numberA = parseInt(filenameA.match(/\d+/)?.[0] || '999999');
      const numberB = parseInt(filenameB.match(/\d+/)?.[0] || '999999');
      
      // If both have numbers, sort numerically
      if (!isNaN(numberA) && !isNaN(numberB)) {
        return numberA - numberB;
      }
      
      // Otherwise, sort alphabetically
      return filenameA.localeCompare(filenameB);
    });
  }

  /**
   * Generate gallery slide HTML
   * @param {string} imgPath - Path to the image
   * @param {number} index - Image index
   * @param {string} projectName - Project name for alt text
   * @returns {string} HTML string for the slide
   */
  function createSlideHTML(imgPath, index, projectName) {
    const filename = imgPath.split('/').pop();
    const altText = `${projectName} - Screenshot ${index + 1}`;
    return `
      <div class="swiper-slide">
        <a href="${imgPath}" class="glightbox" data-gallery="gallery1">
          <img src="${imgPath}" alt="${altText}" class="img-fluid">
        </a>
      </div>
    `;
  }

  /**
   * Load and display images in the gallery
   */
  async function loadGallery() {
    const swiperWrapper = document.querySelector('.screenshot-carousel .swiper-wrapper');
    
    if (!swiperWrapper) {
      console.warn('Gallery swiper wrapper not found.');
      return;
    }

    const projectName = getProjectName();
    
    if (projectName === 'boilerplate' || projectName === '') {
      console.log('Boilerplate or empty project name detected. Skipping gallery load.');
      return;
    }

    // Show loading state
    swiperWrapper.innerHTML = '<div class="swiper-slide"><p class="text-center p-5">Loading gallery...</p></div>';

    try {
      // Get configured images for this project
      const potentialImages = getProjectImages(projectName);
      
      // Filter to only valid images (that actually exist)
      const validImages = await filterValidImages(potentialImages);
      
      // Sort images numerically if they have numeric filenames
      const sortedImages = sortImagesNumerically(validImages);
      
      if (sortedImages.length === 0) {
        swiperWrapper.innerHTML = '<div class="swiper-slide"><p class="text-center p-5">No images found for this project.</p></div>';
        console.warn(`No valid images found for project: ${projectName}`);
        return;
      }

      // Generate slides HTML
      const slidesHTML = sortedImages.map((img, index) => 
        createSlideHTML(img, index, projectName)
      ).join('');

      // Insert slides into swiper
      swiperWrapper.innerHTML = slidesHTML;

      // Reinitialize Swiper if it exists
      if (typeof Swiper !== 'undefined') {
        setTimeout(() => {
          const swiperContainer = document.querySelector('.screenshot-carousel.init-swiper');
          if (swiperContainer && swiperContainer.swiper) {
            swiperContainer.swiper.update();
          }
        }, 100);
      }

      // Reinitialize GLightbox for new images
      if (typeof GLightbox !== 'undefined') {
        setTimeout(() => {
          const lightbox = GLightbox({
            selector: '.glightbox'
          });
        }, 200);
      }

      console.log(`✓ Gallery loaded successfully with ${sortedImages.length} images for "${projectName}"`);
    } catch (error) {
      console.error('Error loading gallery:', error);
      swiperWrapper.innerHTML = '<div class="swiper-slide"><p class="text-center p-5 text-danger">Error loading gallery.</p></div>';
    }
  }

  // Initialize gallery when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadGallery);
  } else {
    loadGallery();
  }

})();

/**
 * USAGE INSTRUCTIONS:
 * 
 * 1. Add your project to the galleryConfig object at the top of this file:
 *    'projectname': ['1.png', '2.png', '3.png']
 * 
 * 2. Place your images in: assets/img/portfolio/projectname-imgs/
 * 
 * 3. The script will automatically:
 *    - Detect the current project from the HTML filename
 *    - Load configured images from the galleryConfig
 *    - Verify each image exists before displaying
 *    - Fall back to common naming patterns if not configured
 * 
 * 4. No need for images.json file - configuration is in this script!
 */
