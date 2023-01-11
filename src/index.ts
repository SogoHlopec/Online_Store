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
  switch (location) {
    // case '#/':
    //   startPage.resetPage();
    //   break;
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

    // console.log(window.location.href);
    // const currentUrl = window.location.href;
    // const url = new URL(currentUrl);
    // const params = url.searchParams;
    // params.set('filter', 'tops');
    // console.log(params.toString());
    // console.log(url.href);
    // window.history.replaceState({}, '', url);
    // if (params.toString().split('=')[1] === 'tops') {
    //   const checkbox = document.getElementById('tops') as HTMLInputElement;
    //   checkbox.click();
    // }
    // console.log(url);
    // console.log(url.search.toString());
    const objQueryParams = new QueryParams();
    if (objQueryParams.params.toString()) {
      objQueryParams.sortParams();
    }
  }
});

console.log(`
При самопроверке выходит 97 баллов из 300.
`);
alert('Привет! Мы ещё работаем над проектом, пожалуйста, проверь 12 января =_=');

export default locationResolver;
export { startPage };
