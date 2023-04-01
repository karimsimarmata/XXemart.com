const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");
const searchOne = document.querySelector(".search");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
  searchOne.classList.toggle("slide");
});

function share() {
  // Ganti URL dibawah ini dengan URL yang ingin Anda bagikan
  var url = "https://karimsimarmata.github.io/XXemart/story.html";

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
  var url = "https://karimsimarmata.github.io/XXemart/story.html";

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
  var url = "https://karimsimarmata.github.io/XXemart/story.html";

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
  var url = "https://karimsimarmata.github.io/XXemart/story.html";

  // Membuka jendela baru dengan URL yang ingin Anda bagikan
  window.open("https://www.linkedin.com/shareArticle?url=URL&title=TITLE&summary=SUMMARY&source=SOURCE" + encodeURIComponent(url));

  // Untuk membagikan ke media sosial lainnya, Anda dapat menggunakan URL berikut:
  // Twitter: https://twitter.com/share?url=URL&text=TEXT
  // WhatsApp: https://wa.me/?text=TEXT%20URL
  // LinkedIn: https://www.linkedin.com/shareArticle?url=URL&title=TITLE&summary=SUMMARY&source=SOURCE
  // dll.
}
