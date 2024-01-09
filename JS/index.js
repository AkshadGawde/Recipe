const inputBox = document.getElementById("inputBox");
const searchButton = document.getElementById("searchButton");

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
  document.body.classList.toggle("dark-mode");
  updateToggleIcon();
}

function updateToggleIcon() {
  const modeToggleIcon = document
    .getElementById("modeToggle")
    .querySelector("i");
  modeToggleIcon.style.transform = document.body.classList.contains("dark-mode")
    ? "rotate(180deg)"
    : "rotate(0)";
}

const savedMode = localStorage.getItem("darkMode");
if (savedMode === "true") {
  document.body.classList.add("dark-mode");
  updateToggleIcon();
}
