/* eslint-disable no-console */
const urlInput = document.querySelector('#photo-url');
const imgElement = document.querySelector('img');
function addImage(event) {
  imgElement.src = urlInput.value;
}

urlInput.addEventListener('input', addImage);

const formElements = document.getElementById('journal');
const form = document.querySelector('form');

function submitForm(event) {
  event.preventDefault();
  const formEntries = {
    title: formElements.elements.title.value,
    url: formElements.elements['photo-url'].value,
    notes: formElements.elements.notes.value,
    entryId: data.nextEntryId,
  };
  data.nextEntryId++;
  data.entries.unshift(formEntries);
  imgElement.src = '../images/placeholder-image-square.jpg';
  form.reset();
}

form.addEventListener('submit', submitForm);
