import { ICommand } from '../abstract-command/command';
import { Light } from '../receiver/light';

export class TurnOffLightCommand implements ICommand {
  private light: Light;
  constructor(light: Light) {
    this.light = light;
  }
  execute(): void {
    this.light.turnOff();
  }
  undo(): void {
    this.light.turnOn();
  }
}
