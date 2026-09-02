function exploreMessage() {

    alert(
        "Welcome to Sri Lanka! 🌴\n\n" +
        "Get ready to explore beautiful beaches, mountains and culture!"
    );

}

let currentSlide = 0;

const slides = document.querySelectorAll(".gallery-track img");

const totalSlides = slides.length;


/* Next Slide */

function nextSlide() {

    currentSlide++;

    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    updateGallery();
}


/* Previous Slide */

function previousSlide() {

    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    updateGallery();
}


/* Update Gallery */

function updateGallery() {

    const track = document.querySelector(".gallery-track");

    track.style.transform =
        `translateX(-${currentSlide * 100}%)`;
}


/* Automatic Slide */

setInterval(nextSlide, 4000);