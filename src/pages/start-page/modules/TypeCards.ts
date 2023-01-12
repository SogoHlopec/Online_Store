import { QueryParams } from '../../../general/QueryParams';

class TypeCards {
  cardWrapper: HTMLElement | null;

  constructor() {
    this.cardWrapper = document.querySelector('.cards-wrapper');
  }

  typeList() {
    if (this.cardWrapper) {
      this.cardWrapper.classList.add('cards-wrapper-list');

      const btnList = document.querySelector('.btn-list');
      btnList?.classList.add('btn-list-active');

      const btnCards = document.querySelector('.btn-cards');
      btnCards?.classList.remove('btn-cards-active');

      const elementsCardImg = this.cardWrapper.querySelectorAll('.card-img');
      elementsCardImg.forEach((element) => {
        element.classList.add('card-img-list');
      });

      const elementsCardParam = this.cardWrapper.querySelectorAll('.card-param');
      elementsCardParam.forEach((element) => {
        element.classList.add('card-param-list');
      });

      const elementsCardBtnsContainers = this.cardWrapper.querySelectorAll('.card-buttons-container');
      elementsCardBtnsContainers.forEach((element) => {
        element.classList.add('card-buttons-container-list');
      });
      const objQueryParams = new QueryParams();
      objQueryParams.setParams('type', 'list');
    }
  }

  typeCards() {
    if (this.cardWrapper) {
      this.cardWrapper.classList.remove('cards-wrapper-list');

      const btnCards = document.querySelector('.btn-cards');
      btnCards?.classList.add('btn-cards-active');

      const btnList = document.querySelector('.btn-list');
      btnList?.classList.remove('btn-list-active');

      const elementsCardImg = this.cardWrapper.querySelectorAll('.card-img');
      elementsCardImg.forEach((element) => {
        element.classList.remove('card-img-list');
      });

      const elementsCardParam = this.cardWrapper.querySelectorAll('.card-param');
      elementsCardParam.forEach((element) => {
        element.classList.remove('card-param-list');
      });

      const elementsCardBtnsContainers = this.cardWrapper.querySelectorAll('.card-buttons-container');
      elementsCardBtnsContainers.forEach((element) => {
        element.classList.remove('card-buttons-container-list');
      });
    }
    const objQueryParams = new QueryParams();
    objQueryParams.deleteParam('type');
  }
}
export { TypeCards };
