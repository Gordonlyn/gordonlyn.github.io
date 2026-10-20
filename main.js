// Mobile menu: show / hide the nav links when the ☰ button is tapped.
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});

// Close the menu after choosing a section.
links.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", false);
  }
});

// Keep the copyright year current.
document.getElementById("year").textContent = new Date().getFullYear();
