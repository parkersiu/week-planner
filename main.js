var $entry = document.querySelector('.entry-button');
console.log($entry);

var $container = document.querySelector('.container-two');
console.log($container);
$entry.addEventListener('click', function (event) {
  $container.className = 'container-two modal visible';
});

var $submit = document.querySelector('submit-button');
console.log($submit);
