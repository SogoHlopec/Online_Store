import { currentCards } from '../pages/start-page/modules/main';
import { Sort } from '../pages/start-page/modules/Sort';

class QueryParams {
  url: URL;
  params: URLSearchParams;

  constructor() {
    this.url = new URL(window.location.href);
    this.params = this.url.searchParams;
  }

  setParams(key: string, value: string) {
    this.params.set(key, value);
    window.history.replaceState({}, '', this.url);
  }

  setParamsFilters(key: string, value: string) {
    if (this.params.has(key)) {
      const arrValues = this.params.get(key)?.split('↕');
      if (arrValues && !arrValues.includes(value)) {
        arrValues.push(value);
        this.params.set(key, arrValues.join('↕'));
      }
    } else {
      this.params.set(key, value);
    }
    window.history.replaceState({}, '', this.url);
  }

  sortParams() {
    if (this.params.has('sort')) {
      const valueParam = this.params.get('sort');
      const sortOptions = document.querySelector('.sort-options') as HTMLFormElement;
      const elDiscount = document.querySelector(`.sort-${valueParam}`) as HTMLFormElement;
      elDiscount.addEventListener('click', () => {
        sortOptions.value = valueParam;
        const sortCards = new Sort();
        sortCards.sort(currentCards, sortOptions.value.split('-')[1], sortOptions.value.split('-')[0]);
      });
      elDiscount.click();
    }
  }
}
export { QueryParams };
