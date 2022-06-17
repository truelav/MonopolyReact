import { useEffect, useState } from 'react';
import { Board } from './models/Board';
import { Player } from './models/Player';
import BoardComponent from './components/BoardComponent'
import PlayerInfoContainer from './components/PlayerInfoComponent';

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

    console.log(board)
  }

  const rollDice = () => {
    let dice1 = Math.floor(Math.random() * (6 - 1) + 1); 
    let dice2 = Math.floor(Math.random() * (6 - 1) + 1);

    setDice([dice1, dice2, dice1 + dice2])
    updatePlayerPosition(dice1 + dice2)

    console.log(board.boardObj[playerTurn.position])
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
    
    //check first is we crossed the GO\
    if(currentPlayer.position > 39){
      currentPlayer.position  = currentPlayer.position % 39

      //collect $200 from the bank
    }

  
    
    if(playerTurn.name === player1.name){
      setPlayer1(currentPlayer)
    } else {
      setPlayer2(currentPlayer)
    }
  }

  const buyProperty = (player, property) => {
    //check if available
    //check if enough funds
    //make transaction
  }

  return (
    <div className="App">
      <PlayerInfoContainer 
        name={player1.name}
        turn={player1.turn}
        money={player1.money}
        properties={player1.properties}
        currentCell={board.boardObj[playerTurn.position]}
      />
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
      <PlayerInfoContainer 
        name={player2.name}
        turn={player2.turn}
        money={player2.money}
        properties={player2.properties}
        currentCell={board.boardObj[playerTurn.position]}
      />
    </div>
  );
}

export default App;
