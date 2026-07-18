const slider = document.querySelector(".slider");

const left = document.querySelector(".left");
const right = document.querySelector(".right");

function updateArrows() {

    // 左端
    if (slider.scrollLeft <= 0) {
        left.style.opacity = "0";
        left.style.pointerEvents = "none";
    } else {
        left.style.opacity = "1";
        left.style.pointerEvents = "auto";
    }

    // 右端
    if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth - 1) {
        right.style.opacity = "0";
        right.style.pointerEvents = "none";
    } else {
        right.style.opacity = "1";
        right.style.pointerEvents = "auto";
    }
}

left.addEventListener("click", () => {
    slider.scrollBy({
        left: -getScrollAmount(),
        behavior: "smooth"
    });
});

right.addEventListener("click", () => {
    slider.scrollBy({
        left: getScrollAmount(),
        behavior: "smooth"
    });
});

// スクロール時に判定
slider.addEventListener("scroll", updateArrows);

// ページを開いた直後にも判定
updateArrows();
const scrollAmount = 400;

right.addEventListener("click", () => {

    slider.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
    });

});

left.addEventListener("click", () => {

    slider.scrollBy({
        left: -scrollAmount,
        behavior: "smooth"
    });

});