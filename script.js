// ============================================================
// TRANSLATIONS
// ============================================================
const T = {
  en: {
    navAbout:"About", navExperience:"Experience", navEducation:"Education",
    navSkills:"Skills", navProjects:"Projects", navContact:"Contact",
    downloadCV:"Download CV", preparingCV:"Preparing your CV...",
    heroLocation:"Khorazm Region, Khiva — Uzbekistan \u{1F1FA}\u{1F1FF}",
    heroSubtitle:"Python / Django Backend Developer",
    heroBio:"Backend developer focused on building scalable web applications and AI-powered systems. Experienced with real-world AI projects and passionate about turning complex ideas into clean, working software.",
    heroCta1:"Get in Touch", heroCta2:"View Projects", heroStatus:"Open to work",
    labelAbout:"01 / About", titleAbout:"About Me",
    aboutP1:"I'm a Backend Developer with a strong foundation in Python and Django, building web applications and AI-integrated systems. I gained hands-on experience through a <strong>5-month internship at AI Vision</strong>, where I worked directly on an AI project from the ground up.",
    aboutP2:"I care deeply about writing clean, maintainable code and I'm always looking for ways to improve performance and developer experience. I move fast, stay focused on results, and bring accountability to every project I work on.",
    aboutP3:"Currently open to new opportunities — whether it's a startup, product team, or freelance project.",
    statLabel1:"Months Experience", statLabel2:"Projects Shipped", statLabel3:"Technologies", statLabel4:"Curiosity",
    labelExp:"02 / Experience", titleExp:"Work Experience",
    role1:"Backend Developer Intern", company1:"AI Vision", badge1:"Internship", date1:"5 months · 2025",
    exp1li1:"Worked on a real AI project from concept to deployment",
    exp1li2:"Built backend services and REST APIs using Python and Django",
    exp1li3:"Collaborated with the team on AI model integration and testing",
    exp1li4:"Gained hands-on experience with production-grade systems",
    milestone1:"\u{1F389} 2022 — Started Bachelor's in Software Engineering at Millat Umidi University",
    role2:"Freelance Backend Developer", company2:"Self-employed", badge2:"Freelance", date2:"2024 – Present",
    exp2li1:"Built and launched multiple personal and client projects end-to-end",
    exp2li2:"Developed AI-powered Telegram bots for PDF analysis and image enhancement",
    exp2li3:"Created TalabaHub — a student resource and community platform (live on Vercel)",
    exp2li4:"Led mobile app development for a barbershop startup (Flutter + Django REST API)",
    milestone2:"\u{1F4BB} 2021 — Wrote first lines of code at IT Park Khiva. The journey begins.",
    labelEdu:"03 / Education", titleEdu:"Education",
    uniName:"Millat Umidi University", uniDegree:"Bachelor's — Software Engineering",
    uniPeriod:"2022 – 2026",
    uniDesc:"Graduated with a Bachelor's degree in Software Engineering. Studied algorithms, data structures, databases, and modern backend development practices.",
    itparkName:"IT Park Khiva", itparkDegree:"Backend Development — Certificate",
    itparkPeriod:"2021 – 2022",
    itparkDesc:"Wrote first lines of code here in 2021. Completed the Backend Development direction in 2022 and received an official certificate. This is where the journey began.",
    labelSkills:"04 / Skills", titleSkills:"Skills & Technologies",
    skillLang:"Languages", skillFramework:"Frameworks", skillDb:"Databases",
    skillInfra:"Infrastructure", skillAi:"AI / ML", skillSec:"Security",
    labelProjects:"05 / Projects", titleProjects:"Projects",
    proj1Title:"Sartaroshxona Mobile App", proj1Type:"\u{1F680} Start-up · Mobile App + REST API",
    proj1Desc:"A full-stack start-up: Flutter mobile app + Django REST API backend for barbershop management. Features appointment booking, barber schedule management, and client-barber connection.",
    proj2Title:"AI PDF & Image Quality Bot", proj2Type:"\u{1F916} AI · Telegram Bot",
    proj2Desc:"A Telegram bot powered by AI that processes PDF documents and enhances image quality. Users upload files and receive intelligent output — summarized content and high-quality images.",
    proj3Title:"TalabaHub", proj3Type:"\u{1F310} Web Application · Live on Vercel",
    proj3Desc:"A full-stack web platform for students — a hub for resources, communities, and academic opportunities. Built with JavaScript and deployed live on Vercel.",
    proj4Title:"FitnesBot", proj4Type:"\u{1F916} Fitness · Telegram Bot",
    proj4Desc:"A Telegram bot that helps users plan and track their fitness journey. Provides workout routines, progress tracking, and personalized fitness plans via Telegram.",
    labelContact:"06 / Contact", titleContact:"Get in Touch",
    contactIntro:"I'm currently open to new opportunities. Whether it's a full-time role, freelance project, or just a conversation — feel free to reach out!",
    ctaCall:"CALL ME", ctaEmail:"SEND EMAIL", ctaTelegram:"MESSAGE on TELEGRAM",
    ctaTgChannel:"TELEGRAM CHANNEL", ctaInstagram:"FOLLOW on INSTAGRAM",
    ctaGithub:"VIEW CODE on GITHUB", ctaLinkedin:"CONNECT on LINKEDIN",
    footerText:"\u00A9 2025 Ziyodulla Otabayev. Built with clean code.",
    timezoneText:"Current time for me:"
  },
  uz: {
    navAbout:"Haqimda", navExperience:"Tajriba", navEducation:"Ta'lim",
    navSkills:"Ko'nikmalar", navProjects:"Loyihalar", navContact:"Bog'lanish",
    downloadCV:"CV Yuklab olish", preparingCV:"CV tayyorlanmoqda...",
    heroLocation:"Xorazm Viloyati, Xiva tumani — O'zbekiston \u{1F1FA}\u{1F1FF}",
    heroSubtitle:"Python / Django Backend Dasturchi",
    heroBio:"Kengaytiriladigan veb-ilovalar va AI tizimlarini quruvchi backend dasturchi. Haqiqiy AI loyihalarida tajribaga ega va murakkab g'oyalarni ishchi dasturiy ta'minotga aylantirishga ishtiyoqmand.",
    heroCta1:"Bog'lanish", heroCta2:"Loyihalarni ko'rish", heroStatus:"Ish qidirmoqda",
    labelAbout:"01 / Haqimda", titleAbout:"Men haqimda",
    aboutP1:"Men Python va Django asosida veb-ilovalar va AI tizimlari quradigan backend dasturchiman. <strong>AI Vision kompaniyasida 5 oylik amaliyot</strong> davomida haqiqiy AI loyihasi ustida boshidan boshlab ishlash tajribasiga ega bo'ldim.",
    aboutP2:"Toza, oson qo'llab-quvvatlanadigan kod yozishga jiddiy e'tibor qarataman. Tez harakat qilaman, natijalarga e'tibor qarataman va har bir loyihada mas'uliyatni o'z zimmasiga olaman.",
    aboutP3:"Hozirda yangi imkoniyatlarga ochiqman — startup, mahsulot jamoasi yoki frilansdami farqi yo'q.",
    statLabel1:"Oylik tajriba", statLabel2:"Yaratilgan loyihalar", statLabel3:"Texnologiyalar", statLabel4:"Qiziquvchanlik",
    labelExp:"02 / Tajriba", titleExp:"Ish tajribasi",
    role1:"Backend Dasturchi (Amaliyotchi)", company1:"AI Vision", badge1:"Amaliyot", date1:"5 oy · 2025",
    exp1li1:"Haqiqiy AI loyihasida g'oyadan boshlangunga qadar ishladim",
    exp1li2:"Python va Django yordamida backend xizmatlar va REST API'lar yaratdim",
    exp1li3:"Jamoa bilan AI modeli integratsiyasi va testlashda hamkorlik qildim",
    exp1li4:"Ishlab chiqarish darajasidagi tizimlarda amaliy tajriba ortirdim",
    milestone1:"\u{1F389} 2022 — Millat Umidi Universitetida Dasturiy Injiniriya bakalavr yo\'nalishini boshladim",
    role2:"Frilanser Backend Dasturchi", company2:"Mustaqil ish", badge2:"Frilanser", date2:"2024 – Hozir",
    exp2li1:"Bir nechta shaxsiy va mijoz loyihalarini boshidan oxirigacha yaratdim va ishga tushirdim",
    exp2li2:"PDF tahlili va rasm sifatini oshirish uchun AI Telegram botlarini ishlab chiqdim",
    exp2li3:"Talabalar uchun TalabaHub platformasini yaratdim (Vercel'da jonli)",
    exp2li4:"Sartaroshxona startapi uchun Flutter mobil ilova + Django REST API ishlab chiqishga rahbarlik qildim",
    milestone2:"\u{1F4BB} 2021 — IT Park Xivada birinchi kod satrlarini yozdim. Sayohat boshlandi.",
    labelEdu:"03 / Ta\'lim", titleEdu:"Ta\'lim",
    uniName:"Millat Umidi Universiteti", uniDegree:"Bakalavr — Dasturiy Injiniriya",
    uniPeriod:"2022 – 2026",
    uniDesc:"Dasturiy injiniriya yo\'nalishini bakalavr diplomiga ega bo\'lib tamomladi. Algoritmlar, ma\'lumotlar tuzilmalari, ma\'lumotlar bazalari va zamonaviy backend dasturlash amaliyotlarini o\'rgandi.",
    itparkName:"IT Park Xiva", itparkDegree:"Backend Dasturlash — Sertifikat",
    itparkPeriod:"2021 – 2022",
    itparkDesc:"2021-yilda shu yerda birinchi kod satrlarini yozdi. 2022-yilda Backend yo\'nalishini tugatib, rasmiy sertifikatga ega bo\'ldi. Sayohat aynan shu yerdan boshlandi.",
    labelSkills:"04 / Ko\'nikmalar", titleSkills:"Ko\'nikmalar va Texnologiyalar",
    skillLang:"Dasturlash tillari", skillFramework:"Freymvorklar", skillDb:"Ma\'lumotlar bazasi",
    skillInfra:"Infratuzilma", skillAi:"Sun\'iy intellekt / ML", skillSec:"Xavfsizlik",
    labelProjects:"05 / Loyihalar", titleProjects:"Loyihalar",
    proj1Title:"Sartaroshxona Mobil Ilovasi", proj1Type:"\u{1F680} Start-up · Mobil Ilova + REST API",
    proj1Desc:"To\'liq stek startap: Flutter mobil ilova + Django REST API backend. Bron qilish, jadval boshqarish va sartarosh-mijoz ulanishini ta\'minlaydi.",
    proj2Title:"AI PDF va Rasm Sifati Boti", proj2Type:"\u{1F916} AI · Telegram Bot",
    proj2Desc:"PDF hujjatlarni tahlil qiluvchi va rasm sifatini AI yordamida oshiruvchi Telegram bot. Foydalanuvchilar fayllarni yuklaydi va aqlli natijalar oladi.",
    proj3Title:"TalabaHub", proj3Type:"\u{1F310} Veb Ilova · Vercel\'da jonli",
    proj3Desc:"Talabalar uchun to\'liq stek veb-platforma — resurslar, hamjamiyatlar va akademik imkoniyatlar markazi. JavaScript bilan yaratilgan va Vercel\'da joylashtirilgan.",
    proj4Title:"FitnesBot", proj4Type:"\u{1F916} Fitness · Telegram Bot",
    proj4Desc:"Foydalanuvchilarga fitness sayohatini rejalashtirish va kuzatishda yordam beruvchi Telegram bot. Mashq dasturlari, natijalarni kuzatish va shaxsiy rejalar taqdim etadi.",
    labelContact:"06 / Bog'lanish", titleContact:"Bog'lanish",
    contactIntro:"Hozirda yangi imkoniyatlarga ochiqman. To'liq kunlik ish, frilanser loyiha yoki oddiy suhbat bo'lsa ham — murojaat qiling!",
    ctaCall:"QONG'IROQ QILING", ctaEmail:"EMAIL YUBORING", ctaTelegram:"TELEGRAM'DA YOZISH",
    ctaTgChannel:"TELEGRAM KANAL", ctaInstagram:"INSTAGRAM'DA KUZATISH",
    ctaGithub:"GITHUB'DA KO'RING", ctaLinkedin:"LINKEDIN'DA ULANISH",
    footerText:"\u00A9 2025 Ziyodulla Otabayev. Toza kod bilan yaratildi.",
    timezoneText:"Hozirgi vaqt (men uchun):"
  },
  ru: {
    navAbout:"Обо мне", navExperience:"Опыт", navEducation:"Образование",
    navSkills:"Навыки", navProjects:"Проекты", navContact:"Контакты",
    downloadCV:"Скачать CV", preparingCV:"Подготовка CV...",
    heroLocation:"Хорезмская область, Хива — Узбекистан \u{1F1FA}\u{1F1FF}",
    heroSubtitle:"Python / Django Backend Разработчик",
    heroBio:"Backend разработчик, специализирующийся на создании масштабируемых веб-приложений и AI-систем. Имею опыт в реальных AI-проектах и стремлюсь превращать сложные идеи в чистый, работающий код.",
    heroCta1:"Связаться", heroCta2:"Проекты", heroStatus:"Открыт к работе",
    labelAbout:"01 / Обо мне", titleAbout:"Обо мне",
    aboutP1:"Я backend разработчик с сильной базой в Python и Django. Получил практический опыт в ходе <strong>5-месячной стажировки в AI Vision</strong>, где работал над реальным AI-проектом с нуля.",
    aboutP2:"Придаю большое значение написанию чистого, поддерживаемого кода и постоянно ищу способы улучшить производительность. Работаю быстро, сосредоточен на результатах.",
    aboutP3:"Открыт для новых возможностей — стартап, продуктовая команда или фриланс.",
    statLabel1:"Месяцев опыта", statLabel2:"Запущено проектов", statLabel3:"Технологий", statLabel4:"Любопытство",
    labelExp:"02 / Опыт", titleExp:"Опыт работы",
    role1:"Стажёр Backend Разработчик", company1:"AI Vision", badge1:"Стажировка", date1:"5 месяцев · 2025",
    exp1li1:"Работал над реальным AI-проектом от концепции до развёртывания",
    exp1li2:"Создавал backend-сервисы и REST API с использованием Python и Django",
    exp1li3:"Сотрудничал с командой по интеграции и тестированию AI-моделей",
    exp1li4:"Получил практический опыт работы с производственными системами",
    milestone1:"\u{1F389} 2022 — Начал бакалавриат по программной инженерии в Millat Umidi University",
    role2:"Фриланс Backend Разработчик", company2:"Самозанятый", badge2:"Фриланс", date2:"2024 – настоящее время",
    exp2li1:"Создал и запустил несколько личных и клиентских проектов",
    exp2li2:"Разработал AI-ботов для анализа PDF и улучшения качества изображений",
    exp2li3:"Создал TalabaHub — платформу для студентов (развёрнута на Vercel)",
    exp2li4:"Руководил разработкой мобильного приложения Flutter + Django REST API для стартапа барбершопа",
    milestone2:"\u{1F4BB} 2021 — Первые строки кода в IT Park Xiva. Начало пути.",
    labelEdu:"03 / Образование", titleEdu:"Образование",
    uniName:"Университет Millat Umidi", uniDegree:"Бакалавр — Программная инженерия",
    uniPeriod:"2022 – 2026",
    uniDesc:"Окончил бакалавриат по программной инженерии. Изучал алгоритмы, структуры данных, базы данных и современные практики backend-разработки.",
    itparkName:"IT Park Xiva", itparkDegree:"Backend-разработка — Сертификат",
    itparkPeriod:"2021 – 2022",
    itparkDesc:"Написал первые строки кода здесь в 2021 году. В 2022 году окончил направление Backend-разработки и получил официальный сертификат. Именно здесь началось путешествие.",
    labelSkills:"04 / Навыки", titleSkills:"Навыки и технологии",
    skillLang:"Языки программирования", skillFramework:"Фреймворки", skillDb:"Базы данных",
    skillInfra:"Инфраструктура", skillAi:"ИИ / ML", skillSec:"Безопасность",
    labelProjects:"05 / Проекты", titleProjects:"Проекты",
    proj1Title:"Мобильное приложение Sartaroshxona", proj1Type:"\u{1F680} Стартап · Мобильное приложение + REST API",
    proj1Desc:"Полный стек стартап: Flutter мобильное приложение + Django REST API бэкенд. Функции: запись на приём, управление расписанием, связь клиентов с барберами.",
    proj2Title:"AI PDF и бот улучшения изображений", proj2Type:"\u{1F916} ИИ · Telegram Бот",
    proj2Desc:"Telegram-бот на базе ИИ для обработки PDF-документов и улучшения качества изображений. Пользователи загружают файлы и получают умный результат.",
    proj3Title:"TalabaHub", proj3Type:"\u{1F310} Веб-приложение · Развёрнуто на Vercel",
    proj3Desc:"Полноценная веб-платформа для студентов — центр ресурсов, сообществ и возможностей. Создана на JavaScript и развёрнута на Vercel.",
    proj4Title:"FitnesBot", proj4Type:"\u{1F916} Фитнес · Telegram Бот",
    proj4Desc:"Telegram-бот для планирования и отслеживания фитнес-пути. Предоставляет программы тренировок, отслеживание прогресса и персональные планы.",
    labelContact:"06 / Контакты", titleContact:"Связаться",
    contactIntro:"Открыт для новых возможностей. Полная занятость, фриланс или просто разговор — не стесняйтесь обращаться!",
    ctaCall:"ПОЗВОНИТЬ", ctaEmail:"НАПИСАТЬ EMAIL", ctaTelegram:"TELEGRAM",
    ctaTgChannel:"TELEGRAM КАНАЛ", ctaInstagram:"INSTAGRAM",
    ctaGithub:"КОД НА GITHUB", ctaLinkedin:"LINKEDIN",
    footerText:"\u00A9 2025 Ziyodulla Otabayev. Создано с чистым кодом.",
    timezoneText:"Моё текущее время:"
  }
};

let currentLang = localStorage.getItem("lang") || "en";

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  const t = T[lang];

  // Update html lang attribute
  document.documentElement.lang = lang;

  // Update text nodes
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // Update innerHTML nodes (for bold etc)
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.dataset.i18nHtml;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Update lang buttons
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

// ============================================================
// THEME
// ============================================================
let currentTheme = localStorage.getItem("theme") || "dark";

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const moon = document.querySelector(".icon-moon");
  const sun  = document.querySelector(".icon-sun");
  if (theme === "light") {
    moon && (moon.style.display = "none");
    sun  && (sun.style.display  = "block");
  } else {
    moon && (moon.style.display = "block");
    sun  && (sun.style.display  = "none");
  }
}

function toggleTheme() {
  currentTheme = currentTheme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", currentTheme);
  applyTheme(currentTheme);
}

// ============================================================
// MOBILE MENU
// ============================================================
const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");
burger.addEventListener("click", () => mobileMenu.classList.toggle("open"));
function closeMenu() { mobileMenu.classList.remove("open"); }
document.addEventListener("click", e => {
  if (!burger.contains(e.target) && !mobileMenu.contains(e.target)) mobileMenu.classList.remove("open");
});

// ============================================================
// NAV SCROLL + ACTIVE LINK
// ============================================================
const nav = document.getElementById("navbar");
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");
window.addEventListener("scroll", () => {
  nav.style.background = window.scrollY > 20 ? "var(--nav-bg)" : "var(--nav-bg)";
  let cur = "";
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 90) cur = s.id; });
  navLinks.forEach(a => {
    a.classList.toggle("active", a.getAttribute("href") === "#" + cur);
  });
}, { passive: true });

// ============================================================
// SCROLL ANIMATIONS
// ============================================================
const observer = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
  { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
);
document.querySelectorAll(
  ".section-label,.section-title,.about-text,.about-stats," +
  ".timeline-item,.timeline-milestone,.edu-card," +
  ".skill-group,.project-card,.contact-intro,.contact-card," +
  ".hero-content,.hero-photo-wrap"
).forEach(el => { el.classList.add("fade-in"); observer.observe(el); });

// ============================================================
// LOCAL TIME
// ============================================================
function updateTime() {
  const el = document.getElementById("localTime");
  if (!el) return;
  el.textContent = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Tashkent", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false
  }).format(new Date());
}
updateTime();
setInterval(updateTime, 1000);

// ============================================================
// DOWNLOAD CV
// ============================================================
function downloadCV() {
  const overlay = document.getElementById("printOverlay");
  overlay.classList.remove("hidden");
  setTimeout(() => { overlay.classList.add("hidden"); window.print(); }, 700);
}

// ============================================================
// INIT
// ============================================================
applyTheme(currentTheme);
setLang(currentLang);

console.log("%c ZO. Portfolio", "color:#7c6fff;font-size:22px;font-weight:bold;");
console.log("%c Ziyodulla Otabayev — Backend Developer", "color:#888;font-size:13px;");
