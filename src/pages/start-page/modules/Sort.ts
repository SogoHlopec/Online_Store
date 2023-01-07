import { CreateCard } from './createCard';
import { IProduct } from '../../../types/interfaces';

class Sort {
  container: HTMLElement;

  constructor() {
    this.container = document.querySelector('.cards-wrapper') as HTMLElement;
  }

  sort(arr: CreateCard[], value: string, rate: string) {
    this.container.innerHTML = '';
    switch (value) {
      case 'ASC':
        if (rate === 'discount') {
          arr.sort((a, b) => {
            return +a.product.discountPercentage - +b.product.discountPercentage;
          });
        } else {
          arr.sort((a, b) => {
            return +a.product[rate as keyof IProduct] - +b.product[rate as keyof IProduct];
          });
        }
        this.drawCards(arr);
        break;

      case 'DESC':
        if (rate === 'discount') {
          arr.sort((a, b) => {
            return b.product.discountPercentage - a.product.discountPercentage;
          });
        } else {
          arr.sort((a, b) => {
            return +b.product[rate as keyof IProduct] - +a.product[rate as keyof IProduct];
          });
        }
        this.drawCards(arr);
        break;
    }
  }

  drawCards(arr: CreateCard[]) {
    arr.forEach((elem) => {
      this.container.append(elem.cardContainer);
    });
  }
}

export { Sort };
