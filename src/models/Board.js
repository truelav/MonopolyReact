import { Cell } from "./Cell";
import { PropertyCell } from "./figures/PropertyCell";

const CellType =  {
  CORNER:"corner",
  CHANCE:'chance',
  COMMUNITY:'community',
  RAILROAD:"railroad",
  UNILITY:'untility',
  PROPERTY:'property',
  TAX:'tax'
}

export class Board {
  topCells = []
  rightCells = []
  botCells = []
  leftCells = []
  cornerCells = []

  boardObj = {
    0: {
      name: 'GO',
      color: 'corner',
      type: CellType.CORNER,
      price: 0,
    },
    1: {
      name: 'mediteranean avenue',
      color: 'brown',
      price: 60,
      rent: 6,
      type: CellType.PROPERTY,
      owner: 'null'
    },
    2: {
      name: 'community chest',
      color: 'none',
      type: CellType.COMMUNITY,
      price: 0,

    },
    3: {
      name: 'baltic avenue',
      color: 'brown',
      price: 60,
      rent: 6,
      type: CellType.PROPERTY,
      owner: 'null'
    },
    4: {
      name: 'income tax',
      color: 'none',
      tax: 200,
      type: CellType.TAX,
      price: 0,
    },
    5: {
      name: 'reading railroad',
      color: 'none',
      tax: 200,
      type: CellType.RAILROAD,
      price: 0,
    },
    6: {
      name: 'oriental avenue',
      color: 'gray',
      price: 60,
      rent: 6,
      type: CellType.PROPERTY,
      owner: 'null'
    },
    7: {
      name: 'Chance',
      color: 'none',
      type: CellType.CHANCE,
      price: 0,
    },
    8: {
      name: 'vermont avenue',
      color: 'gray',
      price: 60,
      rent: 6,
      type: CellType.PROPERTY
    },
    9: {
      name: 'connecticut avenue',
      color: 'gray',
      price: 60,
      rent: 6,
      type: CellType.PROPERTY
    },
    10: {
      name: 'Just Visiting',
      color: 'corner',
      type: CellType.CORNER,
      price: 0,
    },
    11: {
      name: 'st.charles place',
      color: 'purple',
      price: 60,
      rent: 6,
      type: CellType.PROPERTY
    },
    12: {
      name: 'reading railroad',
      color: 'none',
      tax: 200,
      type: CellType.RAILROAD,
      price: 0,
    },
    13: {
      name: 'state avenue',
      color: 'purple',
      price: 60,
      rent: 6,
      type: CellType.PROPERTY
    },
    14: {
      name: 'virginia avenue',
      color: 'purple',
      price: 60,
      rent: 6,
      type: CellType.PROPERTY
    },
    15: {
      name: 'pennsylvania railroad',
      color: 'none',
      tax: 200,
      type: CellType.RAILROAD,
      price: 0,
    },
    16: {
      name: 'st james place',
      color: 'orange',
      price: 60,
      rent: 6,
      type: CellType.PROPERTY
    },
    17: {
      name: 'community chest',
      color: 'none',
      type: CellType.COMMUNITY,
      price: 0,
    },
    18: {
      name: 'tennessee avenue',
      color: 'orange',
      price: 60,
      rent: 6,
      type: CellType.PROPERTY
    },
    19: {
      name: 'new york avenue',
      color: 'orange',
      price: 60,
      rent: 6,
      type: CellType.PROPERTY
    },
    20: {
      name: 'Free Parking',
      color: 'corner',
      type: CellType.CORNER,
      price: 0,
    },
    21: {
      name: 'kentucky avenue',
      color: 'red',
      price: 60,
      rent: 6,
      type: CellType.PROPERTY
    },
    22: {
      name: 'chance',
      color: 'none',
      tax: 200,
      type: CellType.CHANCE,
      price: 0,
    },
    23: {
      name: 'indiana avenue',
      color: 'red',
      price: 60,
      rent: 6,
      type: CellType.PROPERTY
    },
    24: {
      name: 'illinois avenue',
      color: 'red',
      price: 60,
      rent: 6,
      type: CellType.PROPERTY
    },
    25: {
      name: 'B & O railroad',
      color: 'none',
      tax: 200,
      type: CellType.RAILROAD,
      price: 0,
    },
    26: {
      name: 'st james place',
      color: 'yellow',
      price: 60,
      rent: 6,
      type: CellType.PROPERTY
    },
    27: {
      name: 'community chest',
      color: 'none',
      type: CellType.COMMUNITY,
      price: 0,
    },
    28: {
      name: 'tennessee avenue',
      color: 'yellow',
      price: 60,
      rent: 6,
      type: CellType.PROPERTY
    },
    29: {
      name: 'new york avenue',
      color: 'yellow',
      price: 60,
      rent: 6,
      type: CellType.PROPERTY
    },
    30: {
      name: 'go to jail',
      color: 'corner',
      type: CellType.CORNER,
      price: 0,
    },
    31: {
      name: 'pacific avenue',
      color: 'green',
      price: 60,
      rent: 6,      
      type: CellType.PROPERTY
    },
    32: {
      name: 'north carolina avenue',
      color: 'green',
      price: 60,
      rent: 6,
      type: CellType.PROPERTY
    },
    33: {
      name: 'community chest',
      color: 'none',
      type: CellType.COMMUNITY,
      price: 0,
    },
    34: {
      name: 'pennsylvania avenue',
      color: 'green',
      price: 60,
      rent: 6,
      type: CellType.PROPERTY
    },
    35: {
      name: 'short line',
      color: 'none',
      tax: 200,
      type: CellType.RAILROAD,
      price: 0,
    },
    36: {
      name: 'chance',
      color: 'none',
      type: CellType.CHANCE,
      price: 0,
    },
    37: {
      name: 'Park Place',
      color: 'blue',
      price: 60,
      rent: 6,
      type: CellType.PROPERTY
    },
    38: {
      name: 'luxury tax',
      color: 'none',
      type: CellType.TAX,
      price: 0,
    },
    39: {
      name: 'boardwalk',
      color: 'blue',
      price: 60,
      rent: 6,
      type: CellType.PROPERTY
    },

  }


  initCells() {

    for (let i = 1; i < 40; i++) {

      let currCell = this.boardObj[i]

      // console.log(currCell)

      if (i < 10) {

        if(currCell.type === 'property'){
          
          this.topCells.push(new PropertyCell(i, currCell.color, 'topCell', currCell.name, currCell.price , currCell.type, currCell.owner))

        } else {

          this.topCells.push(new Cell(i, currCell.color, 'topCell', currCell.name, currCell.type, currCell.price | 0, currCell.owner))
        
        }

      }
      if (i >= 11 && i <= 19) {
        this.rightCells.push(new Cell(i, currCell.color, 'rightCell', currCell.name, currCell.type, currCell.price | 0, currCell.owner))
      }
      if (i >= 21 && i <= 29) {
        this.botCells.unshift(new Cell(i, currCell.color, 'botCell', currCell.name, currCell.type, currCell.price | 0, currCell.owner))
      }
      if (i >= 31 && i <= 39) {
        this.leftCells.unshift(new Cell(i, currCell.color, 'leftCell', currCell.name, currCell.type, currCell.price | 0, currCell.owner))
      }
    }

  }

  addCommunityChests() {

  }

  addChanceCells() {

  }

  addProprieties() {
  }



}