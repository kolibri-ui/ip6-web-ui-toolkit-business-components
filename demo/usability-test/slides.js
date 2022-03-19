const slides = [...document.getElementsByClassName("slide")];
const prev   = document.getElementById("prev");
const next   = document.getElementById("next");

slides.forEach((s, i, a) => {
    const number       = s.querySelector(".page-counter");
    number.textContent = `${i + 1}/${a.length}`;

});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {

    if ((slideIndex === 1 && n === -1) || (slideIndex === slides.length && n === 1)) {
        return;
    }
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots   = document.getElementsByClassName("dot");

    if (n === 1) {
        prev.style.display = "none";
    } else {
        prev.style.display = "block";
    }

    if (n === slides.length) {
        next.style.display = "none";
    } else {
        next.style.display = "block";
    }

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
