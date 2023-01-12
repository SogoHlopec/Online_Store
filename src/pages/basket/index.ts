import './style.css';
import { MainBasket } from './modules/main';
import { cart } from '../start-page/modules/header';

class Basket {
  main;

  constructor() {
    this.main = new MainBasket();
  }

  render() {
    const container = document.querySelector('.container') as HTMLElement;
    let mainPage = document.querySelector('.main') as HTMLElement;
    if (!mainPage) {
      mainPage = document.querySelector('.main-details') as HTMLElement;
    }
    const basketLink = document.querySelector('.basket-link') as HTMLElement;
    container.replaceChild(this.main.main, mainPage);
    basketLink.classList.add('non-active');
  }

  renderPage() {
    if (cart.currentCartProducts.length === 0) {
      const emptyCart = document.createElement('h2');
      emptyCart.innerText = 'CART IS EMPTY';
      emptyCart.className = 'empty-cart';
      const main = document.querySelector('.main');
      if (main) {
        main.innerHTML = '';
        main.prepend(emptyCart);
      }
    } else {
      this.main.renderItems();
      this.main.renderSummary();
      this.main.addItems();
      this.main.deleteItems();
      // this.main.promoCheck();
    }
  }
}

export { Basket };
