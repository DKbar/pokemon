import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

import {Header} from './components/Header';
import {Pokemon} from './pages/Pokemon';
import {Home} from './pages/Home';

function App() {
    return <div className='App'>
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:name" element={<Pokemon />} />
            </Routes>
        </BrowserRouter>
    </div>;
}

export default App;
