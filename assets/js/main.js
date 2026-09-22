/* =========================================================
   Olab Tech — Modern Main JavaScript
   Author: Antigravity | 2026
   Pure Vanilla JS — No jQuery
   ========================================================= */

(function () {
  'use strict';

  /* -------------------------------------------------------
     THEME TOGGLE (Dark / Light)
  ------------------------------------------------------- */
  const themeToggleInput = document.getElementById('theme-toggle-input');
  const htmlEl = document.documentElement;

  const savedTheme = localStorage.getItem('olab-theme') || 'dark';
  htmlEl.setAttribute('data-theme', savedTheme);
  if (themeToggleInput) {
    themeToggleInput.checked = savedTheme === 'light';
    updateToggleIcon(savedTheme);
  }

  if (themeToggleInput) {
    themeToggleInput.addEventListener('change', () => {
      const newTheme = themeToggleInput.checked ? 'light' : 'dark';
      htmlEl.setAttribute('data-theme', newTheme);
      localStorage.setItem('olab-theme', newTheme);
      updateToggleIcon(newTheme);
    });
  }

  function updateToggleIcon(theme) {
    const thumb = document.querySelector('.toggle-thumb');
    if (!thumb) return;
    // SVG ikonkalarni almashtirish
    const moonIcon = thumb.querySelector('.theme-icon-moon');
    const sunIcon = thumb.querySelector('.theme-icon-sun');
    if (moonIcon && sunIcon) {
      if (theme === 'light') {
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
      } else {
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
      }
    }
  }

  /* -------------------------------------------------------
     PRELOADER
  ------------------------------------------------------- */
  const preloader = document.getElementById('preloader');
  window.addEventListener('load', () => {
    setTimeout(() => {
      if (preloader) preloader.classList.add('hidden');
    }, 1600);
  });

  /* -------------------------------------------------------
     NAVBAR: Scroll behavior + active link
  ------------------------------------------------------- */
  const navbar = document.querySelector('.navbar');
  const backToTop = document.querySelector('.back-to-top');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Navbar scrolled state
    if (navbar) {
      navbar.classList.toggle('scrolled', scrollY > 60);
    }

    // Back to top
    if (backToTop) {
      backToTop.classList.toggle('visible', scrollY > 400);
    }

    // Active nav link
    updateActiveNavLink();
  }, { passive: true });

  function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav a');
    const scrollY = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  // Back to top click
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* -------------------------------------------------------
     MOBILE HAMBURGER MENU
  ------------------------------------------------------- */
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open');
    });

    // Close on link click
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
      });
    });
  }

  /* -------------------------------------------------------
     SMOOTH SCROLL
  ------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 72;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* -------------------------------------------------------
     TYPING EFFECT
  ------------------------------------------------------- */
  const typedTextEl = document.getElementById('typed-text');
  const phrases = [
    'Zamonaviy mobil ilovalar',
    'Keng ko\'lamli veb-platformalar',
    'Kuchli backend tizimlar',
    'Mukammal UI/UX dizayn',
    'Raqamli marketing yechimlar',
  ];
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeTimeout;

  function typeWriter() {
    const current = phrases[phraseIndex];

    if (isDeleting) {
      typedTextEl.textContent = current.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typedTextEl.textContent = current.substring(0, charIndex + 1);
      charIndex++;
    }

    let speed = isDeleting ? 60 : 110;

    if (!isDeleting && charIndex === current.length) {
      speed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      speed = 300;
    }

    typeTimeout = setTimeout(typeWriter, speed);
  }

  if (typedTextEl) {
    setTimeout(typeWriter, 1000);
  }

  /* -------------------------------------------------------
     PARTICLES CANVAS
  ------------------------------------------------------- */
  const canvas = document.getElementById('particles-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;

    function resizeCanvas() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    function createParticle() {
      return {
        x: Math.random() * canvas.width,
        y: canvas.height + Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        speedY: -(Math.random() * 0.8 + 0.3),
        speedX: (Math.random() - 0.5) * 0.4,
        opacity: 0,
        maxOpacity: Math.random() * 0.4 + 0.1,
        life: 0,
        maxLife: Math.random() * 300 + 200,
      };
    }

    function initParticles() {
      particles = Array.from({ length: 50 }, createParticle);
    }
    initParticles();

    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.life++;
        p.x += p.speedX;
        p.y += p.speedY;

        // Fade in/out
        const halfLife = p.maxLife / 2;
        p.opacity = p.life < halfLife
          ? (p.life / halfLife) * p.maxOpacity
          : ((p.maxLife - p.life) / halfLife) * p.maxOpacity;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 102, 241, ${p.opacity})`;
        ctx.fill();

        if (p.life >= p.maxLife) {
          particles[i] = createParticle();
        }
      });

      animationId = requestAnimationFrame(drawParticles);
    }
    drawParticles();
  }

  /* -------------------------------------------------------
     SCROLL REVEAL (Intersection Observer)
  ------------------------------------------------------- */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Don't unobserve — keep it visible
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
  );

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
    revealObserver.observe(el);
  });

  /* -------------------------------------------------------
     STATS COUNTER ANIMATION
  ------------------------------------------------------- */
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-target'));
          const suffix = el.getAttribute('data-suffix') || '';
          animateCounter(el, target, suffix);
          counterObserver.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll('.stat-value[data-target]').forEach(el => {
    counterObserver.observe(el);
  });

  function animateCounter(el, target, suffix) {
    const duration = 2000;
    const start = performance.now();
    const startVal = 0;

    function step(timestamp) {
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current = Math.floor(startVal + (target - startVal) * eased);
      el.textContent = current + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* -------------------------------------------------------
     SKILL BARS ANIMATION
  ------------------------------------------------------- */
  const skillObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
            const width = bar.getAttribute('data-width');
            setTimeout(() => {
              bar.style.width = width + '%';
            }, 200);
          });
          skillObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  const skillBarsSection = document.querySelector('.skill-bars');
  if (skillBarsSection) skillObserver.observe(skillBarsSection);

  /* -------------------------------------------------------
     PORTFOLIO FILTER
  ------------------------------------------------------- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-grid-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Active state
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      portfolioItems.forEach(item => {
        const category = item.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          item.style.opacity = '1';
          item.style.transform = 'scale(1)';
          item.style.display = '';
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.9)';
          setTimeout(() => {
            if (btn.getAttribute('data-filter') !== 'all' && item.getAttribute('data-category') !== btn.getAttribute('data-filter')) {
              item.style.display = 'none';
            }
          }, 300);
        }
      });
    });
  });

  /* -------------------------------------------------------
     CONTACT FORM
  ------------------------------------------------------- */
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = contactForm.querySelector('#contact-name').value.trim();
      const email = contactForm.querySelector('#contact-email').value.trim();
      const message = contactForm.querySelector('#contact-message').value.trim();

      const phone = contactForm.querySelector('#contact-phone') ? contactForm.querySelector('#contact-phone').value.trim() : '';

      if (!name || !email || !message) {
        showFormStatus('Iltimos, barcha majburiy maydonlarni to\'ldiring.', 'error');
        return;
      }
      if (!isValidEmail(email)) {
        showFormStatus('Iltimos, to\'g\'ri elektron pochta manzilini kiriting.', 'error');
        return;
      }

      const submitBtn = contactForm.querySelector('.form-submit-btn');
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Yuborilmoqda...';
      submitBtn.disabled = true;

      // Simulate form submission (replace with actual backend)
      setTimeout(() => {
        showFormStatus('✓ Xabaringiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog\'lanamiz.', 'success');
        contactForm.reset();
        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Xabar yuborish';
        submitBtn.disabled = false;
      }, 1800);
    });
  }

  function showFormStatus(message, type) {
    if (!formStatus) return;
    formStatus.textContent = message;
    formStatus.className = 'form-status ' + type;
    setTimeout(() => {
      formStatus.className = 'form-status';
    }, 5000);
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  /* -------------------------------------------------------
     NEWSLETTER FORM
  ------------------------------------------------------- */
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      if (!emailInput.value || !isValidEmail(emailInput.value)) {
        emailInput.style.borderColor = 'rgba(239,68,68,0.5)';
        setTimeout(() => emailInput.style.borderColor = '', 2000);
        return;
      }
      const btn = newsletterForm.querySelector('button');
      btn.innerHTML = '<i class="fas fa-check"></i> Obuna bo\'ldingiz!';
      btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
      emailInput.value = '';
      setTimeout(() => {
        btn.textContent = 'Obuna bo\'lish';
        btn.style.background = '';
      }, 3000);
    });
  }

  /* -------------------------------------------------------
     TECH BADGE HOVER RIPPLE
  ------------------------------------------------------- */
  document.querySelectorAll('.tech-badge').forEach(badge => {
    badge.addEventListener('mouseenter', function (e) {
      const rect = this.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.style.cssText = `
        position:absolute;left:50%;top:50%;
        width:0;height:0;
        background:rgba(99,102,241,0.15);
        border-radius:50%;
        transform:translate(-50%,-50%);
        transition:width 0.4s ease,height 0.4s ease,opacity 0.4s ease;
        pointer-events:none;z-index:0;
      `;
      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);
      requestAnimationFrame(() => {
        ripple.style.width = '200px';
        ripple.style.height = '200px';
        ripple.style.opacity = '0';
      });
      setTimeout(() => ripple.remove(), 500);
    });
  });

  /* -------------------------------------------------------
     CURSOR GLOW EFFECT (Desktop only)
  ------------------------------------------------------- */
  if (window.innerWidth > 1024) {
    const glow = document.createElement('div');
    glow.style.cssText = `
      position:fixed;pointer-events:none;z-index:9999;
      width:400px;height:400px;border-radius:50%;
      background:radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%);
      transform:translate(-50%,-50%);
      transition:left 0.1s ease,top 0.1s ease;
      will-change:transform;
    `;
    document.body.appendChild(glow);

    document.addEventListener('mousemove', e => {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    });
  }

  /* -------------------------------------------------------
     NAVBAR LINK HOVER INDICATOR
  ------------------------------------------------------- */
  const navLinksList = document.querySelectorAll('.nav-links a');
  navLinksList.forEach(link => {
    link.addEventListener('mouseenter', function () {
      this.style.transition = 'all 0.15s ease';
    });
  });

})();