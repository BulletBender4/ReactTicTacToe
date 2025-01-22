import './gameOver.css'

export default function GameOver({ isWinner, btnHandler }) {
    return (
        <>
            <div id="game-over">
                <h1> Game Over</h1>
                {(isWinner) && <p> {isWinner}, won!!!</p>}
                {(!isWinner) && <p> It's a draw</p>}
                <p><button onClick={btnHandler}>Re-match</button></p>
            </div >
        </>
    )
}