import React, {useContext} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './LoginPage';
import Home from './Home'
import ClientsDetails from '../Components/ClientsDetails'
import NotFound from './NotFound';

import DataContext from '../Data/Users/dataContext';

const Content = () => {

    const { state, setState } = useContext(DataContext);

    const redirect = (el) => {
        if (state.loggedIn) {
            return (
                el
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
                <Route path="/home" element={redirect(<Home />)} />
                <Route path="/home/:eventId" element={redirect(<ClientsDetails />)} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </main>
    )
}

export default Content;