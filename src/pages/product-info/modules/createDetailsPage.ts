import { CreateElem } from '../../../general/CreateElem';
import { IProduct } from '../../../types/interfaces';

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
    const objCardInfo = new CreateElem('div', 'card-info');
    this.main.append(objCardInfo.getElement());
  }
}

export { CreateDetailsPage };
