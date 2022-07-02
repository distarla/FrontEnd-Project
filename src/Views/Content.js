import React from 'react';
import { Routes, Route } from 'react-router-dom'
import LoginPage from './LoginPage';
import Home from './Home'
import NotFound from './NotFound';




const Content = () => (
    <main className='Content'>
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </main>
)

export default Content;