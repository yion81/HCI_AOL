function increment() {
    var input = document.getElementById('number');
    var currentValue = parseInt(input.value, 10);
    input.value = currentValue + 1;
}
  
function decrement() {
    var input = document.getElementById('number');
    var currentValue = parseInt(input.value, 10);
    if (currentValue > 1) {
      input.value = currentValue - 1;
    }
}

document.getElementById('number').addEventListener('change', function() {
  var input = document.getElementById('number');
  var currentValue = parseInt(input.value, 10);
  if (currentValue < 1) {
    input.value = 1;
  }
});

function selectOption(selectedDiv) {
    // Remove 'selected' class from all options
    document.querySelectorAll('.option').forEach(opt => {
      opt.classList.remove('selected');
    });
  
    // Add 'selected' class to clicked option
    selectedDiv.classList.add('selected');
}