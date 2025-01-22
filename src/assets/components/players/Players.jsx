import Player from "../player/Player"
import './players.css'
export default function Players({ activePlayer, winnerName, playerName }) {

    return (
        <ol id="players" className="highlight-player">
            <Player isActive={activePlayer === "X"} playerSymbol="X" winnerName={winnerName} playerName={playerName.X}></Player>
            <Player isActive={activePlayer === "O"} playerSymbol="O" winnerName={winnerName} playerName={playerName.O}></Player>
        </ol>
    )
}


