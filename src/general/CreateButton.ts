import { CreateElem } from './CreateElem';
class CreateButton extends CreateElem {
  text: string;

  constructor(text: string, selector: string, elem = 'button') {
    super(elem, selector);
    this.element = document.createElement(elem);
    this.selector = selector;
    this.text = text;
  }

  getElement() {
    this.element.classList.add(this.selector);
    this.element.innerText = this.text;
    return this.element;
  }
}
export { CreateButton };
