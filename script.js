const board = document.getElementById("board");
const roundDisplay = document.getElementById("round");
let round = 1;
let flipped = [];
let lock = false;

const icons = [🌸,🐹,✨,🌈,🫧,🐼,🍓,🎀,🧸,💍,🍉,🏍];
function startRound() {
    roundDisplay.textContent = round;
    const roundIcons = shuffle(icons).slice(0, 6);
    const cards = shuffle ([...roundIcons,...roundIcons]);
    board.innerHTML = "";
    cards.forEach(icon => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.icon = icon;
        card.textContent = "icon";
        card.addEventListener("click",() => flipCard(card));
        board.appendChild(card);
    });

    }
    function flipCard(card) {
        if (lock || card.classList.contains("flipped")) return;
        card.classList.add("flipped");
        flipped.push(card);
        if (flipped.lenght=== 2) {
            

        }

    }