import React from "react";
import { EventsProvider } from "../Data/EventsAPI/EventsContext";
import AlertWelcome from "../Components/AlertWelcome";
import SvgLogo from '../Components/SvgLogo'
import EventCalendar from "../Layouts/EventCalendar";
import './Home.css'

const Home = (props) => {

    return (
        <div id="home">
            <div id="homeHeader">
                <SvgLogo id="homeLogo" />
                <AlertWelcome />
            </div>
            <EventsProvider>
                <EventCalendar id="eventCalendar" />
            </EventsProvider>
        </div>
    );
}

export default Home;