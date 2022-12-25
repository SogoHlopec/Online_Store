import { CreateElem } from '../../../general/CreateElem';
import { IProduct } from '../../../types/interfaces';

class CreateCard {
  product: IProduct;
  container: HTMLElement;

  constructor(product: IProduct) {
    this.product = product;
    this.container = document.createElement('div');
    this.container.className = 'basket-item';
  }

  render() {
    const objItemImg = new CreateElem('img', 'item-image');
    this.container.append(objItemImg.getElement());
    objItemImg.getElement().setAttribute('src', `#`);

    const objItemDescr = new CreateElem('div', 'item-description');
    this.container.append(objItemDescr.getElement());
    const objItemTitle = new CreateElem('h3', 'item-title');
    objItemDescr.appendElement(objItemTitle.getElement());
    objItemTitle.setInnerText('TITLE');
    const objItemAbout = new CreateElem('p', 'item-about');
    objItemDescr.appendElement(objItemAbout.getElement());

    const objItemInfo1 = new CreateElem('div', 'item-info');
    this.container.append(objItemInfo1.getElement());
    const objItemCategory = new CreateElem('p', 'item-category');
    objItemInfo1.appendElement(objItemCategory.getElement());
    objItemCategory.setInnerText(`Category: #`);
    const objItemBrand = new CreateElem('p', 'item-brand');
    objItemInfo1.appendElement(objItemBrand.getElement());
    objItemBrand.setInnerText(`Brand: #`);
    const objItemInfo2 = new CreateElem('div', 'item-info');
    this.container.append(objItemInfo2.getElement());
    const objItemDiscount = new CreateElem('p', 'item-discount');
    objItemInfo2.appendElement(objItemDiscount.getElement());
    objItemDiscount.setInnerText(`Discount: #`);
    const objItemRating = new CreateElem('p', 'item-rating');
    objItemInfo2.appendElement(objItemRating.getElement());
    objItemRating.setInnerText(`Rating: #`);

    const objItemInfo3 = new CreateElem('div', 'item-info');
    this.container.append(objItemInfo3.getElement());
    objItemInfo3.setInnerText(`Stock: #`);
  }

  renderItemBasketProps() {
    const objItemNum = new CreateElem('span', 'item-number');
    this.container.prepend(objItemNum.getElement());
    objItemNum.setInnerText('1');

    const objItemInfo4 = new CreateElem('div', 'item-info');
    this.container.append(objItemInfo4.getElement());
    const objItemCount = new CreateElem('div', 'item-count');
    objItemInfo4.appendElement(objItemCount.getElement());
    const objCountArrowLeft = new CreateElem('span', 'count-less');
    objItemCount.appendElement(objCountArrowLeft.getElement());
    objCountArrowLeft.setClassSelector('arrow');
    const objCount = new CreateElem('span', 'count');
    objItemCount.appendElement(objCount.getElement());
    objCount.setInnerText('1');
    const objCountArrowRight = new CreateElem('span', 'count-more');
    objItemCount.appendElement(objCountArrowRight.getElement());
    objCountArrowRight.setClassSelector('arrow');

    const objPrice = new CreateElem('div', 'item-price');
    objItemInfo4.appendElement(objPrice.getElement());
    objPrice.setInnerText('€800.00');
  }
}

export { CreateCard };
