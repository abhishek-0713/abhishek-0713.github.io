//Header fixed

window.onscroll = function () {
  const docScrollTop = document.documentElement.scrollTop;

  if (window.innerWidth > 991) {
    if (docScrollTop > 100) {
      document.querySelector("header").classList.add("fixed");
    } else {
      document.querySelector("header").classList.remove("fixed");
    }
  }
};

//navbar links

const navbar = document.querySelector(".navbar");
a = navbar.querySelectorAll("a");

a.forEach(function (element) {
  element.addEventListener("click", function () {
    for (let i = 0; i < a.length; i++) {
      a[i].classList.remove("active");
    }
    this.classList.add("active");
    document.querySelector(".navbar").classList.toggle("show");
  });
});

//Hamburger

const hamBurger = document.querySelector(".hamburger");

hamBurger.addEventListener("click", function () {
  document.querySelector(".navbar").classList.toggle("show");
});

document.querySelector(".cv-btn").onclick = function () {
  var redirectWindow = window.open(
    "./components/abhishek-walke-resume.pdf",
    "_blank"
  );
  redirectWindow.location;
};
