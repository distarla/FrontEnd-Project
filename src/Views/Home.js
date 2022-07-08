import React from "react";
import { EventsProvider } from "../Data/EventsAPI/EventsContext";
import AlertWelcome from "../Components/AlertWelcome";
import SvgLogo from '../Components/SvgLogo'
import EventCalendar from "../Layouts/EventCalendar";
import './Home.css'
// import Access from "./Access"
// import AccessComponent from "../Components/AccessComponent"

const Home = (props) => {

    return (
        <div id="home">
            {/* TESTE */}
            {/* <Access>
                <AccessComponent level={1}></AccessComponent>
            </Access> */}
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