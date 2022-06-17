import React from 'react';
import "../styles/play.scss";
import QuizOne from '../templates/QuizOne';

const Play = () => {
    return(
        <div className='play-container'>
          <div className='quiz-card'>
            <p className='quiz-title'>¿Cuánto sabes sobre ballenas?</p>
            <hr className='hr1'/>
            <div className='btns'>
             <QuizOne />
             </div>
            <hr className='hr2'/>
            <p className='question-count' id='questionCounter'></p>
          </div>
        </div>
    );
}

export default Play;