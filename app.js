const textarea = document.querySelector('textarea');
const label = document.querySelector('#label');
document.addEventListener('click', (e) => {
  if (e.target.id === 'label') {
    textarea.classList.add('active');
    label.classList.add('active');
  } else if (!textarea.contains(e.target)) {
    textarea.classList.remove('active');
    label.classList.remove('active');
  }
});