function toggleMenu() {
    const navLinks = document.querySelector('.header-right');
    navLinks.classList.toggle('open');
}
// Slideshow Functionality
let slideIndex = 0;
let slides = document.querySelectorAll(".certificate-slide");

function showSlides() {
    slides.forEach(slide => slide.style.display = "none");
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}
showSlides();

function changeSlide(n) {
    slideIndex += n - 1;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    if (slideIndex >= slides.length) slideIndex = 0;
    slides.forEach(slide => slide.style.display = "none");
    slides[slideIndex].style.display = "block";
}

// Lightbox Functionality
function openLightbox(src) {
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = src;
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".header-right");
    const hamburger = document.querySelector(".hamburger-menu");

    hamburger.addEventListener("click", function () {
        menu.classList.toggle("open");
    });
});
