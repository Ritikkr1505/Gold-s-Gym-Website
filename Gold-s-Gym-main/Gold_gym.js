var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("images");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].classList.remove("fade-in");
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    slides[slideIndex-1].classList.add("fade-in");
    dots[slideIndex-1].className += " active";
}

// Package controls
var currentPack = 1;
showPack(currentPack);

function currentPackage(n) {
    showPack(currentPack = n);
}

function showPack(n) {
    var i;
    var packs = document.getElementsByClassName("packa");
    var details = document.getElementsByClassName("detail");
    if (n > details.length) {currentPack = 1}
    if (n < 1) {currentPack = details.length}
    for (i = 0; i < details.length; i++) {
        details[i].style.display = "none";
        details[i].classList.remove("fade-in");
    }
    for (i = 0; i < packs.length; i++) {
        packs[i].className = packs[i].className.replace(" tac", "");
    }
    details[currentPack-1].style.display = "block";
    details[currentPack-1].classList.add("fade-in");
    packs[currentPack-1].className += " tac";
}

// Contact form
function myFunction() {
    alert("Thank you for contacting us!");
    document.getElementById('input').value = '';
    location.reload();
}

// Adding fade-in animation
var style = document.createElement('style');
style.innerHTML = `
    .fade-in {
        animation: fadeIn 1s ease-in-out;
    }
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;
document.head.appendChild(style);


