import { TransportStrategy } from "../strategy-interface/transport-strategy";

export class WaterTransportStrategy implements TransportStrategy{
    transport(): void {
        console.log('Transporting via water..')
    }
    
}