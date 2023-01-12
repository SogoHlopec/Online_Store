import { StartPage } from './pages/start-page/index';
import { Basket } from './pages/basket/index';
// import { Create404Page } from './pages/page-404';
// import { Sort } from './pages/start-page/modules/Sort';
// import { currentCards } from './pages/start-page/modules/main';
import { QueryParams } from './general/QueryParams';

const startPage = new StartPage();
const basket = new Basket();
// const page404 = new Create404Page();

const locationResolver = (location: string) => {
  const objQueryParams = new QueryParams();
  switch (location) {
    case '#/basket':
      objQueryParams.url.search = '';
      window.history.replaceState({}, '', objQueryParams.url);
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
    const objQueryParams = new QueryParams();
    if (objQueryParams.params.toString()) {
      objQueryParams.sortParams();
      objQueryParams.filtersParams();
      objQueryParams.typeCardsParams();
    }
  }
});

console.log(`
При нашей самопроверке вышло 139 баллов из 300.
`);

export default locationResolver;
export { startPage };
