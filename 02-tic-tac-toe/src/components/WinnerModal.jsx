import { Square } from "./Square"

export function WinnerModal  ({winner, resetGame}) {
    if (winner === null) return null

    const winnertext = winner === false ? 'Empate' : 'Gano:'

    return (
        <section className="winner">
            <div className="text">
            <h2>{winnertext}</h2>

            <header className="win">
                {winner && <Square>{winner}</Square>}
            </header>

            <footer>
                <button onClick={resetGame}>Empezar de Nuevo</button>
            </footer>
            </div>
        </section>
    )
}