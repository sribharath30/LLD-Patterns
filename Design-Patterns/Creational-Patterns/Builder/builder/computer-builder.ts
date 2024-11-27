import { Builder } from "../abstract-builer/builder";
import { Computer } from "../concrete-product/computer";

export class ComputerBuilder implements Builder{
    private computer: Computer
    constructor(){
        this.computer = new Computer();
    }
    setCPU(cpu: any): Builder {
        this.computer.cpu = cpu;
        return this;
    }
    setRAM(ram: any): Builder {
        this.computer.ram = ram;
        return this;
    }
    setStorage(storage: any): Builder {
        this.computer.storage = storage;
        return this;
    }
    setGPU(gpu: any): Builder {
        this.computer.gpu = gpu;
        return this;
    }
    setWaterCooling(isWaterCooled: any): Builder {
        this.computer.isWaterCooled = isWaterCooled;
        return this;
    }
    build(): Computer {
        return this.computer;
    }   
}