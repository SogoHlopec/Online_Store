import { dataProducts, dataProductsList } from '../../../general/Data';
class CreateElem {
  element: HTMLElement;
  selector: string;

  constructor(elem: string, selector: string) {
    this.element = document.createElement(elem);
    this.selector = selector;
  }

  setClassSelector(classSelector: string) {
    this.element.classList.add(classSelector);
  }

  setInnerText(text: string) {
    this.element.innerText = text;
  }

  getElement() {
    this.element.classList.add(this.selector);
    return this.element;
  }

  prependElement(element: HTMLElement) {
    this.element.prepend(element);
  }

  appendElement(element: HTMLElement) {
    this.element.append(element);
  }
}

class CreateButton {
  button: HTMLElement;
  text: string;
  selector: string;

  constructor(text: string, selector: string) {
    this.button = document.createElement('button');
    this.text = text;
    this.selector = selector;
  }

  setClassSelector(classSelector: string) {
    this.button.classList.add(classSelector);
  }

  getElButton() {
    this.button.classList.add(this.selector);
    this.button.innerText = this.text;
    return this.button;
  }
}

class Main {
  main: HTMLElement;

  constructor() {
    this.main = document.createElement('main');
  }

  run() {
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
    objDivButtons.prependElement(objBtnCopyLink.getElButton());

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

    const objSortTitle = new CreateElem('option', 'sort-title');
    objSortTitle.setInnerText('Sort options:');
    objSortTitle.getElement().setAttribute('disabled', 'disabled');
    objSortTitle.getElement().setAttribute('selected', 'selected');
    objSortTitle.getElement().setAttribute('value', 'sort-title');
    objSortOptions.prependElement(objSortTitle.getElement());

    const objSortPriceASC = new CreateElem('option', 'sort-price-ASC');
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
    objSortOptions.appendElement(objSortRatingDESC.getElement());
  }
}

export { CreateElem, Main };
