const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-visible")
    } else {
      entry.target.classList.remove("animate-visible")
    }
  });
})

const hiddenEl = document.querySelectorAll(".animate-hidden");
console.log(hiddenEl)

hiddenEl.forEach((el) => observer.observe(el));

  let hamburgerEl = document.querySelector(".navbar__icons-hamburger")
  let hamburgerCloseEl = document.querySelector(".navbar__icons-close")
  let navBarEl = document.querySelector(".navbar__nav")
  

  hamburgerEl.addEventListener("click", function() {
    navBarEl.classList.toggle("navbar__nav-open");
    if (navBarEl.classList.contains("navbar__nav-open")) {
      hamburgerCloseEl.style.display = "block";
      hamburgerEl.style.display = "none"
    } else {
      hamburgerCloseEl.style.display = "none";
      hamburgerEl.style.display = "block"
    }
  });

  hamburgerCloseEl.addEventListener("click", function() {
    navBarEl.classList.remove("navbar__nav-open");
    hamburgerCloseEl.style.display = "none";
    hamburgerEl.style.display = "block";
  });