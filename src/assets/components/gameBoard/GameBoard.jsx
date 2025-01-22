import React from 'react'
import { useState } from 'react'
import './gameBoard.css'


export default function GameBoard({ onSelectSquare, updatedBoard, isWinner }) {

    // function commentedFunc(){
    // let updatedGameBoard = initialGameBoard;
    // for (let gameDetails of playerTurn) {
    //     const { square, playerSymbol } = gameDetails;

    //     const { row, col } = square;
    //     updatedGameBoard[row][col] = playerSymbol;
    // }


    // const [initialBoard, setInitialBoard] = useState(initialGameboard);


    // function clickHandler(rowIndex, colIndex) {
    //     setInitialBoard((prevBoard) => {
    //         const updatedBoard = [...prevBoard.map((innerEle) => [...innerEle])];
    //         // updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedBoard;
    //     })
    //     onSelectSquare();
    // }

    // }


    return (
        <div id="game-board">
            <ol>
                {updatedBoard.map((row, rowIndex) => (<li key={rowIndex}><ol>
                    {row.map((col, colIndex) => (<li key={colIndex}><button disabled={(col !== null) || (isWinner)} onClick={() => onSelectSquare(rowIndex, colIndex)} >{col}</button></li>))}
                </ol></li>))}
            </ol>
        </div>

    )
}

