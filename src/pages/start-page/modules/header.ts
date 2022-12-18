class Header {
  private header: HTMLElement;

  constructor() {
    this.header = document.createElement('header');
  }

  run() {
    this.header.innerText = 'Header';
  }
}

export default Header;
