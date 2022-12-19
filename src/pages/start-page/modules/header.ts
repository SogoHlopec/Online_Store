class Header {
  header: HTMLElement;

  constructor() {
    this.header = document.createElement('header');
  }

  run() {
    this.header.className = 'header';
    const headerContainer = document.createElement('div');
    headerContainer.className = 'header-container';
    const logo = document.createElement('div');
    logo.className = 'logo';
    const cartTotal = document.createElement('div');
    cartTotal.className = 'cart-total';
    const total = document.createElement('span');
    total.className = 'total';
    const sum = document.createElement('span');
    sum.className = 'sum';
    const basket = document.createElement('div');
    basket.className = 'basket';
    const myCart = document.createElement('span');
    myCart.className = 'my-cart';
    const count = document.createElement('div');
    count.className = 'count';
    this.header.prepend(headerContainer);
    headerContainer.prepend(logo);
    headerContainer.append(cartTotal);
    headerContainer.append(basket);
    cartTotal.prepend(total);
    total.innerText = 'Cart total: ';
    cartTotal.append(sum);
    sum.innerText = '€0.00';
    basket.prepend(myCart);
    myCart.innerText = 'My cart';
    basket.append(count);
    count.innerText = '0';
  }
}

export default Header;
