document.querySelectorAll('.form_group').forEach(group => {
  const input = group.querySelector('input');
  const span = group.querySelector('span');

  // Show the input and hide the span when the span is clicked
  span.addEventListener('click', () => {
    input.classList.add('show');
    span.style.display = 'none';
    input.focus(); // Focus on input automatically
  });

  // Hide the input and show the span when clicking outside the input
  document.addEventListener('click', (e) => {
    if (!group.contains(e.target) && !input.value) {
      input.classList.remove('show');
      span.style.display = 'block';
    }
  });
});