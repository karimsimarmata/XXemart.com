const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");
const searchOne = document.querySelector(".search");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
  searchOne.classList.toggle("slide");
});

function share() {
  // Ganti URL dibawah ini dengan URL yang ingin Anda bagikan
  var url = "https://karimsimarmata.github.io/XXemart/pola-pikir.html";

  // Membuka jendela baru dengan URL yang ingin Anda bagikan
  window.open("https://www.facebook.com/sharer.php?u=" + encodeURIComponent(url));

  // Untuk membagikan ke media sosial lainnya, Anda dapat menggunakan URL berikut:
  // Twitter: https://twitter.com/share?url=URL&text=TEXT
  // WhatsApp: https://wa.me/?text=TEXT%20URL
  // LinkedIn: https://www.linkedin.com/shareArticle?url=URL&title=TITLE&summary=SUMMARY&source=SOURCE
  // dll.
}
function sharewa() {
  // Ganti URL dibawah ini dengan URL yang ingin Anda bagikan
  var url = "https://karimsimarmata.github.io/XXemart/pola-pikir.html";

  // Membuka jendela baru dengan URL yang ingin Anda bagikan
  window.open("https://wa.me/?text=TEXT%20URL" + encodeURIComponent(url));

  // Untuk membagikan ke media sosial lainnya, Anda dapat menggunakan URL berikut:
  // Twitter: https://twitter.com/share?url=URL&text=TEXT
  // WhatsApp: https://wa.me/?text=TEXT%20URL
  // LinkedIn: https://www.linkedin.com/shareArticle?url=URL&title=TITLE&summary=SUMMARY&source=SOURCE
  // dll.
}
function sharetw() {
  // Ganti URL dibawah ini dengan URL yang ingin Anda bagikan
  var url = "https://karimsimarmata.github.io/XXemart/pola-pikir.html";

  // Membuka jendela baru dengan URL yang ingin Anda bagikan
  window.open("https://twitter.com/share?url=URL&text=TEXT" + encodeURIComponent(url));

  // Untuk membagikan ke media sosial lainnya, Anda dapat menggunakan URL berikut:
  // Twitter: https://twitter.com/share?url=URL&text=TEXT
  // WhatsApp: https://wa.me/?text=TEXT%20URL
  // LinkedIn: https://www.linkedin.com/shareArticle?url=URL&title=TITLE&summary=SUMMARY&source=SOURCE
  // dll.
}
function shareig() {
  // Ganti URL dibawah ini dengan URL yang ingin Anda bagikan
  var url = "https://karimsimarmata.github.io/XXemart/pola-pikir.html";

  // Membuka jendela baru dengan URL yang ingin Anda bagikan
  window.open("https://www.linkedin.com/shareArticle?url=URL&title=TITLE&summary=SUMMARY&source=SOURCE" + encodeURIComponent(url));

  // Untuk membagikan ke media sosial lainnya, Anda dapat menggunakan URL berikut:
  // Twitter: https://twitter.com/share?url=URL&text=TEXT
  // WhatsApp: https://wa.me/?text=TEXT%20URL
  // LinkedIn: https://www.linkedin.com/shareArticle?url=URL&title=TITLE&summary=SUMMARY&source=SOURCE
  // dll.
}

const fbBtn = document.getElementById("fb-btn");
const waBtn = document.getElementById("wa-btn");
const twBtn = document.getElementById("tw-btn");
const liBtn = document.getElementById("li-btn");

const url = window.location.href;
const title = document.title;

fbBtn.addEventListener("click", () => {
  const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  window.open(shareUrl, "_blank");
});

waBtn.addEventListener("click", () => {
  const shareUrl = `https://wa.me/?text=${encodeURIComponent(`${title} - ${url}`)}`;
  window.location.href = shareUrl;
});

twBtn.addEventListener("click", () => {
  const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
  window.open(shareUrl, "_blank");
});

liBtn.addEventListener("click", () => {
  const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
  window.open(shareUrl, "_blank");
});
