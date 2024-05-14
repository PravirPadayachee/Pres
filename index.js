document.addEventListener("DOMContentLoaded", function() {
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

function checkPassword() {
    const passwordInput = document.getElementById('password-input').value;
    const correctPassword = "yourPassword"; // Change this to your desired password

    if (passwordInput === correctPassword) {
        document.getElementById('password-container').classList.add('hidden');
        document.getElementById('content-container').classList.remove('hidden');
    } else {
        document.getElementById('error-message').innerText = 'Incorrect password. Please try again.';
    }
}
