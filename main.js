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
  entry.day = $form.elements[0].value;
  entry.time = $form.elements.time.value;
  entry.description = $form.elements.description.value;
  entries.push(entry);
  $form.reset();
});

var entries = [];
var $entries = localStorage.getItem('javascript storage');
if ($entries !== null) {
  entries = JSON.parse($entries);
}

window.addEventListener('beforeunload', function (event) {
  var entriesJson = JSON.stringify(entries);
  localStorage.setItem('javascript storage', entriesJson);
});
