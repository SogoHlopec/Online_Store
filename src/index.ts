import { StartPage } from '../src/pages/start-page/index';
// import { Create404Page } from './pages/page-404';
import { cart } from './pages/start-page/modules/header';

const startPage = new StartPage();
// const page404 = new Create404Page();

startPage.run();
startPage.renderPage();
// page404.render();

// ! Events !
// ! add product in Cart start!
document.addEventListener('click', (e) => {
  const target = e.target as Element;
  if (target.classList.contains('btn-add')) {
    if (target.classList.contains('btn-add-active')) {
      cart.deleteProduct(Number(target.getAttribute('id')));
    } else {
      cart.addProduct(Number(target.getAttribute('id')));
      console.log(Number(target.getAttribute('id')));
    }
    target.classList.toggle('btn-add-active');
    if (target.textContent === 'Add to Cart') {
      target.textContent = 'Drop from Cart';
    } else {
      target.textContent = 'Add to Cart';
    }
  }
  console.log(cart);
});
// ! add product in Cart stop!
