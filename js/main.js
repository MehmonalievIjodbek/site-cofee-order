$(document).ready(function () {
  $(".more__blocks").click(function () {
    let image = $("img", this).attr("src");
    $("#ok-img").attr("src", image);
    $("#modal").css("opacity", "1");
    $("#modal").css("visibility", "inherit");
    $("#modal").css("top", "0");
    $('#modal').css('display', 'flex');
  });
  $("#close").click(function () {
    $("#modal").css("opacity", "0");
    $("#modal").css("visibility", "hiddin");
    $("#modal").css("top", "-100%");
  });
});

let nav1 = document.querySelector(".nav__right");
const bars = document.querySelector(".fa-bars");
const navbar = document.querySelector(".navbar");
bars.addEventListener("click", function () {
  nav1.classList.toggle("active");
  bars.classList.toggle("fa-bars");
  bars.classList.toggle("fa-circle-xmark");
  navbar.classList.toggle("active");
  
});

// Link bosganda ochadigan joyi

const links = document.querySelectorAll(".navbar__link");

links.forEach((e) =>
  e.addEventListener("click", () => {
    nav1.classList.remove("active");
    bars.classList.add("fa-bars");
    bars.classList.remove("fa-circle-xmark");
    navbar.classList.remove("active");
  })
);

function scrollTepa() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
document.getElementById("btn").addEventListener("click", scrollTepa);

window.addEventListener("scroll", function () {
  let button = document.querySelector(".button");
  button.classList.toggle("menu", window.scrollY > 600);
});

window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar");
  let windowYon = Math.round(window.scrollY);
  let fea = document.querySelector(".fea");
  navbar.classList.toggle("navm", windowYon > 100);

  if (windowYon > 400) {
    fea.style.transform = "scale(1,1)";
  } else {
    fea.style.transform = "scale(0,0)";
  }
});


