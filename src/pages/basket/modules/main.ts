//import { dataProductsList } from '../../../general/Data';
import { CreateElem } from '../../../general/CreateElem';
//import { IProduct } from '../../../types/interfaces';
import { CreateCard } from './createCard';
import { cart } from '../../../pages/start-page/modules/header';

class MainBasket {
  main: HTMLElement;

  constructor() {
    this.main = document.createElement('main');
    this.main.className = 'main';
  }

  renderItems() {
    const objSection = new CreateElem('section', 'main-basket');
    this.main.append(objSection.getElement());

    const objDivNavigation = new CreateElem('div', 'basket-navigation');
    objSection.prependElement(objDivNavigation.getElement());

    const objProductsInCart = new CreateElem('div', 'nav-element');
    objDivNavigation.prependElement(objProductsInCart.getElement());
    objProductsInCart.setInnerText('Products in Cart');

    const objItemsTotal = new CreateElem('div', 'nav-element');
    objDivNavigation.appendElement(objItemsTotal.getElement());
    objItemsTotal.setInnerText('Items:  ');
    const objItemsCount = new CreateElem('span', 'items-count');
    objItemsTotal.appendElement(objItemsCount.getElement());
    objItemsCount.setInnerText('5');

    const objPages = new CreateElem('div', 'nav-element');
    objDivNavigation.appendElement(objPages.getElement());
    objPages.setInnerText('Page: ');
    objPages.setClassSelector('pages-count');
    const objArrowLeft = new CreateElem('span', 'arrow-left');
    objPages.appendElement(objArrowLeft.getElement());
    objArrowLeft.setClassSelector('arrow');
    const objPagesCount = new CreateElem('span', 'pages-count');
    objPages.appendElement(objPagesCount.getElement());
    objPagesCount.setInnerText('1');
    const objArrowRight = new CreateElem('span', 'arrow-right');
    objPages.appendElement(objArrowRight.getElement());
    objArrowRight.setClassSelector('arrow');
    this.renderCards();
  }
  //Cоздаем див и рендерим туда такое количество контейнеров, сколько Item у нас в корзине
  renderCards() {
    const objSection = document.querySelector('.main-basket') as HTMLElement;
    //const cartItems = cart.currentCartProducts;
    console.log(cart);
    /*for (let i = 0; i < cartItems.length; i++) {
      const objItemList = new CreateCard(cartItems[i]);
      objItemList.render();
      objItemList.renderItemBasketProps();
      console.log(objItemList);
      console.log(cartItems);
      objSection.append(objItemList.container);
    }*/
    /*objSection.innerHTML = '';
    currentCards.splice(0, currentCards.length);
    for (let i = 0; i < data.length; i++) {
      const objCard = new CreateCard(data[i]);
      currentCards.push(objCard);
      objCard.render();
      CardsWrapper.append(objCard.cardContainer);*/
  }

  renderSummary() {
    const objSection = new CreateElem('section', 'summary');
    this.main.append(objSection.getElement());

    const objSummaryTitle = new CreateElem('p', 'summary-title');
    objSection.prependElement(objSummaryTitle.getElement());
    objSummaryTitle.setInnerText('Summary');

    const objSummaryProducts = new CreateElem('p', 'summary-products');
    objSection.appendElement(objSummaryProducts.getElement());
    objSummaryProducts.setInnerText(`Products: `);

    const objSummaryTotal = new CreateElem('p', 'summary-total');
    objSection.appendElement(objSummaryTotal.getElement());
    objSummaryTotal.setInnerText(`Total: €`);

    const objPromo = new CreateElem('input', 'promocode');
    objPromo.getElement().setAttribute('type', 'search');
    objPromo.getElement().setAttribute('placeholder', 'Enter promo code');
    objSection.appendElement(objPromo.getElement());

    const objPromoHelp = new CreateElem('p', 'promo-helper');
    objSection.appendElement(objPromoHelp.getElement());
    objPromoHelp.setInnerText(`Promo for test ‘rs’, ‘epm’`);

    const objBuyButton = new CreateElem('button', 'buy-button');
    objSection.appendElement(objBuyButton.getElement());
    objBuyButton.setInnerText('BUY NOW');
  }
}

export { MainBasket };
