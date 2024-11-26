import { Button } from "../abstract-products/button(abstract-product)";

export class WindowsButton implements Button {
    click():void {
        console.log('Clicked from windows button');
    }
}