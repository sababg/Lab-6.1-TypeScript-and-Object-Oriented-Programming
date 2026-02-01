import type { DiscountableProduct } from "./DiscountableProduct.js";

export class Product {
  sku: string;
  public name: string;
  public price: number;

  constructor(sku: string, name: string, price: number) {
    this.sku = sku;
    this.name = name;
    this.price = price;
  }

  displayDetails(): string {
    return `The product sku : ${this.sku} , The product name is : ${this.name} , the product price is : ${this.price.toFixed(2)}`;
  }

  getPriceWithTax(): number {
    const taxAmount = this.price * 0.2;
    const totalPrice = this.price + taxAmount;
    return totalPrice;
  }

  showPrice(): number {
    return this.price;
  }

  showName(): string {
    return this.name;
  }
}

console.log(
  "product detail",
  new Product("test", "lorem", 12).displayDetails(),
);
console.log(
  "price with tax",
  new Product("test", "lorem", 12).getPriceWithTax(),
);

export class ProductWithDiscount
  extends Product
  implements DiscountableProduct
{
  constructor(sku: string, name: string, price: number) {
    super(sku, name, price);
  }

  applyDiscount(discountRate: number): number {
    return (this.price =
      this.price - parseFloat(((discountRate * this.price) / 100).toFixed(2)));
  }
}

console.log(
  "price",
  new ProductWithDiscount("test", "lorem", 12).applyDiscount(10),
);
