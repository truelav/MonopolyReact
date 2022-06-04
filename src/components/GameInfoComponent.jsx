const GameInfoComponent = ({finishPlayerTurn}) => {

    return (
        <div className="">
            <div className="">
                <h2 className="label">Current Player's Turn</h2>
            </div>
            <div className="">
                <button onClick={finishPlayerTurn}>Finish Your Turn</button>
            </div>
        </div>
    )

}

export default GameInfoComponent