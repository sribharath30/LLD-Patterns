import { Coin } from "./coin";
import { DispenseState } from "./dispense-state";
import { IdleState } from "./idle-state";
import { Inventory } from "./inventory";
import { Note } from "./note";
import { Product } from "./product";
import { ReadyState } from "./ready-state";
import { ReturnChangeState } from "./return-change-state";
import { State } from "./state";

export class VendingMachine {
    private instance: VendingMachine;
    inventory: Inventory;
    private idleState: IdleState;
    private readyState: ReadyState;
    private dispenseState: DispenseState;
    private returnChangeState: ReturnChangeState;
    private currentState: State
    private selectedProduct: Product;
    private totalPayment: number;

    constructor(){
        this.inventory = new Inventory();
        this.idleState = new IdleState(this);
        this.readyState = new ReadyState(this);
        this.dispenseState = new DispenseState(this);
        this.returnChangeState = new ReturnChangeState(this);
        this.currentState = this.idleState;
        this.selectedProduct = null as unknown as Product;
        this.totalPayment = 0.0;
    }

    private getInstance(){
        if(!this.instance){
            this.instance =  new VendingMachine();
        }
        return this.instance;
    }
    public selectProduct(product: Product): void {
        this.currentState.selectProduct(product);
    }

    public insertCoin(coin: Coin): void {
        this.currentState.insertCoin(coin);
    }

    public insertNote(note: Note): void {
        this.currentState.insertNote(note);
    }

    public dispenseProduct(): void {
        this.currentState.dispenseProduct();
    }

    public returnChange(): void {
        this.currentState.returnChange();
    }

    public setState(state: State): void {
        this.currentState = state;
    }

    public getIdleState(): State {
        return this.idleState;
    }

    public getReadyState(): State {
        return this.readyState;
    }

    public getDispenseState(): State {
        return this.dispenseState;
    }

    public getReturnChangeState(): State {
        return this.returnChangeState;
    }

    public getSelectedProduct(): Product {
        return this.selectedProduct;
    }

    public setSelectedProduct(product: Product): void {
        this.selectedProduct = product;
    }

    public resetSelectedProduct(): void {
        this.selectedProduct = null as unknown as Product;
    }

    public getTotalPayment(): number {
        return this.totalPayment;
    }

    public addCoin(coin: Coin): void {
        this.totalPayment += coin.getValue();
    }

    public addNote(note: Note): void {
        this.totalPayment += note.getValue();
    }

    public resetPayment(): void {
        this.totalPayment = 0;
    }
}