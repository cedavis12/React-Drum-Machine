import React from 'react';

function Footer() {
  return (
    <nav className='navbar fixed-bottom navbar-dark bg-dark d-flex justify-content-center'>
      <span className='navbar-brand mb-0 h1'>
        Made with &hearts; by Courtney Davis{' '}
        <a
          href='https://github.com/cedavis12/React-Drum-Machine'
          // eslint-disable-next-line
          target='_blank'
          style={{ textDecoration: 'none', color: 'white' }}
        >
          <i className='fab fa-github'></i>
        </a>
      </span>
    </nav>
  );
}

export default Footer;
