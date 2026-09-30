/* =========================================================
   Olab Tech - i18n (Internationalization)
   Tillar: O'zbek (uz) | Russkiy (ru) | English (en)
   ========================================================= */

(function () {
  'use strict';

  var langMeta = {
    uz: { flag: 'UZ', code: 'UZ', emoji: '\uD83C\uDDFA\uD83C\uDDFF' },
    ru: { flag: 'RU', code: 'RU', emoji: '\uD83C\uDDF7\uD83C\uDDFA' },
    en: { flag: 'EN', code: 'EN', emoji: '\uD83C\uDDEC\uD83C\uDDE7' }
  };

  var translations = {
    uz: {
      'nav.home': 'Bosh sahifa',
      'nav.about': 'Biz haqimizda',
      'nav.services': 'Xizmatlar',
      'nav.tech': 'Texnologiyalar',
      'nav.portfolio': 'Loyihalar',
      'nav.team': 'Jamoa',
      'nav.contact-link': 'Aloqa',
      'nav.contact': "Bog'lanish",
      'hero.badge': "Toshkent, O'zbekiston \u00B7 2019 yildan",
      'hero.title1': 'Biznesingiz uchun',
      'hero.title2': 'Raqamli Kelajak',
      'hero.typing-label': 'Biz yaratamiz:',
      'hero.desc': "Olab Tech \u2014 mobil ilovalar, veb-platformalar va murakkab backend tizimlari yaratuvchi IT kompaniya. iOS, Android, Desktop va Web \u2014 har qanday platforma uchun, har qanday darajadagi loyihani amalga oshiramiz.",
      'hero.btn-projects': 'Loyihalarimiz',
      'hero.btn-contact': 'Murojaat qilish',
      'hero.stat1-label': 'Loyiha',
      'hero.stat2-label': 'Mijoz',
      'hero.stat3-label': 'Yil tajriba',
      'hero.stat4-label': 'Muvaffaqiyat',
      'typing.phrases': ['Mobil ilovalar', 'Veb-platformalar', 'Backend tizimlar', 'UI/UX dizayn', 'Desktop dasturlar']
    },
    ru: {
      'nav.home': '\u0413\u043B\u0430\u0432\u043D\u0430\u044F',
      'nav.about': '\u041E \u043D\u0430\u0441',
      'nav.services': '\u0423\u0441\u043B\u0443\u0433\u0438',
      'nav.tech': '\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438',
      'nav.portfolio': '\u041F\u0440\u043E\u0435\u043A\u0442\u044B',
      'nav.team': '\u041A\u043E\u043C\u0430\u043D\u0434\u0430',
      'nav.contact-link': '\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B',
      'nav.contact': '\u0421\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F',
      'hero.badge': '\u0422\u0430\u0448\u043A\u0435\u043D\u0442, \u0423\u0437\u0431\u0435\u043A\u0438\u0441\u0442\u0430\u043D \u00B7 \u0441 2019 \u0433\u043E\u0434\u0430',
      'hero.title1': '\u0414\u043B\u044F \u0432\u0430\u0448\u0435\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430',
      'hero.title2': '\u0426\u0438\u0444\u0440\u043E\u0432\u043E\u0435 \u0431\u0443\u0434\u0443\u0449\u0435\u0435',
      'hero.typing-label': '\u041C\u044B \u0441\u043E\u0437\u0434\u0430\u0451\u043C:',
      'hero.desc': 'Olab Tech \u2014 IT-\u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F, \u0440\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u044E\u0449\u0430\u044F \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F, \u0432\u0435\u0431-\u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B \u0438 \u0441\u043B\u043E\u0436\u043D\u044B\u0435 backend-\u0441\u0438\u0441\u0442\u0435\u043C\u044B. iOS, Android, Desktop \u0438 Web \u2014 \u0434\u043B\u044F \u043B\u044E\u0431\u043E\u0439 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B, \u043B\u044E\u0431\u043E\u0433\u043E \u0443\u0440\u043E\u0432\u043D\u044F \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u0438.',
      'hero.btn-projects': '\u041D\u0430\u0448\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u044B',
      'hero.btn-contact': '\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043D\u0430\u043C',
      'hero.stat1-label': '\u041F\u0440\u043E\u0435\u043A\u0442\u043E\u0432',
      'hero.stat2-label': '\u041A\u043B\u0438\u0435\u043D\u0442\u043E\u0432',
      'hero.stat3-label': '\u041B\u0435\u0442 \u043E\u043F\u044B\u0442\u0430',
      'hero.stat4-label': '\u0423\u0441\u043F\u0435\u0448\u043D\u043E\u0441\u0442\u044C',
      'typing.phrases': ['\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F', '\u0412\u0435\u0431-\u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B', 'Backend \u0441\u0438\u0441\u0442\u0435\u043C\u044B', 'UI/UX \u0434\u0438\u0437\u0430\u0439\u043D', 'Desktop \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F']
    },
    en: {
      'nav.home': 'Home',
      'nav.about': 'About Us',
      'nav.services': 'Services',
      'nav.tech': 'Technologies',
      'nav.portfolio': 'Projects',
      'nav.team': 'Team',
      'nav.contact-link': 'Contact',
      'nav.contact': 'Get in Touch',
      'hero.badge': 'Tashkent, Uzbekistan \u00B7 Since 2019',
      'hero.title1': 'For Your Business',
      'hero.title2': 'Digital Future',
      'hero.typing-label': 'We build:',
      'hero.desc': 'Olab Tech is an IT company building mobile apps, web platforms, and complex backend systems. iOS, Android, Desktop & Web \u2014 for any platform, any level of complexity.',
      'hero.btn-projects': 'Our Projects',
      'hero.btn-contact': 'Contact Us',
      'hero.stat1-label': 'Projects',
      'hero.stat2-label': 'Clients',
      'hero.stat3-label': 'Years Exp.',
      'hero.stat4-label': 'Success Rate',
      'typing.phrases': ['Mobile Apps', 'Web Platforms', 'Backend Systems', 'UI/UX Design', 'Desktop Software']
    }
  };

  var currentLang = localStorage.getItem('olab-lang') || 'uz';

  function applyTranslations(lang) {
    var t = translations[lang];
    if (!t) return;

    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        if (el.tagName === 'A' && el.querySelector('i')) {
          var icon = el.querySelector('i').outerHTML;
          el.innerHTML = icon + ' ' + t[key];
        } else {
          el.textContent = t[key];
        }
      }
    });

    var heroBadge = document.querySelector('.hero-badge');
    if (heroBadge) {
      var dot = heroBadge.querySelector('.hero-badge-dot');
      heroBadge.textContent = t['hero.badge'] || '';
      if (dot) heroBadge.prepend(dot);
    }

    var titleEl = document.querySelector('.hero-title');
    if (titleEl) {
      var gradSpan = titleEl.querySelector('.gradient-text');
      if (gradSpan && titleEl.childNodes[0]) {
        titleEl.childNodes[0].textContent = (t['hero.title1'] || '') + '\n';
        gradSpan.textContent = t['hero.title2'] || '';
      }
    }

    var typingLabel = document.querySelector('.typing-label');
    if (typingLabel) typingLabel.textContent = t['hero.typing-label'] || '';

    var heroDesc = document.querySelector('.hero-desc');
    if (heroDesc) heroDesc.textContent = t['hero.desc'] || '';

    var btnProjects = document.querySelector('#hero-portfolio-btn');
    if (btnProjects) {
      var icon1 = btnProjects.querySelector('i');
      btnProjects.textContent = t['hero.btn-projects'] || '';
      if (icon1) btnProjects.prepend(icon1);
    }
    var btnContact = document.querySelector('#hero-contact-btn');
    if (btnContact) {
      var icon2 = btnContact.querySelector('i');
      btnContact.textContent = t['hero.btn-contact'] || '';
      if (icon2) btnContact.prepend(icon2);
    }

    var statLabels = document.querySelectorAll('.hero-stat-label');
    var statKeys = ['hero.stat1-label', 'hero.stat2-label', 'hero.stat3-label', 'hero.stat4-label'];
    statLabels.forEach(function(el, i) {
      if (t[statKeys[i]]) el.textContent = t[statKeys[i]];
    });

    if (t['typing.phrases'] && window.__olabTypewriter) {
      window.__olabTypewriter.setPhrases(t['typing.phrases']);
    } else if (t['typing.phrases']) {
      window.__olabI18nPhrases = t['typing.phrases'];
    }

    var meta = langMeta[lang];
    var flagEl = document.getElementById('lang-flag');
    var codeEl = document.getElementById('lang-code');
    if (flagEl) flagEl.textContent = meta.emoji;
    if (codeEl) codeEl.textContent = meta.code;

    document.querySelectorAll('.lang-option').forEach(function(btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    document.documentElement.lang = lang;
    localStorage.setItem('olab-lang', lang);
    currentLang = lang;
  }

  var dropdown = document.getElementById('lang-dropdown');
  var langBtn  = document.getElementById('lang-btn');
  var langMenu = document.getElementById('lang-menu');

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