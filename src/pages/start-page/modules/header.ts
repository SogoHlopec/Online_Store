class Header {
  header: HTMLElement;

  constructor() {
    this.header = document.createElement('div');
  }

  run() {
    this.header.innerText = 'Header';
  }
}

export default Header;
