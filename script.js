document.addEventListener('mousemove', e => {
    const dot = document.createElement('div');
    dot.className = 'neon-dot';
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    document.body.appendChild(dot);
    setTimeout(() => dot.remove(), 700);
  });

  const imgs = Array.from(document.querySelectorAll('.carousel-img'));
  let idx = 0;
  
  function updateCarousel() {
    imgs.forEach((img, i) => {
      img.classList.remove('left', 'center', 'right');
      if (i === idx) {
        img.classList.add('center');
      } else if (i === (idx + 1) % imgs.length) {
        img.classList.add('right');
      } else if (i === (idx + imgs.length - 1) % imgs.length) {
        img.classList.add('left');
      }
    });
  }
  
  updateCarousel();
  setInterval(() => {
    idx = (idx + 1) % imgs.length;
    updateCarousel();
  }, 3000); 
  
window.addEventListener('scroll', () => {
    document.querySelectorAll('.timeline-event').forEach(event => {
      const rect = event.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.7) {
        event.classList.add('active');
      } else {
        event.classList.remove('active');
      }
    });
  });


document.addEventListener("DOMContentLoaded", function() {
    const modalBtn = document.getElementById("contact-modal-btn");
    const modalBg = document.getElementById("contact-modal");
    const closeBtn = document.getElementById("close-modal");
  
    modalBtn.addEventListener("click", () => {
      modalBg.style.display = "flex";
      document.body.style.overflow = "hidden";
    });

    closeBtn.addEventListener("click", () => {
      modalBg.style.display = "none";
      document.body.style.overflow = "";
    });
  
    document.addEventListener("keydown", (e) => {
      if (modalBg.style.display === "flex" && e.key === "Escape") {
        modalBg.style.display = "none";
        document.body.style.overflow = "";
      }
    });
  
    modalBg.addEventListener('click', (e) => {
      if (e.target === modalBg) {
        modalBg.style.display = "none";
        document.body.style.overflow = "";
      }
    });
 
  });


  
  document.querySelectorAll('.project').forEach(project => {
    const readMoreBtn = project.querySelector('.read-more-btn');
    const desc = project.querySelector('.full-description');
    desc.style.display = 'none';
    readMoreBtn.addEventListener('click', () => {
      if(desc.style.display === 'none'){
        desc.style.display = 'block';
        readMoreBtn.textContent = "Hide";
      } else {
        desc.style.display = 'none';
        readMoreBtn.textContent = "Read More";
      }
    });
  });


  const canvas = document.getElementById('particle-bg');
const ctx = canvas.getContext('2d');
let particlesArray = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function Particle(x, y, size, speedX, speedY, color){
  this.x = x;
  this.y = y;
  this.size = size;
  this.speedX = speedX;
  this.speedY = speedY;
  this.color = color;
}
Particle.prototype.update = function(){
  this.x += this.speedX;
  this.y += this.speedY;
  if (this.x < 0 || this.x > canvas.width) this.speedX = -this.speedX;
  if (this.y < 0 || this.y > canvas.height) this.speedY = -this.speedY;
}
Particle.prototype.draw = function(){
  ctx.fillStyle = this.color;
  ctx.shadowColor = this.color;
  ctx.shadowBlur = 4;
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
  ctx.closePath();
  ctx.fill();
}

function init(){
  particlesArray = [];
  const colors = ['#26bae8', '#61db76', '#95d0d0'];
  for(let i=0; i<100; i++){
    let size = Math.random()*2 + 1;
    let x = Math.random()*canvas.width;
    let y = Math.random() * (canvas.height * 0.4);  
    let speedX = (Math.random() - 0.5) * 0.5;
    let speedY = (Math.random() - 0.5) * 0.5;
    let color = colors[Math.floor(Math.random()*colors.length)];
    particlesArray.push(new Particle(x,y,size,speedX,speedY,color));
  }
}
function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particlesArray.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

init();
animate();
