//Toggle Class Active
const NavbarMenu = document.querySelector(".navbar-menu");
//ketika di klik hamburge menu
document.querySelector("#hambuger-menu").onclick = () => {
  NavbarMenu.classList.toggle("active");
};

//Slider
var index = 0;
fungsi();

function fungsi() {
  var i;
  var slide = document.getElementsByClassName("hero-slider");

  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }

  index++;
  if (index > slide.length) {
    index = 1;
  }

  slide[index - 1].style.display = "block";
  setTimeout(fungsi, 4000);
}

// Scroll Smooth
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
