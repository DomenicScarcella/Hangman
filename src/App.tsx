import { useCallback, useEffect, useState } from "react"
import { HangmanDrawing } from "./HangmanDrawing"
import { HangmanWord } from "./HangmanWord"
import { Keyboard } from "./Keyboard"
import words from "./wordList.json"

function getWord() {
  return words[Math.floor(Math.random() * words.length)]
}

function App() {
  const [wordToGuess, setWordToGuess] =  useState(getWord())
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectLetters = guessedLetters.filter( letter => !wordToGuess.includes(letter))

  const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter))
  const isLoser = incorrectLetters.length >= 6

  const addGuessedLetter = useCallback((letter: string) => {
    if (guessedLetters.includes(letter) || isWinner || isLoser) return

    setGuessedLetters(currentLetters => [...currentLetters, letter])
  }, [guessedLetters, isWinner, isLoser])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key

      if (!key.match(/^[a-z]$/)) return
      e.preventDefault()
      addGuessedLetter(key)
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [guessedLetters])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key

      if (key !== "Enter") return

      e.preventDefault()
      setGuessedLetters([])
      setWordToGuess(getWord())
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [])

  return (
    <div
      style={{
        height: "50vw",
        maxHeight: "400px",
        minHeight: "240px",
        width: "100%",
        maxWidth: "800px",
        minWidth: "480px",
        display: "flex",
        flexDirection: "row",
        margin: "auto",
        alignItems: "center"
      }}
    >
      <div
        style={{
          width: "32%",
          flexDirection: "column",
          margin: "0"
        }}
      >
        <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      </div>
      <div style={{ width: "4%" }} />
      <div
        style={{
          height: "50vw",
          maxHeight: "400px",
          width: "64%",
          flexDirection: "column",
          textAlign: "center"
        }}
      >
        <div style={{ fontSize: "1.25rem", padding: "2% 0 3% 0" }}>
          {isWinner && "YOU WIN!"}
          {isLoser && "You're out of guesses :-("}
          {!isWinner && !isLoser && "Let's play Hangman!  Guess a letter:"}
        </div>
        
        <HangmanWord reveal={isLoser} guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
        
        <div style={{ alignSelf: "stretch", padding: "5% 2% 5% 0" }}>
          <Keyboard
            disabled={isWinner || isLoser}
            activeLetters={guessedLetters.filter(letter => wordToGuess.includes(letter)
            )}
            inactiveLetters={incorrectLetters}
            addGuessedLetter={addGuessedLetter}
          />
        </div>

        <div style={{ fontSize: "1rem" }}>
          {"Refresh or press Enter for new game"}
        </div>

      </div>
    </div>
  )

}

export default App
