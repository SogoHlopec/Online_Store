import './style.css';
/*import { dataProducts, dataProductsList } from '../../general/Data';
import { CreateElem } from '../../general/CreateElem';
import { CreateButton } from '../../general/CreateButton';
import { CreateCard } from '../start-page/modules/createCard';
import { IProduct } from '../../types/interfaces';*/
import { MainBasket } from './modules/main';

class Basket {
  private body: HTMLElement;
  main;

  constructor() {
    this.body = document.body;
    this.main = new MainBasket();
  }

  render() {
    const container = document.createElement('div');
    container.className = 'container';
    this.body.prepend(container);
    container.append(this.main.main);
  }

  renderPage() {
    this.main.renderItems();
    this.main.renderSummary();
  }
}

export { Basket };
