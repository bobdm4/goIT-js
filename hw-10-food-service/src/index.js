import menu from './menu.json';
import menuItemTemplates from './templates/menu-item.hbs';
import './styles.css';
import './changerTheme';

buildMenu(menu);
function buildMenu(menus) {
  const ul = document.querySelector('.menu');
  const markup = menus.map(item => menuItemTemplates(item)).join('');
  ul.insertAdjacentHTML('beforeend', markup);
}



