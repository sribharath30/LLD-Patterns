import { Coin } from "./coin";
import { Note } from "./note";
import { Product } from "./product";

export interface State {
    selectProduct(product: Product);

    insertCoin(coin: Coin);

    insertNote(note: Note);

    dispenseProduct();

    returnChange();
}