import { ReservationSystem } from "./reservation-system";

const reservationSystem = ReservationSystem.getInstance();
const customerId = reservationSystem.addCustomer('bharath','shgshgghs','53653763');
const car = reservationSystem.addCar('tesla','2002','dtsbsj563',23);
const car2 = reservationSystem.addCar('sssa','20202','dtsbsj56ss3',22);
reservationSystem.addReservation(car,customerId,new Date(),new Date());
reservationSystem.addReservation(car2,customerId,new Date(),new Date());
reservationSystem.makePayment('PayPal');
console.log(reservationSystem);