import { dataProducts, dataProductsList } from '../../../general/Data';
import { CreateElem } from '../../../general/CreateElem';
import { CreateButton } from '../../../general/CreateButton';
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
    objDivButtons.prependElement(objBtnReset.getElButton());

    const objBtnCopyLink = new CreateButton('Copy Link', 'btn-copy-link');
    objBtnCopyLink.setClassSelector('button');
    objDivButtons.appendElement(objBtnCopyLink.getElButton());

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

    const prices: string[] = ['price-ASC', 'price-DESC', 'rating-ASC', 'rating-DESC', 'disount-ASC', 'discount-DESC'];

    for (let i = 0; i < prices.length; i++) {
      const objSort = new CreateElem('option', `sort-${prices[i]}`);
      objSort.setInnerText(`Sort by ${prices[i]}`);
      objSort.setClassSelector('sort');
      objSort.getElement().setAttribute('value', `${prices[i]}`);
      objSortOptions.appendElement(objSort.getElement());
    }

    /*const objSortPriceASC = new CreateElem('option', 'sort-price-ASC');
    objSortPriceASC.setInnerText('Sort by price ASC');
    objSortPriceASC.setClassSelector('sort');
    objSortPriceASC.getElement().setAttribute('value', 'price-ASC');
    objSortOptions.appendElement(objSortPriceASC.getElement());

    const objSortPriceDESC = new CreateElem('option', 'sort-price-DESC');
    objSortPriceDESC.setInnerText('Sort by price DESC');
    objSortPriceDESC.setClassSelector('sort');
    objSortPriceDESC.getElement().setAttribute('value', 'price-DESC');
    objSortOptions.appendElement(objSortPriceDESC.getElement());

    const objSortRatingASC = new CreateElem('option', 'sort-rating-ASC');
    objSortRatingASC.setInnerText('Sort by rating ASC');
    objSortRatingASC.setClassSelector('sort');
    objSortRatingASC.getElement().setAttribute('value', 'rating-ASC');
    objSortOptions.appendElement(objSortRatingASC.getElement());

    const objSortRatingDESC = new CreateElem('option', 'sort-rating-DESC');
    objSortRatingDESC.setInnerText('Sort by rating DESC');
    objSortRatingDESC.setClassSelector('sort');
    objSortRatingDESC.getElement().setAttribute('value', 'rating-DESC');
    objSortOptions.appendElement(objSortRatingDESC.getElement());*/
  }
}

export { CreateElem, Main };
