import { PropertyCell } from "../models/figures/PropertyCell"

import './styles/cell.css'

const PropertyCellComponents = ({ cell }) => {

    return (
      <div className={['cell', cell.color, cell.x, cell.rotation, cell.type].join(' ')}>
        <div className="container">
            <div className={['color-bar', cell.color].join(' ')}></div>
            <div className="name">{cell.name}</div>
            <div className="price">{`${cell.price}`}</div>
        </div>
      </div>
    )
}

export default PropertyCellComponents