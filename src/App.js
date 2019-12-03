import React, { Fragment, useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import DrumMachine from './components/DrumMachine';
import Footer from './components/Footer';

function App() {
  const [display, setDisplay] = useState('');

  const handleClick = e => {
    e.preventDefault();
    const text = e.target.id;
    const sound = document.getElementById(e.target.innerText);
    sound.play();
    setDisplay(text);
  };

  useEffect(() => {
    document.addEventListener('keypress', handleKeyPress);
    // eslint-disable-next-line
  }, []);

  const handleKeyPress = e => {
    const keyCode = e.key.toUpperCase();
    const sound = document.getElementById(keyCode);

    switch (keyCode) {
      case 'Q':
      case 'W':
      case 'E':
      case 'A':
      case 'S':
      case 'D':
      case 'Z':
      case 'X':
      case 'C':
        const text = sound.parentElement.id;
        sound.play();
        setDisplay(text);
        break;
      default:
        return;
    }
  };

  return (
    <Fragment>
      <Header />
      <DrumMachine
        display={display}
        soundBank={soundBank}
        handleClick={handleClick}
      />
      <Footer />
    </Fragment>
  );
}

const soundBank = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

export default App;
