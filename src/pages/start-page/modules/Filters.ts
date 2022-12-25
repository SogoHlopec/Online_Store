import { currentCards } from './main';

class Filters {
  catWrapper: HTMLElement | null;
  brandsWrapper: HTMLElement | null;

  constructor() {
    this.catWrapper = document.querySelector('.filter-cat-wrapper');
    this.brandsWrapper = document.querySelector('.filter-brand-wrapper');
  }

  eventChange(text: string) {
    let container: HTMLElement | null | undefined;
    if (text === 'categories') {
      container = this.catWrapper;
    } else if (text === 'brands') {
      container = this.brandsWrapper;
    }
    if (container !== null && container !== undefined) {
      const arrItemFilter = container.querySelectorAll('.filter-item');
      container.addEventListener('change', () => {
        this.renderCount(this.catWrapper);
        this.renderCount(this.brandsWrapper);

        for (let i = 0; i < arrItemFilter.length; i++) {
          const checkbox = arrItemFilter[i].querySelector('.filter-input') as HTMLInputElement | null;
          if (checkbox !== null) {
            if (!checkbox.checked) {
              arrItemFilter[i].classList.add('filter-item-not-active');
              arrItemFilter[i].classList.remove('filter-item');
            } else {
              arrItemFilter[i].classList.add('filter-item');
              arrItemFilter[i].classList.remove('filter-item-not-active');
            }
          }
        }
        if (container !== null && container !== undefined && container.querySelectorAll('.filter-item').length === 0) {
          for (let j = 0; j < arrItemFilter.length; j++) {
            arrItemFilter[j].classList.remove('filter-item-not-active');
            arrItemFilter[j].classList.add('filter-item');
          }
        }
      });
    }
  }

  renderCount(wrap: HTMLElement | null) {
    if (wrap) {
      const arrItemFilter = wrap.querySelectorAll('.filter-item');
      for (let i = 0; i < arrItemFilter.length; i++) {
        const quantity = arrItemFilter[i].querySelector('.filter-count') as HTMLElement | null;
        const checkboxId = arrItemFilter[i].querySelector('.filter-input')?.getAttribute('id');
        let counter = 0;
        for (let i = 0; i < currentCards.length; i++) {
          if (currentCards[i].product.category === checkboxId) {
            counter++;
          }
        }
        if (quantity) {
          const arrSymbol = quantity.innerText.split('/');
          // arrSymbol[0] = String(counter);
          arrSymbol[0] = '0';
          quantity.innerText = arrSymbol.join('/');
        }
      }
    }

    // const quantity = item.querySelector('.filter-count') as HTMLElement | null;
    // const checkboxId = item.querySelector('.filter-input')?.getAttribute('id');

    // let counter = 0;
    // for (let i = 0; i < currentCards.length; i++) {
    //   if (currentCards[i].product.category === checkboxId) {
    //     counter++;
    //   }
    //   if (currentCards[i].product.brand.toLowerCase() === checkboxId) {
    //     counter++;
    //   }
    // }
    // if (quantity) {
    //   const arrSymbol = quantity.innerText.split('/');
    //   arrSymbol[0] = String(counter);
    //   quantity.innerText = arrSymbol.join('/');
    // }
  }

  renderNewCards() {
    // for (let  = 0;  < array.length; ++) {
    // }
  }
}

export { Filters };
