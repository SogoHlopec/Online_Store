// import { currentCards } from './main';

class Filters {
  eventChange(container: HTMLElement) {
    const arrItemFilter = container.querySelectorAll('.filter-item');
    container.addEventListener('change', function () {
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
      if (container.querySelectorAll('.filter-item').length === 0) {
        for (let j = 0; j < arrItemFilter.length; j++) {
          arrItemFilter[j].classList.remove('filter-item-not-active');
          arrItemFilter[j].classList.add('filter-item');
        }
      }
    });
  }
}

const objfilters = new Filters();

export { Filters, objfilters };
