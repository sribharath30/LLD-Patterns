import { Coin } from './coin';
import { Note } from './note';
import { Product } from './product';
import { State } from './state';
import { VendingMachine } from './vending-machine';

export class ReadyState implements State {
  private vendingMachine: VendingMachine;

  constructor(vendingMachine: VendingMachine) {
    this.vendingMachine = vendingMachine;
  }
  selectProduct(product: Product) {
    console.log('Product already selected. Please make payment.');
  }
  insertCoin(coin: Coin) {
    this.vendingMachine.addCoin(coin);
    console.log('coin inserted');
  }
  insertNote(note: Note) {
    this.vendingMachine.addNote(note);
    console.log('note inserted');
  }
  dispenseProduct() {
    console.log('Please make payment.');
  }
  returnChange() {
    console.log('Please make payment.');
  }
  private checkPaymentStatus(): void {
    if (
      this.vendingMachine.getTotalPayment() >=
      this.vendingMachine.getSelectedProduct().getPrice()
    ) {
      this.vendingMachine.setState(this.vendingMachine.getDispenseState());
    }
  }
}
