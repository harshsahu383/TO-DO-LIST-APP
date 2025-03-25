const themeToggle = document.getElementById("themeToggle");
const darkIcon = document.getElementById("darkIcon");
const lightIcon = document.getElementById("lightIcon");
const html = document.documentElement;

// Set initial icon state based on current theme
if (html.classList.contains("dark")) {
  darkIcon.classList.remove("hidden");
  lightIcon.classList.add("hidden");
}

themeToggle.addEventListener("click", () => {
  // Toggle the 'dark' class on the html element
  html.classList.toggle("dark");

  // Update localStorage
  if (html.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }

  // Toggle icons
  darkIcon.classList.toggle("hidden");
  lightIcon.classList.toggle("hidden");
});
