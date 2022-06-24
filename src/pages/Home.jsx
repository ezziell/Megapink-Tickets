import React from 'react';
import { useMachine } from '@xstate/react';
import bookingMachine from '../Machines/bookingMachine';

const Home = () => {
    const [state, send] = useMachine(bookingMachine);
    console.log("maquina", state);
    return(
        <div className='all-container'>
         <h2>Hola</h2>
        </div>
    )
}

export default Home;