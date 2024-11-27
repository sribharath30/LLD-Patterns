import { ComputerBuilder } from '../builder/computer-builder';
import { Computer } from '../concrete-product/computer';

export class WindowsDirector {
	static buildWindows(): Computer {
		const computerBuilder = new ComputerBuilder();
		return computerBuilder
			.setCPU('windows')
			.setGPU('nvidia')
			.setRAM('16GB')
			.setStorage('256GB')
			.setWaterCooling(false)
			.build();
	}
}
