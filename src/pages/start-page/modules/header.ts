class Header {
  header: HTMLElement;

  constructor() {
    this.header = document.createElement('header');
  }

  run() {
    this.header.className = 'header';
    const headerContainer = document.createElement('div');
    headerContainer.className = 'header-container';
    this.header.prepend(headerContainer);
    headerContainer.innerHTML = `
      <img src = '../../../assets/images/logo.png' class='logo' alt = 'logo'></div>
      <div class = 'cart-total'>
        <span class = 'total'> Cart total: </span>
        <span class = 'sum'> €0.00 </span>
      </div>
      <div class = 'basket'>
        <span class = 'my-cart'> My cart </span>
        <div class = 'count'> 0 </div>
      </div>
    `;
  }
}

export default Header;
