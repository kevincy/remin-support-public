(function () {
  const key = "remin-support-language";
  const root = document.documentElement;
  const buttons = Array.from(document.querySelectorAll("[data-language-choice]"));

  function chooseLanguage(language) {
    const value = language === "zh" ? "zh" : "en";
    root.dataset.language = value;
    root.lang = value === "zh" ? "zh-Hans" : "en";
    buttons.forEach((button) => {
      const selected = button.dataset.languageChoice === value;
      button.classList.toggle("active", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
    try { localStorage.setItem(key, value); } catch (_) {}
  }

  let stored;
  try { stored = localStorage.getItem(key); } catch (_) {}
  const browserLanguage = navigator.language && navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
  chooseLanguage(stored || browserLanguage);

  buttons.forEach((button) => {
    button.addEventListener("click", () => chooseLanguage(button.dataset.languageChoice));
  });
})();

