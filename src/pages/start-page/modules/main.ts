import products from '../../../data.json';
import { IDataProducts } from '../../../types/interfaces';

class Data {
  dataProducts: IDataProducts;

  constructor() {
    this.dataProducts = products;
  }
}

const dataProducts = new Data().dataProducts;
const dataProductsList = dataProducts.products;

export { dataProducts, dataProductsList };
