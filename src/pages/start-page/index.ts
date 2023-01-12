import '../../style.css';
import './style.css';
import { Header } from './modules/header';
import { Footer } from './modules/footer';
import { Main } from './modules/main';
import { cart } from './modules/header';
import { Filters } from './modules/Filters';
import { Sort } from './modules/Sort';
import { currentCards } from './modules/main';
import { DetailsPage } from '../product-info';
import { TypeCards } from './modules/TypeCards';
import { QueryParams } from '../../general/QueryParams';

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
    objFilters.eventButtonReset();

    //! Sort
    const sortOptions = document.querySelector('.sort-options') as HTMLFormElement;
    const sortCards = new Sort();
    sortOptions.addEventListener('change', () => {
      sortCards.sort(currentCards, sortOptions.value.split('-')[1], sortOptions.value.split('-')[0]);
    });

    // ! add event for details btn
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement | null;
      if (target) {
        if (target.classList.contains('btn-details')) {
          const id = target.getAttribute('id') as string;
          const detailsPage = new DetailsPage(id);
          detailsPage.render();
          const objQueryParams = new QueryParams();
          objQueryParams.url.search = '';
          window.history.replaceState({}, '', objQueryParams.url);
        }
      }
    });
    // ! add event for btn List
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement | null;
      if (target) {
        if (target.classList.contains('btn-list')) {
          const objTypeCards = new TypeCards();
          objTypeCards.typeList();
        }
      }
    });

    // ! add event for btn Cards
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement | null;
      if (target) {
        if (target.classList.contains('btn-cards')) {
          const objTypeCards = new TypeCards();
          objTypeCards.typeCards();
        }
      }
    });

    // ! Events STOP!
  }

  resetPage() {
    const container = document.querySelector('.container') as HTMLElement;
    let main = document.querySelector('.main') as HTMLElement;
    if (!main) {
      main = document.querySelector('.main-details') as HTMLElement;
    }
    const basketLink = document.querySelector('.basket-link') as HTMLElement;
    container.replaceChild(this.main.main, main);
    basketLink.classList.remove('non-active');
  }
}

export { StartPage };
