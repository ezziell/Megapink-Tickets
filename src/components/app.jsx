import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Play from '../containers/Play';
import AppContext from '../context/AppContext';
import Home from '../pages/Home';
import QuizOne from '../templates/QuizOne';

const App = () => {
    return(
        <AppContext.Provider>
            <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/Play" element={<Play />} />
                    <Route exact path="/QuizOne" element={<QuizOne />} />
                </Routes>
            </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;