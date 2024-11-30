import { TransportStrategy } from "../strategy-interface/transport-strategy";

export class TransportContext{
    strategy: TransportStrategy;
    constructor(strategy: TransportStrategy){
        this.strategy = strategy;
    }
    setStrategy(strategy: TransportStrategy){
        this.strategy = strategy;
    }
    executeTransport(){
        this.strategy.transport();
    }
}