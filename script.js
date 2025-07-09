// Toggle fullscreen mode
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

// Toggle background music
function toggleMusic() {
  const music = document.getElementById('bgMusic');
  const btn = document.getElementById('musicBtn');
  if (music.paused) {
    music.play();
    btn.classList.add('playing');
    btn.textContent = '🎵 Music';
  } else {
    music.pause();
    btn.classList.remove('playing');
    btn.textContent = '🔇 Music Off';
  }
}

// Open modal with selected image
function openModal(src) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImg');
  modalImg.src = src;
  modal.style.display = 'flex';
}

// Close the modal
function closeModal() {
  document.getElementById('imageModal').style.display = 'none';
}

// Handle image uploads
document.getElementById('upload').addEventListener('change', (e) => {
  const gallery = document.getElementById('gallery');
  const files = e.target.files;

  for (let file of files) {
    const reader = new FileReader();
    reader.onload = () => {
      const img = document.createElement('img');
      img.src = reader.result;
      img.onclick = () => openModal(reader.result);
      gallery.appendChild(img);
    };
    reader.readAsDataURL(file);
  }
});

// Apply selected background color or gradient
document.getElementById('bgSelector').addEventListener('change', function () {
  const value = this.value;
  const particlesBg = document.getElementById('particles-js');
  if (value) {
    particlesBg.style.background = value;
  }
});

// Initialize particles.js
particlesJS('particles-js', {
  particles: {
    number: { value: 60 },
    size: { value: 3 },
    color: { value: "#ffffff" },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      }
    }
  },
  retina_detect: true
});
window.addEventListener('load', () => {
  const music = document.getElementById('bgMusic');
  music.volume = 0.3;
  music.muted = false; // unmute after load
  music.play().catch(() => {
    console.log('Autoplay blocked; waiting for user interaction.');
    document.body.addEventListener('click', () => music.play());
  });
});
