const themeSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const textBox = document.getElementById("text-box");
const burgerMenu = document.getElementById("container");
const mobileNav = document.getElementById("mobile-nav");

function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    darkMode();
  } else {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
    lightMode();
  }
}

function lightMode() {
  nav.style.backgroundColor = "rgb(255 255 255 / 50%)";
  textBox.style.backgroundColor = "rgb(0 0 0 / 50%)";
  toggleIcon.children[0].textContent = "Light Mode";
  toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");

  toggleIllustrations("light");
}

function darkMode() {
  nav.style.backgroundColor = "rgb(0 0 0 / 50%)";
  textBox.style.backgroundColor = "rgb(255 255 255 / 50%)";
  toggleIcon.children[0].textContent = "Dark Mode";
  toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
}

themeSwitch.addEventListener("change", switchTheme);

const selectedTheme = localStorage.getItem("theme");

if (selectedTheme) {
  if (selectedTheme === "dark") {
    themeSwitch.checked = true;
    document.documentElement.setAttribute("data-theme", "dark");
    darkMode();
  }
}

function animateBurger() {
  if (burgerMenu.classList.contains("change")) {
    burgerMenu.classList.remove("change");
    mobileNav.classList.remove("active");
    mobileNav.classList.add("inactive");
    mobileNav.hidden = true;
  } else {
    burgerMenu.classList.add("change");
    mobileNav.classList.add("active");
    mobileNav.classList.remove("inactive");
    mobileNav.hidden = false;
  }
}

burgerMenu.addEventListener("click", animateBurger);

const elements = mobileNav.getElementsByTagName("a");
for (let index = 0; index < elements.length; index++) {
  elements[index].addEventListener("click", animateBurger);
}
