import { useEffect, useState } from "react";

import words from "../../data/words";

function WordOfTheDay() {
  const [selectedWord, setSelectedWord] = useState("await");
  const [definition, setDefinition] = useState("");

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

  // console.log(words[getWordIndex()]);
  // console.log(words);
  return (
    <div>
      <h1>Hello from WordOfTheDay</h1>
      <div>{selectedWord}</div>
      <div>{definition}</div>
      <button onClick={handleOnClick}>New Word</button>
    </div>
  );
}

export default WordOfTheDay;
