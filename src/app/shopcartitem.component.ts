export class Shopcartitem {
  id: String;
  name: String;
  stock: number;
  price: number;

constructor() {
  this.id = '';
  this.name = '';
  this.stock = 0;
  this.price = 0;

}
createshopcartitem(id: String, name: String, stock: number, price: number) {
  this.id = id;
  this.name = name;
  this.stock = stock;
  this.price = price;

}
getName() {
  return this.name;
}
}
