import React from 'react';
import "../styles/Welcome.scss";

export const Welcome = ({ send }) => {
  const startBooking = () => {
    send('START')
  }

  return (
    <div className='Welcome'>
      <img src='https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='concert-img' />
      <h1 className='Nav-logo-1'>Concierto Megapink</h1>
      <p className='Welcome-title'>10-03-22</p>
      <p className='Welcome-description'>Uno de los mejores conciertos del año con la participación de los artistas top del momento. No te quedes sin tu entrada para la fiesta más rosa de todo el país</p>
      <button onClick={startBooking} className='Welcome-cancel button'>Comprar ticket</button>
    </div>
  );
}; 