import { useState } from 'react'
import './player.css'

export default function Player({ playerSymbol, playerName, isActive, winnerName }) {

    const [isEditing, setBtnValue] = useState(false);

    const [initialPlayerName, setPlayerName] = useState(playerName);

    let playerDetails = <span className='player-name'>{initialPlayerName}</span>
    let btnName = "Edit";
    function handleBtnClick() {
        setBtnValue((previousState) => !previousState);
        if (isEditing) {
            winnerName(playerSymbol, initialPlayerName);
        }


    }

    function handlePlayerName(e) {
        setPlayerName(e.target.value);
    }

    if (isEditing) {
        playerDetails = <input type="text" required onChange={(e) => { handlePlayerName(e) }} value={initialPlayerName} />
        btnName = "Save";
    }



    return (
        <li className={isActive ? "active" : undefined}>
            <span id="player">
                <span>
                    {playerDetails}
                    <span className='player-symbol'>{playerSymbol}</span>
                </span>
                <button onClick={handleBtnClick}>{btnName}</button>
            </span>
        </li>
    )
}