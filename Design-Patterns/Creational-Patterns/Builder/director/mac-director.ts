import { ComputerBuilder } from '../builder/computer-builder';
import { Computer } from '../concrete-product/computer';

export class MacDirector {
  static buildMac(): Computer {
    const computerBuilder = new ComputerBuilder();
    return computerBuilder
      .setCPU('mac')
      .setGPU('nvidia')
      .setRAM('16GB')
      .setStorage('256GB')
      .setWaterCooling(false)
      .build();
  }
}
