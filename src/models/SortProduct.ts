import type { Product } from "./Product.js";

export enum SortOrder {
  Ascending = "asc",
  Descending = "desc",
}

export function sortByPrice(
  products: Product[],
  order: SortOrder = SortOrder.Ascending,
): Product[] {
  return products.sort((a, b) => {
    const priceA = a.price; // price is a public item
    const priceB = b.showPrice(); // we can use public value or use a function
    return order === SortOrder.Ascending ? priceA - priceB : priceB - priceA;
  });
}

export function sortByName(
  products: Product[],
  order: SortOrder = SortOrder.Ascending,
): Product[] {
  return products.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.showName().toLowerCase();
    if (order === SortOrder.Ascending) {
      return nameA.localeCompare(nameB);
    } else {
      return nameB.localeCompare(nameA);
    }
  });
}
