import React, { useState } from 'react';
import "../styles/Search.scss";

export const Search = ({ send }) => {
  const [ticket, setTicket] = useState('');

  const goToPassengers = ()=> {
    send('CONTINUE', { selectedSeat: ticket })
  }

  const handleSelectChange = (event) => {
    setTicket(event.target.value);
  };

  const options = ['Zone A', 'Zone B', 'Zone C']

  

  return (
    <div className='Search'> 
    <img src='https://i.imgur.com/1td3FJF.jpg' className='seat-img' />
      <p className='Search-title title'>Elige tu ubicación</p>
      <select id="country" className='Search-select' value={ticket} onChange={handleSelectChange}>
        <option value="" disabled defaultValue>Escoge un asiento</option>
        {options.map((option) => <option value={option} key={option}>{option}</option>)}
      </select>
      <button onClick={goToPassengers} disabled={ticket === ''} className='Search-continue button'>Continuar</button>
    </div>
  );
}; 