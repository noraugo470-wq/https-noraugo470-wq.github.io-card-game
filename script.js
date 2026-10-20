const board = document.getElementById("board");
const roundDisplay = document.getElementById("round");
let round = 1;
let flipped = [];
let lock = false;

const icons = ["🌸", "🐹", "✨", "🌈", "🫧", "🐼", "🍓", "🎀", "🧸", "💍", "🍉", "🏍"];
function startRound() {
    roundDisplay.textContent = round;
    const roundIcons = shuffle(icons).slice(0, 6);
    const cards = shuffle ([...roundIcons,...roundIcons]);
    board.innerHTML = "";
    cards.forEach(icon => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.icon = icon;
        card.textContent = icon;
        card.addEventListener("click",() => flipCard(card));
        board.appendChild(card);
    });

    }
    function flipCard(card) {
        if (lock || card.classList.contains("flipped")) return;
        card.classList.add("flipped");
        flipped.push(card);
        if (flipped.length === 2) {
            lock = true;
            setTimeout(checkMatch,600);
        }
    }
    function checkMatch() {
        const[a, b] = flipped;
        if (a.dataset.icon !== b.dataset.icon) {
            a.classList.remove("flipped");
            b.classList.remove("flipped");

        }
        flipped = [];
        lock = false;
        if(document.querySelectorAll(".card:not(.flipped)").length=== 0) {
          nextRound();
    
        }

    }
    function nextRound() {
     if (round < 12) {
        round++;
        setTimeout(startRound, 800);
    } else {
        board.innerHTML = "<h2>🎀 You finished all 12 rounds! 🎀</h2>"; 


    }
    }
    function shuffle(arr) {
    return arr.sort(()=> Math.random() -0.5) ;
   
    }
    startRound();