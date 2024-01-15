document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
  
    function fadeInElements(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }
  
    const sectionObserver = new IntersectionObserver(fadeInElements, {
      root: null,
      threshold: 0.2,
    });
  
    sections.forEach((section) => {
      sectionObserver.observe(section);
    });
  });
  


  document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
  
    function fadeInElements(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }
  
    const sectionObserver = new IntersectionObserver(fadeInElements, {
      root: null,
      threshold: 0.2,
    });
  
    sections.forEach((section) => {
      sectionObserver.observe(section);
    });
  
    // Add animation class to logo and navigation after page load
    document.getElementById('logo').classList.add('animate');
    document.getElementById('nav').classList.add('animate');
  });