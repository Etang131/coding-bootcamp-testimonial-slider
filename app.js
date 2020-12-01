let slideImages = document.querySelectorAll(".testimonialSection");
arrowLeft = document.querySelector("#prev");
arrowRight = document.querySelector("#next");
current = 0;

// Clears all iamges
function reset() {
  for (let i = 0; i < slideImages.length; i++) {
    slideImages[i].style.display = "none";
  }
}

//Init Slider
function startSlide() {
  reset();
  slideImages[0].style.display = "block";
}

// Show Prev
function slideLeft() {
  reset();
  slideImages[current - 1].style.display = "block";
  current--;
}

// Left arrow click
arrowLeft.addEventListener("click", function () {
  if (current === 0) {
    current = slideImages.length;
  }
  slideLeft();
});

// show Right
function slideRight() {
  reset();
  slideImages[current + 1].style.display = "block";
  current++;
}

// Right arrow click
arrowRight.addEventListener("click", function () {
  if (current === slideImages.length - 1) {
    current = -1;
  }
  slideRight();
});
