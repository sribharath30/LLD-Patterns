import { ICommand } from '../abstract-command/command';
import { Light } from '../receiver/light';

export class TurnOnLightCommand implements ICommand {
  private light: Light;
  constructor(light: Light) {
    this.light = light
  }
  execute(): void {
    this.light.turnOn();
  }
  undo(): void {
    this.light.turnOff();
  }
}
