import './style.css';
/*import { dataProducts, dataProductsList } from '../../general/Data';
import { CreateElem } from '../../general/CreateElem';
import { CreateButton } from '../../general/CreateButton';
import { CreateCard } from '../start-page/modules/createCard';
import { IProduct } from '../../types/interfaces';*/
import { MainBasket } from './modules/main';
//import { StartPage } from '../start-page';
//import locationResolver from '../..';

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
    console.log('Я рендерю страницу корзины заново');
    this.main.renderItems();
    this.main.renderSummary();
    this.main.addItems();
    this.main.deleteItems();
    this.main.promoCheck();
  }
}

export { Basket };
