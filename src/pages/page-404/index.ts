class Create404Page {
  page404: HTMLElement;

  constructor() {
    this.page404 = document.createElement('h2');
  }

  render() {
    this.page404.innerText = 'PAGE NOT FOUND (404)';
    const main = document.querySelector('.main');
    if (main) {
      main.innerHTML = '';
      main.prepend(this.page404);
    }
  }
}
export { Create404Page };
