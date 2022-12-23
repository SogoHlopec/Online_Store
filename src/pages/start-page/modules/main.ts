import { dataProducts, dataProductsList } from '../../../general/Data';
import { CreateElem } from '../../../general/CreateElem';
import { CreateButton } from '../../../general/CreateButton';
import { CreateCard } from './createCard';
import { IProduct } from '../../../types/interfaces';

const totalProducts = dataProducts.total;

class Main {
  main: HTMLElement;

  constructor() {
    this.main = document.createElement('main');
  }

  render() {
    this.main.className = 'main';
    const objAsideFilters = new CreateElem('aside', 'filters');
    this.main.append(objAsideFilters.getElement());

    const objDivButtons = new CreateElem('div', 'buttons');
    objAsideFilters.prependElement(objDivButtons.getElement());

    const objBtnReset = new CreateButton('Reset Filters', 'btn-reset');
    objBtnReset.setClassSelector('button');
    objDivButtons.prependElement(objBtnReset.getElement());

    const objBtnCopyLink = new CreateButton('Copy Link', 'btn-copy-link');
    objBtnCopyLink.setClassSelector('button');
    objDivButtons.appendElement(objBtnCopyLink.getElement());

    const objDivCategory = new CreateElem('div', 'filter-category');
    objAsideFilters.appendElement(objDivCategory.getElement());

    const objTitleCategory = new CreateElem('h4', 'title-category');
    objTitleCategory.setClassSelector('title-filter');
    objTitleCategory.setInnerText('Category');
    objDivCategory.prependElement(objTitleCategory.getElement());

    const objFilterCatWrapper = new CreateElem('div', 'filter-cat-wrapper');
    objFilterCatWrapper.setClassSelector('filter-wrapper');
    objDivCategory.appendElement(objFilterCatWrapper.getElement());

    // !Create filters categories start
    const categories: string[] = [];
    dataProductsList.forEach((item: IProduct): void => {
      if (!categories.includes(item.category)) {
        categories.push(item.category);
      }
    });

    for (let i = 0; i < categories.length; i++) {
      const objFilterItem = new CreateElem('div', 'filter-item');
      objFilterCatWrapper.appendElement(objFilterItem.getElement());

      const objFilterInput = new CreateElem('input', 'filter-input');
      objFilterItem.appendElement(objFilterInput.getElement());
      objFilterInput.getElement().setAttribute('type', 'checkbox');
      objFilterInput.getElement().setAttribute('id', `${categories[i]}`);

      const objFilterLabel = new CreateElem('label', 'filter-label');
      objFilterLabel.setInnerText(`${categories[i]}`);
      objFilterLabel.getElement().setAttribute('for', `${categories[i]}`);
      objFilterItem.appendElement(objFilterLabel.getElement());

      const objFilterCount = new CreateElem('span', 'filter-count');
      objFilterItem.appendElement(objFilterCount.getElement());
      objFilterCount.setInnerText('5/5');
    }

    //!create filters brands
    const objDivBrand = new CreateElem('div', 'filter-brand');
    objAsideFilters.appendElement(objDivBrand.getElement());

    const objTitleBrand = new CreateElem('h4', 'title-brand');
    objTitleBrand.setClassSelector('title-filter');
    objTitleBrand.setInnerText('Brand');
    objDivBrand.prependElement(objTitleBrand.getElement());

    const objFilterBrandWrapper = new CreateElem('div', 'filter-brand-wrapper');
    objFilterBrandWrapper.setClassSelector('filter-wrapper');
    objDivBrand.appendElement(objFilterBrandWrapper.getElement());

    // ! set brands { nameBrand: count}
    const brands: { brand: string; count: number }[] = [];
    const arrBrands: string[] = [];
    const arrBrandsTemp: string[] = [];
    dataProductsList.forEach((item: IProduct): void => {
      arrBrands.push(item.brand.toLowerCase());
    });
    for (let i = 0; i < arrBrands.length; i++) {
      let count = 0;
      for (let j = 0; j < arrBrands.length; j++) {
        if (!arrBrandsTemp.includes(arrBrands[i])) {
          if (arrBrands[i] === arrBrands[j]) {
            count++;
          }
        }
      }
      if (count) {
        arrBrandsTemp.push(arrBrands[i]);
        brands.push({ brand: arrBrands[i], count: count });
      }
    }

    for (let i = 0; i < brands.length; i++) {
      const objFilterItem = new CreateElem('div', 'filter-item');
      objFilterBrandWrapper.appendElement(objFilterItem.getElement());

      const objFilterInput = new CreateElem('input', 'filter-input');
      objFilterItem.appendElement(objFilterInput.getElement());
      objFilterInput.getElement().setAttribute('type', 'checkbox');
      objFilterInput.getElement().setAttribute('id', `${brands[i].brand}`);

      const objFilterLabel = new CreateElem('label', 'filter-label');
      objFilterLabel.setInnerText(`${brands[i].brand}`);
      objFilterLabel.getElement().setAttribute('for', `${brands[i].brand}`);
      objFilterItem.appendElement(objFilterLabel.getElement());

      const objFilterCount = new CreateElem('span', 'filter-count');
      objFilterItem.appendElement(objFilterCount.getElement());
      objFilterCount.setInnerText(`${brands[i].count}/${brands[i].count}`);
    }

    const objDivPrice = new CreateElem('div', 'filter-price');
    objAsideFilters.appendElement(objDivPrice.getElement());

    const objTitlePrice = new CreateElem('h4', 'title-price');
    objTitlePrice.setClassSelector('title-filter');
    objTitlePrice.setInnerText('Price');
    objDivPrice.prependElement(objTitlePrice.getElement());

    const objDivStock = new CreateElem('div', 'filter-stock');
    objAsideFilters.appendElement(objDivStock.getElement());

    const objTitleStock = new CreateElem('h4', 'title-stock');
    objTitleStock.setClassSelector('title-filter');
    objTitleStock.setInnerText('Stock');
    objDivStock.prependElement(objTitleStock.getElement());
    // !Create categories filters stop

    const objSectionCatalog = new CreateElem('section', 'catalog');
    this.main.append(objSectionCatalog.getElement());

    const objDivNavigation = new CreateElem('div', 'catalog-navigation');
    objSectionCatalog.prependElement(objDivNavigation.getElement());

    const objSortBar = new CreateElem('div', 'sort-bar');
    objDivNavigation.prependElement(objSortBar.getElement());

    const objSortOptions = new CreateElem('select', 'sort-options');
    objSortBar.prependElement(objSortOptions.getElement());
    objSortOptions.setClassSelector('button');

    const objSortTitle = new CreateElem('option', 'sort-title');
    objSortTitle.setInnerText('Sort options:');
    objSortTitle.getElement().setAttribute('disabled', 'disabled');
    objSortTitle.getElement().setAttribute('selected', 'selected');
    objSortTitle.getElement().setAttribute('value', 'sort-title');
    objSortOptions.prependElement(objSortTitle.getElement());

    const prices: string[] = ['price-ASC', 'price-DESC', 'rating-ASC', 'rating-DESC', 'discount-ASC', 'discount-DESC'];

    for (let i = 0; i < prices.length; i++) {
      const objSort = new CreateElem('option', `sort-${prices[i]}`);
      objSort.setInnerText(`Sort by ${prices[i]}`);
      objSort.setClassSelector('sort');
      objSort.getElement().setAttribute('value', `${prices[i]}`);
      objSortOptions.appendElement(objSort.getElement());
    }

    const objFound = new CreateElem('h2', 'title');
    objFound.setClassSelector('title-found');
    objFound.setInnerText(`Found: `);
    objDivNavigation.appendElement(objFound.getElement());
    const objFoundCount = new CreateElem('span', 'found-count');
    objFoundCount.setInnerText(`${totalProducts}`);
    objFound.appendElement(objFoundCount.getElement());

    const objSearchBtnContainer = new CreateElem('div', 'search-btn-container');
    objDivNavigation.appendElement(objSearchBtnContainer.getElement());

    const objSearch = new CreateElem('input', 'search');
    objSearch.getElement().setAttribute('type', 'search');
    objSearch.getElement().setAttribute('placeholder', 'Search product');
    objSearchBtnContainer.appendElement(objSearch.getElement());

    const objBtnList = new CreateButton('List', 'btn-list');
    objBtnList.setClassSelector('button');
    objSearchBtnContainer.appendElement(objBtnList.getElement());

    const objBtnCards = new CreateButton('Cards', 'btn-cards');
    objBtnCards.setClassSelector('button');
    objSearchBtnContainer.appendElement(objBtnCards.getElement());

    const objCardsContainer = new CreateElem('div', 'cards-container');
    objSectionCatalog.appendElement(objCardsContainer.getElement());

    const objCardsWrapper = new CreateElem('div', 'cards-wrapper');
    objCardsContainer.appendElement(objCardsWrapper.getElement());

    for (let i = 0; i < dataProductsList.length; i++) {
      const objCard = new CreateCard(dataProductsList[i]);
      objCard.render();
      objCardsWrapper.appendElement(objCard.cardContainer);
    }
  }
}

export { CreateElem, Main };
