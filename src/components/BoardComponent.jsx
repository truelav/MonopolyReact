
import GameInfoComponent from './GameInfoComponent';
import CellComponent from './CellComponent'
import DiceComponent from "./DiceComponent";

import './styles/board.css'


const BoardComponent = ({ board, setBoard, setDice, dice, finishPlayerTurn, playerTurn, player1, player2}) => {

  // const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

  // function selectCellOnClick(cell: Cell){
  //   console.log(cell)
  //   if(cell.figure) setSelectedCell(cell)
  // }

  // useEffect( () => {
  //   highlightCells()
  // }, [selectedCell])

  // function highlightCells(){
  //   board.highlightCells(selectedCell)
  //   updateBoard()
  // }

  // function updateBoard(){
  //   const newBoard = board.getCopyBoard()
  //   setBoard(newBoard)
  // }


  return (

    <div className="table">
      <div className="board">

        <div className="center">
          <div className="community-chest-deck">
            <h2 className="label">Community Chest</h2>
            <div className="deck">            </div>
          </div>

          <div className="gameInfoContainer">
            <GameInfoComponent finishPlayerTurn={finishPlayerTurn} playerTurn={playerTurn}/>

            <DiceComponent setDice={setDice} dice={dice}/>
          </div>

          <div className="chance-deck">
            <h2 className="label">Chance</h2>
            <div className="deck"></div>
          </div>
        </div>

        <div className="cell corner go">
          <div className="container">
            <div className="instructions">Collect $200.00 salary as you pass</div>
            <div className="go-word">go</div>
          </div>
          <div className="arrow fa fa-long-arrow-left"></div>
        </div>

        <div className='row horizontal-row top-row'>
          {board.topCells.map((cell, index) =>
            <CellComponent cell={cell} key={cell.id} player1={player1} player2={player2}/>
          )}
        </div>

        <div className="cell corner visiting">
          <div className="container">
            <div className="instructions">Just Visting</div>
            <div className="go-word">Jail</div>
          </div>
          <div className="arrow fa fa-long-arrow-left"></div>
        </div>

        <div className='row vertical-row right-row'>
          {board.rightCells.map((cell, index) =>
            <CellComponent cell={cell} key={cell.id} player1={player1} player2={player2}/>
          )}
        </div>

        <div className="cell corner jail">
          <div className="container">
            <div className="instructions">Go to Jail</div>
            <div className="go-word">Jail</div>
          </div>
          <div className="arrow fa fa-long-arrow-left"></div>
        </div>


        <div className='row horizontal-row bottom-row'>
          {board.botCells.map((cell, index) =>
            <CellComponent cell={cell} key={cell.id} player1={player1} player2={player2}/>
          )}
        </div>


        <div className="cell corner parking">
          <div className="container">
            <div className="instructions">Free Parking</div>
            <div className="go-word">go</div>
          </div>
          <div className="arrow fa fa-long-arrow-left"></div>
        </div>


        <div className='row vertical-row left-row'>
          {board.leftCells.map((cell, index) =>
            <CellComponent cell={cell} key={cell.id} player1={player1} player2={player2}/>
          )}
        </div>

      </div>
    </div>
  )

}

export default BoardComponent