function headerComponent() {
  const Header = document.createElement('header');
  Header.classList.add('header');

  const ToGarageButton = document.createElement('button');
  ToGarageButton.classList.add('menu-button');
  ToGarageButton.innerHTML = 'To Garage';

  const ToWinnersButton = document.createElement('button');
  ToWinnersButton.classList.add('menu-button');
  ToWinnersButton.innerHTML = 'To Winners';

  Header.appendChild(ToGarageButton);
  Header.appendChild(ToWinnersButton);

  return Header;
}

export default headerComponent;