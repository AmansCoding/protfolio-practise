// const navbars = document.querySelectorAll(".navs");
// const navs = document.querySelectorAll(".nav");
// // console.log(navs);

// for (let i = 0; i < navbars.length; i++) {
//   navbars[i].addEventListener("mouseover", function () {
//     const css_before = window.getComputedStyle(navs[i], "::before");

//     console.log(css_before);
//     css_before.transform.matrix = 1;
//   });
// }

//hover effect on service links
// const serviceLinks = document.querySelectorAll(".service-link");
// const serviceDescreptions = document.querySelectorAll(".service-des-type");

// for (let i = 0; i < serviceLinks.length; i++) {
//   serviceLinks[i].addEventListener("click", function () {
//     serviceLinks[i].style.color = `#fff`;
//     serviceLinks[i].style.fontWeight = `900`;

//     if (serviceDescreptions[i].classList.contains("none")) {
//       serviceDescreptions[i].classList.remove("none");
//     }
//   });
// }

//translating form x

const features = document.querySelectorAll(".feature-main");

for (const feature of features) {
  feature.addEventListener("mouseover", function () {
    feature.style.transform = `translateX(40%)`;
  });

  feature.addEventListener("mouseleave", function () {
    feature.style.transform = `translateX(50%)`;
  });
}

//project des

const projectDecriptions = document.querySelectorAll(".project-des");
const projects = document.querySelectorAll(".project");

for (let i = 0; i < projects.length; i++) {
  projects[i].addEventListener("mouseover", function () {
    projectDecriptions[i].classList.remove("none");
  });

  projects[i].addEventListener("mouseleave", function () {
    projectDecriptions[i].classList.add("none");
  });
}

//updating year of experience

const years = document.querySelector(".years-heading");

setInterval(yearsUpdate, 500);

let count = 0;

function yearsUpdate() {
  years.textContent = "";
  if (count < 20) {
    count = count + 2;
  }

  years.textContent = count;
}

//menu bar

const menubtn = document.querySelector(".menu-logo");
const menu = document.querySelector(".right-menu-list-con");

menubtn.addEventListener("click", function () {
  if (menu.classList.contains("none")) {
    menu.classList.remove("none");
  } else {
    menu.classList.add("none");
  }
});
