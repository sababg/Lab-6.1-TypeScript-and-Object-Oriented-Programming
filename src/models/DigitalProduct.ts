import { Product } from "./Product.js";

export class DigitalProduct extends Product {
  fileSize: number;

  constructor(sku: string, name: string, price: number, fileSize: number) {
    super(sku, name, price);
    this.fileSize = fileSize;
  }

  getPriceWithTax(): number {
    return this.price;
  }

  getFilesize(): string {
    return `${this.fileSize.toFixed(2)} MB`;
  }
}

console.log(
  "product detail",
  new DigitalProduct("test", "lorem", 12, 10).displayDetails(),
);

console.log(
  "final price without tax",
  new DigitalProduct("test", "lorem", 12, 10).getPriceWithTax(),
);

console.log(
  "formatted file size",
  new DigitalProduct("test", "lorem", 12, 10).getFilesize(),
);
