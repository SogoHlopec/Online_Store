import '../../style.css';
import './style.css';
// import { dataProducts, dataProductsList } from '../../general/Data';
import { Header } from './modules/header';
import Footer from './modules/footer';
import { Main } from './modules/main';
import { cart } from './modules/header';
import { objfilters } from './modules/Filters';

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

  run() {
    const container = document.createElement('div');
    container.className = 'container';
    this.body.prepend(container);
    container.prepend(this.header.header);
    container.append(this.main.main);
    container.append(this.footer.footer);
  }

  renderPage() {
    this.header.render();
    this.footer.render();
    this.main.render();

    // ! Events !
    // ! add/delete product in Cart start!
    document.addEventListener('click', (e) => {
      const target = e.target as Element; // TODO check for null
      cart.eventClick(target);
    });
    // ! add product in Cart stop!
    //! add style for not active filters start!
    const wrap = document.querySelector('.filter-cat-wrapper') as HTMLElement | null;
    if (wrap !== null) {
      objfilters.eventChange(wrap);
    }
    //! add style for not active filters stop!
  }
}

export { StartPage };
