import { Product } from './product';

export class Inventory {
  private productsMap: Map<string, number>;

  constructor() {
    this.productsMap = new Map<string, number>();
  }

  addProduct(product: Product, quantity: number) {
    this.productsMap.set(product.getName(), quantity);
  }
  removeProduct(product: Product, quantity: number) {
    this.productsMap.set(product.getName(), 0);
  }
  updateQuantity(product: Product, quantity: number) {
    const val = this.productsMap.get(product.getName()) as number;
    this.productsMap.set(product.getName(), quantity + val);
  }
  getQuantity(product: Product) {
    return this.productsMap.get(product.getName()) ?? 0;
  }
  isAvailable(product: Product) {
    return !(this.productsMap.get(product.getName()) ?? 0);
  }
}
