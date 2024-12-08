import { Coin } from "./coin";
import { Note } from "./note";
import { Product } from "./product";
import { State } from "./state";
import { VendingMachine } from "./vending-machine";

export class ReturnChangeState implements State {
    private vendingMachine: VendingMachine;

    constructor(vendingMachine: VendingMachine){
        this.vendingMachine = vendingMachine
    }
    selectProduct(product: Product) {
        console.log("Please collect the change first.");
    }
    insertCoin(coin: Coin) {
        console.log("Please collect the change first.");
    }
    insertNote(note: Note) {
        console.log("Please collect the change first.");
    }
    dispenseProduct() {
        console.log("Please collect the change first.");
    }
    returnChange() {
        const change = this.vendingMachine.getTotalPayment() - this.vendingMachine.getSelectedProduct().getPrice();
        if (change > 0) {
            console.log("Change returned: $" + change);
            this.vendingMachine.resetPayment();
        } else {
            console.log("No change to return.");
        }
        this.vendingMachine.returnChange();
        this.vendingMachine.resetSelectedProduct();
        this.vendingMachine.setState(this.vendingMachine.getIdleState());
    }
}