import { IBookingRoomInfo } from './BookingRoomInfo';

export interface IBooking {
  customerName : string,
  email : string,
  phoneNo : string,
  address : string,
  duration : {}
  paymentStatus : string,
  roomDescription : IBookingRoomInfo[]
}
