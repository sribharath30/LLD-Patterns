import { Computer } from "../concrete-product/computer"

export interface Builder{
    setCPU(cpu): Builder
    setRAM(ram): Builder
    setStorage(storage): Builder
    setGPU(gpu): Builder
    setWaterCooling(isWaterCooled): Builder
    build(): Computer
}