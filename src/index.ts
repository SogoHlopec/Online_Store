import { StartPage } from './pages/start-page/index';
import { Basket } from './pages/basket/index';
// import { Create404Page } from './pages/page-404';

const startPage = new StartPage();
const basket = new Basket();
// const page404 = new Create404Page();

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
      break;
    // default:
    //   page404.render();
    //   break;
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

console.log(`
При самопроверке выходит 97 баллов из 300.
`);
alert('Привет! Мы ещё работаем над проектом, пожалуйста, проверь 12 января =_=');

export default locationResolver;
export { startPage };
