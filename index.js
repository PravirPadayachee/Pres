document.addEventListener("DOMContentLoaded", function() {
    let counter = localStorage.getItem("wishCounter") || 0;
    document.getElementById("counter").innerText = counter;

    document.getElementById("wishButton").addEventListener("click", function() {
        counter++;
        localStorage.setItem("wishCounter", counter);
        document.getElementById("counter").innerText = counter;
    });

    // Confetti
    const confettiContainer = document.querySelector(".confetti");
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti-piece");
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animationDelay = `${Math.random() * 2}s`;
        confettiContainer.appendChild(confetti);
    }

    function getRandomColor() {
        const colors = ["#ff4081", "#ff80ab", "#ffbb93", "#ffc400", "#ffab00"];
        return colors[Math.floor(Math.random() * colors.length)];
    }
});
