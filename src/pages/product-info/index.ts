import { CreateDetailsPage } from './modules/createDetailsPage';
import { dataProductsList } from '../../general/Data';
import { IProduct } from '../../types/interfaces';
class DetailsPage {
  id: string;
  product: IProduct;

  constructor(id: string) {
    this.id = id;
    this.product = dataProductsList[Number(this.id) - 1];
  }

  render() {
    const objPage = new CreateDetailsPage(this.product);
    objPage.createPage();
    const container = document.querySelector('.container') as HTMLElement;
    const mainPage = document.querySelector('.main') as HTMLElement;
    container.replaceChild(objPage.main, mainPage);
    console.log(this.product);
  }

  // eventClick(target: Element | null) {
  //   if (target) {
  //     if (target.classList.contains('btn-details')) {
  //       const id = target.getAttribute('id') as string;
  //       const detailsPage = new DetailsPage(id);
  //       detailsPage.render();
  //       // const detailsPage = new DetailsPage();
  //     }
  //   }
  // }
}

export { DetailsPage };
