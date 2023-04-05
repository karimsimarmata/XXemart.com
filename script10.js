const fbBtn = document.getElementById('fb-btn');
const waBtn = document.getElementById('wa-btn');
const twBtn = document.getElementById('tw-btn');
const liBtn = document.getElementById('li-btn');

const url = window.location.href;
const title = document.title;

fbBtn.addEventListener('click', () => {
  const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  window.open(shareUrl, '_blank');
});

waBtn.addEventListener('click', () => {
  const shareUrl = `https://wa.me/?text=${encodeURIComponent(`${title} - ${url}`)}`;
  window.location.href = shareUrl;
});

twBtn.addEventListener('click', () => {
  const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
  window.open(shareUrl, '_blank');
});

liBtn.addEventListener('click', () => {
  const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
  window.open(shareUrl, '_blank');
});
