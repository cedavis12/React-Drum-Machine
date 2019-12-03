import React from 'react';

function DrumMachine({ soundBank, display, handleClick }) {
  return (
    <div id='drum-machine' className='my-5'>
      <div className='text-center my-5'>
        <div id='display' className='lead display-4 jumbotron'>
          {display}
        </div>
      </div>
      <div className='d-flex justify-content-center'>
        {soundBank.map(sound => (
          <div
            id={sound.id}
            className='btn btn-lg btn-outline-secondary drum-pad mx-2'
            key={sound.keyCode}
            onClick={handleClick}
          >
            <audio
              id={sound.keyTrigger}
              src={sound.url}
              className='clip'
            ></audio>
            {sound.keyTrigger}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DrumMachine;
