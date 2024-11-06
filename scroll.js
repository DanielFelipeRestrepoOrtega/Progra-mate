window.addEventListener('scroll', function() {
    const reveals = document.querySelectorAll('.scroll-reveal');
    reveals.forEach((element) => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const revealPoint = 150;
  
      if (elementTop < windowHeight - revealPoint) {
        element.classList.add('visible');
      }
    });
  });