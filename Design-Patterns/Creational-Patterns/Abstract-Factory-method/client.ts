import { GUIFactory } from "./abstract-factory/gui-factory(abstract-factory)";
import { MacFactory } from "./concrete-factory/mac-factory(concrete-factory)";
import { WindowsFactory } from "./concrete-factory/windows-factory(concrete-factory)";

function renderGUI(factory: GUIFactory){
    factory.createButton().click();
    factory.createCheckbox().select();
}

function render(os: 'windows' | 'mac'): void{
    let factory
    if(os == 'windows'){
        factory = new WindowsFactory();
    }else{
        factory = new MacFactory();
    };
    renderGUI(factory);
}
render('mac');