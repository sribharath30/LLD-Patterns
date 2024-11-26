import { Button } from "../abstract-products/button(abstract-product)";

export class MacButton implements Button {
    click():void {
        console.log('Clicked from mac button');
    }
}