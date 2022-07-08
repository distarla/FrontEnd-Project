import React, {useContext} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './LoginPage';
import Home from './Home'
import NotFound from './NotFound';

import DataContext from '../Data/Users/dataContext';

const Content = () => {

    const { state, setState } = useContext(DataContext);

    const redirect = () => {
        if (state.loggedIn) {
            return (
                <Home />
            )
        } else {
            return (
                <Navigate to="/" replace={true} />
            )
        }
    }

    return(
        <main className='Content'>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/home" element={redirect()} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </main>
    )
}

export default Content;