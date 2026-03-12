document.getElementById('yr').textContent = new Date().getFullYear();

// Cursor
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Scroll-triggered fade-in
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeUp 0.6s ease forwards';
            entry.target.style.opacity = '1';
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.project-card, .skill-badge, .contact-item').forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.5s ${i * 0.07}s, transform 0.5s ${i * 0.07}s`;
    observer.observe(el);
});

// Deco cards subtle float
document.querySelectorAll('.deco-card').forEach((card, i) => {
    card.style.animation = `float ${3 + i * 0.7}s ease-in-out infinite ${i * 0.4}s`;
});