import { CreateElem } from '../../../general/CreateElem';
import { IProduct } from '../../../types/interfaces';
import { CreateButton } from '../../../general/CreateButton';

class CreateDetailsPage {
  main: HTMLElement;
  product: IProduct;

  constructor(product: IProduct) {
    this.main = new CreateElem('main', 'main-details').getElement();
    this.product = product;
  }

  createPage() {
    const objDivNav = new CreateElem('div', 'details-nav');
    this.main.append(objDivNav.getElement());

    const objDetailsDirectory = new CreateElem('h2', 'details-directory');
    objDetailsDirectory.setInnerText(
      `STORE >> ${this.product.category.toUpperCase()} >> ${this.product.brand.toUpperCase()} >> ${this.product.title.toUpperCase()}`
    );
    objDivNav.appendElement(objDetailsDirectory.getElement());

    const objCardInfo = new CreateElem('div', 'details-card');
    this.main.append(objCardInfo.getElement());

    const objSlides = new CreateElem('div', 'details-slides');
    objCardInfo.prependElement(objSlides.getElement());

    for (let i = 0; i < this.product.images.length; i++) {
      const objImg = new CreateElem('img', 'details-slide');
      objImg.getElement().setAttribute('src', `${this.product.images[i]}`);
      objSlides.appendElement(objImg.getElement());
    }

    const objImageAndPrice = new CreateElem('div', 'details-image-and-price');
    objCardInfo.appendElement(objImageAndPrice.getElement());
    const objImageThumbnail = new CreateElem('img', 'details-thumbnail');
    objImageThumbnail.getElement().setAttribute('src', `${this.product.thumbnail}`);
    objImageAndPrice.appendElement(objImageThumbnail.getElement());
    const objPrice = new CreateElem('h3', 'details-price');
    objPrice.setInnerText(`${this.product.price}`);
    objImageAndPrice.appendElement(objPrice.getElement());

    const objInfo = new CreateElem('div', 'details-info');
    objCardInfo.appendElement(objInfo.getElement());

    const classes = ['description', 'discount', 'rating', 'stock', 'brand', 'category'];

    for (let i = 0; i < classes.length; i++) {
      const objDesc = new CreateElem('div', `info-${classes[i]}`);
      objInfo.appendElement(objDesc.getElement());
      const obDescTitle = new CreateElem('h4', `info-${classes[i]}-title`);
      obDescTitle.setInnerText(`${classes[i][0].toUpperCase() + classes[i].slice(1)}`);
      objDesc.appendElement(obDescTitle.getElement());
      const obDescText = new CreateElem('p', `info-${classes[i]}-text`);
      if (classes[i] === 'discount') {
        obDescText.setInnerText(`${this.product.discountPercentage}%`);
      } else {
        obDescText.setInnerText(`${this.product[`${classes[i]}` as keyof IProduct]}`);
      }
      objDesc.appendElement(obDescText.getElement());
    }

    const objBtns = new CreateElem('div', 'details-btns');
    objInfo.appendElement(objBtns.getElement());
    const objBtnBuy = new CreateButton('BUY NOW', 'btn-buy');
    objBtns.appendElement(objBtnBuy.getElement());
    const objBtnAdd = new CreateButton('Add to Cart', 'btn-add');
    objBtns.appendElement(objBtnAdd.getElement());
  }
}

export { CreateDetailsPage };
