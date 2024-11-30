import { RoadTransportStrategy } from "./concrete-strategies/road-transport-strategy";
import { WaterTransportStrategy } from "./concrete-strategies/water-transport-strategy";
import { TransportContext } from "./context/transport-context";

const roadStrategy = new RoadTransportStrategy();
const waterTransportStrategy = new WaterTransportStrategy();

const transportContext = new TransportContext(roadStrategy);//setting to road
transportContext.executeTransport();
transportContext.setStrategy(waterTransportStrategy);
transportContext.executeTransport();