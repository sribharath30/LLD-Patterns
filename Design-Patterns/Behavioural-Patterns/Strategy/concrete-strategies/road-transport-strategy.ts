import { TransportStrategy } from "../strategy-interface/transport-strategy";

export class RoadTransportStrategy implements TransportStrategy {
    transport(): void {
       console.log('Transporting via road...');
    }
    
}