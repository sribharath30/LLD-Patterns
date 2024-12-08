import { Coin } from './coin';
import { Note } from './note';
import { Product } from './product';
import { State } from './state';
import { VendingMachine } from './vending-machine';

export class DispenseState implements State {
  private vendingMachine: VendingMachine;

  constructor(vendingMachine: VendingMachine) {
    this.vendingMachine = vendingMachine;
  }
  selectProduct(product: Product) {
    console.log(
      'Product already selected. Please collect the dispensed product.',
    );
  }
  insertCoin(coin: Coin) {
    console.log('Payment already made. Please collect the dispensed product.');
  }
  insertNote(note: Note) {
    console.log('Payment already made. Please collect the dispensed product.');
  }
  dispenseProduct() {
    this.vendingMachine.setState(this.vendingMachine.getReadyState());
    const product = this.vendingMachine.getSelectedProduct();
    this.vendingMachine.inventory.updateQuantity(
      product,
      this.vendingMachine.inventory.getQuantity(product) - 1,
    );
    console.log('Product dispensed: ' + product.getName());
    this.vendingMachine.setState(this.vendingMachine.getReturnChangeState()); // Change the state to ReturnChangeSt
  }
  returnChange() {
    console.log('Please collect the dispensed product first.');
  }
}
