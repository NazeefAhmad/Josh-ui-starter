
// Partner logos data
const partners = [
    { name: 'Google', logo: 'path/to/google-logo.png' },
    { name: 'Amazon', logo: 'path/to/amazon-logo.png' },
    { name: 'Microsoft', logo: 'path/to/microsoft-logo.png' },
    { name: 'Uber', logo: 'path/to/uber-logo.png' },
    { name: 'Dropbox', logo: 'path/to/dropbox-logo.png' },
    { name: 'Google', logo: 'path/to/google-logo.png' },
    { name: 'Uber', logo: 'path/to/uber-logo.png' },
    { name: 'Amazon', logo: 'path/to/amazon-logo.png' }
];

// Generate partner logos
const partnerGrid = document.querySelector('.partner-grid');
partners.forEach(partner => {
    const partnerCard = document.createElement('div');
    partnerCard.className = 'partner-card';
    partnerCard.innerHTML = `
        <p class="partner-name">Client Name</p>
        <img src="${partner.logo}" alt="${partner.name}" style="height: 40px; object-fit: contain;">
    `;
    partnerGrid.appendChild(partnerCard);
});

// Handle contact form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Form submitted! This is a demo.');
    contactForm.reset();
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
