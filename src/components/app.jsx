import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import AppContext from '../context/AppContext';
import Home from '../pages/Home';

const App = () => {
    return(
        <AppContext.Provider>
            <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                </Routes>
            </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;