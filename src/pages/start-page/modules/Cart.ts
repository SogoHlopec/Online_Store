import { CreateElem } from '../../../general/CreateElem';
import { IProduct } from '../../../types/interfaces';
import { dataProductsList } from '../../../general/Data';

class Cart {
  elProdCounter: HTMLElement;
  elSumPrice: HTMLElement;
  currentCartProducts: IProduct[];
  protected count: number;
  protected sumPrice: number;

  constructor() {
    this.elProdCounter = new CreateElem('div', 'count').getElement();
    this.elSumPrice = new CreateElem('span', 'sum').getElement();
    this.currentCartProducts = [];
    this.count = this.currentCartProducts.length;
    this.sumPrice = 0;
  }

  getCounter() {
    return this.count;
  }

  getElProdCounter() {
    return this.elProdCounter;
  }

  getElSumPrice() {
    return this.elSumPrice;
  }

  renderCounterAndPrice() {
    this.count = this.currentCartProducts.length;
    this.elProdCounter.innerText = `${this.getCounter()}`;
    this.elSumPrice.innerText = `€${this.sumPrice.toFixed(2)}`;
  }

  updateSumPrice() {
    if (!this.currentCartProducts.length) {
      this.sumPrice = 0;
    } else {
      this.sumPrice = this.currentCartProducts
        .map((item: IProduct): number => item.price)
        .reduce((sum: number, price: number): number => sum + price);
    }
  }

  addProduct(id: number) {
    this.currentCartProducts.push(dataProductsList[id - 1]);
    this.updateSumPrice();
    this.renderCounterAndPrice();
  }

  deleteProduct(id: number) {
    let index: number;
    for (let i = 0; i < this.currentCartProducts.length; i++) {
      if (this.currentCartProducts[i].id === id) {
        index = i;
        this.currentCartProducts.splice(index, 1);
      }
    }
    this.updateSumPrice();
    this.renderCounterAndPrice();
  }

  eventClick(target: Element | null) {
    if (target) {
      if (target.classList.contains('btn-add')) {
        if (target.classList.contains('btn-add-active')) {
          this.deleteProduct(Number(target.getAttribute('id')));
        } else {
          this.addProduct(Number(target.getAttribute('id')));
        }
        target.classList.toggle('btn-add-active');
        if (target.textContent === 'Add to Cart') {
          target.textContent = 'Drop from Cart';
        } else {
          target.textContent = 'Add to Cart';
        }
      }
    }
  }
}
export { Cart };
