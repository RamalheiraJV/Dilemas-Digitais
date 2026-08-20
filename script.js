// ==============================
// MENU MOBILE
// ==============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Fecha o menu quando um link é clicado
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// ==============================
// DESAFIO DE 1 HORA OFFLINE
// ==============================

const challengeBtn = document.getElementById("challengeBtn");
const timer = document.getElementById("timer");

let interval = null;
let timeRemaining = 60 * 60;

function updateTimer() {
    const hours = Math.floor(timeRemaining / 3600);
    const minutes = Math.floor((timeRemaining % 3600) / 60);
    const seconds = timeRemaining % 60;

    const formattedTime =
        String(hours).padStart(2, "0") + ":" +
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");

    timer.innerHTML = `<span>${formattedTime}</span>`;
}

challengeBtn.addEventListener("click", () => {
    if (interval !== null) {
        return;
    }

    challengeBtn.textContent = "Desafio iniciado!";
    challengeBtn.style.background = "#31b86d";

    timeRemaining = 60 * 60;
    updateTimer();

    interval = setInterval(() => {
        timeRemaining--;

        updateTimer();

        if (timeRemaining <= 0) {
            clearInterval(interval);
            interval = null;

            challengeBtn.textContent = "🎉 Desafio concluído!";
            timer.innerHTML = "<span>Parabéns!</span>";
        }
    }, 1000);
});


// ==============================
// ANIMAÇÃO DOS CARDS
// ==============================

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

document.querySelectorAll(".card, .tip").forEach(element => {
    element.classList.add("hidden");
    observer.observe(element);
});


// ==============================
// EFEITO DE SCROLL
// ==============================

window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");

    if (window.scrollY > 30) {
        header.style.boxShadow = "0 5px 25px rgba(0,0,0,0.25)";
    } else {
        header.style.boxShadow = "none";
    }
});