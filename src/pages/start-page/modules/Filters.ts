import { currentCards } from './main';
import { startPage } from '../../..';
import { dataProductsList } from '../../../general/Data';
import { IProduct } from '../../../types/interfaces';

class Filters {
  catWrapper: HTMLElement | null;
  brandsWrapper: HTMLElement | null;
  filteredProducts: IProduct[];
  selectedFilterCat: string[];

  constructor() {
    this.catWrapper = document.querySelector('.filter-cat-wrapper');
    this.brandsWrapper = document.querySelector('.filter-brand-wrapper');
    this.filteredProducts = [];
    this.selectedFilterCat = [];
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
          if (checkbox) {
            const checkboxId = checkbox.getAttribute('id');
            if (!checkbox.checked) {
              arrItemFilter[i].classList.add('filter-item-not-active');
              arrItemFilter[i].classList.remove('filter-item');
            } else {
              arrItemFilter[i].classList.add('filter-item');
              arrItemFilter[i].classList.remove('filter-item-not-active');
              if (checkboxId) {
                this.selectedFilterCat.push(checkboxId);
              }
            }
          }
        }
        this.renderNewCards(text, this.selectedFilterCat);
        this.renderCount();
        if (container !== null && container !== undefined && container.querySelectorAll('.filter-item').length === 0) {
          // const initialFilterCat = dataProductsList.map((item) => item.category);
          for (let j = 0; j < arrItemFilter.length; j++) {
            arrItemFilter[j].classList.remove('filter-item-not-active');
            arrItemFilter[j].classList.add('filter-item');
            this.renderNewCards(
              text,
              dataProductsList.map((item) => item.category)
            );
            this.renderCount();
          }
        }
      });
    }
  }

  renderCount() {
    if (this.catWrapper) {
      const arrItemFilter = this.catWrapper.querySelectorAll('.filter-item, .filter-item-not-active');
      for (let i = 0; i < arrItemFilter.length; i++) {
        const count = arrItemFilter[i].querySelector('.filter-count') as HTMLElement | null;
        const checkboxId = arrItemFilter[i].querySelector('.filter-input')?.getAttribute('id');
        let counter = 0;
        for (let i = 0; i < currentCards.length; i++) {
          if (currentCards[i].product.category === checkboxId) {
            counter++;
          }
        }
        if (count) {
          const arrSymbol = count.innerText.split('/');
          arrSymbol[0] = String(counter);
          // arrSymbol[0] = 't';
          count.innerText = arrSymbol.join('/');
        }
      }
    }

    // if (this.brandsWrapper) {
    //   const arrItemFilter = this.brandsWrapper.querySelectorAll('.filter-item');
    //   for (let i = 0; i < arrItemFilter.length; i++) {
    //     const quantity = arrItemFilter[i].querySelector('.filter-count') as HTMLElement | null;
    //     const checkboxId = arrItemFilter[i].querySelector('.filter-input')?.getAttribute('id');
    //     let counter = 0;
    //     for (let i = 0; i < dataProductsList.length; i++) {
    //       if (dataProductsList[i].brand.toLowerCase() === checkboxId) {
    //         counter++;
    //       }
    //     }
    //     if (quantity) {
    //       const arrSymbol = quantity.innerText.split('/');
    //       arrSymbol[0] = String(counter);
    //       // arrSymbol[0] = '0';
    //       quantity.innerText = arrSymbol.join('/');
    //     }
    //   }
    // }
  }

  renderNewCards(text: string, id: string[]) {
    this.filteredProducts.length = 0;
    if (text === 'categories') {
      for (let i = 0; i < dataProductsList.length; i++) {
        if (id.includes(dataProductsList[i].category)) {
          this.filteredProducts.push(dataProductsList[i]);
        }
      }
      startPage.main.renderCards(this.filteredProducts);
      this.selectedFilterCat.length = 0;
    }
  }
}
export { Filters };
