import React from 'react';
import "../styles/Nav.scss";

export const Nav = ({ state, send }) => {
  const goToWelcome = ()=> {
    send('CANCEL')
  }

  return (
    <nav className='Nav'>
      <h1 className='Nav-logo'>Concierto Megapink</h1>
        {!state.matches('initial') && 
          <button onClick={goToWelcome} className='Nav-cancel'>Cancelar</button>
        }
    </nav>
  );
}; 