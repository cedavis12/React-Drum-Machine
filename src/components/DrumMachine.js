import React from 'react';

function DrumMachine({ soundBank, display, playSound }) {
  return (
    <div id='drum-machine' className='my-5'>
      <div className='text-center my-5'>
        <h1 className='lead display-4'>{display}</h1>
      </div>
      <div className='d-flex justify-content-center'>
        {soundBank.map(sound => (
          <div
            id={sound.id}
            className='btn btn-lg btn-outline-secondary drum-pad mx-2'
            key={sound.keyCode}
            onClick={playSound}
          >
            <audio id={sound.keyTrigger} src={sound.url}></audio>
            {sound.keyTrigger}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DrumMachine;
