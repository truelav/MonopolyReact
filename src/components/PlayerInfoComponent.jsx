
const PlayerInfoContainer = ( {name, turn, money, properties, currentCell}) => {

    const currentPlayerTurn = {
        color: 'green',
    }

    const notCurrentPlayerTurn = {
        color: 'red',
    }

    let currentTurn

    if(turn){
        currentTurn = <div style={currentPlayerTurn}>It's your turn now</div>
    } else {
        currentTurn = <div style={notCurrentPlayerTurn}>Wait for another player</div>
    }

    return (
        <div className="">
            <div className="">
                <h2 className="label">{name}</h2>
            </div>
            <div className="">
                <p>${money}</p>
                {currentTurn}
                {properties.map((property, i) => {
                    <p>{property}</p>
                })}
            </div>
            <div>
                <p>Your Current Position: <br/> {currentCell.name}</p>
                <p> {currentCell.owner}</p>
            </div>
        </div>
    )

}

export default PlayerInfoContainer