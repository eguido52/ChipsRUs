export class shopcartitem{
    public name: string;
    public stock: number;
    public price: number;

  shopcartitem() {
    this.name = ' ';
    this.stock = 0;
    this.price = 0;

  }
  getName() {
    return this.name;
  }
}
