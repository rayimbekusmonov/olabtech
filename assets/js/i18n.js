/* =========================================================
   Olab Tech — i18n (Internationalization)
   Tillar: O'zbek (uz) | Русский (ru) | English (en)
   ========================================================= */

(function () {
  'use strict';

  const translations = {
    uz: {
      'nav.home': "Bosh sahifa", 'nav.about': "Biz haqimizda", 'nav.services': "Xizmatlar",
      'nav.tech': "Texnologiyalar", 'nav.portfolio': "Loyihalar", 'nav.team': "Jamoa",
      'nav.contact-link': "Aloqa", 'nav.contact': "Bog'lanish",
      'hero.badge': "Toshkent, O'zbekiston · 2019 yildan",
      'hero.title1': "Biznesingiz uchun", 'hero.title2': "Raqamli Kelajak",
      'hero.typing-label': "Biz yaratamiz:",
      'hero.desc': "Olab Tech — mobil ilovalar, veb-platformalar va murakkab backend tizimlari yaratuvchi IT kompaniya. iOS, Android, Desktop va Web — har qanday platforma uchun, har qanday darajadagi loyihani amalga oshiramiz.",
      'hero.btn-projects': "Loyihalarimiz", 'hero.btn-contact': "Murojaat qilish",
      'hero.stat1-label': "Loyiha", 'hero.stat2-label': "Mijoz",
      'hero.stat3-label': "Yil tajriba", 'hero.stat4-label': "Muvaffaqiyat",
      'typing.phrases': ['Mobil ilovalar', 'Veb-platformalar', 'Backend tizimlar', 'UI/UX dizayn', 'Desktop dasturlar'],
    },
    ru: {
      'nav.home': "Главная", 'nav.about': "О нас", 'nav.services': "Услуги",
      'nav.tech': "Технологии", 'nav.portfolio': "Проекты", 'nav.team': "Команда",
      'nav.contact-link': "Контакты", 'nav.contact': "Связаться",
      'hero.badge': "Ташкент, Узбекистан · с 2019 года",
      'hero.title1': "Для вашего бизнеса", 'hero.title2': "Цифровое будущее",
      'hero.typing-label': "Мы создаём:",
      'hero.desc': "Olab Tech — IT-компания, разрабатывающая мобильные приложения, веб-платформы и сложные backend-системы. iOS, Android, Desktop и Web — для любой платформы, любого уровня сложности.",
      'hero.btn-projects': "Наши проекты", 'hero.btn-contact': "Написать нам",
      'hero.stat1-label': "Проектов", 'hero.stat2-label': "Клиентов",
      'hero.stat3-label': "Лет опыта", 'hero.stat4-label': "Успешность",
      'typing.phrases': ['Мобильные приложения', 'Веб-платформы', 'Backend системы', 'UI/UX дизайн', 'Desktop приложения'],
    },
    en: {
      'nav.home': "Home", 'nav.about': "About Us", 'nav.services': "Services",
      'nav.tech': "Technologies", 'nav.portfolio': "Projects", 'nav.team': "Team",
      'nav.contact-link': "Contact", 'nav.contact': "Get in Touch",
      'hero.badge': "Tashkent, Uzbekistan · Since 2019",
      'hero.title1': "For Your Business", 'hero.title2': "Digital Future",
      'hero.typing-label': "We build:",
      'hero.desc': "Olab Tech is an IT company building mobile apps, web platforms, and complex backend systems. iOS, Android, Desktop & Web — for any platform, any level of complexity.",
      'hero.btn-projects': "Our Projects", 'hero.btn-contact': "Contact Us",
      'hero.stat1-label': "Projects", 'hero.stat2-label': "Clients",
      'hero.stat3-label': "Years Exp.", 'hero.stat4-label': "Success Rate",
      'typing.phrases': ['Mobile Apps', 'Web Platforms', 'Backend Systems', 'UI/UX Design', 'Desktop Software'],
    }
  };

  const langMeta = {
    uz: { flag: '\uD83C\uDDFA\uD83C\uDDFF', code: 'UZ' },
    ru: { flag: '\uD83C\uDDF7\uD83C\uDDFA', code: 'RU' },
    en: { flag: '\uD83C\uDDEC\uD83C\uDDE7', code: 'EN' },
  };

  let currentLang = localStorage.getItem('olab-lang') || 'uz';

  function applyTranslations(lang) {
    const t = translations[lang];
    if (!t) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        if (el.tagName === 'A' && el.querySelector('i')) {
          const icon = el.querySelector('i').outerHTML;
          el.innerHTML = icon + ' ' + t[key];
        } else {
          el.textContent = t[key];
        }
      }
    });

    const heroBadge = document.querySelector('.hero-badge');
    if (heroBadge) {
      const dot = heroBadge.querySelector('.hero-badge-dot');
      heroBadge.textContent = t['hero.badge'] || '';
      if (dot) heroBadge.prepend(dot);
    }

    const titleEl = document.querySelector('.hero-title');
    if (titleEl) {
      const gradSpan = titleEl.querySelector('.gradient-text');
      if (gradSpan && titleEl.childNodes[0]) {
        titleEl.childNodes[0].textContent = (t['hero.title1'] || '') + '\n';
        gradSpan.textContent = t['hero.title2'] || '';
      }
    }

    const typingLabel = document.querySelector('.typing-label');
    if (typingLabel) typingLabel.textContent = t['hero.typing-label'] || '';

    const heroDesc = document.querySelector('.hero-desc');
    if (heroDesc) heroDesc.textContent = t['hero.desc'] || '';

    const btnProjects = document.querySelector('#hero-portfolio-btn');
    if (btnProjects) {
      const icon = btnProjects.querySelector('i');
      btnProjects.textContent = t['hero.btn-projects'] || '';
      if (icon) btnProjects.prepend(icon);
    }
    const btnContact = document.querySelector('#hero-contact-btn');
    if (btnContact) {
      const icon = btnContact.querySelector('i');
      btnContact.textContent = t['hero.btn-contact'] || '';
      if (icon) btnContact.prepend(icon);
    }

    const statLabels = document.querySelectorAll('.hero-stat-label');
    const statKeys = ['hero.stat1-label', 'hero.stat2-label', 'hero.stat3-label', 'hero.stat4-label'];
    statLabels.forEach((el, i) => { if (t[statKeys[i]]) el.textContent = t[statKeys[i]]; });

    if (t['typing.phrases'] && window.__olabTypewriter) {
      window.__olabTypewriter.setPhrases(t['typing.phrases']);
    } else if (t['typing.phrases']) {
      window.__olabI18nPhrases = t['typing.phrases'];
    }

    const meta = langMeta[lang];
    const flagEl = document.getElementById('lang-flag');
    const codeEl = document.getElementById('lang-code');
    if (flagEl) flagEl.textContent = meta.flag;
    if (codeEl) codeEl.textContent = meta.code;

    document.querySelectorAll('.lang-option').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    document.documentElement.lang = lang;
    localStorage.setItem('olab-lang', lang);
    currentLang = lang;
  }

  const dropdown = document.getElementById('lang-dropdown');
  const langBtn  = document.getElementById('lang-btn');
  const langMenu = document.getElementById('lang-menu');

  if (langBtn) {
    langBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      dropdown.classList.toggle('open');
    });
  }

  if (langMenu) {
    langMenu.querySelectorAll('.lang-option').forEach(function(btn) {
      btn.addEventListener('click', function() {
        applyTranslations(btn.dataset.lang);
        dropdown.classList.remove('open');
      });
    });
  }

  document.addEventListener('click', function(e) {
    if (dropdown && !dropdown.contains(e.target)) {
      dropdown.classList.remove('open');
    }
  });

  window.__olabI18nPhrases = translations[currentLang]['typing.phrases'];
  window.__olabApplyLang = applyTranslations;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() { applyTranslations(currentLang); });
  } else {
    applyTranslations(currentLang);
  }

})();
