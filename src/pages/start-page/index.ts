import '../../style.css';
import './style.css';
import { dataProducts, dataProductsList } from '../../general/Data';
import Header from './modules/header';

class StartPage {
  private body: HTMLElement;
  header;

  constructor() {
    this.body = document.body;
    this.header = new Header();
  }

  run() {
    const container = document.createElement('div');
    container.className = 'container';
    container.innerText = 'Container';
    this.body.prepend(container);
    container.prepend(this.header.header);
    console.log(dataProducts);
    console.log(dataProductsList);
  }

  renderPage() {
    this.header.run();
    //console.log(this.header);
  }
}
export default StartPage;
