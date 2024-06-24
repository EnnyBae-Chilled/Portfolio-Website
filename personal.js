const typed = new Typed('.multiple-text', {
    strings: ['Software Developer', 'UI/UX Designer', 'Front-End Developer', 'Computer Science Enthusiast'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});


function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".mobile-nav-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
