import menu from '../menu.json';
import cards from '../templates/markup.hbs';

const menuList = document.querySelector('ul.js-menu');
const menuMarkup = createMenuMarkup(menu);

menuList.insertAdjacentHTML('beforeend', menuMarkup);

function createMenuMarkup(menu) {
  return cards(menu);
}
