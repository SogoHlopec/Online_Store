import { StartPage } from './pages/start-page/index';
import { Basket } from './pages/basket/index';

//const app = new StartPage();
//app.renderPage();
//import { StartPage } from '../src/pages/start-page/index';
// import { Create404Page } from './pages/page-404';
//import Basket from '../src/pages/basket/index';

const startPage = new StartPage();
// const page404 = new Create404Page();
const basket = new Basket();

//startPage.run();
startPage.renderPage();
// page404.render();
//basket.render();
//basket.renderPage();
//export { startPage };
const locationResolver = (location: string) => {
  console.log(location);
  switch (location) {
    case '#/basket':
      basket.render();
      basket.renderPage();
      break;
    case '#/main':
      startPage.renderPage();
      break;
  }
};

window.addEventListener('load', () => {
  const location = window.location.hash;
  if (location) {
    locationResolver(location);
  }
});

export default locationResolver;
