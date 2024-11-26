import { Button } from "../abstract-products/button(abstract-product)";
import { Checkbox } from "../abstract-products/checkbox(abstract-product)";

export interface GUIFactory {
    createButton(): Button;
    createCheckbox(): Checkbox;
}