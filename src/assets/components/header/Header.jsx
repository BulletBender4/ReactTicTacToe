import headerImage from "../../../../public/game-logo.png";
import './header.css';

export default function Header() {
    return (
        <>
            <header>
                <img src={headerImage} alt="Tic tac toe main game image" />
                <h1>React Tic-Tac-Toe</h1>
            </header>
        </>
    )
}