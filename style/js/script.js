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


document.getElementById('kontak-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Mencegah pengiriman form default

  const formData = new FormData(this);
  const url = this.action;
  const formMessage = document.querySelector('.form-message');
  const loader = document.querySelector('.loader');

  loader.style.display = 'block';
  formMessage.textContent = ''; // Hapus pesan sebelumnya

  fetch(url, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    loader.style.display = 'none'; // Sembunyikan loader setelah respons diterima
    if (response.ok) {
      formMessage.textContent = 'Pesan berhasil dikirim. Terima kasih!';
      formMessage.style.color = 'green'; // Ubah warna pesan sesuai kebutuhan
    } else {
      formMessage.textContent = 'Gagal mengirim pesan. Silakan coba lagi.';
      formMessage.style.color = 'red'; // Ubah warna pesan sesuai kebutuhan
    }
  })
  .catch(error => {
    loader.style.display = 'none'; // Sembunyikan loader jika terjadi kesalahan
    formMessage.textContent = 'Terjadi kesalahan: ' + error.message;
    formMessage.style.color = 'red'; // Ubah warna pesan sesuai kebutuhan
  });
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
