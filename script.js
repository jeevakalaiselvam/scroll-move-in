const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", bringInBoxes);

bringInBoxes();

function bringInBoxes() {
    const threshold = (window.innerHeight / 5) * 4;

    cards.forEach((card) => {
        if (card.getBoundingClientRect().top < threshold) {
            card.classList.add("active");
        } else {
            card.classList.remove("active");
        }
    });
}
