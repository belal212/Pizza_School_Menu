// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const logo = document.getElementById('logo');

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    logo.src = 'logo1.jpeg';
} else {
    body.classList.remove('dark-mode');
    logo.src = 'logo2.jpeg';
}

// Theme Toggle Event Listener
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        logo.src = 'logo1.jpeg';
    } else {
        localStorage.setItem('theme', 'light');
        logo.src = 'logo2.jpeg';
    }
});

// Social Media Links
const facebookBtn = document.getElementById('facebookBtn');
const instagramBtn = document.getElementById('instagramBtn');

facebookBtn.addEventListener('click', () => {
    window.open('https://www.facebook.com/profile.php?id=100081119342595', '_blank');
});

instagramBtn.addEventListener('click', () => {
    window.open('https://www.instagram.com/pizzaschoolegypt?fbclid=IwY2xjawPpzlZleHRuA2FlbQIxMABicmlkETFibjM5WjJDSTI1OVRjQXBIc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHs_IILhACUvwbA4jMZMIxISj8u43r_6Vsb4RgHZ2DBfjAfaLsr0n2efaybfI_aem_UFODaMXuTmtUBP9nd1V2kw', '_blank');
});

// Menu Modal Functionality
const menuBtn = document.getElementById('menuBtn');
const menuModal = document.getElementById('menuModal');
const closeBtn = document.querySelector('.close');

menuBtn.addEventListener('click', () => {
    menuModal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    menuModal.style.display = 'none';
});

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === menuModal) {
        menuModal.style.display = 'none';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuModal.style.display === 'block') {
        menuModal.style.display = 'none';
    }
});
