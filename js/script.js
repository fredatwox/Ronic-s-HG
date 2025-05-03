// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const nav = document.getElementById('nav');

mobileMenuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    mobileMenuBtn.innerHTML = nav.classList.contains('active') ?
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking a link
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Header Scroll Effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Back to Top Button
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('active');
    } else {
        backToTop.classList.remove('active');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Form Submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Here you would typically send the form data to a server
    // For this example, we'll just show an alert
    alert(`Thank you, ${name}! Your message has been received. We'll contact you at ${email} soon.`);

    // Reset the form
    contactForm.reset();
});

// Simple Testimonial Slider
const testimonials = [
    {
        quote: "Ronic's workshop transformed our workplace culture around health. Her practical, evidence-based approach made complex health concepts accessible to all our workers. We've seen measurable improvements in workers wellbeing and productivity since implementing her recommendations.",
        author: "Dr. Patrick Bediako",
        role: "Snr. Officer, St. Gregory Catholic Hospital",
        image: "img/WhatsApp Image 2025-05-02 at 5.40.10 PM.jpeg"
    },
    {
        quote: "The Health for Her Foundation has changed many lives. It has helped deprived children gain knowledge on how to take good care of themselves. Through this, it also brought smiles on their faces.",
        author: "Maame Ampem Darkoa",
        role: "Founder, Ghana Art Pinnacle initiative",
        image: "img/WhatsApp Image 2025-05-02 at 5.45.15 PM.jpeg"
    },
    {
        quote: "Ronic's book provides exactly the clear, actionable guidance needed to turn everyone's health around. Her approach and practical strategies would help me people experience good health living.",
        author: "Martha",
        role: "Book Reader",
        image: "img/WhatsApp Image 2025-05-02 at 6.15.35 PM.jpeg"
    }
];

let currentTestimonial = 0;
const testimonialSlide = document.querySelector('.testimonial-slide');

function showTestimonial(index) {
    const testimonial = testimonials[index];
    testimonialSlide.innerHTML = `
             <i class="fas fa-quote-left"></i>
             <p>${testimonial.quote}</p>
             <div class="testimonial-author">
                 <img src="${testimonial.image}" alt="${testimonial.author}">
                 <div class="author-info">
                     <h4>${testimonial.author}</h4>
                     <p>${testimonial.role}</p>
                 </div>
             </div>
         `;
}

// Initial testimonial
showTestimonial(currentTestimonial);

// Auto-rotate testimonials every 5 seconds
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}, 5000);