// Dark Mode
const toggleBtn = document.getElementById("chckboxDM");
const navbar = document.getElementById("navbar");
const headerSec1 = document.getElementById("headerSec");
const bodybg = document.getElementById("bodyid");
const formdm = document.getElementById("formconId");
const formBtn = document.getElementById("buttonSbmt");
const sec1a = document.getElementById("bgliSec1a");
const sec1b = document.getElementById("bgliSec1b");

let darkMode = localStorage.getItem("dark-mode");

const enableDarkMode = () => {
  navbar.classList.add("navbarDM");
  headerSec1.classList.add("headersecDM");
  bodybg.classList.add("bodyDM");
  formdm.classList.add("formconDM");
  formBtn.classList.add("buttonForm");
  sec1a.classList.remove("bglisc1");
  sec1a.classList.add("sec1DMa");
  sec1b.classList.remove("bglisc1");
  sec1b.classList.add("sec1DMb");
  //toggleBtn.classList.remove("dark-mode-toggle");
  localStorage.setItem("dark-mode", "enabled");
};

const disableDarkMode = () => {
  navbar.classList.remove("navbarDM");
  headerSec1.classList.remove("headersecDM");
  bodybg.classList.remove("bodyDM");
  formdm.classList.remove("formconDM");
  sec1a.classList.remove("sec1DMa");
  sec1a.classList.add("bglisc1");
  sec1b.classList.remove("sec1DMb");
  sec1b.classList.add("bglisc1");
  formBtn.classList.remove("buttonForm");
  //toggleBtn.classList.add("dark-mode-toggle");
  localStorage.setItem("dark-mode", "disabled");
};

if (darkMode === "enabled") {
  enableDarkMode(); // set state of darkMode on page load
}

toggleBtn.addEventListener("change", (e) => {
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
