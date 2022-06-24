import React from 'react';
import { Welcome } from '../Components/Welcome';
import { Search } from '../Components/Search';
import { Buyers } from '../components/Buyers';
import { Tickets } from '../Components/Tickets';

export const StepsLayout = ({ state, send }) => {
  const renderContent = () => {
    if (state.matches('initial')) return <Welcome send={send} /> 
    if (state.matches('search')) return <Search send={send} /> 
    if (state.matches('tickets')) return <Tickets send={send} context={state.context} /> 
    if (state.matches('buyers')) return <Buyers send={send} state={state} /> 
    return null 
  };

  return (
    <div className='StepsLayout'>
      {renderContent()}
    </div>
  );
}; 