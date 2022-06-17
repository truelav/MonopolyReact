import { Cell } from '../Cell'

export class PropertyCell extends Cell {
  
    constructor(x, color, rotation, name, price, type, owner) {
      super(x, color, rotation, name, type, price)
      this.x = x
      this.color = color
      this.id = Math.random()
      this.rotation = rotation
      this.name = name
      this.price = price
      this.type = type
      this.owner = owner | 'null'
    }

}