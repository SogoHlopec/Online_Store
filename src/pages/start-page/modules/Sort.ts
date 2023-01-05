import { CreateCard } from './createCard';
import { Main, currentCards } from './main';
import { startPage } from '../../..';
import { IProduct } from '../../../types/interfaces';

class Sort {
  container: HTMLElement;

  constructor() {
    this.container = document.querySelector('.cards-wrapper') as HTMLElement;
  }

  sort(arr: CreateCard[], value: string, rate: string) {
    this.container.innerHTML = '';
    console.log(arr[1].product[`${rate}`]);

    switch (value) {
      case 'ASC':
        arr.sort((a, b) => {
          return a.product[`${rate}` as keyof IProduct] - b.product[rate as keyof IProduct];
        });
        this.drawCards(arr);
        break;

      case 'price-DESC':
        arr.sort((a, b) => {
          return b.product.price - a.product.price;
        });
        this.drawCards(arr);
        break;
    }
  }

  /* case 'rating-ASC':
        break;
      case 'rating-DESC':
        break;
      case 'discount-ASC':
        break;
      case 'discount-DESC':
        break;
    }*/

  drawCards(arr: CreateCard[]) {
    arr.forEach((elem) => {
      this.container.append(elem.cardContainer);
    });
  }
}

export { Sort };
