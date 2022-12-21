import '../../style.css';
import './style.css';
import { dataProducts, dataProductsList } from '../../general/Data';
import Header from './modules/header';
import Footer from './modules/footer';
import { Main } from './modules/main';

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
    console.log(dataProducts);
    console.log(dataProductsList);
  }

  renderPage() {
    this.header.render();
    this.footer.render();
    this.main.render();
  }
}

export default StartPage;
