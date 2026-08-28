// ===== MOBILE MENU =====
const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");

burger.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});
function closeMenu() {
  mobileMenu.classList.remove("open");
}
document.addEventListener("click", (e) => {
  if (!burger.contains(e.target) && !mobileMenu.contains(e.target)) {
    mobileMenu.classList.remove("open");
  }
});

// ===== NAV SCROLL EFFECT =====
const nav = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  nav.style.background = window.scrollY > 20
    ? "rgba(10,10,10,0.97)"
    : "rgba(10,10,10,0.85)";
});

// ===== ACTIVE NAV LINK =====
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((s) => {
    if (window.scrollY >= s.offsetTop - 90) current = s.id;
  });
  navLinks.forEach((a) => {
    a.classList.remove("active");
    if (a.getAttribute("href") === "#" + current) a.classList.add("active");
  });
});

// ===== SCROLL ANIMATIONS =====
const observer = new IntersectionObserver(
  (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
  { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
);
document.querySelectorAll(
  ".section-label, .section-title, .about-text, .about-stats, " +
  ".timeline-item, .timeline-milestone, .edu-card, " +
  ".skill-group, .project-card, .contact-intro, .contact-card, " +
  ".hero-content, .hero-photo-wrap"
).forEach((el) => {
  el.classList.add("fade-in");
  observer.observe(el);
});

// ===== LOCAL TIME =====
function updateTime() {
  const el = document.getElementById("localTime");
  if (!el) return;
  el.textContent = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Tashkent",
    hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false,
  }).format(new Date());
}
updateTime();
setInterval(updateTime, 1000);

// ===== DOWNLOAD CV (Print to PDF) =====
function downloadCV() {
  const overlay = document.getElementById("printOverlay");
  overlay.classList.remove("hidden");

  // Short delay so overlay renders, then print
  setTimeout(() => {
    overlay.classList.add("hidden");
    window.print();
  }, 800);
}

// ===== CONSOLE EASTER EGG =====
console.log("%c ZO. Portfolio", "color:#7c6fff;font-size:22px;font-weight:bold;");
console.log("%c Ziyodulla Otabayev — Backend Developer", "color:#888;font-size:13px;");
console.log("%c github.com/ZiyodullaOtabaev", "color:#7c6fff;font-size:12px;");
