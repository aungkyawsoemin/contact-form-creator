
export const fadeIn = (delay: number = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay,
      duration: 0.6
    }
  }
});

export const slideUp = (delay: number = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.6
    }
  }
});

export const slideInFromLeft = (delay: number = 0) => ({
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay,
      duration: 0.6
    }
  }
});

export const slideInFromRight = (delay: number = 0) => ({
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay,
      duration: 0.6
    }
  }
});

export function setupIntersectionObserver() {
  if (typeof window !== 'undefined') {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    setTimeout(() => {
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
      });
    }, 100);
    
    return observer;
  }
  
  return null;
}
