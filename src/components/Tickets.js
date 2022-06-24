import React from 'react';
import "../styles/Tickets.scss";

export const Tickets = ({ send, context }) => {
  const finish = () => {
    send('FINISH')
  };

  return (
    <div className='Tickets'>
      <img src='https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='concert-img' />
      <div className='ticket-info'>
      <p className='Tickets-name description'>Nombre</p>
      <div className='tickets-buyers'>
      {context.buyers.map((person, idx) => {
          return <p className='span-name info' key={idx}>{person}</p>
        })}
      </div>
      <p className='Tickets-date description'>Fecha</p>
      <span className='span-date info'>10 Feb 2022</span>
      <p className='Tickets-time description'>Hora</p>
      <span className='span-time info'>08:00 PM</span>
      <p className='Tickets-location description'>Estadio</p>
      <span className='span-location info'>Party Stadium</span>
      <img src='https://i.imgur.com/jsva4QJ.png' className='codigoBarra' />
      </div>
      <button onClick={finish} className='Tickets-finalizar button'>Finalizar</button>
    </div>
  );
}; 