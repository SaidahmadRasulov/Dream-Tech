export const options = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: '#b0b0b0'  
    },
    shape: {
      type: 'polygon', 
      stroke: {
        width: 1,
        color: '#b0b0b0'
      },
      polygon: {
        nb_sides: 50 
      }
    },
    opacity: {
      value: 0.3,
      random: false,
      anim: {
        enable: false,
        speed: .1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 0,  // Minimize the size to focus on lines
      random: true,
      anim: {
        enable: false,
        speed: 120,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 250,
      color: '#fff',
      opacity: 1,
      width: 2
    },
    move: {
      enable: true,
      speed: 5,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'repulse'
      },
      onclick: {
        enable: true,
        mode: 'push'
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
}
