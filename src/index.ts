import { StartPage } from '../src/pages/start-page/index';
// import { Create404Page } from './pages/page-404';
import { cart } from './pages/start-page/modules/header';

const startPage = new StartPage();
// const page404 = new Create404Page();

startPage.run();
startPage.renderPage();
// page404.render();

// ! Events !
// ! add/delete product in Cart start!
document.addEventListener('click', (e) => {
  const target = e.target as Element;
  cart.eventClick(target);
  console.log(cart);
});
// ! add product in Cart stop!
