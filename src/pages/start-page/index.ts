import '../../style.css';
import './style.css';
import { dataProducts, dataProductsList } from '../../general/Data';
import Header from './modules/header';
import Footer from './modules/footer';

class StartPage {
  private body: HTMLElement;
  header;
  footer;

  constructor() {
    this.body = document.body;
    this.header = new Header();
    this.footer = new Footer();
  }

  run() {
    const container = document.createElement('div');
    container.className = 'container';
    container.innerText = 'Container';
    this.body.prepend(container);
    container.prepend(this.header.header);
    container.append(this.footer.footer);
    console.log(dataProducts);
    console.log(dataProductsList);
  }

  renderPage() {
    this.header.run();
    this.footer.run();
    //console.log(this.header);
  }
}
export default StartPage;
