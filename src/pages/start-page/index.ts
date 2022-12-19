import '../../style.css';
import './style.css';
import Data from './modules/main';
import Header from './modules/header';

class StartPage {
  private body: HTMLElement;
  header;
  main;

  constructor() {
    this.body = document.body;
    this.header = new Header();
    this.main = new Data();
  }

  run() {
    const container = document.createElement('div');
    container.className = 'container';
    container.innerText = 'Container';
    this.body.prepend(container);
    console.log(this.header);
    container.prepend(this.header.header);
  }

  renderPage() {
    this.header.run();
    this.main.load();

    //console.log(this.header);
  }
}

export default StartPage;
