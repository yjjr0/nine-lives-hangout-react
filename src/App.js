import {useState, useRef, useEffect} from "react";
import {getRandomWord, getFarewellText} from "./components/utils"
import ReactConfetti from "react-confetti";

function App() {
  // state variables
  const [currentWord, setCurrentWord] = useState(() => getRandomWord());
  const [guessedLetters, setGuessedLetters] = useState([]);
  const buttonRef = useRef(null);

  //game-status
  const wrongGuessCount = guessedLetters.filter(letter =>
    !currentWord.includes(letter)).length;
  const isGameWon = currentWord.split("").every(letter =>
    guessedLetters.includes(letter));
  const isGameLost = wrongGuessCount >= 9
  const isGameOver = isGameWon || isGameLost
  const lastGuess = guessedLetters[guessedLetters.length - 1]
  const isLastGuessIncorrect = lastGuess && !currentWord.includes(lastGuess);

  function renderGameStatus() {
    if (!isGameOver && isLastGuessIncorrect) {
      return <p>{getFarewellText()}</p>;
    }
    if (isGameWon) {
      return <h2>You Win!</h2>
    }
    if (isGameLost) {
      return <h2>Game Over!</h2>
    }
    
    return null;
  }

  function startNewGame() {
    setCurrentWord(getRandomWord());
    setGuessedLetters([]);
  }

  useEffect(() => {
    if (isGameOver) {
      buttonRef.current.focus()
    }
  }, [isGameOver]);

  // lives-status
  const lives = new Array(9).fill(0).map((life, index) => {
    const isLost = index < wrongGuessCount;
    return (
      <img className="life"
        src={isLost ? "static/cat-lives-lost.png" : "static/cat-lives.png"}
        alt="life"
        key={index}/>)});

  // word-status
  const letterElements = currentWord.split("").map((letter, index) =>
    <span key={index} className={isGameLost && !guessedLetters.includes(letter) ? "missed-letter" : ""}>
      {isGameLost || guessedLetters.includes(letter)
        ? letter.toUpperCase()
        : ""}
    </span>);

  // keyboard-status
  const alphabets = "qwertyuiopasdfghjklzxcvbnm";

  function addGuessedLetters(letter) {
    setGuessedLetters(prevLetter =>
      prevLetter.includes(letter)
        ? prevLetter
        : [...prevLetter, letter]);
  }

  const keyboardElements = alphabets.split("").map(alphabet => {
    const isGuessed = guessedLetters.includes(alphabet);
    const isCorrect = isGuessed && currentWord.includes(alphabet);
    const isWrong = isGuessed && !currentWord.includes(alphabet);

    return (
    <button key={alphabet}
      disabled={isGameOver}
      onClick={() => addGuessedLetters(alphabet)}
      className={isCorrect ? "correct" : isWrong ? "wrong" : ""}>
        {alphabet.toUpperCase()}
    </button>)
  });

  return (
    <main>
      {isGameWon && <ReactConfetti />}
      <header>
        <h1>Nine Lives Hangout</h1>
        <p>Guess the word within 9 attempts!</p>
        <p>Hint: cat-themed</p>
      </header>
      <section className={isGameWon ? "game-status won" : isGameLost ? "game-status lost" : "game-status farewell-msg"}>
        {renderGameStatus()}
      </section>
      <section className="lives-status">
        {lives}
      </section>
      <section className="word-status">
        {letterElements}
      </section>
      <section className="keyboard-status">
        <div className="keyboard-row">
          {keyboardElements.slice(0, 10)}
        </div>
        <div className="keyboard-row">
          {keyboardElements.slice(10, 19)}
        </div>
        <div className="keyboard-row">
          {keyboardElements.slice(19)}
        </div>
      </section>
      <section className="new-game">
        {isGameOver && <button onClick={startNewGame} ref={buttonRef}>NEW GAME</button>}
      </section>
    </main>
  );
}

export default App;
