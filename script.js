// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Course syllabus download function
function downloadSyllabus(event, course) {
    const button = event.target.closest('button');
    const originalText = button.innerHTML;

    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Downloading...';
    button.disabled = true;

    setTimeout(() => {
        const link = document.createElement('a');
        link.href = `syllabus/${course}.pdf`;  // Links to actual file
        link.download = `${course}-syllabus.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        button.innerHTML = '<i class="fas fa-check"></i> Downloaded!';
        setTimeout(() => {
            button.innerHTML = originalText;
            button.disabled = false;
        }, 2000);
    }, 1500);
}


// Brochure download function
function downloadBrochure() {
    // Simulate brochure download
    const link = document.createElement('a');
    link.href = `data:application/pdf;base64,JVBERi0xLjMKJcTl8uXrp/Og0MTGCjQgMCBvYmoKPDwKL0xlbmd0aCA5NTIKL0ZpbHRlciAvRmxhdGVEZWNvZGUKPj4Kc3RyZWFtCnic7ZjNbtswDMdfZQ7dLfnzI8ctENtCCBZsg3bo0KNhGBgG1x9JG8cAGhto38Tf39KkGHuCUKxJi3c3F+L/J0VJpCRJsqp1E`;
    link.download = 'SDC-Networks-Brochure.pdf';
    link.click();
    
    // Show a brief success message
    const originalButton = event.target;
    const originalText = originalButton.textContent;
    originalButton.innerHTML = '<i class="fas fa-check"></i> Downloaded!';
    originalButton.style.background = '#4caf50';
    
    setTimeout(() => {
        originalButton.innerHTML = originalText;
        originalButton.style.background = '';
    }, 2000);
}

// Contact form validation and submission
const contactForm = document.getElementById('contactForm');
const successModal = document.getElementById('successModal');

// Validation functions
function validateName(name) {
    return name.trim().length >= 2 && /^[a-zA-Z\s]+$/.test(name);
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}

// Show error message
function showError(fieldId, message) {
    const errorElement = document.getElementById(fieldId + 'Error');
    const inputElement = document.getElementById(fieldId);
    
    errorElement.textContent = message;
    inputElement.style.borderColor = '#f44336';
}

// Clear error message
function clearError(fieldId) {
    const errorElement = document.getElementById(fieldId + 'Error');
    const inputElement = document.getElementById(fieldId);
    
    errorElement.textContent = '';
    inputElement.style.borderColor = '#e0e0e0';
}

// Real-time validation
document.getElementById('name').addEventListener('input', function() {
    const name = this.value;
    if (name && !validateName(name)) {
        showError('name', 'Please enter a valid name (letters only)');
    } else {
        clearError('name');
    }
});

document.getElementById('email').addEventListener('input', function() {
    const email = this.value;
    if (email && !validateEmail(email)) {
        showError('email', 'Please enter a valid email address');
    } else {
        clearError('email');
    }
});

document.getElementById('phone').addEventListener('input', function() {
    const phone = this.value;
    if (phone && !validatePhone(phone)) {
        showError('phone', 'Please enter a valid phone number');
    } else {
        clearError('phone');
    }
});

// Form submission
contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const phone = formData.get('phone').trim();
    const course = formData.get('course');
    const message = formData.get('message').trim();
    
    let isValid = true;
    
    // Clear all previous errors
    ['name', 'email', 'phone', 'course'].forEach(field => clearError(field));
    
    // Validate all fields
    if (!name) {
        showError('name', 'Name is required');
        isValid = false;
    } else if (!validateName(name)) {
        showError('name', 'Please enter a valid name (letters only)');
        isValid = false;
    }
    
    if (!email) {
        showError('email', 'Email is required');
        isValid = false;
    } else if (!validateEmail(email)) {
        showError('email', 'Please enter a valid email address');
        isValid = false;
    }
    
    if (!phone) {
        showError('phone', 'Phone number is required');
        isValid = false;
    } else if (!validatePhone(phone)) {
        showError('phone', 'Please enter a valid phone number');
        isValid = false;
    }
    
    if (!course) {
        showError('course', 'Please select a course');
        isValid = false;
    }
    
    if (!isValid) {
        return;
    }
    
    // Show loading state
    const submitBtn = this.querySelector('.submit-btn');
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    
    // Simulate form submission delay
    try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Log form data (in real application, this would be sent to a server)
        console.log('Form submitted with data:', {
            name,
            email,
            phone,
            course,
            message,
            timestamp: new Date().toISOString()
        });
        
        // Show success modal
        successModal.style.display = 'block';
        
        // Reset form
        this.reset();
        
    } catch (error) {
        console.error('Form submission error:', error);
        alert('There was an error submitting your message. Please try again.');
    } finally {
        // Reset button state
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
    }
});

// Modal functions
function closeModal() {
    successModal.style.display = 'none';
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === successModal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && successModal.style.display === 'block') {
        closeModal();
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.course-card, .info-item, .stat, .placement-card, .feature-card, .instagram-post');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});

// Add loading animation to page
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Preload critical images and assets
function preloadAssets() {
    const assets = [
        'assets/whatsapp-icon.svg'
    ];
    
    assets.forEach(asset => {
        const img = new Image();
        img.src = asset;
    });
}

// Initialize preloading
preloadAssets();

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimize scroll performance
const optimizedScrollHandler = debounce(() => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);

// Add active state to navigation links based on scroll position
function updateActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', debounce(updateActiveNavigation, 100));

// Enhanced WhatsApp integration
function openWhatsApp() {
    const message = encodeURIComponent("Hi! I'm interested in learning more about SDC Networks courses. Could you please provide more information?");
    const phoneNumber = "919876543210"; // Replace with actual WhatsApp business number
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
}

// Add click event to WhatsApp button
document.querySelector('.whatsapp-link').addEventListener('click', function(e) {
    e.preventDefault();
    openWhatsApp();
});

// Testimonial slider functionality
let currentSlideIndex = 1;

function currentSlide(n) {
    showSlide(currentSlideIndex = n);
}

function showSlide(n) {
    const slides = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');
    
    if (n > slides.length) { currentSlideIndex = 1; }
    if (n < 1) { currentSlideIndex = slides.length; }
    
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    if (slides[currentSlideIndex - 1]) {
        slides[currentSlideIndex - 1].classList.add('active');
    }
    if (dots[currentSlideIndex - 1]) {
        dots[currentSlideIndex - 1].classList.add('active');
    }
}

// Auto-advance testimonials
function autoAdvanceTestimonials() {
    currentSlideIndex++;
    showSlide(currentSlideIndex);
}

// Start auto-advance when page loads
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.testimonials-slider')) {
        setInterval(autoAdvanceTestimonials, 5000); // Change slide every 5 seconds
    }
});

// Add keyboard accessibility
document.addEventListener('keydown', (e) => {
    // Alt + W for WhatsApp
    if (e.altKey && e.key === 'w') {
        e.preventDefault();
        openWhatsApp();
    }
    
    // Alt + C for contact form focus
    if (e.altKey && e.key === 'c') {
        e.preventDefault();
        document.getElementById('name').focus();
    }
});
