const music = document.getElementById("bgMusic");

function startSurprise() {
    music.play();

    document.querySelector(".landing").style.display = "none";

    document.querySelectorAll(".hidden").forEach(section => {
        section.classList.remove("hidden");
    });

    typeWriter();
    startConfetti();
}

const message = "";

let i = 0;

function typeWriter() {
    if (i < message.length) {
        document.getElementById("typeText").innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 40);
    }
}

/* Confetti */
function startConfetti() {
    const canvas = document.getElementById("confetti");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pieces = [];

    for (let i = 0; i < 120; i++) {
        pieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 6 + 2,
            speed: Math.random() * 3 + 1
        });
    }

    function update() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "white";

        pieces.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
            p.y += p.speed;
            if (p.y > canvas.height) p.y = 0;
        });

        requestAnimationFrame(update);
    }

    update();
}

/* Modal */
const images = document.querySelectorAll(".gallery img");
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

images.forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
    });
});

closeBtn.onclick = function() {
    modal.style.display = "none";
}

modal.onclick = function(e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
}
function startHeartExplosion() {
    const container = document.getElementById("heartContainer");

    for (let i = 0; i < 40; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💖";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.bottom = "0px";
        heart.style.fontSize = (Math.random() * 30 + 20) + "px";

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 4000);
    }
}
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖"; // you can change emoji

    // RANDOM horizontal position across full width
    heart.style.left = Math.random() * 100 + "vw";

    // Random size
    heart.style.fontSize = Math.random() * 20 + 15 + "px";

    document.getElementById("heartContainer").appendChild(heart);

    // Remove after animation
    setTimeout(() => {
        heart.remove();
    }, 4000);
}

// Create hearts continuously
setInterval(createHeart, 300);
