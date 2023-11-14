// Dark Mode
const toggleBtn = document.getElementById("toggle-btn");
const navbar = document.getElementById("navbar");
let darkMode = localStorage.getItem("dark-mode");

const enableDarkMode = () => {
  navbar.classList.add("navbarDM");
  //toggleBtn.classList.remove("dark-mode-toggle");
  localStorage.setItem("dark-mode", "enabled");
};

const disableDarkMode = () => {
  navbar.classList.remove("navbarDM");
  toggleBtn.classList.add("dark-mode-toggle");
  localStorage.setItem("dark-mode", "disabled");
};

if (darkMode === "enabled") {
  enableDarkMode(); // set state of darkMode on page load
}

toggleBtn.addEventListener("click", (e) => {
  darkMode = localStorage.getItem("dark-mode"); // update darkMode when clicked
  if (darkMode === "disabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

// end of dark mode

function openNav() {
  document.getElementById("mobileSidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mobileSidenav").style.width = "0";
}

function showAlert() {
  alert("Thank you for filling the form!");
}
