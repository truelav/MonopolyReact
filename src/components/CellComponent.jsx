import { Cell } from "../models/Cell"
import { PropertyCell } from "../models/figures/PropertyCell";
import PropertyCellComponent from "./PropertyCellComponent";

import './styles/cell.css'


const CellComponent = ({ cell }) => {

  if(cell.type === 'property'){
    return (
      <PropertyCellComponent cell={cell}/>
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