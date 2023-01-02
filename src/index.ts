import { StartPage } from './pages/start-page/index';
import { Basket } from './pages/basket/index';
// import { Create404Page } from './pages/page-404';
//import Basket from '../src/pages/basket/index';
// import Basket from '../src/pages/basket/index';
//const app = new StartPage();
//app.renderPage();
//import { StartPage } from '../src/pages/start-page/index';
// import { Create404Page } from './pages/page-404';
//import Basket from '../src/pages/basket/index';

//const startPage = new StartPage();
// const page404 = new Create404Page();

//const basket = new Basket();
// const basket = new Basket();
const startPage = new StartPage();
const basket = new Basket();
//startPage.run();
//startPage.run();
//startPage.renderPage();
// page404.render();
//basket.render();
//basket.renderPage();
//export { startPage };
const locationResolver = (location: string) => {
  switch (location) {
    case '#/':
      console.log('Main-page');
      //StartPage.renderPage();
      break;
    case '#/basket':
      console.log('Basket-page');
      basket.render();
      basket.renderPage();
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
// basket.render();
// basket.renderPage();
