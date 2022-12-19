import '../../style.css';
import './style.css';
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
    console.log(this.header);
    container.prepend(this.header.header);
    container.append(this.footer.footer);
  }

  renderPage() {
    this.header.run();
    this.footer.run();
  }
}

export default StartPage;
