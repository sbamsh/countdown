//SELECTORS

const flipCard = document.querySelector(".flip-card");

flip(flipCard)




//FUNCTIONS

function flip(flipCard) {
    const topHalf = flipCard.querySelector(".top");
    const bottomHalf = flipCard.querySelector(".bottom");
    const topFlip = document.createElement("div");
    topFlip.classList.add("top-flip")
    const bottomFlip = document.createElement("div");
    bottomFlip.classList.add("bottom-flip")
    const startNumber = parseInt(topHalf.textContent)
    
    top.textContent = startNumber;
    bottomHalf.textContent = startNumber;
    topFlip.textContent = startNumber;
    bottomFlip.textContent = startNumber - 1;

//listeners
    
topFlip.addEventListener("animationstart", e => {
    topHalf.textContent =startNumber - 1;
})

topFlip.addEventListener("animationend", e => {
    topFlip.remove();
})

bottomFlip.addEventListener("animationstart", e => {
    bottomHalf.textContent =startNumber - 1;
    bottomFlip.remove()
})
flipCard.append(topFlip, bottomFlip);

}