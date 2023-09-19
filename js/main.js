const urlInput = document.querySelector('#photo-url');

function addImage(event) {
  const imgSrc = document.querySelector('img');
  imgSrc.src = urlInput.value;
}

urlInput.addEventListener('input', addImage);
