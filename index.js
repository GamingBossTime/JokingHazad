// Update footer with current year
document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector("footer p");
    const currentYear = new Date().getFullYear();
    footer.textContent = `© ${currentYear} Gamer YouTuber. All rights reserved.`;
});

// Scroll effect for sections
const sections = document.querySelectorAll("section");
const options = {
    threshold: 0.3,
};

const revealSection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(revealSection, options);
sections.forEach(section => {
    observer.observe(section);
    section.classList.add("hidden");
});

// Simple menu toggle functionality (optional for a responsive menu)
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}