import '../../style.css';
import './style.css';
//import { dataProducts, dataProductsList } from '../../general/Data';
import { Header } from './modules/header';
import { Footer } from './modules/footer';
import { Main } from './modules/main';
import { cart } from './modules/header';
import { Filters } from './modules/Filters';
import { Basket } from '../basket/index';
//import { Create404Page } from '../page-404/index';

class StartPage {
  private body: HTMLElement;
  header;
  footer;
  main;

  constructor() {
    this.body = document.body;
    this.header = new Header();
    this.footer = new Footer();
    this.main = new Main();
  }

  renderPage() {
    const container = document.createElement('div');
    container.className = 'container';
    container.setAttribute('id', 'root');
    this.body.prepend(container);
    container.append(this.main.main);
    this.main.render();
    container.prepend(this.header.header);
    container.append(this.footer.footer);
    this.header.render();
    this.footer.render();

    // ! Events START!
    // ! add/delete product in Cart!
    document.addEventListener('click', (e) => {
      const target = e.target as Element | null;
      cart.eventClick(target);
    });

    // ! add style for filters events!
    const objFilters = new Filters();
    objFilters.eventChange();
    // ! Events STOP!
  }

  resetPage() {
    const container = document.querySelector('.container') as HTMLElement;
    const main = document.querySelector('.main') as HTMLElement;
    const basketLink = document.querySelector('.basket-link') as HTMLElement;
    container.replaceChild(this.main.main, main);
    basketLink.classList.remove('non-active');
  }
}

export { StartPage };
