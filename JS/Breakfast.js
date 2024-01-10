function toggleMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");
  updateToggleIcon();
  saveDarkModeSetting();
}

function updateToggleIcon() {
  const modeToggleIcon = document
    .getElementById("modeToggle")
    .querySelector("i");
  modeToggleIcon.classList.toggle("fa-sun");
}

function updateToggleIcon() {
  const modeToggleIcon = document
    .getElementById("modeToggle")
    .querySelector("i");
  modeToggleIcon.style.transform = document.body.classList.contains("dark-mode")
    ? "rotate(180deg)"
    : "rotate(0)";
}

function saveDarkModeSetting() {
  const darkModeEnabled = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", darkModeEnabled);
}

document.addEventListener("DOMContentLoaded", function () {
  const savedMode = localStorage.getItem("darkMode");
  if (savedMode === "true") {
    document.body.classList.add("dark-mode");
    updateToggleIcon();
  }
});

function goBack() {
  window.location.href = "../Index.html";
}
