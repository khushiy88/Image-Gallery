function toggleFullscreen() {
  document.fullscreenElement
    ? document.exitFullscreen()
    : document.documentElement.requestFullscreen();
}

function toggleMusic() {
  const music = document.getElementById('bgMusic');
  const btn = document.getElementById('musicBtn');
  if (music.paused) {
    music.play();
    btn.classList.add('playing');
  } else {
    music.pause();
    btn.classList.remove('playing');
  }
}

function openModal(src) {
  const modal = document.getElementById('imageModal');
  document.getElementById('modalImg').src = src;
  modal.style.display = 'flex';
}

function closeModal() {
  document.getElementById('imageModal').style.display = 'none';
}

// Upload images
document.getElementById('upload').addEventListener('change', e => {
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

// Background color selector
document.getElementById('bgSelector').addEventListener('change', function() {
  document.body.style.background = this.value;
});

// Particles
particlesJS('particles-js', {
  particles: {
    number: { value: 50 },
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
      onhover: { enable: true, mode: "repulse" }
    }
  },
  retina_detect: true
});

