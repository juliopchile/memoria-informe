// Global variable to store translations
let translations = {};
const rtlLangs = ["ar", "he"];
let supportedLangs = [];
const langToggle = document.getElementById("lang-toggle");
const langMenu = document.getElementById("lang-menu");
const currentFlag = document.getElementById("current-flag");
const currentLabel = document.getElementById("current-label");
const darkToggle = document.getElementById("dark-toggle");

// Function to load translations from JSON file
async function loadTranslations() {
  try {
    const response = await fetch('translations.json');
    translations = await response.json();
    supportedLangs = Object.keys(translations);
  } catch (error) {
    console.error('Error loading translations:', error);
    // Fallback to empty object if loading fails
    translations = {};
    supportedLangs = [];
  }
}

function buildLangMenu() {
  langMenu.innerHTML = "";
  supportedLangs.forEach((lang) => {
    const meta = translations[lang];
    const li = document.createElement("li");
    li.dataset.lang = lang;
    li.innerHTML = `<span class="fi ${meta.flag}"></span>${meta.label}`;
    li.addEventListener("click", () => {
      setLanguage(lang);
      toggleLangMenu(false);
    });
    langMenu.appendChild(li);
  });
}

function toggleLangMenu(show) {
  langMenu.style.display = show ? "block" : "none";
}

langToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleLangMenu(langMenu.style.display !== "block");
});
document.addEventListener("click", () => toggleLangMenu(false));

function setLanguageFont(lang) {
  document.body.classList.remove(
    "noto-sans-jp",
    "noto-sans-sc",
    "noto-sans-tc",
    "noto-sans-hebrew",
    "noto-sans-arabic",
    "noto-sans"
  );
  if (lang === "ja") {
    document.body.classList.add("noto-sans-jp");
  } else if (lang == "zh" || lang == "zh_HANS" || lang == "zh_CN") {
    document.body.classList.add("noto-sans-sc");
  } else if (lang == "zh_HANT" || lang == "zh_TW") {
    document.body.classList.add("noto-sans-tc");
  } else if (lang === "he") {
    document.body.classList.add("noto-sans-hebrew");
  } else if (lang === "ar") {
    document.body.classList.add("noto-sans-arabic");
  } else {
    document.body.classList.add("noto-sans");
  }
}

function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  setLanguageFont(lang);
  applyLanguage(lang);
}

function applyLanguage(lang) {
  const tx = translations[lang] || translations.es;
  document.documentElement.lang = lang;
  currentFlag.className = `fi ${tx.flag}`;
  currentLabel.textContent = tx.label;
  document
    .querySelectorAll("[data-i18n]")
    .forEach((el) => (el.textContent = tx[el.getAttribute("data-i18n")] || ""));
  document
    .querySelectorAll("[data-i18n-link]")
    .forEach(
      (el) => (el.textContent = tx[el.getAttribute("data-i18n-link")] || "")
    );
  updateDarkToggleText(lang);
  if (rtlLangs.includes(lang)) {
    document.body.classList.remove("ltr");
    document.body.classList.add("rtl");
  } else {
    document.body.classList.remove("rtl");
    document.body.classList.add("ltr");
  }
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem(
    "darkMode",
    document.body.classList.contains("dark-mode")
  );
  updateDarkToggleText(localStorage.getItem("lang") || "es");
}

function updateDarkToggleText(lang) {
  const tx = translations[lang] || translations.es;
  const key = document.body.classList.contains("dark-mode")
    ? "darkModeOff"
    : "darkModeOn";
  darkToggle.textContent = tx[key];
}

window.addEventListener("DOMContentLoaded", async () => {
  // Load translations first
  await loadTranslations();
  buildLangMenu();

  // 1) MODO CLARO/OSCuro
  const savedDark = localStorage.getItem("darkMode");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (savedDark === "true" || (savedDark === null && prefersDark)) {
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "true");
  } else if (savedDark === null) {
    // Si nunca ha visitado y el sistema prefiere claro
    localStorage.setItem("darkMode", "false");
  }

  // 2) IDIOMA
  const savedLang = localStorage.getItem("lang");
  let initialLang;
  if (savedLang && supportedLangs.includes(savedLang)) {
    initialLang = savedLang;
  } else {
    const browserLang = navigator.language.split("-")[0];
    initialLang = supportedLangs.includes(browserLang) ? browserLang : "es";
    localStorage.setItem("lang", initialLang);
  }
  setLanguage(initialLang);

  darkToggle.addEventListener("click", toggleDarkMode);
});