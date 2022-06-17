import React from 'react';
import "../styles/home.scss";
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div className='all-container'>
            <p className='pre-title'>¿Cuánto sabes sobre</p>
            <h1 className='title'>ballenas?</h1>
            <button className='play-btn'>
                <Link to="/Play" className='link'>
                JUGAR
                </Link>
                </button>
        </div>
    )
}

export default Home;