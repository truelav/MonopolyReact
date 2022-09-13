export class Player {

    constructor(name, figure, position, turn, money, properties){
        this.name = name
        this.figure = figure
        this.position = position
        this.turn = turn
        this.money = money
        this.properties = properties
    }

    handleBuy = (property) => {
        if(property.owner === this.name){
            console.log('you can buy this')
        } else {
            console.log('this property is already taken')
        }
    }
}