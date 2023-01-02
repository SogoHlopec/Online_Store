import { Cart } from './Cart';
import locationResolver from '../../..';
import { CreateElem } from '../../../general/CreateElem';

const cart = new Cart();
class Header {
  header: HTMLElement;

  constructor() {
    this.header = document.createElement('header');
  }

  render() {
    this.header.className = 'header';
    const headerContainer = document.createElement('div');
    headerContainer.className = 'header-container';
    const logoLink = new CreateElem('a', 'logo-link').getElement();
    headerContainer.prepend(logoLink);
    logoLink.setAttribute('href', '#/');
    const logo = document.createElement('div');
    logo.className = 'logo';
    logoLink.prepend(logo);
    const cartTotal = document.createElement('div');
    cartTotal.className = 'cart-total';
    const total = document.createElement('span');
    total.className = 'total';
    headerContainer.append(cartTotal);
    const sum = document.createElement('span');
    sum.className = 'sum';
    const basketLink = document.createElement('a');
    basketLink.className = 'basket-link';
    basketLink.setAttribute('href', '#/basket');
    basketLink.setAttribute('data-href', '#/basket');
    headerContainer.append(basketLink);
    const basket = document.createElement('div');
    basket.className = 'basket button';
    basket.setAttribute('id', 'basket');
    basketLink.append(basket);
    const myCart = document.createElement('span');
    myCart.className = 'my-cart';
    this.header.prepend(headerContainer);
    cartTotal.prepend(total);
    total.innerText = 'Cart total: ';
    cartTotal.append(cart.getElSumPrice());
    basket.prepend(myCart);
    myCart.innerText = 'My cart';
    basket.append(cart.getElProdCounter());
    cart.renderCounterAndPrice();

    basketLink.addEventListener('click', (e) => {
      locationResolver('#/basket');
    });

    logoLink.addEventListener('click', (e) => {
      locationResolver('#/');
    });
  }
}

export { Header, cart };
