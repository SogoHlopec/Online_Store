class CreateButton {
  button: HTMLElement;
  text: string;
  selector: string;

  constructor(text: string, selector: string) {
    this.button = document.createElement('button');
    this.text = text;
    this.selector = selector;
  }

  setClassSelector(classSelector: string) {
    this.button.classList.add(classSelector);
  }

  getElButton() {
    this.button.classList.add(this.selector);
    this.button.innerText = this.text;
    return this.button;
  }
}
export { CreateButton };
