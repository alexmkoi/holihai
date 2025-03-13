// Confetti Effect
const canvas = document.getElementById('confettiCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confettiColors = ['#ff0', '#f00', '#0f0', '#00f', '#f0f', '#0ff', '#ff8000'];
const confettiPieces = [];

function createConfettiPiece() {
    const piece = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        size: Math.random() * 10 + 5,
        color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
        speed: Math.random() * 3 + 2,
        rotation: Math.random() * 360,
        rotationSpeed: Math.random() * 10 - 5
    };
    confettiPieces.push(piece);
}

function updateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confettiPieces.forEach((piece, index) => {
        piece.y += piece.speed;
        piece.rotation += piece.rotationSpeed;
        if (piece.y > canvas.height) {
            confettiPieces.splice(index, 1);
        }
        drawConfettiPiece(piece);
    });
    requestAnimationFrame(updateConfetti);
}

function drawConfettiPiece(piece) {
    ctx.save();
    ctx.translate(piece.x, piece.y);
    ctx.rotate((piece.rotation * Math.PI) / 180);
    ctx.fillStyle = piece.color;
    ctx.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size);
    ctx.restore();
}

setInterval(createConfettiPiece, 100);
updateConfetti();
