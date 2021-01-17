import { ISubImages } from './ISubImage';

export interface IRooms {
  _id : String,
  roomName : String,
  roomType : String,
  price : Number,
  description : String,
  mainImage : String,
  subImage : ISubImages[]
}
