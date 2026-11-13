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
      // Navbar
      'nav.home': 'Bosh sahifa',
      'nav.about': 'Biz haqimizda',
      'nav.services': 'Xizmatlar',
      'nav.tech': 'Texnologiyalar',
      'nav.portfolio': 'Loyihalar',
      'nav.team': 'Jamoa',
      'nav.contact-link': 'Aloqa',
      'nav.contact': "Bog'lanish",

      // Hero
      'hero.badge': "Toshkent, O'zbekiston \u00B7 12+ yillik tajriba",
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
      'typing.phrases': ['Mobil ilovalar', 'Veb-platformalar', 'Backend tizimlar', 'AI yechimlar', 'Telegram botlar'],

      // Multiplatform badges
      'badge.web': 'Web Dashboard',
      'badge.backend': 'Backend & API',
      'badge.mobile': 'iOS & Android',
      'badge.enterprise': 'Enterprise darajasi',
      'badge.enterprise-sub': 'Xavfsiz & Miqyosli',
      'badge.stats-projects': 'Loyihalar',
      'badge.stats-clients': 'Mijozlar',
      'badge.stats-success': 'Muvaffaqiyat',
      'badge.revenue': "Daromad o'sishi",

      // About
      'about.label': 'Biz haqimizda',
      'about.title': "Raqamli o'zgarishlar<br>uchun ishonchli sherik",
      'about.subtitle': "Olab Tech \u2014 12+ yillik tajribaga ega professional jamoa bilan O'zbekistondagi va xalqaro bizneslar uchun zamonaviy mobil ilovalar hamda veb-platformalar yaratib kelayotgan IT kompaniyasi.",
      'about.card1-title': 'Premium Dizayn va Interfeys',
      'about.card1-desc': "Foydalanuvchi tajribasini birinchi o'ringa qo'ygan zamonaviy UI/UX dizayn. Har bir piksel maqsadga xizmat qiladi.",
      'about.card2-title': 'Kuchli Brend Identifikatsiyasi',
      'about.card2-desc': "Brendingiz raqamli va jismoniy muhitda bir xil kuchli ko'rinishda. Logotip, korporativ identifikatsiya, marketing materiallar.",
      'about.card3-title': "Uzluksiz Texnik Qo'llab-quvvatlash",
      'about.card3-desc': "Loyiha topshirilgach ham doim siz bilan birgamiz. Texnik yordam, dasturiy yangilanishlar va kengaytirishlar uchun 7/24 tayyor.",
      'about.why-title': 'Nima uchun aynan <span style="background:var(--accent-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">Olab Tech?</span>',
      'about.why-p1': "Biz shunchaki kod yozmaymiz \u2014 biznesingizning raqamli versiyasini quramiz. Har bir loyihaga startap chaqqonligi va korporativ darajadagi mas'uliyat bilan yondoshamiz.",
      'about.why-p2': "Toshkent markazida joylashgan jamoamiz O'zbekiston va xalqaro mijozlar bilan ishlash tajribasiga ega. Mobil ilovalardan tortib to murakkab backend tizimlargacha \u2014 barchasi bir joyda.",
      'about.hl1': "Agile metodologiyasi \u2014 shaffof jarayon, haftalik hisobotlar",
      'about.hl2': "NDA shartnomasi \u2014 g'oyalaringiz qonun bilan himoyalangan",
      'about.hl3': "Moslashuvchan narxlar \u2014 har qanday byudjet uchun yechim",
      'about.hl4': "O'z vaqtida topshirish \u2014 SLA kafolati bilan",
      'about.stat1-label': 'Yakunlangan loyihalar',
      'about.stat2-label': 'Mamnun mijozlar',
      'about.stat3-label': 'Yillik tajriba',
      'about.stat4-label': 'Muvaffaqiyat darajasi',

      // Services
      'services.label': 'Xizmatlarimiz',
      'services.title': 'Biz taqdim etadigan xizmatlar',
      'services.subtitle': "Raqamli mahsulotlarni g'oyadan ishlab chiqish va joylashtirishgacha to'liq tsikl davomida qo'llab-quvvatlaymiz.",
      'services.s1-title': 'Mobil Ilovalar',
      'services.s1-desc': "iOS va Android uchun native va cross-platform ilovalar. App Store va Google Play'ga chiqarishgacha to'liq qo'llab-quvvatlash.",
      'services.s2-title': 'Veb-Ilovalar',
      'services.s2-desc': 'Zamonaviy, tez va moslashuvchan veb-saytlar hamda veb-ilovalar. SPA, PWA va enterprise darajadagi platformalar.',
      'services.s3-title': 'Backend Tizimlar',
      'services.s3-desc': "Kuchli va miqyosli backend arxitektura. REST API, microservices, real-time tizimlar va ma'lumotlar bazalari.",
      'services.s4-title': 'UI/UX Dizayn',
      'services.s4-desc': "Foydalanuvchiga yo'naltirilgan dizayn. Chizma, prototip, foydalanuvchi testlari va to'liq dizayn tizimi yaratish.",
      'services.s5-title': 'Brending va Marketing',
      'services.s5-desc': 'Brendingizni raqamli dunyoda mustahkamlash. Logotip, korporativ identifikatsiya, raqamli marketing strategiyasi.',
      'services.s6-title': "Texnik Qo'llab-quvvatlash",
      'services.s6-desc': "Loyiha ishga tushgandan so'ng ham 7/24 monitoring, dasturiy yangilanishlar, xavfsizlik tekshiruvlari va optimallashtirish.",
      'services.tag-prototyping': 'Prototiplash',
      'services.tag-design-system': 'Dizayn tizimi',
      'services.tag-logo': 'Logotip dizayni',
      'services.tag-brand-id': 'Brend identifikatsiyasi',
      'services.tag-monitoring': 'Monitoring',
      'services.tag-security': 'Xavfsizlik',
      'services.tag-optimization': 'Optimallashtirish',

      // Tech
      'tech.label': 'Texnologiyalar',
      'tech.title': "Zamonaviy texnologiyalar to'plami",
      'tech.subtitle': "Sanoatdagi eng ilg'or texnologiyalar bilan zamonaviy, kuchli va miqyosli yechimlar yaratamiz.",
      'tech.skills-title': "Jamoamiz ko'nikmalari",
      'tech.skills-desc': "Turli texnologiyalar bo'yicha chuqur ixtisoslashuv. Har bir loyiha uchun optimal texnologiyalar to'plamini tanlaymiz.",
      'tech.type-database': "Ma'lumotlar bazasi",
      'tech.type-design': 'Dizayn',

      // Portfolio
      'portfolio.label': 'Portfolio',
      'portfolio.title': 'Muvaffaqiyatli loyihalarimiz',
      'portfolio.subtitle': 'Turli sohalardagi kompaniyalar uchun yaratilgan raqamli yechimlarimiz.',
      'portfolio.filter-all': 'Barchasi',
      'portfolio.filter-mobile': 'Mobil',
      'portfolio.filter-web': 'Veb',
      'portfolio.filter-design': '3D & Dizayn',
      'portfolio.filter-ai': 'AI & Bot',
      'portfolio.p1-title': 'Asserat App',
      'portfolio.p1-badge': 'Ilmiy Mobil',
      'portfolio.p1-desc': "Ilmiy tadqiqotlar, ilmiy maqolalar va akademik ma'lumotlar bazasi bilan ishlashga mo'ljallangan ixtisoslashtirilgan ilmiy mobil ilova.",
      'portfolio.p1-tag1': 'Ilmiy ilova',
      'portfolio.p2-title': 'Abdulbosit Qori App',
      'portfolio.p2-badge': 'Mobil',
      'portfolio.p2-desc': "Abdulbosit Qori qiroatlari, Qur'on suralari, ma'nolar tarjimasi va audio darsliklar jamlangan qulay islomiy mobil ilova.",
      'portfolio.p3-title': 'Lumora AI Mobile App',
      'portfolio.p3-badge': 'AI & Mobil',
      'portfolio.p3-desc': "Generativ sun'iy intellektga asoslangan aqlli mobil yordamchi. Tezkor savol-javob, kontent yaratish va intellektual tahlil.",
      'portfolio.p4-title': 'Lillykey Kosmetika Brendi',
      'portfolio.p4-badge': 'Veb',
      'portfolio.p4-desc': 'Kosmetika brendi uchun yaratilgan yuqori didli, nafis dizaynga ega rasmiy veb-sayt va eksklyuziv mahsulotlar katalogi.',
      'portfolio.p5-title': '3D Yaponiya Loyihasi',
      'portfolio.p5-badge': '3D & Web',
      'portfolio.p5-desc': "Yaponiya bozoridagi hamkorlar uchun WebGL va Three.js asosida ishlab chiqilgan interaktiv uch o'lchamli (3D) veb-platforma.",
      'portfolio.p6-title': 'Online Kosmetika Magazini',
      'portfolio.p6-badge': 'E-Commerce',
      'portfolio.p6-desc': "Go'zallik mahsulotlari uchun to'liq funksional internet-do'kon. Savat, onlayn to'lovlar, mahsulotlar filtri va buyurtma kuzatuvi.",
      'portfolio.p7-title': 'Truck Service App',
      'portfolio.p7-badge': 'Mobil',
      'portfolio.p7-desc': "Og'ir yuk mashinalari va logistika parki uchun texnik servis mobil ilovasi. GPS lokatsiya, ta'mirlash buyurtmalari va monitoring.",
      'portfolio.p8-title': 'Infrastruktura AI Generator',
      'portfolio.p8-badge': 'AI & Cloud',
      'portfolio.p8-desc': "Server arxitekturasi va DevOps infratuzilmasini sun'iy intellekt orqali avtomatik loyihalovchi va IaC kodini generatsiya qiluvchi tizim.",
      'portfolio.p9-title': 'Telegram Taksi Bot',
      'portfolio.p9-badge': 'Telegram Bot',
      'portfolio.p9-desc': "Yo'lovchilar uchun soniyalar ichida taksi buyurtma qilish, avtomatik narx hisoblash va haydovchilarni tezkor topishga mo'ljallangan bot.",
      'portfolio.cta': 'Loyihangiz haqida gaplashaylik',
      'portfolio.tag-offline': 'Offline Rejim',
      'portfolio.tag-uiux': 'UI/UX Dizayn',
      'portfolio.tag-3d-viz': '3D Vizualizatsiya',
      'portfolio.tag-geo': 'Geolokatsiya',
      'portfolio.tag-logistics': 'Logistika',
      'portfolio.tag-automation': 'Avtomatlashtirish',

      // Team
      'team.label': 'Yetakchi Jamoamiz',
      'team.title': 'Bizning yetakchi jamoamiz',
      'team.subtitle': "Olab Tech kompaniyasining texnologik va strategik rivojini ta'minlovchi, o'z sohasida yuqori tajribaga ega yetakchi mutaxassislar.",
      'team.m1-role': 'Co-Founder & CEO',
      'team.m1-pos': 'Co Founder & CEO · Senior Backend Developer',
      'team.m1-bio': "Yuqori yuklamali server tizimlari, mikroservislar arxitekturasi va ma'lumotlar bazalarini boshqarish bo'yicha yetakchi mutaxassis. Kompaniya strategik rivojlanish rahbari.",
      'team.m2-role': 'Co-Founder & CTO',
      'team.m2-pos': 'Co Founder & CTO · Senior Mobile Developer',
      'team.m2-bio': 'iOS va Android platformalarida zamonaviy, unumdor mobil ilovalar yaratish, mobil ekotizimlar va texnologik innovatsiyalar bo\'yicha yetakchi mutaxassis.',
      'team.m3-role': 'Product Manager',
      'team.m3-pos': 'Product Manager',
      'team.m3-bio': "Mahsulotlarni g'oyadan foydalanuvchiga yetkazish, loyiha strategiyasini shakllantirish, mijozlar talablari tahlili va samarali jamoaviy ishlarni tashkil qilish bo'yicha mutaxassis.",
      'team.m4-role': 'Core Team',
      'team.m4-pos': 'Software Engineer · Tizim Muhandisi',
      'team.m4-bio': "Dasturiy tizimlar ishlab chiqish, zamonaviy axborot texnologiyalari yechimlari va ilovalar integratsiyasini muvaffaqiyatli amalga oshiruvchi tajribali muhandis.",

      // Testimonials
      'testim.label': 'Mijozlar fikri',
      'testim.title': 'Mijozlarimizning fikrlari va ishonchi',
      'testim.t1-text': '"Lillykey kosmetika brendimiz uchun zamonaviy veb-sayt va mahsulotlar katalogini Olab Tech jamoasiga ishonib topshirdik. Dizayn estetikasidan tortib platforma tezligigacha hamma narsa eng yuqori darajada amalga oshirildi. Sotuvlarimiz sezilarli darajada oshdi!"',
      'testim.t1-name': 'Kamila Karimova',
      'testim.t1-company': 'Asoschisi, Lillykey Cosmetics',
      'testim.t2-text': '"Yuk mashinalari servisi va haydovchilarimiz uchun mo\'ljallangan mobil ilovani Olab Tech jamoasi ishlab chiqdi. Real vaqtda GPS monitoring va buyurtmalar tizimi xatosiz ishlayapti. Logistika jarayonlarimiz 2 barobar tezlashdi."',
      'testim.t2-name': 'Sardor Rustamov',
      'testim.t2-company': 'Logistika rahbari, Truck Service',
      'testim.t3-text': '"Asserat ilmiy mobil ilovasining qulayligi va murakkab ma\'lumotlar bilan ishlash tezligi tadqiqotchilarimizga juda manzur bo\'ldi. Olab Tech jamoasi arxitektura va foydalanuvchi tajribasiga professional yondashdi."',
      'testim.t3-name': 'Dr. Jasur Mahmudov',
      'testim.t3-company': 'Loyiha rahbari, Asserat Ilmiy Platformasi',

      // Newsletter
      'news.title': 'Yangiliklardan doimo xabardor bo\'ling',
      'news.desc': 'IT sohasidagi so\'nggi tendensiyalar va Olab Tech yangiliklari haqida birinchi bo\'lib biling.',
      'news.btn': 'Obuna bo\'lish',
      'news.placeholder': 'email@example.com',

      // Contact
      'contact.label': 'Aloqa',
      'contact.title': 'Loyihangizni muhokama qilaylik',
      'contact.subtitle': "G'oyangiz bormi? Biz uni raqamli haqiqatga aylantiramiz. Bugun murojaat qiling.",
      'contact.heading': "Bog'laning",
      'contact.desc': 'Loyihangiz haqida suhbatlashishga doimo tayyormiz. Ish soatlarida va undan tashqarida ham javob beramiz.',
      'contact.address-lbl': 'Manzil',
      'contact.address-val': "Toshkent shahar, O'zbekiston",
      'contact.phone-lbl': 'Telefon',
      'contact.email-lbl': 'Elektron pochta',
      'contact.telegram-lbl': 'Telegram',
      'contact.hours-lbl': 'Ish soatlari',
      'contact.hours-val': 'Dushanba – Juma: 09:00 – 18:00',

      // Form
      'form.name-lbl': 'Ismingiz',
      'form.name-ph': 'Alisher Karimov',
      'form.email-lbl': 'Elektron pochta',
      'form.email-ph': 'alisher@company.uz',
      'form.phone-lbl': 'Telefon raqami',
      'form.phone-ph': '+998 90 000 00 00',
      'form.service-lbl': 'Xizmat turi',
      'form.service-choose': 'Tanlang...',
      'form.service-mobile': 'Mobil Ilova',
      'form.service-web': 'Veb-Platforma',
      'form.service-backend': 'Backend Tizimi',
      'form.service-design': 'UI/UX Dizayn',
      'form.service-branding': 'Brending',
      'form.service-support': 'Texnik yordam',
      'form.service-other': 'Boshqa',
      'form.message-lbl': 'Xabar',
      'form.message-ph': 'Loyihangiz haqida qisqacha yozing: maqsad, funksiyalar, muddatlar...',
      'form.submit': 'Xabar yuborish',

      // Footer
      'footer.desc': "O'zbekistondagi mobil va veb-ilovalar ishlab chiqish kompaniyasi. G'oyangizni raqamli haqiqatga aylantiramiz.",
      'footer.services': 'Xizmatlar',
      'footer.company': 'Kompaniya',
      'footer.contact': 'Aloqa',
      'footer.rights': "&copy; 2026 <span>Olab Tech</span>. Barcha huquqlar himoyalangan.",
      'footer.privacy': 'Maxfiylik siyosati',
      'footer.terms': 'Foydalanish shartlari'
    },

    ru: {
      // Navbar
      'nav.home': 'Главная',
      'nav.about': 'О нас',
      'nav.services': 'Услуги',
      'nav.tech': 'Технологии',
      'nav.portfolio': 'Проекты',
      'nav.team': 'Команда',
      'nav.contact-link': 'Контакты',
      'nav.contact': 'Связаться',

      // Hero
      'hero.badge': 'Ташкент, Узбекистан \u00B7 12+ лет опыта',
      'hero.title1': 'Для вашего бизнеса',
      'hero.title2': 'Цифровое будущее',
      'hero.typing-label': 'Мы создаём:',
      'hero.desc': 'Olab Tech \u2014 IT-компания, разрабатывающая мобильные приложения, веб-платформы и сложные backend-системы. iOS, Android, Desktop и Web \u2014 для любой платформы, любого уровня сложности.',
      'hero.btn-projects': 'Наши проекты',
      'hero.btn-contact': 'Написать нам',
      'hero.stat1-label': 'Проектов',
      'hero.stat2-label': 'Клиентов',
      'hero.stat3-label': 'Лет опыта',
      'hero.stat4-label': 'Успешность',
      'typing.phrases': ['Мобильные приложения', 'Веб-платформы', 'Backend системы', 'AI решения', 'Telegram боты'],

      // Multiplatform badges
      'badge.web': 'Web Dashboard',
      'badge.backend': 'Backend & API',
      'badge.mobile': 'iOS & Android',
      'badge.enterprise': 'Корпоративный уровень',
      'badge.enterprise-sub': 'Безопасно & Масштабируемо',
      'badge.stats-projects': 'Проекты',
      'badge.stats-clients': 'Клиенты',
      'badge.stats-success': 'Успех',
      'badge.revenue': 'Рост выручки',

      // About
      'about.label': 'О нас',
      'about.title': 'Надежный партнер<br>для цифровой трансформации',
      'about.subtitle': 'Olab Tech \u2014 IT-компания с командой с 12+ летним опытом, создающая передовые мобильные приложения и веб-платформы для бизнеса в Узбекистане и на мировом рынке.',
      'about.card1-title': 'Премиум дизайн и интерфейс',
      'about.card1-desc': 'Современный UI/UX дизайн, ориентированный на удобство пользователя. Каждый пиксель имеет четкую цель.',
      'about.card2-title': 'Сильная айдентика бренда',
      'about.card2-desc': 'Ваш бренд одинаково мощно выглядит в цифровой и реальной среде. Логотип, корпоративный стиль, промо-материалы.',
      'about.card3-title': 'Непрерывная техподдержка',
      'about.card3-desc': 'Мы остаемся с вами и после сдачи проекта. Круглосуточная техподдержка 24/7, обновления и развитие функционала.',
      'about.why-title': 'Почему именно <span style="background:var(--accent-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">Olab Tech?</span>',
      'about.why-p1': 'Мы не просто пишем код \u2014 мы строим цифровую версию вашего бизнеса. Сочетаем скорость стартапа с корпоративной ответственностью.',
      'about.why-p2': 'Наша команда в Ташкенте имеет обширный опыт работы с клиентами из Узбекистана и из-за рубежа. От мобильных приложений до сложных backend систем \u2014 всё в одном месте.',
      'about.hl1': 'Agile-методология \u2014 прозрачный процесс, еженедельные отчеты',
      'about.hl2': 'NDA договор \u2014 ваши идеи надежно защищены законом',
      'about.hl3': 'Гибкие цены \u2014 оптимальные решения под любой бюджет',
      'about.hl4': 'Сдача точно в срок \u2014 с гарантией SLA',
      'about.stat1-label': 'Завершенных проектов',
      'about.stat2-label': 'Довольных клиентов',
      'about.stat3-label': 'Лет опыта',
      'about.stat4-label': 'Процент успеха',

      // Services
      'services.label': 'Наши услуги',
      'services.title': 'Услуги, которые мы предоставляем',
      'services.subtitle': 'Полный цикл разработки цифровых продуктов: от начальной концепции до запуска и масштабирования.',
      'services.s1-title': 'Мобильные приложения',
      'services.s1-desc': 'Нативные и кроссплатформенные приложения для iOS и Android. Полная поддержка до публикации в App Store и Google Play.',
      'services.s2-title': 'Веб-приложения',
      'services.s2-desc': 'Современные, быстрые и адаптивные сайты и веб-сервисы. SPA, PWA и корпоративные платформы.',
      'services.s3-title': 'Backend системы',
      'services.s3-desc': 'Мощная и масштабируемая backend архитектура. REST API, микросервисы, real-time системы и базы данных.',
      'services.s4-title': 'UI/UX Дизайн',
      'services.s4-desc': 'Дизайн, ориентированный на пользователя. Прототипы, юзабилити-тесты и создание полноценных дизайн-систем.',
      'services.s5-title': 'Брендинг и маркетинг',
      'services.s5-desc': 'Усиление бренда в цифровой среде. Логотип, корпоративная айдентика, стратегия продвижения.',
      'services.s6-title': 'Техническая поддержка',
      'services.s6-desc': 'Круглосуточный мониторинг, обновления ПО, регулярный аудит безопасности и оптимизация после запуска.',
      'services.tag-prototyping': 'Прототипирование',
      'services.tag-design-system': 'Дизайн-системы',
      'services.tag-logo': 'Дизайн логотипа',
      'services.tag-brand-id': 'Айдентика бренда',
      'services.tag-monitoring': 'Мониторинг',
      'services.tag-security': 'Безопасность',
      'services.tag-optimization': 'Оптимизация',

      // Tech
      'tech.label': 'Технологии',
      'tech.title': 'Современный стек технологий',
      'tech.subtitle': 'Создаем мощные и масштабируемые решения с помощью передовых технологий индустрии.',
      'tech.skills-title': 'Навыки нашей команды',
      'tech.skills-desc': 'Глубокая экспертиза в различных технологиях. Подбираем оптимальный стек для каждого проекта.',
      'tech.type-database': 'Базы данных',
      'tech.type-design': 'Дизайн',

      // Portfolio
      'portfolio.label': 'Портфолио',
      'portfolio.title': 'Наши успешные проекты',
      'portfolio.subtitle': 'Цифровые решения, созданные для компаний в различных сферах бизнеса.',
      'portfolio.filter-all': 'Все',
      'portfolio.filter-mobile': 'Мобильные',
      'portfolio.filter-web': 'Веб',
      'portfolio.filter-design': '3D и Дизайн',
      'portfolio.filter-ai': 'AI и Боты',
      'portfolio.p1-title': 'Asserat App',
      'portfolio.p1-badge': 'Научное',
      'portfolio.p1-desc': 'Специализированное научное мобильное приложение для работы с научными исследованиями, статьями и базами данных.',
      'portfolio.p1-tag1': 'Научное приложение',
      'portfolio.p2-title': 'Приложение Abdulbosit Qori',
      'portfolio.p2-badge': 'Мобильное',
      'portfolio.p2-desc': 'Удобное исламское мобильное приложение с аудио-чтением Корана, переводами смыслов и уроками от Кари Абдулбосита.',
      'portfolio.p3-title': 'Lumora AI Mobile App',
      'portfolio.p3-badge': 'AI и Мобильное',
      'portfolio.p3-desc': 'Умный мобильный помощник на базе генеративного искусственного интеллекта. Мгновенные ответы, генерация контента и анализ.',
      'portfolio.p4-title': 'Бренд косметики Lillykey',
      'portfolio.p4-badge': 'Веб',
      'portfolio.p4-desc': 'Стильный официальный сайт и эксклюзивный каталог продукции для премиального бренда косметики.',
      'portfolio.p5-title': '3D проект для Японии',
      'portfolio.p5-badge': '3D и Веб',
      'portfolio.p5-desc': 'Интерактивная 3D веб-платформа на базе WebGL и Three.js, разработанная для партнеров на рынке Японии.',
      'portfolio.p6-title': 'Онлайн-магазин косметики',
      'portfolio.p6-badge': 'E-Commerce',
      'portfolio.p6-desc': 'Полнофункциональный интернет-магазин косметики. Корзина, онлайн-оплата, фильтрация товаров и трекинг заказов.',
      'portfolio.p7-title': 'Приложение Truck Service',
      'portfolio.p7-badge': 'Мобильное',
      'portfolio.p7-desc': 'Мобильное приложение сервиса для грузового транспорта и логистических парков. GPS, онлайн-заявки и мониторинг.',
      'portfolio.p8-title': 'AI генератор инфраструктуры',
      'portfolio.p8-badge': 'AI и Облако',
      'portfolio.p8-desc': 'Система автоматического проектирования серверной архитектуры и облачной инфраструктуры (IaC) с помощью AI.',
      'portfolio.p9-title': 'Телеграм бот для такси',
      'portfolio.p9-badge': 'Телеграм бот',
      'portfolio.p9-desc': 'Бот для быстрого вызова такси за секунды, автоматического расчета стоимости и мгновенного поиска водителей.',
      'portfolio.cta': 'Обсудить ваш проект',
      'portfolio.tag-offline': 'Офлайн-режим',
      'portfolio.tag-uiux': 'UI/UX Дизайн',
      'portfolio.tag-3d-viz': '3D Визуализация',
      'portfolio.tag-geo': 'Геолокация',
      'portfolio.tag-logistics': 'Логистика',
      'portfolio.tag-automation': 'Автоматизация',

      // Team
      'team.label': 'Ведущая команда',
      'team.title': 'Наша ведущая команда',
      'team.subtitle': 'Опытные эксперты, обеспечивающие технологическое и стратегическое развитие компании Olab Tech.',
      'team.m1-role': 'Co-Founder & CEO',
      'team.m1-pos': 'Co Founder & CEO · Senior Backend Developer',
      'team.m1-bio': 'Ведущий специалист по высоконагруженным серверам, микросервисам и базам данных. Руководитель стратегического развития компании.',
      'team.m2-role': 'Co-Founder & CTO',
      'team.m2-pos': 'Co Founder & CTO · Senior Mobile Developer',
      'team.m2-bio': 'Эксперт по созданию передовых мобильных приложений для iOS и Android, мобильным экосистемам и технологическим инновациям.',
      'team.m3-role': 'Product Manager',
      'team.m3-pos': 'Product Manager',
      'team.m3-bio': 'Эксперт по выводу продуктов на рынок, разработке стратегии, анализу требований клиентов и координации команды.',
      'team.m4-role': 'Core Team',
      'team.m4-pos': 'Software Engineer · Системный инженер',
      'team.m4-bio': 'Опытный инженер по разработке программных систем, современным IT-решениям и интеграции приложений.',

      // Testimonials
      'testim.label': 'Отзывы клиентов',
      'testim.title': 'Отзывы и доверие наших клиентов',
      'testim.t1-text': '"Доверили команде Olab Tech создание сайта и каталога для нашего бренда косметики Lillykey. От эстетики дизайна до скорости платформы — всё на высшем уровне. Продажи заметно выросли!"',
      'testim.t1-name': 'Камила Каримова',
      'testim.t1-company': 'Основатель, Lillykey Cosmetics',
      'testim.t2-text': '"Команда Olab Tech разработала мобильное приложение для нашего сервиса грузовиков. Система онлайн-заявок и GPS-мониторинг работают без сбоев. Процессы логистики ускорились в 2 раза."',
      'testim.t2-name': 'Сардор Рустамов',
      'testim.t2-company': 'Руководитель логистики, Truck Service',
      'testim.t3-text': '"Удобство научного мобильного приложения Asserat и скорость работы со сложными данными впечатлили наших исследователей. Olab Tech продемонстрировали высокий уровень в архитектуре и UX."',
      'testim.t3-name': 'Д-р Жасур Махмудов',
      'testim.t3-company': 'Руководитель проекта, Научная платформа Asserat',

      // Newsletter
      'news.title': 'Будьте всегда в курсе событий',
      'news.desc': 'Узнавайте первыми о последних тенденциях в сфере IT и новостях Olab Tech.',
      'news.btn': 'Подписаться',
      'news.placeholder': 'email@example.com',

      // Contact
      'contact.label': 'Контакты',
      'contact.title': 'Давайте обсудим ваш проект',
      'contact.subtitle': 'Есть идея? Мы превратим ее в цифровую реальность. Напишите нам сегодня.',
      'contact.heading': 'Свяжитесь с нами',
      'contact.desc': 'Мы всегда готовы обсудить ваш проект. Отвечаем оперативно в рабочее и нерабочее время.',
      'contact.address-lbl': 'Адрес',
      'contact.address-val': 'г. Ташкент, Узбекистан',
      'contact.phone-lbl': 'Телефон',
      'contact.email-lbl': 'Электронная почта',
      'contact.telegram-lbl': 'Telegram',
      'contact.hours-lbl': 'Рабочие часы',
      'contact.hours-val': 'Понедельник – Пятница: 09:00 – 18:00',

      // Form
      'form.name-lbl': 'Ваше имя',
      'form.name-ph': 'Алишер Каримов',
      'form.email-lbl': 'Электронная почта',
      'form.email-ph': 'alisher@company.uz',
      'form.phone-lbl': 'Номер телефона',
      'form.phone-ph': '+998 90 000 00 00',
      'form.service-lbl': 'Вид услуги',
      'form.service-choose': 'Выберите...',
      'form.service-mobile': 'Мобильное приложение',
      'form.service-web': 'Веб-платформа',
      'form.service-backend': 'Backend система',
      'form.service-design': 'UI/UX Дизайн',
      'form.service-branding': 'Брендинг',
      'form.service-support': 'Техподдержка',
      'form.service-other': 'Другое',
      'form.message-lbl': 'Сообщение',
      'form.message-ph': 'Кратко опишите ваш проект: цели, функции, сроки...',
      'form.submit': 'Отправить сообщение',

      // Footer
      'footer.desc': 'Компания по разработке мобильных и веб-приложений в Узбекистане. Воплощаем ваши идеи в цифровую реальность.',
      'footer.services': 'Услуги',
      'footer.company': 'Компания',
      'footer.contact': 'Контакты',
      'footer.rights': "&copy; 2026 <span>Olab Tech</span>. Все права защищены.",
      'footer.privacy': 'Политика конфиденциальности',
      'footer.terms': 'Условия использования'
    },

    en: {
      // Navbar
      'nav.home': 'Home',
      'nav.about': 'About Us',
      'nav.services': 'Services',
      'nav.tech': 'Technologies',
      'nav.portfolio': 'Projects',
      'nav.team': 'Team',
      'nav.contact-link': 'Contact',
      'nav.contact': 'Get in Touch',

      // Hero
      'hero.badge': 'Tashkent, Uzbekistan \u00B7 12+ Years Exp.',
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
      'typing.phrases': ['Mobile Apps', 'Web Platforms', 'Backend Systems', 'AI Solutions', 'Telegram Bots'],

      // Multiplatform badges
      'badge.web': 'Web Dashboard',
      'badge.backend': 'Backend & API',
      'badge.mobile': 'iOS & Android',
      'badge.enterprise': 'Enterprise Grade',
      'badge.enterprise-sub': 'Secure & Scalable',
      'badge.stats-projects': 'Projects',
      'badge.stats-clients': 'Clients',
      'badge.stats-success': 'Success',
      'badge.revenue': 'Revenue Growth',

      // About
      'about.label': 'About Us',
      'about.title': 'A Reliable Partner<br>for Digital Transformation',
      'about.subtitle': 'Olab Tech is an IT company with a 12+ years experienced team creating modern mobile apps and web platforms for businesses in Uzbekistan and worldwide.',
      'about.card1-title': 'Premium Design & UI',
      'about.card1-desc': 'User-centered modern UI/UX design. Every single pixel serves a deliberate purpose.',
      'about.card2-title': 'Strong Brand Identity',
      'about.card2-desc': 'Consistent, impactful branding across digital and physical touchpoints. Logos, corporate identity, marketing collateral.',
      'about.card3-title': 'Continuous Tech Support',
      'about.card3-desc': 'We stay with you long after delivery. 24/7 technical support, software updates, and scaling solutions.',
      'about.why-title': 'Why Choose <span style="background:var(--accent-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">Olab Tech?</span>',
      'about.why-p1': 'We do not just write code \u2014 we build the digital foundation of your business. Combining startup agility with enterprise accountability.',
      'about.why-p2': 'Based in the heart of Tashkent, our team has extensive experience working with clients locally and globally. From mobile apps to complex backend systems.',
      'about.hl1': 'Agile methodology \u2014 transparent workflow, weekly sprint reports',
      'about.hl2': 'NDA contract \u2014 your proprietary ideas are legally protected',
      'about.hl3': 'Flexible pricing \u2014 tailor-made solutions for any budget',
      'about.hl4': 'On-time delivery \u2014 backed by strict SLA guarantees',
      'about.stat1-label': 'Completed Projects',
      'about.stat2-label': 'Happy Clients',
      'about.stat3-label': 'Years Experience',
      'about.stat4-label': 'Success Rate',

      // Services
      'services.label': 'Our Services',
      'services.title': 'Services We Provide',
      'services.subtitle': 'End-to-end digital product development from initial idea to deployment and continuous growth.',
      'services.s1-title': 'Mobile Apps',
      'services.s1-desc': 'Native and cross-platform mobile apps for iOS and Android. Complete guidance all the way to App Store & Google Play release.',
      'services.s2-title': 'Web Applications',
      'services.s2-desc': 'Modern, fast, and responsive web apps and websites. SPAs, PWAs, and enterprise-grade web platforms.',
      'services.s3-title': 'Backend Systems',
      'services.s3-desc': 'Robust and scalable backend architectures. REST APIs, microservices, real-time protocols, and databases.',
      'services.s4-title': 'UI/UX Design',
      'services.s4-desc': 'User-centric interface design. Wireframes, clickable prototypes, usability testing, and complete design systems.',
      'services.s5-title': 'Branding & Marketing',
      'services.s5-desc': 'Amplifying your brand presence. Logo design, corporate visual identity, and digital marketing strategies.',
      'services.s6-title': 'Technical Support',
      'services.s6-desc': '24/7 monitoring, security audits, software updates, and performance tuning after your product goes live.',
      'services.tag-prototyping': 'Prototyping',
      'services.tag-design-system': 'Design Systems',
      'services.tag-logo': 'Logo Design',
      'services.tag-brand-id': 'Brand Identity',
      'services.tag-monitoring': 'Monitoring',
      'services.tag-security': 'Security',
      'services.tag-optimization': 'Optimization',

      // Tech
      'tech.label': 'Technologies',
      'tech.title': 'Modern Technology Stack',
      'tech.subtitle': 'Building high-performance, future-proof digital solutions with industry-leading technologies.',
      'tech.skills-title': 'Our Core Skills',
      'tech.skills-desc': 'Deep specialization across key technologies. We pick the ideal tech stack for every individual project.',
      'tech.type-database': 'Databases',
      'tech.type-design': 'Design',

      // Portfolio
      'portfolio.label': 'Portfolio',
      'portfolio.title': 'Our Featured Projects',
      'portfolio.subtitle': 'Proven digital solutions built for forward-thinking businesses across diverse industries.',
      'portfolio.filter-all': 'All',
      'portfolio.filter-mobile': 'Mobile',
      'portfolio.filter-web': 'Web',
      'portfolio.filter-design': '3D & Design',
      'portfolio.filter-ai': 'AI & Bot',
      'portfolio.p1-title': 'Asserat App',
      'portfolio.p1-badge': 'Scientific',
      'portfolio.p1-desc': 'Specialized scientific mobile application tailored for research publications, scientific journals, and scholarly databases.',
      'portfolio.p1-tag1': 'Scientific App',
      'portfolio.p2-title': 'Abdulbosit Qori App',
      'portfolio.p2-badge': 'Mobile',
      'portfolio.p2-desc': 'Islamic mobile application featuring Quran recitations by Qari Abdulbosit, verse translations, and audio lectures.',
      'portfolio.p3-title': 'Lumora AI Mobile App',
      'portfolio.p3-badge': 'AI & Mobile',
      'portfolio.p3-desc': 'Smart mobile assistant powered by generative artificial intelligence. Instant Q&A, content creation, and analysis.',
      'portfolio.p4-title': 'Lillykey Cosmetics Brand',
      'portfolio.p4-badge': 'Web',
      'portfolio.p4-desc': 'High-end official website and exclusive product showcase for a premium beauty cosmetics brand.',
      'portfolio.p5-title': '3D Japan Project',
      'portfolio.p5-badge': '3D & Web',
      'portfolio.p5-desc': 'Interactive 3D web platform built with WebGL and Three.js for international enterprise partners in Japan.',
      'portfolio.p6-title': 'Online Cosmetics Store',
      'portfolio.p6-badge': 'E-Commerce',
      'portfolio.p6-desc': 'Full-fledged e-commerce store for beauty products. Shopping cart, payment gateways, product filters, and order tracking.',
      'portfolio.p7-title': 'Truck Service App',
      'portfolio.p7-badge': 'Mobile',
      'portfolio.p7-desc': 'Specialized mobile service app for heavy trucks and logistics fleets. Real-time GPS location, repair orders, and fleet monitoring.',
      'portfolio.p8-title': 'Infrastructure AI Generator',
      'portfolio.p8-badge': 'AI & Cloud',
      'portfolio.p8-desc': 'AI-driven system for automated cloud infrastructure architecture design, server orchestration, and IaC code generation.',
      'portfolio.p9-title': 'Telegram Taxi Bot',
      'portfolio.p9-badge': 'Telegram Bot',
      'portfolio.p9-desc': 'Rapid automated taxi dispatching bot with one-touch booking, live geolocation, automatic fare calculation, and driver matching.',
      'portfolio.cta': "Let's Discuss Your Project",
      'portfolio.tag-offline': 'Offline Mode',
      'portfolio.tag-uiux': 'UI/UX Design',
      'portfolio.tag-3d-viz': '3D Visualization',
      'portfolio.tag-geo': 'Geolocation',
      'portfolio.tag-logistics': 'Logistics',
      'portfolio.tag-automation': 'Automation',

      // Team
      'team.label': 'Leadership Team',
      'team.title': 'Our Leadership Team',
      'team.subtitle': 'Experienced technology leaders and strategists driving the growth and excellence of Olab Tech.',
      'team.m1-role': 'Co-Founder & CEO',
      'team.m1-pos': 'Co Founder & CEO · Senior Backend Developer',
      'team.m1-bio': 'Lead engineer in high-load server architectures, microservices, and databases. Guiding company strategy and technological direction.',
      'team.m2-role': 'Co-Founder & CTO',
      'team.m2-pos': 'Co Founder & CTO · Senior Mobile Developer',
      'team.m2-bio': 'Expert in building high-performance mobile applications on iOS & Android, mobile ecosystems, and emerging tech innovation.',
      'team.m3-role': 'Product Manager',
      'team.m3-pos': 'Product Manager',
      'team.m3-bio': 'Specialist in driving products from concept to launch, project roadmapping, client requirements analysis, and agile team execution.',
      'team.m4-role': 'Core Team',
      'team.m4-pos': 'Software Engineer · Systems Engineer',
      'team.m4-bio': 'Skilled engineer in enterprise software development, modern digital solutions, and high-reliability systems integration.',

      // Testimonials
      'testim.label': 'Testimonials',
      'testim.title': 'What Our Clients Say',
      'testim.t1-text': '"We trusted Olab Tech with the website and product catalog for our cosmetics brand Lillykey. From aesthetic design to blazing speed, everything was executed flawlessly. Our online sales grew significantly!"',
      'testim.t1-name': 'Kamila Karimova',
      'testim.t1-company': 'Founder, Lillykey Cosmetics',
      'testim.t2-text': '"Olab Tech built the mobile platform for our heavy truck service and drivers. Real-time GPS tracking and instant dispatching work flawlessly. Our fleet operations are twice as fast now."',
      'testim.t2-name': 'Sardor Rustamov',
      'testim.t2-company': 'Head of Logistics, Truck Service',
      'testim.t3-text': '"The usability and performance of the Asserat scientific mobile application impressed our researchers. Olab Tech delivered outstanding system architecture and user experience."',
      'testim.t3-name': 'Dr. Jasur Mahmudov',
      'testim.t3-company': 'Project Lead, Asserat Research Platform',

      // Newsletter
      'news.title': 'Stay Informed',
      'news.desc': 'Be the first to hear about the latest IT innovations, industry insights, and Olab Tech news.',
      'news.btn': 'Subscribe',
      'news.placeholder': 'email@example.com',

      // Contact
      'contact.label': 'Contact',
      'contact.title': "Let's Discuss Your Project",
      'contact.subtitle': 'Have an idea? We turn it into digital reality. Reach out today.',
      'contact.heading': 'Get in Touch',
      'contact.desc': 'We are always eager to talk about your project. We respond promptly during and outside business hours.',
      'contact.address-lbl': 'Address',
      'contact.address-val': 'Tashkent City, Uzbekistan',
      'contact.phone-lbl': 'Phone',
      'contact.email-lbl': 'Email',
      'contact.telegram-lbl': 'Telegram',
      'contact.hours-lbl': 'Business Hours',
      'contact.hours-val': 'Monday – Friday: 09:00 – 18:00',

      // Form
      'form.name-lbl': 'Your Name',
      'form.name-ph': 'Alex Johnson',
      'form.email-lbl': 'Email Address',
      'form.email-ph': 'alex@company.com',
      'form.phone-lbl': 'Phone Number',
      'form.phone-ph': '+998 90 000 00 00',
      'form.service-lbl': 'Service Type',
      'form.service-choose': 'Select...',
      'form.service-mobile': 'Mobile App',
      'form.service-web': 'Web Platform',
      'form.service-backend': 'Backend System',
      'form.service-design': 'UI/UX Design',
      'form.service-branding': 'Branding',
      'form.service-support': 'Technical Support',
      'form.service-other': 'Other',
      'form.message-lbl': 'Message',
      'form.message-ph': 'Tell us briefly about your project: goals, features, timeframe...',
      'form.submit': 'Send Message',

      // Footer
      'footer.desc': 'Mobile and web development company based in Uzbekistan. Turning your vision into digital reality.',
      'footer.services': 'Services',
      'footer.company': 'Company',
      'footer.contact': 'Contact',
      'footer.rights': "&copy; 2026 <span>Olab Tech</span>. All rights reserved.",
      'footer.privacy': 'Privacy Policy',
      'footer.terms': 'Terms of Service'
    }
  };

  var currentLang = 'uz';
  try {
    currentLang = localStorage.getItem('olab-lang') || 'uz';
  } catch (e) {}

  function applyTranslations(lang) {
    var t = translations[lang];
    if (!t) return;

    // 1. Text elements (preserves <i> icons if present)
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        var icon = el.querySelector('i');
        if (icon) {
          el.innerHTML = icon.outerHTML + ' ' + t[key];
        } else {
          el.textContent = t[key];
        }
      }
    });

    // 2. HTML elements (with spans, line breaks, etc.)
    document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-html');
      if (t[key] !== undefined) {
        el.innerHTML = t[key];
      }
    });

    // 3. Placeholders for inputs and textareas
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (t[key] !== undefined) {
        el.setAttribute('placeholder', t[key]);
      }
    });

    // Specific Hero dynamic pieces
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
    try {
      localStorage.setItem('olab-lang', lang);
    } catch (e) {}
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
  window.__olabTranslations = translations;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() { applyTranslations(currentLang); });
  } else {
    applyTranslations(currentLang);
  }

})();
