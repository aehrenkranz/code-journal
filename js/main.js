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
  const unorderedList = document.querySelector('ul');
  unorderedList.appendChild(renderEntry(formEntries));
  viewSwap('entries');
  if (localStorage.getItem('form-submission') === null) {
    toggleNoEntries();
  }
}

form.addEventListener('submit', submitForm);

function renderEntry(entry) {
  const listElement = document.createElement('li');
  const divColumnHalf1 = document.createElement('div');
  const divColumnHalf2 = document.createElement('div');
  const img = document.createElement('img');
  const entryTitle = document.createElement('h3');
  const entryNotes = document.createElement('p');
  const pencilIcon = document.createElement('i');

  divColumnHalf1.setAttribute('class', 'column-half');
  divColumnHalf2.setAttribute('class', 'column-half');
  listElement.setAttribute('data-entry-id', entry.entryId);
  pencilIcon.className = 'fa-solid fa-pencil';
  img.setAttribute('src', entry.url);
  entryTitle.textContent = entry.title;
  entryTitle.appendChild(pencilIcon);
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
  viewSwap(data.view);
  if (localStorage.getItem('form-submission') === null) {
    toggleNoEntries();
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
      pageViews[i].className = 'view';
    } else {
      pageViews[i].className = 'view hidden';
    }
  }
  data.view = view;
}

const entriesButton = document.querySelector('a');
const entryFormButton = document.getElementById('entry-form-button');

entriesButton.addEventListener('click', function entriesView(event) {
  viewSwap('entries');
});

entryFormButton.addEventListener('click', function entryFormView(event) {
  viewSwap('entry-form');
});
