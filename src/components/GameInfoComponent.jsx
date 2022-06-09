const GameInfoComponent = ({finishPlayerTurn, playerTurn}) => {
    console.log(playerTurn)
    return (
        <div className="">
            <div className="">
                <h2 className="label">Current Player's Turn: {playerTurn.name}</h2>
            </div>
            <div className="">
                <button onClick={finishPlayerTurn}>Finish Your Turn</button>
            </div>
        </div>
    )

}

export default GameInfoComponent