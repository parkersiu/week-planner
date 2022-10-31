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
  var three = document.createElement('tr');
  var four = document.createElement('td');
  four.textContent = data.time;
  three.appendChild(four);
  var six = document.createElement('td');
  six.textContent = data.description;
  three.appendChild(six);

}

// Check if event.target === $day.textContent
// if true, set td.textContent to entry.time
// set second td to entry.description
