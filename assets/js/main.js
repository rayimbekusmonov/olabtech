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

  let savedTheme = 'dark';
  try {
    savedTheme = localStorage.getItem('olab-theme') || 'dark';
  } catch (e) {}

  htmlEl.setAttribute('data-theme', savedTheme);
  if (themeToggleInput) {
    themeToggleInput.checked = savedTheme === 'light';
    updateToggleIcon(savedTheme);
  }

  if (themeToggleInput) {
    themeToggleInput.addEventListener('change', () => {
      const newTheme = themeToggleInput.checked ? 'light' : 'dark';
      htmlEl.setAttribute('data-theme', newTheme);
      try {
        localStorage.setItem('olab-theme', newTheme);
      } catch (e) {}
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
  if (typeof window.hidePreloader === 'function') {
    window.addEventListener('load', () => {
      window.hidePreloader();
    });
  } else {
    const preloader = document.getElementById('preloader');
    if (preloader) {
      const close = () => {
        preloader.classList.add('hidden');
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
        preloader.style.pointerEvents = 'none';
        setTimeout(() => { preloader.style.display = 'none'; }, 500);
      };
      window.addEventListener('load', () => {
        setTimeout(close, 800);
      });
      setTimeout(close, 3000);
    }
  }

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
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;
      let target = null;
      try {
        target = document.querySelector(href);
      } catch (err) {}
      if (!target) return;
      e.preventDefault();
      const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 72;
      const top = target.getBoundingClientRect().top + (window.pageYOffset || window.scrollY || 0) - offset;
      try {
        window.scrollTo({ top: top, behavior: 'smooth' });
      } catch (scrollErr) {
        window.scrollTo(0, top);
      }
    });
  });

  /* -------------------------------------------------------
     TYPING EFFECT
  ------------------------------------------------------- */
  const typedTextEl = document.getElementById('typed-text');
  let phrases = (window.__olabI18nPhrases) || [
    'Mobil ilovalar', 'Veb-platformalar', 'Backend tizimlar', 'UI/UX dizayn', 'Desktop dasturlar'
  ];
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeTimeout;

  function typeWriter() {
    const current = phrases[phraseIndex];
    if (!current) return;
    if (isDeleting) {
      typedTextEl.textContent = current.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typedTextEl.textContent = current.substring(0, charIndex + 1);
      charIndex++;
    }
    let speed = isDeleting ? 50 : 90;
    if (!isDeleting && charIndex === current.length) {
      speed = 2200; isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      speed = 350;
    }
    typeTimeout = setTimeout(typeWriter, speed);
  }

  // Expose for i18n.js to swap phrases on language change
  window.__olabTypewriter = {
    setPhrases: function(newPhrases) {
      clearTimeout(typeTimeout);
      phrases = newPhrases;
      phraseIndex = 0; charIndex = 0; isDeleting = false;
      if (typedTextEl) typedTextEl.textContent = '';
      setTimeout(typeWriter, 400);
    }
  };

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
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if ('IntersectionObserver' in window) {
    try {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
      );
      revealElements.forEach(el => revealObserver.observe(el));
    } catch (e) {
      revealElements.forEach(el => el.classList.add('visible'));
    }
  } else {
    revealElements.forEach(el => el.classList.add('visible'));
  }

  /* -------------------------------------------------------
     STATS COUNTER ANIMATION
  ------------------------------------------------------- */
  const statElements = document.querySelectorAll('.stat-value[data-target]');
  if ('IntersectionObserver' in window) {
    try {
      const counterObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const el = entry.target;
              const target = parseInt(el.getAttribute('data-target'), 10);
              const suffix = el.getAttribute('data-suffix') || '';
              animateCounter(el, target, suffix);
              counterObserver.unobserve(el);
            }
          });
        },
        { threshold: 0.5 }
      );
      statElements.forEach(el => counterObserver.observe(el));
    } catch (e) {
      statElements.forEach(el => {
        el.textContent = (el.getAttribute('data-target') || '0') + (el.getAttribute('data-suffix') || '');
      });
    }
  } else {
    statElements.forEach(el => {
      el.textContent = (el.getAttribute('data-target') || '0') + (el.getAttribute('data-suffix') || '');
    });
  }

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
  const skillBarsSection = document.querySelector('.skill-bars');
  const triggerSkillBars = () => {
    if (!skillBarsSection) return;
    skillBarsSection.querySelectorAll('.skill-bar-fill').forEach(bar => {
      const width = bar.getAttribute('data-width');
      bar.style.width = width + '%';
    });
  };

  if (skillBarsSection) {
    if ('IntersectionObserver' in window) {
      try {
        const skillObserver = new IntersectionObserver(
          (entries) => {
            if (entries[0] && entries[0].isIntersecting) {
              triggerSkillBars();
              skillObserver.unobserve(skillBarsSection);
            }
          },
          { threshold: 0.3 }
        );
        skillObserver.observe(skillBarsSection);
      } catch (e) {
        triggerSkillBars();
      }
    } else {
      triggerSkillBars();
    }
  }

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
     TEAM CAROUSEL (Auto-rotating, looping & responsive)
  ------------------------------------------------------- */
  const teamWrapper = document.getElementById('team-carousel-wrapper');
  const teamTrack = document.getElementById('team-carousel-track');
  const teamPrev = document.getElementById('team-prev');
  const teamNext = document.getElementById('team-next');
  const teamDotsContainer = document.getElementById('team-carousel-dots');

  if (teamTrack && teamWrapper) {
    const cards = Array.from(teamTrack.querySelectorAll('.team-card'));
    const totalCards = cards.length;
    let currentIndex = 0;
    let autoPlayTimer = null;
    let isPaused = false;

    function getVisibleCardsCount() {
      const w = window.innerWidth;
      if (w <= 640) return 1;
      if (w <= 1023) return 2;
      return 3;
    }

    function getMaxIndex() {
      const visible = getVisibleCardsCount();
      return Math.max(0, totalCards - visible);
    }

    function createDots() {
      if (!teamDotsContainer) return;
      teamDotsContainer.innerHTML = '';
      const maxIdx = getMaxIndex();
      for (let i = 0; i <= maxIdx; i++) {
        const dot = document.createElement('button');
        dot.className = 'team-dot' + (i === currentIndex ? ' active' : '');
        dot.setAttribute('aria-label', (i + 1) + '-sahifa');
        dot.addEventListener('click', () => {
          goToSlide(i);
          resetAutoPlay();
        });
        teamDotsContainer.appendChild(dot);
      }
    }

    function updateDots() {
      if (!teamDotsContainer) return;
      const dots = teamDotsContainer.querySelectorAll('.team-dot');
      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentIndex);
      });
    }

    function updateCarousel(animated = true) {
      const maxIdx = getMaxIndex();
      if (currentIndex > maxIdx) currentIndex = 0;
      if (currentIndex < 0) currentIndex = maxIdx;

      if (!animated) {
        teamTrack.style.transition = 'none';
      } else {
        teamTrack.style.transition = 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
      }

      if (cards.length > 0) {
        const firstCard = cards[0];
        const cardWidth = firstCard.offsetWidth;
        const style = window.getComputedStyle(teamTrack);
        const gap = parseFloat(style.gap) || 24;
        const offset = currentIndex * (cardWidth + gap);
        teamTrack.style.transform = `translateX(-${offset}px)`;
      }

      updateDots();
    }

    function goToSlide(index) {
      currentIndex = index;
      updateCarousel(true);
    }

    function nextSlide() {
      const maxIdx = getMaxIndex();
      if (currentIndex >= maxIdx) {
        currentIndex = 0;
      } else {
        currentIndex++;
      }
      updateCarousel(true);
    }

    function prevSlide() {
      const maxIdx = getMaxIndex();
      if (currentIndex <= 0) {
        currentIndex = maxIdx;
      } else {
        currentIndex--;
      }
      updateCarousel(true);
    }

    if (teamNext) {
      teamNext.addEventListener('click', () => {
        nextSlide();
        resetAutoPlay();
      });
    }

    if (teamPrev) {
      teamPrev.addEventListener('click', () => {
        prevSlide();
        resetAutoPlay();
      });
    }

    function startAutoPlay() {
      stopAutoPlay();
      autoPlayTimer = setInterval(() => {
        if (!isPaused) {
          nextSlide();
        }
      }, 3500);
    }

    function stopAutoPlay() {
      if (autoPlayTimer) clearInterval(autoPlayTimer);
      autoPlayTimer = null;
    }

    function resetAutoPlay() {
      stopAutoPlay();
      startAutoPlay();
    }

    // Pause on hover
    teamWrapper.addEventListener('mouseenter', () => { isPaused = true; });
    teamWrapper.addEventListener('mouseleave', () => { isPaused = false; });

    // Touch swipe support for mobile
    let touchStartX = 0;
    let touchCurrentX = 0;
    let isSwiping = false;

    teamWrapper.addEventListener('touchstart', (e) => {
      isPaused = true;
      touchStartX = e.touches[0].clientX;
      touchCurrentX = touchStartX;
      isSwiping = true;
    }, { passive: true });

    teamWrapper.addEventListener('touchmove', (e) => {
      if (!isSwiping) return;
      touchCurrentX = e.touches[0].clientX;
    }, { passive: true });

    teamWrapper.addEventListener('touchend', () => {
      if (!isSwiping) return;
      isSwiping = false;
      const diff = touchStartX - touchCurrentX;
      if (Math.abs(diff) > 40) {
        if (diff > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
        resetAutoPlay();
      }
      setTimeout(() => { isPaused = false; }, 1000);
    });

    // Resize handler
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        createDots();
        updateCarousel(false);
      }, 150);
    });

    // Initialize
    createDots();
    updateCarousel(false);
    startAutoPlay();
  }

  /* -------------------------------------------------------
     CONTACT FORM — TELEGRAM INTEGRATION
  ------------------------------------------------------- */
  // Telegram Bot Sozlamalari
  // 1. @BotFather dan olingan Bot Tokenni kiriting
  // 2. Guruh Chat ID sini kiriting (odatda -100 bilan boshlanadi)
  const TELEGRAM_CONFIG = {
    botToken: '8572391283:AAEuAMHqxeC6bSqmhTe9Qafp1fG_H8Qdyzk',
    chatId: '-5323474636'
  };

  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  const SERVICE_NAMES = {
    mobile: '📱 Mobil Ilova',
    web: '🌐 Veb-Platforma',
    backend: '⚙️ Backend Tizimi',
    design: '🎨 UI/UX Dizayn',
    branding: '✨ Brending',
    support: '🛠 Texnik yordam',
    other: '📌 Boshqa'
  };

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const nameInput = contactForm.querySelector('#contact-name');
      const emailInput = contactForm.querySelector('#contact-email');
      const phoneInput = contactForm.querySelector('#contact-phone');
      const serviceInput = contactForm.querySelector('#contact-service');
      const messageInput = contactForm.querySelector('#contact-message');
      const submitBtn = contactForm.querySelector('.form-submit-btn');

      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const phone = phoneInput ? phoneInput.value.trim() : '';
      const serviceKey = serviceInput ? serviceInput.value : '';
      const message = messageInput ? messageInput.value.trim() : '';

      if (!name || (!email && !phone) || !message) {
        showFormStatus('Iltimos, ismingiz, telefon raqamingiz (yoki email) va xabaringizni kiriting.', 'error');
        return;
      }

      if (email && !isValidEmail(email)) {
        showFormStatus('Iltimos, to\'g\'ri elektron pochta manzilini kiriting.', 'error');
        return;
      }

      const serviceTitle = SERVICE_NAMES[serviceKey] || (serviceKey ? serviceKey : 'Tanlanmagan');

      // Tugmani yuklanish rejimiga o'tkazish
      const originalBtnHtml = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Yuborilmoqda...';
      submitBtn.disabled = true;

      // Agar bot token hali kiritilmagan bo'lsa ogohlantirish
      if (!TELEGRAM_CONFIG.botToken || TELEGRAM_CONFIG.botToken === 'YOUR_BOT_TOKEN_HERE') {
        setTimeout(() => {
          showFormStatus('⚠️ Telegram Bot Token kiritilmagan. Iltimos, main.js faylida botToken va chatId ni to\'ldiring.', 'error');
          submitBtn.innerHTML = originalBtnHtml;
          submitBtn.disabled = false;
        }, 500);
        return;
      }

      // Telegram xabari matnini shakllantirish
      const now = new Date();
      const timeStr = now.toLocaleDateString('uz-UZ') + ', ' + now.toLocaleTimeString('uz-UZ', { hour: '2-digit', minute: '2-digit' });

      const text = 
`🚀 <b>Yangi Murojaat — Olab Tech</b>

👤 <b>Mijoz:</b> ${escapeHtml(name)}
📞 <b>Telefon:</b> ${phone ? escapeHtml(phone) : 'Ko\'rsatilmadi'}
📧 <b>Email:</b> ${email ? escapeHtml(email) : 'Ko\'rsatilmadi'}
🛠 <b>Xizmat turi:</b> ${serviceTitle}

💬 <b>Xabar:</b>
${escapeHtml(message)}

📅 <b>Vaqt:</b> ${timeStr}`;

      try {
        const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_CONFIG.botToken}/sendMessage`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            chat_id: TELEGRAM_CONFIG.chatId,
            text: text,
            parse_mode: 'HTML'
          })
        });

        const data = await response.json();

        if (data.ok) {
          showFormStatus('✓ Xabaringiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog\'lanamiz.', 'success');
          contactForm.reset();
        } else {
          console.error('Telegram API error:', data);
          showFormStatus('Xatolik yuz berdi: ' + (data.description || 'Xabarni yuborib bo\'lmadi'), 'error');
        }
      } catch (err) {
        console.error('Fetch error:', err);
        showFormStatus('Tarmoq xatosi. Iltimos, internet aloqangizni tekshiring yoki to\'g\'ridan-to\'g\'ri Telegram orqali bog\'laning.', 'error');
      } finally {
        submitBtn.innerHTML = originalBtnHtml;
        submitBtn.disabled = false;
      }
    });
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function showFormStatus(message, type) {
    if (!formStatus) return;
    formStatus.textContent = message;
    formStatus.className = 'form-status ' + type;
    setTimeout(() => {
      formStatus.className = 'form-status';
    }, 6000);
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