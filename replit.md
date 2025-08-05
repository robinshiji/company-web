# Overview

SDC Networks is a comprehensive technology education platform designed to help students build careers in tech. The project is a modern, responsive website that showcases technology courses, training programs, placement assistance, and student success stories. It features a clean, professional interface with smooth animations, mobile-responsive design, and interactive elements to attract potential students and provide complete course information.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The application uses a traditional static website architecture with vanilla HTML, CSS, and JavaScript. The design follows modern web standards with:

- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox for layout
- **Progressive Enhancement**: Core functionality works without JavaScript, enhanced with interactive features
- **Component-Based CSS**: Modular CSS structure with clear separation of concerns
- **Modern Typography**: Inter font family for clean, readable text across all devices
- **Interactive Sections**: Multi-section layout with hero, features, courses, placements, testimonials, and contact forms

## Design System
- **CSS Custom Properties**: Consistent color scheme and spacing using CSS variables
- **Smooth Animations**: CSS transitions and JavaScript-enhanced scroll effects
- **Mobile Navigation**: Hamburger menu implementation for mobile devices
- **Scroll-based Interactions**: Header styling changes and smooth scrolling navigation

## Performance Optimizations
- **External CDN Resources**: Google Fonts and Font Awesome loaded from CDN
- **Minimal Dependencies**: No heavy frameworks, keeping bundle size small
- **Efficient DOM Manipulation**: Event delegation and optimized scroll listeners

## User Experience Features
- **Smooth Scrolling**: Enhanced navigation with offset calculations for fixed header
- **Mobile-Responsive**: Touch-friendly navigation and responsive breakpoints
- **Visual Feedback**: Interactive elements with hover states and transitions
- **Accessibility**: Semantic HTML structure and keyboard navigation support
- **Interactive Elements**: Course syllabus downloads, brochure downloads, enquiry forms with validation
- **Dynamic Content**: Auto-advancing testimonial slider and animated placement ticker
- **WhatsApp Integration**: Floating WhatsApp button for direct communication

# External Dependencies

## Content Delivery Networks
- **Google Fonts**: Inter font family for typography consistency
- **Font Awesome**: Icon library for UI elements and decorative icons

## Browser APIs
- **Intersection Observer**: Potential use for scroll-based animations and lazy loading
- **Smooth Scroll API**: Enhanced navigation experience between sections
- **Viewport Meta**: Responsive design support across devices

## Development Tools
- **Modern CSS Features**: CSS Grid, Flexbox, Custom Properties, and Backdrop Filter
- **ES6+ JavaScript**: Modern JavaScript features for cleaner, more maintainable code