import { StartPage } from './pages/start-page/index';
import { Basket } from './pages/basket/index';

const startPage = new StartPage();
const basket = new Basket();

const locationResolver = (location: string) => {
  switch (location) {
    case '#/':
      startPage.resetPage();
      break;
    case '#/basket':
      if (basket.main.main.querySelector('.main-basket')) {
        basket.render();
        basket.main.main.innerHTML = '';
        basket.renderPage();
      } else {
        basket.render();
        basket.renderPage();
      }
      break;
    case '#/details':
      console.log('Details-page');
      break;
  }
};

window.addEventListener('load', () => {
  const location = window.location.hash;
  if (location) {
    locationResolver(location);
  } else if (location === '') {
    startPage.renderPage();
  }
});

export default locationResolver;
export { startPage };
