import React from "react";
import EventCalendar from "../Layouts/EventCalendar";
// import Access from "./Access"
// import AccessComponent from "../Components/AccessComponent"

const Home = (props) => {

    return (
        <div>
        {/* TESTE */}
        {/* <Access>
            <AccessComponent level={1}></AccessComponent>
        </Access> */}
        
            <EventCalendar></EventCalendar>
        </div>
    )
}

export default Home;