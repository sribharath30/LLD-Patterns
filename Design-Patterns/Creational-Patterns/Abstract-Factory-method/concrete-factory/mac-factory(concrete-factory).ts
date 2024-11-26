import { GUIFactory } from "../abstract-factory/gui-factory(abstract-factory)";
import { Button } from "../abstract-products/button(abstract-product)";
import { Checkbox } from "../abstract-products/checkbox(abstract-product)";
import { MacButton } from "../concrete-products/mac-button(concrete-product)";
import { MacCheckbox } from "../concrete-products/mac-checkbox(concrete-product)";

 export class MacFactory implements GUIFactory{
     createButton(): Button {
         return new MacButton();
     }
     createCheckbox(): Checkbox {
         return new MacCheckbox();
     }
 }