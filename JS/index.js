const inputBox = document.getElementById("inputBox");
const searchButton = document.getElementById("searchButton");

inputBox.addEventListener("click", function () {
  inputBox.setAttribute("placeholder", "");
});

inputBox.addEventListener("blur", function () {
  inputBox.setAttribute("placeholder", "Search Your Food");
});

function goBack() {
  window.location.href = "../index.html";
}

function redirect() {
  if (inputBox.value === "") {
    alert("Write something");
  } else {
    window.location.href = "recipe/" + inputBox.value + ".html";
  }
}

inputBox.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    redirect();
  }
});

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

window.addEventListener("scroll", function () {
  const body = document.body;
  const scrolled = window.scrollY > 0;
  body.classList.toggle("scrolled", scrolled);
});
