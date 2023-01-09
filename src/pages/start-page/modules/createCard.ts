// import { dataProducts, dataProductsList } from '../../../general/Data';
import { CreateButton } from '../../../general/CreateButton';
import { CreateElem } from '../../../general/CreateElem';
import { IProduct } from '../../../types/interfaces';
// import locationResolver from '../../..';

class CreateCard {
  product: IProduct;
  cardContainer: HTMLElement;

  constructor(product: IProduct) {
    this.product = product;
    this.cardContainer = document.createElement('div');
  }

  render() {
    this.cardContainer.className = 'card-container';
    const objCardTitle = new CreateElem('h3', 'card-title');
    objCardTitle.setInnerText(`${this.product.title.toUpperCase()}`);
    this.cardContainer.prepend(objCardTitle.getElement());

    const objCardImg = new CreateElem('img', 'card-img');
    objCardImg.getElement().setAttribute('alt', `${this.product.title}`);
    objCardImg.getElement().setAttribute('src', `${this.product.thumbnail}`);
    this.cardContainer.append(objCardImg.getElement());

    const objCardParam = new CreateElem('div', 'card-param');
    this.cardContainer.append(objCardParam.getElement());

    const parameters: string[] = ['category', 'brand', 'price', 'discount', 'rating', 'stock'];

    for (let i = 0; i < parameters.length; i++) {
      const objCardParameter = new CreateElem('p', 'card-parameter');
      const key = parameters[i];
      const newKey = key[0].toUpperCase() + key.slice(1);
      switch (key) {
        case 'category':
          objCardParameter.setInnerText(`${newKey}: ${this.product.category}`);
          break;
        case 'brand':
          objCardParameter.setInnerText(`${newKey}: ${this.product.brand}`);
          break;
        case 'price':
          objCardParameter.setInnerText(`${newKey}: €${this.product.price}.00`);
          break;
        case 'discount':
          objCardParameter.setInnerText(`${newKey}: ${this.product.discountPercentage}%`);
          break;
        case 'rating':
          objCardParameter.setInnerText(`${newKey}: ${this.product.rating}`);
          break;
        case 'stock':
          objCardParameter.setInnerText(`${newKey}: ${this.product.stock}`);
          break;

        default:
          break;
      }
      objCardParam.appendElement(objCardParameter.getElement());
    }

    const objCardBtnContainer = new CreateElem('div', 'card-buttons-container');
    this.cardContainer.append(objCardBtnContainer.getElement());

    const objBtnAdd = new CreateButton('Add to Cart', 'btn-add');
    objBtnAdd.setClassSelector('button');
    objBtnAdd.getElement().setAttribute('id', `${this.product.id}`);
    objCardBtnContainer.prependElement(objBtnAdd.getElement());

    const detailsLink = new CreateElem('a', 'details-link');
    objCardBtnContainer.appendElement(detailsLink.getElement());
    detailsLink.getElement().setAttribute('href', '#/details');
    detailsLink.getElement().setAttribute('data-href', '#/details');
    detailsLink.getElement().setAttribute('id', `${this.product.id}`);
    const objBtnDetails = new CreateButton('Details', 'btn-details');
    objBtnDetails.setClassSelector('button');
    objBtnDetails.getElement().setAttribute('id', `${this.product.id}`);
    detailsLink.appendElement(objBtnDetails.getElement());

    // detailsLink.getElement().addEventListener('click', () => {
    //   locationResolver('#/details');
    // });
  }

  delete() {
    this.cardContainer.remove();
  }
}

export { CreateCard };
