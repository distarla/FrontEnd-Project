import React from "react";
import AlertWelcome from "../Components/AlertWelcome";
import SvgLogo from '../Components/SvgLogo'
// import UserCard from "../Components/UserCard";
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
                <EventCalendar id="eventCalendar" />
        </div>
    );
}

export default Home;