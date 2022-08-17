import { useEffect, useState } from "react";
import words from "../../data/words";

function RandomWordGen() {
  const [selectedWord, setSelectedWord] = useState("await");

  function getWordIndex() {
    return Math.floor(Math.random() * words.length);
  }

  function handleOnClick() {
    setSelectedWord(words[getWordIndex()]);
  }

  useEffect(() => {
    setSelectedWord(words[getWordIndex()]);
  }, []);

  useEffect(() => {}, [selectedWord]);
  return (
    <div className="widget-page-content-container">
      <h2>The word is:</h2>
      <h1>{selectedWord}</h1>
      <button className="new-word-button" onClick={handleOnClick}>
        New Word
      </button>
    </div>
  );
}

export default RandomWordGen;
