// canvas.js
const canvas = document.getElementById('devotionalCanvas');
const ctx = canvas.getContext('2d');

let particlesArray =[];

// Handle Resize
function initCanvas() {
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;
}
window.addEventListener('resize', initCanvas);
initCanvas();

// Particle Class
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 100; // start from bottom
        this.size = Math.random() * 15 + 10;
        this.speedY = (Math.random() * 1) + 0.2;
        this.speedX = (Math.random() * 1) - 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
        // 0: Light Orb, 1: Om symbol, 2: Lotus Emoji
        this.type = Math.floor(Math.random() * 3); 
    }
    update() {
        this.y -= this.speedY;
        this.x += this.speedX;
        
        // Reset if it goes off screen
        if (this.y < -50) {
            this.y = canvas.height + 50;
            this.x = Math.random() * canvas.width;
        }
    }
    draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        if (this.type === 0) {
            // Soft Light Orb
            let gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
            gradient.addColorStop(0, 'rgba(255, 215, 0, 1)');
            gradient.addColorStop(1, 'rgba(255, 215, 0, 0)');
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        } else if (this.type === 1) {
            // Om Symbol
            ctx.fillStyle = '#FFD700'; // Gold
            ctx.font = `${this.size}px Noto Serif Devanagari`;
            ctx.fillText('ॐ', this.x, this.y);
        } else {
            // Lotus
            ctx.font = `${this.size}px Arial`;
            ctx.fillText('🪷', this.x, this.y);
        }
        ctx.restore();
    }
}

function createParticles() {
    particlesArray =[];
    let numberOfParticles = (canvas.width * canvas.height) / 9000; // Responsive amount
    for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }
    requestAnimationFrame(animateParticles);
}

createParticles();
animateParticles();
