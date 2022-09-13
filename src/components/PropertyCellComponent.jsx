import './styles/cell.css'

const PropertyCellComponents = ({ cell, player1, player2 }) => {

    let p1Position
    let p2Position
    let curPlayer 
    // player1.turn ? curPlayer = player1 : curPlayer = plya

    if(player1.position === cell.x){
      p1Position = <div className="playerPositionContainer">X</div>
    } else {
      p1Position = <div className=""></div>
    }
    
    if(player2.position === cell.x){
      p2Position = <div className="playerPositionContainer">O</div>
    } else {
      p2Position = <div className=""></div>
    }

    // console.log(player1.position, cell.x)

    return (
      <div className={['cell', cell.color, cell.x, cell.rotation, cell.type].join(' ')}>
        <div className="container">
            <div className={['color-bar', cell.color].join(' ')}></div>
            <div className="name">{cell.name}</div>
            {p1Position}
            {p2Position}
            <div className="price">{`${cell.x}`}</div>
        </div>
      </div>
    )
}

export default PropertyCellComponents