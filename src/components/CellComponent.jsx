import PropertyCellComponent from "./PropertyCellComponent";

import './styles/cell.css'


const CellComponent = ({ cell, player1, player2 }) => {



  if(cell.type === 'property'){
    return (
      <PropertyCellComponent cell={cell} player1={player1} player2={player2}/>
    )
  } else {
    return (
      <div className={['cell', cell.color, cell.x, cell.rotation].join(' ')}>
        <div className="container">
          <div className="name">{cell.name}</div>
          <p>{cell.x}</p>
        </div>
      </div>
    )
  }
}

export default CellComponent