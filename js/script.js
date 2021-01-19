let readMoreBtn = document.getElementById("readMoreBtn");
let readMoreText = document.getElementById("readMoreText");
let LearnMoreBtn = document.getElementById("LearnMoreBtn");
let LearnMoreText = document.getElementById("LearnMoreText");



window.addEventListener("scroll", () => {
    document.getElementById("navBarId").classList.add("bgNavColor");
});

function moreTextRead(element, textElement, moretext, lessText) {
    if (element.textContent === moretext) {
        element.textContent = lessText;
        textElement.style.display = "inline";
    } else {
        element.textContent = moretext;
        textElement.style.display = "none";
    }
}

LearnMoreBtn.addEventListener("click", (e) =>
    moreTextRead(e.target, LearnMoreText, "Learn More", "Learn Less"));
readMoreBtn.addEventListener("click", (e) =>
    moreTextRead(e.target, readMoreText, "Read More", "Read Less"));