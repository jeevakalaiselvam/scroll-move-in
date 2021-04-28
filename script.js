//Reference to all cards in DOM
const cards = document.querySelectorAll(".card");

//Check if user scrolls the window and trigger bringing in cards
window.addEventListener("scroll", bringInCards);

bringInCards();

/**
 * This function checks if the user has scrolled the window to a certain threshold and checks if any card is present in that range, If yes, It uses CSS3 animation to bring in them into view
 */
function bringInCards() {
    const threshold = (window.innerHeight / 5) * 4;

    //Apply CSS3 classes to cards withing accepting conditions
    cards.forEach((card) => {
        if (card.getBoundingClientRect().top < threshold) {
            card.classList.add("active");
        } else {
            card.classList.remove("active");
        }
    });
}
