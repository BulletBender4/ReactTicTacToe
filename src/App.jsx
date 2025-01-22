import { useState } from "react";

import Header from "./assets/components/header/Header";
import Players from "./assets/components/players/Players";
import GameBoard from "./assets/components/gameBoard/GameBoard";
import Log from "./assets/components/log/Log";
import GameOver from "./assets/components/gameOver/GameOver.jsx";
import { WINNING_COMBINATIONS } from "./winningCombination.js"



const initialGameBoard = [[null, null, null], [null, null, null], [null, null, null]]


function derivedState(func) {
  let currentPlayerSymbol = "X";
  if (func.length > 0 && func[0].playerSymbol === "X") {
    currentPlayerSymbol = "O";
  }
  return currentPlayerSymbol;
}

function deriveWinningCondition(updatedGameBoard, playerNameDetail) {
  let winner = null;
  // to write the game logic we need the updated board details. so we took code related to updated gameboard from gameboard component
  // winning logic 

  for (let combination of WINNING_COMBINATIONS) {
    let first = updatedGameBoard[combination[0].row][combination[0].column];
    let second = updatedGameBoard[combination[1].row][combination[1].column];
    let third = updatedGameBoard[combination[2].row][combination[2].column];


    if (first && (first === second) && (second === third)) {
      winner = playerNameDetail[first];
    }

  }
  return winner;
}

function deriveUpdatedGameBoardButton(playerTurn) {
  let updatedGameBoard = [...initialGameBoard.map(innerArr => [...innerArr])]
  // let updatedGameBoard = initialGameBoard;
  for (let gameDetails of playerTurn) {
    const { square, playerSymbol } = gameDetails;
    const { row, col } = square;
    updatedGameBoard[row][col] = playerSymbol;
  }

  return updatedGameBoard;
}

function App() {

  const [playerNameDetail, setPlayerNameDetail] = useState({
    X: "Player1",
    O: "Player2"
  });

  function playerNameDetailsHandler(symbolKey, updatedNameValue) {
    setPlayerNameDetail((prevState) => {
      return {
        ...prevState,
        [symbolKey]: updatedNameValue
      }
    })
  }

  let [playerTurn, setPlayerTurn] = useState([]);

  // When it comes to "LOG" component if we create a separate state it leads to chaos bcz in gameBoard component we r managing 
  // most of the required data so it is better to manage one state to store one info so we will uplift the state from gameboard to app component
  // so all the data will be available to both GameBoard and Log component

  // creating state for log component

  const selectSquareHandler = (rowIndex, colIndex) => {
    // setActivePlayer((prevSate) => prevSate === "X" ? "O" : "X");


    setPlayerTurn((prevTurn) => {
      // let currentPlayerSymbol = "X";

      // if (prevTurn.length > 0 && prevTurn[0].playerSymbol === "X") {
      //   currentPlayerSymbol = "O";
      // }

      let currentPlayerSymbol = derivedState(prevTurn);
      const currentTurn = [{ square: { row: rowIndex, col: colIndex }, playerSymbol: currentPlayerSymbol }, ...prevTurn];

      return currentTurn;

    })

  }
  function rematchHandler() {
    // playerTurn = [];
    setPlayerTurn([]);
  }
  const activePlayerDetails = derivedState(playerTurn);
  //Rematch button logic && updating the playerTurn state 
  const updatedGameBoard = deriveUpdatedGameBoardButton(playerTurn);

  let winner = deriveWinningCondition(updatedGameBoard, playerNameDetail);
  // Condition 2: Code for game over condition
  let gameDraw = (playerTurn.length === 9 && (!winner))




  return (
    <>
      <Header />
      <div id="game-container">
        <Players activePlayer={activePlayerDetails} winnerName={playerNameDetailsHandler} playerName={playerNameDetail} />
        {(winner || gameDraw) && < GameOver isWinner={winner} btnHandler={rematchHandler} />}
        <GameBoard onSelectSquare={selectSquareHandler} updatedBoard={updatedGameBoard} isWinner={(winner) ? true : false} />

      </div>

      <Log logDetails={playerTurn} />

    </>
  )

}
export default App
