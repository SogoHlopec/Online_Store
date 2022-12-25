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
        for (let i = 0; i < arrItemFilter.length; i++) {
          const checkbox = arrItemFilter[i].querySelector('.filter-input') as HTMLInputElement | null;
          if (checkbox !== null) {
            if (!checkbox.checked) {
              arrItemFilter[i].classList.add('filter-item-not-active');
              arrItemFilter[i].classList.remove('filter-item');
            } else {
              arrItemFilter[i].classList.add('filter-item');
              arrItemFilter[i].classList.remove('filter-item-not-active');
              // this.renderQuantity(arrItemFilter[i]);
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

  // renderQuantity(item: Element) {
  //   const quantity = item.querySelector('.filter-count');
  //   const counter =
  // }
}

export { Filters };
