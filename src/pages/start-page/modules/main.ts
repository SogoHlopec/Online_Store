import { dataProducts, dataProductsList } from '../../../general/Data';
import { CreateElem } from '../../../general/CreateElem';
import { CreateButton } from '../../../general/CreateButton';
import { CreateCard } from './createCard';

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

    const objDivBrand = new CreateElem('div', 'filter-brand');
    objAsideFilters.appendElement(objDivBrand.getElement());

    const objTitleBrand = new CreateElem('h4', 'title-brand');
    objTitleBrand.setClassSelector('title-filter');
    objTitleBrand.setInnerText('Brand');
    objDivBrand.prependElement(objTitleBrand.getElement());

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
    objFound.setInnerText(`Found: ${totalProducts}`);
    objDivNavigation.appendElement(objFound.getElement());

    const objSearch = new CreateElem('input', 'search');
    objSearch.getElement().setAttribute('type', 'search');
    objSearch.getElement().setAttribute('placeholder', 'Search product');
    objDivNavigation.appendElement(objSearch.getElement());

    const objCardsWrapper = new CreateElem('div', 'cards-wrapper');
    objSectionCatalog.appendElement(objCardsWrapper.getElement());

    const objProductLog = {
      id: 1,
      title: 'iPhone 9',
      description: 'An apple mobile which is nothing like apple',
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: 'Apple',
      category: 'smartphones',
      thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
      images: [
        'https://i.dummyjson.com/data/products/1/1.jpg',
        'https://i.dummyjson.com/data/products/1/2.jpg',
        'https://i.dummyjson.com/data/products/1/3.jpg',
        'https://i.dummyjson.com/data/products/1/4.jpg',
        'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
      ],
    };
    const objCreateCard = new CreateCard(objProductLog);
    objCreateCard.render();
    objCardsWrapper.prependElement(objCreateCard.cardContainer);
  }
}

export { CreateElem, Main };
