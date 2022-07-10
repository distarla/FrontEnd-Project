import React, { useEffect, useState, createContext } from 'react';
import Loader from '../../Components/Loader';

export const EventsContext = createContext();

export const EventsProvider = ({ children }) => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [myEvents, setMyEvents] = useState([]);

    useEffect(() => {
        fetch("https://62c2f855ff594c65676aea91.mockapi.io/api/v1/Events")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setMyEvents(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )    
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div id="calLoader"><Loader /></div>;
    } else {
        return (
            <EventsContext.Provider value={{ myEvents, setMyEvents}}>
                {children}
            </EventsContext.Provider>
        )
    }
}