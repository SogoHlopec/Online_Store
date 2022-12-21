class CreateElem {
  element: HTMLElement;
  selector: string;

  constructor(elem: string, selector: string) {
    this.element = document.createElement(elem);
    this.selector = selector;
  }

  setClassSelector(classSelector: string) {
    this.element.classList.add(classSelector);
  }

  setInnerText(text: string) {
    this.element.innerText = text;
  }

  getElement() {
    this.element.classList.add(this.selector);
    return this.element;
  }

  prependElement(element: HTMLElement) {
    this.element.prepend(element);
  }

  appendElement(element: HTMLElement) {
    this.element.append(element);
  }
}
export { CreateElem };
