const DiceComponent = ({setDice, dice}) => {

    return(
        <div className="">
            <div className="">
                <p>Dice Value: {dice[0]}</p>
                <p>Dice Value: {dice[1]}</p>
            </div>
            <div className="">
                <button onClick={setDice}>Roll The Dice</button>
            </div>
        </div>
    )
}

export default DiceComponent