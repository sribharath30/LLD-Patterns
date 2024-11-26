import { Checkbox } from "../abstract-products/checkbox(abstract-product)";

export class WindowsCheckbox implements Checkbox {
    select(): void {
        console.log('Selected from windows checkbox')
    }
}