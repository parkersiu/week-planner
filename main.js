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

var $entry = document.querySelector('.entry-button');
console.log($entry);

var $container = document.querySelector('.container-two');
console.log($container);
$entry.addEventListener('click', function (event) {
  $container.className = 'container-two modal visible';
});

var $form = document.querySelector('form');
console.log($form);

$form.addEventListener('submit', function (event) {

  var entry = {};
  entry.day = $form.elements['day-of-week'].value;
  entry.time = $form.elements.time.value;
  entry.description = $form.elements.description.value;
  entries.push(entry);
  $form.reset();

});

var $dayButton = document.querySelectorAll('.day-button');
console.log($dayButton);

var $day = document.querySelector('.day');
console.log($day);

var $weekRow = document.getElementById('week-row');
var $tableData = document.querySelectorAll('td');
var $tableRow = document.querySelectorAll('tr');

$weekRow.addEventListener('click', function (event) {
  $day.textContent = event.target.textContent;

  renderTable(entries);
}
);

function renderTable(data) {
  var tr = document.createElement('tr');
  var td1 = document.createElement('td');
  td1.textContent = data.time;
  tr.appendChild(td1);
  var td2 = document.createElement('td');
  td2.textContent = data.description;
  tr.appendChild(td2);

  return tr;
}

var $tbody = document.querySelector('tbody');

for (var i = 0; i < entries.length; i++) {
  var tds = renderTable(entries[i]);
  $tbody.appendChild(tds);
}

// Check if event.target === $day.textContent
// if true, set td.textContent to entry.time
// set second td to entry.description
