let elements = document.getElementsByClassName('animation-focus');

window.addEventListener('focus', () => {
  for (let i = 0; i < elements.length; i++) {
    let element = elements[i];
    element.classList.remove('blurred');
    element.classList.add('focused');
  }
});

window.addEventListener('blur', () => {
  for (let i = 0; i < elements.length; i++) {
    let element = elements[i];
    element.classList.remove('focused');
    element.classList.add('blurred');
  }
});