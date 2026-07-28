(function () {
  const savedTheme = localStorage.getItem("finguard-theme") || "light";
  document.documentElement.dataset.theme = savedTheme;

  function updateButtons() {
    document.querySelectorAll(".theme-toggle").forEach(button => {
      button.setAttribute("aria-label", "Change theme");
      button.setAttribute("title", "Change theme");
    });
  }

  function toggleTheme() {
    const current = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("finguard-theme", next);
    updateButtons();
  }

  document.addEventListener("DOMContentLoaded", () => {
    updateButtons();
    document.querySelectorAll(".theme-toggle").forEach(button => {
      button.addEventListener("click", toggleTheme);
    });
  });
})();
