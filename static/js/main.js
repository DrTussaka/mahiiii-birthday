document.addEventListener("DOMContentLoaded", () => {
    const intro = document.getElementById("cinemaIntro");
    const enterButton = document.getElementById("enterButton");
    const birthdayWorld = document.getElementById("birthdayWorld");
    const invitation = document.getElementById("invitation");
    const music = document.getElementById("birthdayMusic");

    // Cinematic curtains
    window.setTimeout(() => {
        intro.classList.add("open");
    }, 2200);

    window.setTimeout(() => {
        intro.classList.add("finished");
    }, 4900);

    // Start music on the first visitor interaction
    music.volume = 0.35;

    const startMusic = () => {
        music.play().catch(error => {
            console.log("Audio playback failed:", error);
        });

        document.removeEventListener("click", startMusic);
        document.removeEventListener("keydown", startMusic);
    };

    music.play().catch(() => {
        document.addEventListener("click", startMusic);
        document.addEventListener("keydown", startMusic);
    });

    // Enter the birthday celebration
    enterButton.addEventListener("click", () => {
        music.play().catch(() => {});

        birthdayWorld.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });

    // Golden floating particles
    for (let i = 0; i < 28; i++) {
        const particle = document.createElement("span");

        particle.className = "particle";
        particle.textContent = "✦";
        particle.style.left = Math.random() * 100 + "%";
        particle.style.top = Math.random() * 100 + "%";
        particle.style.animationDelay = Math.random() * 6 + "s";
        particle.style.animationDuration = (5 + Math.random() * 7) + "s";

        invitation.appendChild(particle);
    }
});

// Cinematic birthday letter reveal
const revealButton = document.getElementById("revealLetter");
const letterEnvelope = document.getElementById("letterEnvelope");
const letterCard = document.getElementById("letterCard");

if (revealButton && letterEnvelope && letterCard) {
    revealButton.addEventListener("click", () => {
        letterEnvelope.classList.add("hidden");
        letterCard.classList.add("revealed");
        letterCard.setAttribute("aria-hidden", "false");
    });
}
