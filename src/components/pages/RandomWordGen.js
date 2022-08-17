/*
 to do: 
   Style up
   get definitions setup

*/

import { useEffect, useState } from "react";

import words from "../../data/words";

function RandomWordGen() {
  const [selectedWord, setSelectedWord] = useState("await");
  // const [definition, setDefinition] = useState("");

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
    <div className="widget-page-content-container">
      <h2>The word is:</h2>
      <h1>{selectedWord}</h1>
      {/* <div>{definition}</div> */}
      <button className="new-word-button" onClick={handleOnClick}>
        New Word
      </button>
    </div>
  );
}

export default RandomWordGen;
