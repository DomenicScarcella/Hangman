type HangmanWordProps = {
    guessedLetters: string[]
    wordToGuess: string
    reveal?: boolean
}

export function HangmanWord( {guessedLetters, wordToGuess, reveal=false}: HangmanWordProps ) {

    return (
        <div
            style={{
                display: "flex",
                gap: ".2em",
                fontSize: "1.75rem",
                fontWeight: "bold",
                fontFamily: "monospace",
                justifyContent: "center",
                wordWrap: "normal"
            }}
        >
            {wordToGuess.split("").map((letter, index) => (
                <span style={{  borderBottom: ".1em solid black" }} key={index}>
                    <span
                        style={{
                            visibility: guessedLetters.includes(letter) || reveal ? "visible" : "hidden",
                            color: !guessedLetters.includes(letter) && reveal ? "red" : "darkgreen"
                        }}
                    >{letter.toUpperCase()}</span>
                </span>
            ))}

        </div>
    )
}
