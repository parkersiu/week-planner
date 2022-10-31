var entries = [];
var $entries = localStorage.getItem('javascript storage');
if ($entries !== null) {
  entries = JSON.parse($entries);
}

window.addEventListener('beforeunload', function (event) {
  var entriesJson = JSON.stringify(entries);
  localStorage.setItem('javascript storage', entriesJson);
});

console.log(entries);
renderTable(entries[0]);
