import { Cell } from "../models/Cell"

import './styles/cell.css'

const CellComponent = ({ cell }) => {

  console.log(cell)
  if (cell.color !== 'corner' && cell.color !== 'none') {
    return (
      <div className={['cell', cell.x, cell.rotation, 'propertiesCell'].join(' ')}>
        <div className={['coloredCell', cell.color].join(' ')}></div>
        <div className="bodyCell">
          {cell.x}
          <p className="cellName">{cell.name}</p>
        </div>
      </div>
    )
  } if (cell.color === 'corner') {
    return <div className={['cell', cell.color, cell.x, cell.rotation].join(' ')}>
      {cell.x}
      <p className="cellName">{cell.name}</p>
    </div>
  } else {
    return (
      <div className={['cell', cell.color, cell.x, cell.rotation].join(' ')}>
        <p className="cellName">{cell.name}</p>
        {cell.x}
        {/* {cell.figure?.logo && <img src={cell.figure.logo} alt="Monopoly Cell" className="figure" />} */}
      </div>
    )
  }
}

export default CellComponent