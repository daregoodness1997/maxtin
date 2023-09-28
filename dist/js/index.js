let spinnerWrapper = document.querySelector(".spinner-wrapper");

window.addEventListener("load", () => {
  //   spinnerWrapper.style.display = "none";
  spinnerWrapper.parentElement.removeChild(spinnerWrapper);
});

const openBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".close");
const navLinks = document.querySelector(".nav-links");

openBtn.addEventListener("click", () => {
  navLinks.classList.add("show");
  closeBtn.classList.toggle("hide");
  console.log("test", navLinks);
});
closeBtn.addEventListener("click", () => {
  navLinks.classList.remove("show");
  closeBtn.classList.toggle("hide");
});

// Scroll Reveal Animation
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

// Scroll Home

// Navbar
sr.reveal(".logo", { delay: 500 });
sr.reveal(".nav-link", { delay: 500, interval: 200 });

// Banner
sr.reveal(".title-head", { origin: "right", delay: 400 });
sr.reveal(".title-text", { origin: "left", delay: 600 });
sr.reveal(".banner ", { origin: "right", delay: 600 });
// sr.reveal(".banner img", { origin: "right", delay: 600, interval: 500 });
sr.reveal(".quote", { delay: 300 });

// Reveal
sr.reveal(".container ", { origin: "top" });
sr.reveal(".container .order1", { origin: "left", delay: 300 });
sr.reveal(".container .order2", { origin: "right", delay: 600 });
sr.reveal(".right", { origin: "right", delay: 400 });
sr.reveal(".left", { origin: "left", delay: 600 });
