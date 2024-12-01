import { ICommand } from '../abstract-command/command';

export class RemoteControl {
  private command: ICommand | null = null;

  setCommand(command: ICommand) {
    this.command = command;
  }
  pressButton(): void {
    this.command?.execute();
  }
  pressUndo(): void {
    this.command?.undo();
  }
}
