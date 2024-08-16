// navbar-scroll-fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// hamburger-menu
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle('hidden');
});


const contacForm = document.getElementById('kontak-form');
const loader = document.querySelector(".loader");

loader.style.display = "none";

contacForm.addEventListener("submit", function (e){
  e.preventDefault();
  loader.style.display = "block";
  const url = e.target.action;
  const formData = new FormData(contacForm);

  fetch(url, {
    method: "POST",
    body: formData,
    mode: "no-cors",
  })
  .then(() => {
    //url thankyou
    loader.style.display = "none";
    window.location.href = "/thankyou.html";
  })
  .catch((e) => alert("error occured"));
});


// document.addEventListener('DOMContentLoaded', function () {
//     const images = document.querySelectorAll('.zoomable-image');
//     const blurBackground = document.getElementById('blur-background');
//     let currentIndex = 0;

//     function showImage(index) {
//         images.forEach((img, i) => {
//             img.classList.toggle('hidden', i !== index);
//         });
//     }

//     document.getElementById('image-slider').addEventListener('click', function () {
//         const currentImage = images[currentIndex];
//         currentImage.classList.toggle('zoomed-in');
//         blurBackground.classList.toggle('hidden');
//     });

//     document.getElementById('next-btn').addEventListener('click', function () {
//         currentIndex = (currentIndex + 1) % images.length;
//         showImage(currentIndex);
//     });

//     document.getElementById('prev-btn').addEventListener('click', function () {
//         currentIndex = (currentIndex - 1 + images.length) % images.length;
//         showImage(currentIndex);
//     });

//     showImage(currentIndex);
// });
