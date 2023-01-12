import { currentCards } from './main';
import { startPage } from '../../..';
import { dataProductsList } from '../../../general/Data';
import { IProduct } from '../../../types/interfaces';
import { QueryParams } from '../../../general/QueryParams';

class Filters {
  catWrapper: HTMLElement | null;
  brandsWrapper: HTMLElement | null;
  filters: HTMLElement | null;
  filteredProducts: IProduct[];
  selectedFilter: string[];

  constructor() {
    this.catWrapper = document.querySelector('.filter-cat-wrapper');
    this.brandsWrapper = document.querySelector('.filter-brand-wrapper');
    this.filters = document.querySelector('.filters');
    this.filteredProducts = [];
    this.selectedFilter = [];
  }

  eventChange() {
    if (this.catWrapper && this.brandsWrapper && this.filters) {
      const arrCatItems = Array.from(this.catWrapper.querySelectorAll('.filter-item'));
      const arrBrandsItems = Array.from(this.brandsWrapper.querySelectorAll('.filter-item'));
      const arrItemFilter = [
        ...this.catWrapper.querySelectorAll('.filter-item'),
        ...this.brandsWrapper.querySelectorAll('.filter-item'),
      ];
      this.filters.addEventListener('change', () => {
        const objQueryParams = new QueryParams();
        objQueryParams.deleteParam('category');
        objQueryParams.deleteParam('brand');
        for (let i = 0; i < arrItemFilter.length; i++) {
          const checkbox = arrItemFilter[i].querySelector('.filter-input') as HTMLInputElement | null;
          if (checkbox) {
            const checkboxId = checkbox.getAttribute('id');
            if (checkbox.checked && checkboxId) {
              if (arrCatItems.includes(arrItemFilter[i])) {
                objQueryParams.setParamsFilters('category', `${checkboxId}`);
              } else if (arrBrandsItems.includes(arrItemFilter[i])) {
                objQueryParams.setParamsFilters('brand', `${checkboxId}`);
              }
              this.selectedFilter.push(checkboxId);
            }
          }
        }
        this.renderNewCards(this.selectedFilter);
        this.renderCount();
        objQueryParams.sortParams();
      });
    }
  }

  renderCount() {
    if (this.catWrapper && this.brandsWrapper) {
      const arrItemFilter = [
        ...this.catWrapper.querySelectorAll('.filter-item'),
        ...this.brandsWrapper.querySelectorAll('.filter-item'),
      ];
      for (let i = 0; i < arrItemFilter.length; i++) {
        const count = arrItemFilter[i].querySelector('.filter-count') as HTMLElement;
        const checkboxId = arrItemFilter[i].querySelector('.filter-input')?.getAttribute('id');
        let counter = 0;
        for (let i = 0; i < currentCards.length; i++) {
          if (currentCards[i].product.category === checkboxId) {
            counter++;
          }
          if (currentCards[i].product.brand.toLowerCase() === checkboxId) {
            counter++;
          }
        }
        const arrSymbol = count.innerText.split('/');
        arrSymbol[0] = String(counter);
        count.innerText = arrSymbol.join('/');
        if (counter === 0) {
          arrItemFilter[i].classList.add('filter-item-not-active');
        } else {
          arrItemFilter[i].classList.remove('filter-item-not-active');
        }
      }
    }
  }

  renderNewCards(id?: string[]) {
    this.filteredProducts.length = 0;
    for (let i = 0; i < dataProductsList.length; i++) {
      if (id) {
        if (id.includes(dataProductsList[i].category) || id.includes(dataProductsList[i].brand.toLowerCase())) {
          this.filteredProducts.push(dataProductsList[i]);
        }
      }
    }
    startPage.main.renderCards(this.filteredProducts);
    this.selectedFilter.length = 0;
    if (currentCards.length === 0) {
      startPage.main.renderCards(dataProductsList);
      const objQueryParams = new QueryParams();
      objQueryParams.sortParams();
      objQueryParams.deleteParam('category');
      objQueryParams.deleteParam('brand');
    }
  }

  eventButtonReset() {
    if (this.filters && this.catWrapper && this.brandsWrapper) {
      const arrItemFilter = [
        ...this.catWrapper.querySelectorAll('.filter-item'),
        ...this.brandsWrapper.querySelectorAll('.filter-item'),
      ];
      const btnReset = this.filters.querySelector('.btn-reset') as HTMLElement;
      btnReset.addEventListener('click', () => {
        for (let i = 0; i < arrItemFilter.length; i++) {
          const checkbox = arrItemFilter[i].querySelector('.filter-input') as HTMLInputElement;
          if (checkbox.checked) {
            checkbox.click();
          }
        }
      });
    }
  }
}
export { Filters };
