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
    objItemsCount.setInnerText(`${cart.currentCartProducts.length}`);

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

  renderCards() {
    const objSection = document.querySelector('.main-basket') as HTMLElement;
    const cartItems = cart.currentCartProducts;
    for (let i = 0; i < cartItems.length; i++) {
      const objItemList = new CreateCard(cartItems[i]);
      objItemList.render();
      objItemList.renderItemBasketProps();
      objSection.append(objItemList.container);
    }
  }

  renderSummary() {
    const objSection = new CreateElem('section', 'summary');
    this.main.append(objSection.getElement());

    const objSummaryTitle = new CreateElem('p', 'summary-title');
    objSection.prependElement(objSummaryTitle.getElement());
    objSummaryTitle.setInnerText('Summary');

    const objSummaryProducts = new CreateElem('p', 'summary-products');
    objSection.appendElement(objSummaryProducts.getElement());
    objSummaryProducts.setInnerText(`Products: ${cart.currentCartProducts.length} `);

    const objSummaryTotal = new CreateElem('p', 'summary-total');
    objSection.appendElement(objSummaryTotal.getElement());
    objSummaryTotal.setInnerText(`Total: ${cart.elSumPrice.innerText} €`);

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

  addItems() {
    console.log(cart.currentCartProducts);
    const addItemArrows = document.querySelectorAll('.count-more');
    const sum = document.querySelector('.summary-total') as HTMLElement;
    const itemsCount = document.querySelector('.items-count') as HTMLElement;
    const summaryProducts = document.querySelector('.summary-products') as HTMLElement;
    addItemArrows.forEach((elem) => {
      elem.addEventListener('click', (e) => {
        const item = elem.closest('.basket-item');
        const itemCount = elem.previousSibling as HTMLElement;
        cart.addProduct(Number(item?.id));
        sum.innerText = `Total: ${cart.elSumPrice.innerText} €`;
        itemCount.innerText = `${Number(itemCount.innerText) + 1} `;
        itemsCount.innerText = `${cart.currentCartProducts.length}`;
        summaryProducts.innerText = `Products: ${cart.currentCartProducts.length} `;
        console.log(cart.currentCartProducts);
      });
    });
  }

  deleteItems() {
    const deleteItemArrows = document.querySelectorAll('.count-less');
    const sum = document.querySelector('.summary-total') as HTMLElement;
    const itemsCount = document.querySelector('.items-count') as HTMLElement;
    const summaryProducts = document.querySelector('.summary-products') as HTMLElement;
    deleteItemArrows.forEach((elem) => {
      elem.addEventListener('click', () => {
        const item = elem.closest('.basket-item') as HTMLElement;
        const itemCount = elem.nextSibling as HTMLElement;
        const index = cart.currentCartProducts;
        let isValid = true;
        for (let i = 0; isValid && i < index.length; i++) {
          if (index[i].id === +item?.id && Number(itemCount.innerText) <= 1) {
            const idx = index.map((el) => el.id).indexOf(+item?.id);
            console.log(idx);
            const result = index.splice(idx, 1);
            console.log(index);
            isValid = false;

            itemCount.innerText = `${Number(itemCount.innerText) - 1} `;
            itemsCount.innerText = `${cart.currentCartProducts.length}`;
            summaryProducts.innerText = `Products: ${cart.currentCartProducts.length} `;

            item.remove();
            return index;
          }
        }
      });

      /*console.log(item?.id);
          console.log(cart.currentCartProducts);
          console.log(Array.from(deleteItemArrows).indexOf(elem));*/

      /*console.log(cart.currentCartProducts);
          console.log(Array.from(deleteItemArrows).indexOf(elem));*/

      //console.log(cart.elSumPrice);
      //sum.innerText = `Total: ${cart.elSumPrice.innerText} €`;
      /*if (itemCount.innerText === '0') {
          console.log('0 элементов');
        } else if (Number(itemCount.innerText) < 0) {
          console.log('меньше 0 элементов');
        } else {
          itemCount.innerText = `${Number(itemCount.innerText) - 1} `;
          itemsCount.innerText = `${cart.currentCartProducts.length}`;
          summaryProducts.innerText = `Products: ${cart.currentCartProducts.length} `;
          sum.innerText = `Total: ${cart.elSumPrice.innerText} €`;
        }*/
    });
  }
}

export { MainBasket };
