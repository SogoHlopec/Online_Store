import './style.css';
import { MainBasket } from './modules/main';

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
    this.main.renderItems();
    this.main.renderSummary();
    this.main.addItems();
    this.main.deleteItems();
    // this.main.promoCheck();
  }
}

export { Basket };
