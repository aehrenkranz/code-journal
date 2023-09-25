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

function renderEntry(entry) {
  const listElement = document.createElement('li');
  const divColumnHalf1 = document.createElement('div');
  const divColumnHalf2 = document.createElement('div');
  const img = document.createElement('img');
  const entryTitle = document.createElement('h3');
  const entryNotes = document.createElement('p');

  divColumnHalf1.setAttribute('class', 'column-half');
  divColumnHalf2.setAttribute('class', 'column-half');
  img.setAttribute('src', entry.url);
  entryTitle.textContent = entry.title;
  entryNotes.textContent = entry.notes;

  listElement.appendChild(divColumnHalf1);
  listElement.appendChild(divColumnHalf2);
  divColumnHalf1.appendChild(img);
  divColumnHalf2.appendChild(entryTitle);
  divColumnHalf2.appendChild(entryNotes);
  return listElement;
}

function addEntries(event) {
  for (let i = 0; i < data.entries.length; i++) {
    const newEntry = renderEntry(data.entries[i]);
    const unorderedList = document.querySelector('ul');
    unorderedList.appendChild(newEntry);
  }
}

document.addEventListener('DOMContentLoaded', addEntries);

// eslint-disable-next-line no-unused-vars
function toggleNoEntries() {
  const noEntries = document.querySelector('#no-entries');
  noEntries.classList.toggle('hidden');
}

function viewSwap(view) {
  const pageViews = document.querySelectorAll('.view');
  for (let i = 0; i < pageViews.length; i++) {
    if (view === pageViews[i].getAttribute('data-view')) {
      pageViews[i].removeAttribute('class');
    } else {
      pageViews[i].className = 'hidden';
    }
  }
  data.view = view;
}
viewSwap('entry-form');
