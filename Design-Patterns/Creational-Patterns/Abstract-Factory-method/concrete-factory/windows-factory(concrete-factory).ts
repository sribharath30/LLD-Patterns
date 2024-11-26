import { GUIFactory } from "../abstract-factory/gui-factory(abstract-factory)";
import { Button } from "../abstract-products/button(abstract-product)";
import { Checkbox } from "../abstract-products/checkbox(abstract-product)";
import { WindowsButton } from "../concrete-products/windows-button(concrete-product)";
import { WindowsCheckbox } from "../concrete-products/windows-checkbox(concrete-product)";

export class WindowsFactory implements GUIFactory {
    createButton(): Button {
        return new WindowsButton();
    }
    createCheckbox(): Checkbox {
        return new WindowsCheckbox();
    }
    
}