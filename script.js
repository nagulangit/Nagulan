// Initialize particle.js for background
particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ff6f61"
        },
        "shape": {
            "type": "circle"
        },
        "size": {
            "value": 5,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 4,
                "size_min": 0.3
            }
        },
        "opacity": {
            "value": 0.5,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.1
            }
        }
    }
});

// AOS (Animate on Scroll)
AOS.init();
