// Slideshow functionality
let slideIndex = 1;
let slideInterval;

// Initialize slideshow when page loads
document.addEventListener('DOMContentLoaded', function() {
    showSlide(slideIndex);
    startAutoSlide();
});

// Show specific slide
function showSlide(n) {
    const slides = document.getElementsByClassName('slide');
    const dots = document.getElementsByClassName('dot');
    
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    
    // Remove active class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    
    // Show current slide and highlight current dot
    if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].classList.add('active');
    }
    if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].classList.add('active');
    }
}

// Go to specific slide (called by dot clicks)
function currentSlide(n) {
    slideIndex = n;
    showSlide(slideIndex);
    // Restart auto slide after manual interaction
    clearInterval(slideInterval);
    startAutoSlide();
}

// Auto advance slides every 5 seconds
function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

// Start automatic slideshow
function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
}

// Stop automatic slideshow (useful when user interacts)
function stopAutoSlide() {
    clearInterval(slideInterval);
}

// Pause slideshow when user hovers over it
const slideshowContainer = document.querySelector('.slideshow-container');
if (slideshowContainer) {
    slideshowContainer.addEventListener('mouseenter', stopAutoSlide);
    slideshowContainer.addEventListener('mouseleave', startAutoSlide);
}
