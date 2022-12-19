import Header from './modules/header';

class StartPage {
  private body: HTMLElement;

  constructor() {
    this.body = document.body;
  }

  run() {
    const container = document.createElement('div');
    container.className = 'container';
    container.innerText = 'Container';
    this.body.prepend(container);
  }

  renderPage() {
    const header = new Header();
    header.run();
  }
}

export default StartPage;
