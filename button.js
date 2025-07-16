document.addEventListener('DOMContentLoaded', function() {
  const btn = document.querySelector('.invest-btn');
  btn.addEventListener('click', function() {
    btn.classList.remove('spin'); // reset if needed
    void btn.offsetWidth; // force reflow for repeat clicks
    btn.classList.add('spin');
  });
});