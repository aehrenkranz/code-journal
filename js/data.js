/* exported data */

let data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1,
};

function addJSON(event) {
  const JSONdata = JSON.stringify(data);
  localStorage.setItem('form-submission', JSONdata);
}
window.addEventListener('beforeunload', addJSON);
