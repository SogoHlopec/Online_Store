class CreatElem {
  element: HTMLElement;

  constructor(elem: string) {
    this.element = document.createElement(elem);
  }

  setClassSelector(classSelector: string) {
    this.element.classList.add(classSelector);
  }
}
