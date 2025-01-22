import './log.css'

export default function Log({ logDetails, activePlayer }) {
    // console.log(logDetails);
    return (<ol id="log">
        {logDetails.map((details, index) => { return <li key={index} className={(index === 0) ? "highlighted" : null}> {details.playerSymbol} selected {details.square.row}, {details.square.col} </li> })

        }
    </ol>)
}