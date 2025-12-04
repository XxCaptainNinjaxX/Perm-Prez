const canvas = document.getElementById("backgroundCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray;

// Mouse interaction settings
let mouse = {
  x: null,
  y: null,
  radius: 100, // The area around the mouse that affects dots
};

window.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
});

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

// Mouse out event to stop interaction when mouse leaves window
window.addEventListener("mouseout", function () {
  mouse.x = undefined;
  mouse.y = undefined;
});

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    // BaseX and BaseY remember the "Grid" position
    this.baseX = x;
    this.baseY = y;
    // Match the size to the reference image (small dots)
    this.size = 2;
    this.density = Math.random() * 30 + 1;
  }

  draw() {
    // Green color matching your reference image
    ctx.fillStyle = "#69f0ae";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }

  update() {
    // Calculate distance between mouse and this dot
    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy);

    // Physics Logic:
    // If the mouse is close (distance < mouse.radius), move away slightly
    if (distance < mouse.radius) {
      let forceDirectionX = dx / distance;
      let forceDirectionY = dy / distance;
      let maxDistance = mouse.radius;

      // Calculate force (stronger when closer)
      let force = (maxDistance - distance) / maxDistance;

      let directionX = forceDirectionX * force * this.density;
      let directionY = forceDirectionY * force * this.density;

      // Move away from mouse
      this.x -= directionX;
      this.y -= directionY;
    } else {
      // If mouse is far, return to the original grid position (BaseX, BaseY)
      if (this.x !== this.baseX) {
        let dxMove = this.x - this.baseX;
        // The '/ 10' creates a smooth easing animation back to place
        this.x -= dxMove / 10;
      }
      if (this.y !== this.baseY) {
        let dyMove = this.y - this.baseY;
        this.y -= dyMove / 10;
      }
    }
  }
}

function init() {
  particlesArray = [];

  // GRID LOGIC:
  // Instead of random locations, we use loops to place dots in perfect rows/cols
  const spacing = 40; // Space between dots (in pixels)

  for (let y = 0; y < canvas.height; y += spacing) {
    for (let x = 0; x < canvas.width; x += spacing) {
      particlesArray.push(new Particle(x, y));
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].draw();
    particlesArray[i].update();
  }
  requestAnimationFrame(animate);
}

init();
animate();
