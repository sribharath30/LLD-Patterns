import { Coin } from "./coin";
import { Note } from "./note";
import { Product } from "./product";
import { State } from "./state";
import { VendingMachine } from "./vending-machine";

export class IdleState implements State {
    private vendingMachine: VendingMachine;

    constructor(vendingMachine: VendingMachine){
        this.vendingMachine = vendingMachine
    }
    selectProduct(product: Product) {
        if(this.vendingMachine.inventory.isAvailable(product)){
            this.vendingMachine.setSelectedProduct(product);
            this.vendingMachine.setState(this.vendingMachine.getReadyState());
            console.log("Product selected: " + product.getName());
        }else{
            console.log("product not available")
        }
    }
    insertCoin(coin: Coin) {
        console.log("Please select a product first.");
    }
    insertNote(note: Note) {
        console.log("Please select a product first.");
    }
    dispenseProduct() {
        console.log("Please select a product first.");
    }
    returnChange() {
        console.log("Please select a product first.");
    }
}