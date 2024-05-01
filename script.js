let buttonShow = document.querySelector(".show");
let buttonDouble = document.querySelector(".double");
let buttonShuffle = document.querySelector(".shuffle");
let buttonFlip = document.querySelector(".flip");
let game = document.querySelector(".game");
let clickedIds = [];
let urlprefix = "";
let cards = [

    "https://cdn.glitch.global/fa5ea2b6-f9aa-4b03-882f-10f310830dd6/1-8.webp?v=1710260554780", "https://cdn.glitch.global/626f516f-8389-40d6-a554-d73de174c1ed/60523009-2.jpg?v=1710259004936", "https://cdn.glitch.global/626f516f-8389-40d6-a554-d73de174c1ed/60523009-4.jpg?v=1710259008348", "https://cdn.glitch.global/fa5ea2b6-f9aa-4b03-882f-10f310830dd6/Wilson-is-McQueen.jpg?v=1710259823259", "https://cdn.glitch.global/626f516f-8389-40d6-a554-d73de174c1ed/Doc_Hudson.webp?v=1710259025864", "https://cdn.glitch.global/626f516f-8389-40d6-a554-d73de174c1ed/open-uri20150422-20810-1p4gxx9_6ea17642.jpeg?v=1710259035781", "https://cdn.glitch.global/626f516f-8389-40d6-a554-d73de174c1ed/60523009.jpg?v=1710259071321", "https://cdn.glitch.global/626f516f-8389-40d6-a554-d73de174c1ed/162747720_f8bec8a3ef.jpg?v=1710259241504"


];
buttonShow.onclick = function() {
    game.innerHTML = "";
    for (let i = 0; i < cards.length; i++) {
        game.insertAdjacentHTML(
            "beforeend",
            "<div style='background-image: url(" +
            urlprefix +
            cards[i] +
            ")' class='card'>",
        );
    }
    console.log("Showed the deck.");
    buttonShow.style.color = "red";
};

buttonDouble.onclick = function() {
    let howMany = cards.length;
    console.log(cards.length + " elements.");
    for (let i = 0; i < howMany; i++) {
        cards.push(cards[i]);
        game.insertAdjacentHTML(
            "beforeend",
            "<div style='background-image: url(" +
            urlprefix +
            cards[i] +
            ")' class='card'>",
        );
        console.log("Added " + cards[i]);
    }
    console.log(cards.length + " elements.");
    buttonDouble.style.color = "red";
};

buttonShuffle.onclick = function() {
    shuffle(cards);
    game.innerHTML = "";
    for (let i = 0; i < cards.length; i++) {
        game.insertAdjacentHTML(
            "beforeend",
            "<div style='background-image: url(" +
            urlprefix +
            cards[i] +
            ")' class='card' id='" +
            i +
            "'>",
        );
    }
    console.log("Shuffled the deck.");
    buttonShuffle.style.color = "red";
};

buttonFlip.onclick = function() {
    for (let i = 0; i < cards.length; i++) {
        document.getElementById(i).style.backgroundImage = "";
    }
    buttonFlip.style.color = "red";
};

document.onclick = function(event) {

    let clickedId = event.target.id;
    console.log(clickedId);

    if (clickedId !== "") {
        document.getElementById(clickedId).style.backgroundImage =
            "url('" + urlPrefix + cards[clickedId] + "')";
        clickedIds.push(clickedId);
        console.log(clickedIds);

        if (clickedIds.length === 2) {

            let card1picture = document.getElementById(clickedIds[0]).style
                .backgroundImage;
            let card2picture = document.getElementById(clickedIds[1]).style
                .backgroundImage;
            console.log(card1picture);
            console.log(card2picture);
            if (card1picture === card2picture) {
                console.log("match");
                document.getElementById(clickedIds[0]).id = "";
                document.getElementById(clickedIds[1]).id = "";
                clickedIds = [];
                console.log(clickedIds);
            }
        } else if (clickedIds.length > 2) {
            document.getElementById(clickedIds[0]).style.backgroundImage = "";
            document.getElementById(clickedIds[1]).style.backgroundImage = "";
            clickedIds = [];
            clickedIds.push(clickedId);
            console.log(clickedIds);
        }
    }
};

function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;
    while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex = currentIndex - 1;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }
    return array;
}
$(document).click(function(event) {

    let clickedId = event.target.id;
    
});