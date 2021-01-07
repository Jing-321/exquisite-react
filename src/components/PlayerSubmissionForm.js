import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {
  const formResetValue = {
    adjective1: '',
    noun1: '',
    adverb: '',
    verb: '',
    adjective2: '',
    noun2: ''
  }

  const [formFields, setFormFields] = useState(formResetValue);

  const onTextChange = (event) => {
    const newLine = {...formFields};
    newLine[event.target.name] = event.target.value
    setFormFields(newLine);
  };

  const onSubmitLine = (event) => {
    event.preventDefault();

    if (formFields != formResetValue) {
      props.sendSubmission(wordsToNewLine);
      setFormFields(formResetValue);
    };
    
  };

  const wordsToNewLine = props.fields.map((field) => {
    if (field.key) {
      return formFields[field.key];
    } else {
      return field;
    }
  }).join(' ');

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{props.index}</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={onSubmitLine} >

        <div className="PlayerSubmissionForm__poem-inputs">

          {
            // Put your form inputs here... We've put in one below as an example
          }
          <span>The</span>
          <input
            name='adjective1'
            value={formFields.adjective1}
            onChange={onTextChange}
            placeholder="adjective1"
            type="text" 
            className={formFields.adjective1 === '' ? 'PlayerSubmissionFormt__input--invalid': ''} />

          <input
            name='noun1'
            value={formFields.noun1}
            onChange={onTextChange}
            placeholder="noun1"
            type="text" 
            className={formFields.noun1 === '' ? 'PlayerSubmissionFormt__input--invalid': ''}/>

          <input
            name='adverb'
            value={formFields.adverb}
            onChange={onTextChange}
            placeholder="adverb"
            type="text" 
            className={formFields.adverb === '' ? 'PlayerSubmissionFormt__input--invalid': ''}/>

          <input
            name='verb'
            value={formFields.verb}
            onChange={onTextChange}
            placeholder="verb"
            type="text" 
            className={formFields.verb === '' ? 'PlayerSubmissionFormt__input--invalid': ''}/>

            <span>the</span>

            <input
            name='adjective2'
            value={formFields.adjective2}
            onChange={onTextChange}
            placeholder="adjective2"
            type="text" 
            className={formFields.adjective2 === '' ? 'PlayerSubmissionFormt__input--invalid': ''}/>

          <input
            name='noun2'
            value={formFields.noun2}
            onChange={onTextChange}
            placeholder="noun2"
            type="text" 
            className={formFields.noun2 === '' ? 'PlayerSubmissionFormt__input--invalid': ''}/>

          <span>.</span>

        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}

PlayerSubmissionForm.propTypes = {
  index: PropTypes.number.isRequired,
  sendSubmission: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
    }),
  ])).isRequired,
}

export default PlayerSubmissionForm;


// [
//   'The',
//   {adjective1: ''},
//   {noun1: ''},
//   {adverb: ''},
//   {verb: ''},
//   'the',
//   {adjective2: ''},
//   {noun2: ''},
//   '.',
// ]
