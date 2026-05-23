// Initialize Particles.js
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#a855f7"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            }
        },
        "opacity": {
            "value": 0.5,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 2,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#6366f1",
            "opacity": 0.2,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

// Digital Clock
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('digital-clock').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock();

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.querySelector('aside');

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
    sidebar.classList.toggle('flex');
    sidebar.classList.toggle('w-full');
    sidebar.classList.toggle('fixed');
    sidebar.classList.toggle('inset-0');

    const icon = menuToggle.querySelector('i');
    if (sidebar.classList.contains('flex')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close sidebar on mobile when a link is clicked
const navLinks = document.querySelectorAll('aside nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 1024) {
            sidebar.classList.add('hidden');
            sidebar.classList.remove('flex', 'w-full', 'fixed', 'inset-0');
            menuToggle.querySelector('i').classList.remove('fa-times');
            menuToggle.querySelector('i').classList.add('fa-bars');
        }
    });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Reveal animations on scroll
function reveal() {
    const reveals = document.querySelectorAll("section, .glass-card, .bot-card");
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);
reveal(); // Initial check

// Snowfall Generator
function createSnow() {
    const snowContainer = document.getElementById('snow-container');
    const snowCount = 50;

    for (let i = 0; i < snowCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';

        // Random properties
        const size = Math.random() * 4 + 2 + 'px';
        const left = Math.random() * 100 + '%';
        const duration = Math.random() * 10 + 10 + 's';
        const delay = Math.random() * 10 + 's';
        const opacity = Math.random() * 0.5 + 0.3;

        snowflake.style.width = size;
        snowflake.style.height = size;
        snowflake.style.left = left;
        snowflake.style.animationDuration = duration;
        snowflake.style.animationDelay = delay;
        snowflake.style.opacity = opacity;

        snowContainer.appendChild(snowflake);
    }
}

// Mist Generator
function createMist() {
    const mistContainer = document.getElementById('mist-container');
    for (let i = 0; i < 2; i++) {
        const mist = document.createElement('div');
        mist.className = 'mist';
        mist.style.top = i * 50 + '%';
        mist.style.opacity = 0.1 + (i * 0.1);
        mist.style.animationDuration = (60 + i * 20) + 's';
        mistContainer.appendChild(mist);
    }
}

// Initialize Effects
document.addEventListener('DOMContentLoaded', () => {
    createSnow();
    createMist();
});
