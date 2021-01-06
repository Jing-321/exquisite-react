import React, { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

const Game = () => {
  const exampleFormat = FIELDS.map((field) => {
    if (field.key) {
      return field.placeholder;
    } else {
      return field;
    }
  }).join(' ');

  const [poem, setPoem] = useState([]);
  const [player, setPlayer] = useState(1);
  const [submitStatus, setSubmitStatus] = useState(false)
  const [recentLine, setRecentLine] = useState('')

  const submitNewLine = (newLine) => {
    const updatedPoem = [...poem, newLine];
    setPoem(updatedPoem); //add the new line to the poem
    const newPlayer = player + 1;
    setPlayer(newPlayer); //switch to next player
    setRecentLine(newLine);
  };

  const finalizeGame = () => {
    setSubmitStatus(true);
    setPoem([]);
    setPlayer(1);
  };


  return (
    <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        { exampleFormat }
      </p>

      <RecentSubmission recentSubmission={recentLine}/>
      
      {submitStatus ? <p></p> : <PlayerSubmissionForm sendSubmission={submitNewLine} index={player} fields={FIELDS} />}

      <FinalPoem isSubmitted={submitStatus} submissions={poem} revealPoem={finalizeGame} />

    </div>
  );
}


const FIELDS = [
  'The',
  {
    key: 'adjective1',
    placeholder: 'adjective',
  },
  {
    key: 'noun1',
    placeholder: 'noun',
  },
  {
    key: 'adverb',
    placeholder: 'adverb',
  },
  {
    key: 'verb',
    placeholder: 'verb',
  },
  'the',
  {
    key: 'adjective2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  '.',
];

export default Game;
