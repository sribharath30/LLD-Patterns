import { TurnOffLightCommand } from './command/turn-off-light-command';
import { TurnOnLightCommand } from './command/turn-on-light-command';
import { RemoteControl } from './invoker/remote-control';
import { Light } from './receiver/light';

const light = new Light();
const turnOnCommand = new TurnOnLightCommand(light);
const turnOffCommand = new TurnOffLightCommand(light);

const remote = new RemoteControl();
remote.setCommand(turnOnCommand);
remote.pressButton();
remote.pressUndo();
remote.setCommand(turnOffCommand);
remote.pressButton();
remote.pressUndo();
