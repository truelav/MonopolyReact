import { Board } from './Board'

export class Cell {


  constructor( x, color, rotation, name, type, price) {
    this.x = x
    this.color = color
    this.rotation = rotation;
    this.id = Math.random()
    this.name = name
    this.type = type
    this.price = price
  }

}