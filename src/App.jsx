import { useEffect, useState } from 'react';
import { Board } from './models/Board';
import { Player } from './models/Player';
import BoardComponent from './components/BoardComponent'

import './App.css';

function App() {

  const [board, setBoard] = useState(new Board())

  const [player1, setPlayer1] = useState(new Player('player1', 'U+1F697', 1, true, 1000, []))
  const [player2, setPlayer2] = useState(new Player('player2', 'U+1F3A9', 3, false, 1000, []))

  const [dice, setDice] = useState([0, 0, 0])

  const [playerTurn, setPlayerTurn] = useState(player1)
  // const [playerTurn, setPlayerTurn] = useState([])

  useEffect(() => {
    restart()
  }, [])

  function restart() {
    const newBoard = new Board()
    newBoard.initCells()

    //add players
    const p1 = player1
    setPlayer1(p1)

    const p2 = player2
    setPlayer2(p2)

    // newBoard.addFigures()
    setBoard(newBoard)

    console.log(player1, player2)
  }

  const rollDice = () => {
    let dice1 = Math.floor(Math.random() * (6 - 1) + 1); 
    let dice2 = Math.floor(Math.random() * (6 - 1) + 1);

    console.log(dice1, dice2)

    setDice([dice1, dice2, dice1 + dice2])
    updatePlayerPosition(dice1 + dice2)
  }

  const changePlayerTurn = () => {
    playerTurn === player1 ? setPlayerTurn(player2) : setPlayerTurn(player1)
  }

  const finishPlayerTurn = () => {
    changePlayerTurn()
  }

  const updatePlayerMove  = () => {

  }

  const updatePlayerPosition = (pos) => {
    let currentPlayer = playerTurn
    currentPlayer.position += pos
    
    if(playerTurn.name === player1.name){
      setPlayer1(currentPlayer)
    } else {
      setPlayer2(currentPlayer)
    }
  }

  return (
    <div className="App">
      <BoardComponent 
        board={board} 
        setBoard={setBoard} 
        setDice={rollDice} 
        dice={dice}
        finishPlayerTurn={finishPlayerTurn}
        playerTurn={playerTurn}
        player1={player1}
        player2={player2}
      />
    </div>
  );
}

export default App;
