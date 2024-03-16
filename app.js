function rangeSlide(value) {
  document.getElementById('rangeValue').innerHTML = value + "%";
}


document.addEventListener('DOMContentLoaded', function() {
  const checkbox = document.getElementById('check');
  const langSwitcher = document.querySelector('.lang-switcher');

  checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
      langSwitcher.style.display = 'flex';
    } else {
      langSwitcher.style.display = 'none';
    }
  });
});