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
    console.log(this.header);
    container.prepend(this.header.header);
  }

  renderPage() {
    this.header.run();
    //console.log(this.header);
  }
}

export default StartPage;
