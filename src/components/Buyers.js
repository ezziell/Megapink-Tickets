import React, { useState } from 'react';
import "../styles/Buyers.scss";

export const Buyers = ({ state, send }) => {
  const [value, changeValue] = useState('');

  const { buyers } = state.context;

  const onChangeInput = (e) => {
    changeValue(e.target.value);
  }

  const goToTicket = ()=> {
    send('DONE')
  }

  const submit = (e) => {
    e.preventDefault();
    send('ADD', { newBuyer: value })
    changeValue('');
  }

  return (
    <form onSubmit={submit} className='Passengers'>
      <div className='div-tickets'>
      <p className='Passengers-title title'>Nombre de los compradores del ticket</p>
      <ul className='Buyers-list'>
        {state.context.buyers.map((buyer, index) => (
          <li key={index} className='buyers-list_li'>
            - {buyer}
          </li>
        ))}
      </ul>
      <input 
        id="name" 
        name="name" 
        type="text" 
        className='name-input'
        placeholder='Escribe el nombre completo' 
        required 
        value={value} 
        onChange={onChangeInput}
      />
      </div>
      <div className='Passengers-buttons'>
        <button 
          className='Passengers-add button-secondary'
          type="submit"
        >
          Agregar Pasajero
        </button>
        <button
          className={`Passenger-pay button ${buyers.length === 0 ? 'Buyers-disabled' : ''}`} 
          type="button"
          onClick={goToTicket}
        >
          Ver mi ticket
          </button>
      </div>
    </form>
  );
};