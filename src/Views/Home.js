import React from "react";
import Access from "./Access";
import AccessComponent from "../Components/AccessComponent";
import MyCalendar from "../Components/MyCalendar";

const Home = (props) => {
    return (
        <div>
            {/* TESTE */}
            <p>Isto é um teste</p>
            <Access>
                <AccessComponent level={1}></AccessComponent>
            </Access>
            <MyCalendar></MyCalendar>
        </div>
    )
}

export default Home;