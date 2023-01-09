import './style.css';
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

    // ! Event on Slides
    objPage.main.addEventListener('click', (e) => {
      const target = e.target as HTMLElement | null;
      if (target) {
        if (target.classList.contains('details-slide')) {
          const thumbnail = document.querySelector('.details-thumbnail') as HTMLElement;
          const src = target.getAttribute('src') as string;
          thumbnail.setAttribute('src', `${src}`);
        }
      }
    });
  }
}

export { DetailsPage };
