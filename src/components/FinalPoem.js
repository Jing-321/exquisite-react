import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './FinalPoem.css';

const FinalPoem = (props) => {
  const [poemPrintOut, setPoemPrintOut] = useState('');

  const revealFinalPoem = () => {
    if (!props.isSubmitted) {
      setPoemPrintOut(props.submissions.map(p => <p>{p}</p>));
      props.revealPoem()
    };

  };

  
  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        <div>{poemPrintOut}</div>
      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input onClick={revealFinalPoem} type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
      </div>
    </div>
  );
  
}

FinalPoem.propTypes = {
  isSubmitted: PropTypes.bool.isRequired,
  submissions: PropTypes.arrayOf(PropTypes.string).isRequired,
  revealPoem: PropTypes.func.isRequired,
};

export default FinalPoem;
