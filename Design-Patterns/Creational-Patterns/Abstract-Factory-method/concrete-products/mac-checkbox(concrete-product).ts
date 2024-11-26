import { Checkbox } from "../abstract-products/checkbox(abstract-product)";

export class MacCheckbox implements Checkbox {
    select(): void {
        console.log('Selected from mac checkbox')
    }
}