import React from 'react';
import "../styles/QuizOne.scss";
import "../styles/Buttons.scss";

const QuizOne = () => {
    return(
        <div className='btn-container'>
            <h1 className='question'>Como son las ballenas?</h1>
          <button type='button' className='quiz-btn' id='QuizOne1'>Las ballenas son azules</button>
          <button type='button' className='quiz-btn' id='QuizOne1'>Las ballenas son rojas</button>
          <button type='button' className='quiz-btn' id='QuizOne1'>Las ballenas son lindas</button>
          <button type='button' className='quiz-btn' id='QuizOne1'>La ballena azul es mala</button>
        </div>
    );
}

export default QuizOne;