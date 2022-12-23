import { CreateElem } from '../../../general/CreateElem';
import { IProduct } from '../../../types/interfaces';
import { dataProductsList } from '../../../general/Data';

class Cart {
  elProdCounter: HTMLElement;
  protected count: number;
  currentCartProducts: IProduct[];

  constructor() {
    this.elProdCounter = new CreateElem('div', 'count').getElement();
    this.currentCartProducts = [];
    this.count = this.currentCartProducts.length;
  }

  getCounter() {
    return this.count;
  }

  getElement() {
    return this.elProdCounter;
  }

  renderCounter() {
    this.elProdCounter.innerText = `${this.getCounter()}`;
  }

  addProduct(id: number) {
    this.currentCartProducts.push(dataProductsList[id - 1]);
    this.count = this.currentCartProducts.length;
    this.renderCounter();
  }

  deleteProduct(id: number) {
    let index: number;
    for (let i = 0; i < this.currentCartProducts.length; i++) {
      if (this.currentCartProducts[i].id === id) {
        index = i;
        this.currentCartProducts.splice(index, 1);
      }
    }
    this.count = this.currentCartProducts.length;
    this.renderCounter();
  }

  eventClick(target: Element) {
    if (target.classList.contains('btn-add')) {
      if (target.classList.contains('btn-add-active')) {
        this.deleteProduct(Number(target.getAttribute('id')));
      } else {
        this.addProduct(Number(target.getAttribute('id')));
        console.log(Number(target.getAttribute('id')));
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
export { Cart };
