import React from 'react';
import { useMachine } from '@xstate/react';
import { Nav } from '../Components/Nav';
import { StepsLayout } from './StepsLayout';
import bookingMachine from '../Machines/bookingMachine';
import "../styles/BaseLayout.scss";

export const BaseLayout = () => {
  const [state, send] = useMachine(bookingMachine);

  console.log('state: ', state.value, state.context)

  return (
    <div className='BaseLayout'>
        <div className='background-img'></div>
        <div className='base-container'></div>
        <div className='state-container'>
        <Nav state={state} send={send} />
        <StepsLayout state={state} send={send} />
        </div>
    </div>
  );
}