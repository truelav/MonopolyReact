import PropertyCellComponent from "./PropertyCellComponent";

import './styles/cell.css'


const CellComponent = ({ cell, player1, player2 }) => {

  let p1Position
  let p2Position
  
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

  if(cell.type === 'property'){
    return (
      <PropertyCellComponent cell={cell} player1={player1} player2={player2}/>
    )
  } else {
    return (
      <div className={['cell', cell.color, cell.x, cell.rotation].join(' ')}>
        <div className="container">
          <div className="name">{cell.name}</div>
            {p1Position}
            {p2Position}
          <p>{cell.x}</p>
        </div>
      </div>
    )
  }
}

export default CellComponent