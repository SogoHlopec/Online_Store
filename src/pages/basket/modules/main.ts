import { dataProducts, dataProductsList } from '../../../general/Data';
import { CreateElem } from '../../../general/CreateElem';
import { CreateButton } from '../../../general/CreateButton';
import { CreateCard } from '../../start-page/modules/createCard';
import { IProduct } from '../../../types/interfaces';


class MainBasket {
  main: HTMLElement;

  constructor() {
    this.main = document.createElement('main');
  }

  render() {
    this.main.className = 'main';

    const objSection = new CreateElem('section', 'basket');
    this.main.append(objSection.getElement());

    const objDivNavigation = new CreateElem('div', 'basket-navigation');
    objSection.prependElement(objDivNavigation.getElement());

    const objProductsInCart = new CreateElem('div', 'nav-element');
    objDivNavigation.prependElement(objProductsInCart.getElement());
    objProductsInCart.setInnerText('Products in Cart');

    const objItemsTotal = new CreateElem('div', 'nav-element');
    objDivNavigation.appendElement(objItemsTotal.getElement());
    objProductsInCart.setInnerText('Items: ');
    const objItemsCount= new CreateElem('div', 'items-count');
    objProductsInCart.appendElement(objItemsCount.getElement());
    objItemsCount.setInnerText('5');

    const objPages = new CreateElem('div', 'nav-element');
    objDivNavigation.appendElement(objPages.getElement());
    objPages.setInnerText('Page: ');
    const objPagesCount= new CreateElem('div', 'pages-count');
    objPages.appendElement(objPagesCount.getElement());
    const objArrowLeft= new CreateElem('span', 'arrow-left');
    objPagesCount.appendElement(objArrowLeft.getElement());
    objArrowLeft.setClassSelector('arrow');
    const objArrowRight= new CreateElem('span', 'arrow-right');
    objPagesCount.appendElement(objArrowLeft.getElement());
    objArrowRight.setClassSelector('arrow');

    //Cоздаем див и рендерим туда такое количество контейнеров, сколько Item у нас в корзине
    const objItemList = new CreateElem('div', 'item-list');
    objSection.prependElement(objItemList.getElement());

    const objItem = new CreateElem('div', 'basket-item');
    objItemList.appendElement(objItem.getElement());

    const objItemNum = new CreateElem('span', 'item-number');
    objItem.appendElement(objItemNum.getElement());

    const objItemImg = new CreateElem('img', 'item-image');
    objItem.appendElement(objItemImg.getElement());
    objItemImg.getElement().setAttribute('src', `#`);

    const objItemDescr = new CreateElem('div', 'item-description');
    objItem.appendElement(objItemDescr.getElement());
    const objItemTitle = new CreateElem('h3', 'item-title');
    objItemDescr.appendElement(objItemTitle.getElement());
    const objItemAbout = new CreateElem('p', 'item-about');
    objItemDescr.appendElement(objItemAbout.getElement());

    const objItemInfo1 = new CreateElem('div', 'item-info');
    objItem.appendElement(objItemInfo1.getElement());
    const objItemCategory = new CreateElem('p', 'item-category');
    objItemInfo1.appendElement(objItemCategory.getElement());
    objItemCategory.setInnerText(`Category: #`)
    const objItemBrand = new CreateElem('p', 'item-brand');
    objItemInfo1.appendElement(objItemBrand.getElement());
    objItemCategory.setInnerText(`Brand: #`)
    
    const objItemInfo2 = new CreateElem('div', 'item-info');
    objItem.appendElement(objItemInfo2.getElement());
    const objItemDiscount = new CreateElem('p', 'item-discount');
    objItemInfo2.appendElement(objItemDiscount.getElement());
    objItemCategory.setInnerText(`Discount: #`)
    const objItemRating = new CreateElem('p', 'item-rating');
    objItemInfo2.appendElement(objItemRating.getElement());
    objItemCategory.setInnerText(`Rating: #`)

    const objItemInfo3 = new CreateElem('div', 'item-info');
    objItem.appendElement(objItemInfo3.getElement());
    objItemInfo3.setInnerText(`Stock: #`);
  
    const objItemInfo4 = new CreateElem('div', 'item-info');
    objItem.appendElement(objItemInfo4.getElement());
    const objItemCount = new CreateElem('div', 'item-count');
    const objCountArrowLeft= new CreateElem('span', 'count-less');
    objItemCount.appendElement(objCountArrowLeft.getElement());
    objCountArrowLeft.setClassSelector('arrow');
    const objCountArrowRight= new CreateElem('span', 'count-more');
    objItemCount.appendElement(objCountArrowRight.getElement());
    objCountArrowRight.setClassSelector('arrow');
    const objSortOptions = new CreateElem('select', 'sort-options');
    objSortBar.prependElement(objSortOptions.getElement());
    objSortOptions.setClassSelector('button');

    const objSortTitle = new CreateElem('option', 'sort-title');
    objSortTitle.setInnerText('Sort options:');
    objSortTitle.getElement().setAttribute('disabled', 'disabled');
    objSortTitle.getElement().setAttribute('selected', 'selected');
    objSortTitle.getElement().setAttribute('value', 'sort-title');
    objSortOptions.prependElement(objSortTitle.getElement());

  }
}

export default MainBasket;