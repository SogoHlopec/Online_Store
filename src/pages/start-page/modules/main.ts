import products from '../../../data.json';

class Data {
  productList: {};

  constructor() {
    this.productList = {};
  }

  load() {
    this.productList = products;
    console.log(this.productList);
  }
}

export default Data;
