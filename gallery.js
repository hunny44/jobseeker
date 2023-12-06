const modal = document.getElementById('modal');

function openModal(imgSrc) {
  const modalImg = document.getElementById('modalImg');
  modalImg.src = imgSrc;
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

// Images (replace these with your image URLs)
const images = [
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/201',
  'https://via.placeholder.com/202',
  'https://via.placeholder.com/203',
  // Add more image URLs here
];

const gallery = document.querySelector('.gallery');
images.forEach(imgSrc => {
  const img = document.createElement('img');
  img.src = imgSrc;
  img.addEventListener('click', () => openModal(imgSrc));
  gallery.appendChild(img);
});
