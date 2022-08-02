function component() {
  const element = document.createElement('div');

  element.innerHTML = 'Hello webpack engine';

  return element;
}

document.body.appendChild(component());