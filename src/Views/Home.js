import React from "react";
import Access from "./Access";
import AccessComponent from "../Components/AccessComponent";
import MyCalendar from "../Components/MyCalendar.jsx";

const Home = (props) => {
    return (
        <div>
            {/* TESTE */}
            <p>Isto é um teste</p>
            <Access>
                <AccessComponent level={1}></AccessComponent>
            </Access>
            <div className="container" width='60vw' heigth='auto' margin='auto'>
                <MyCalendar></MyCalendar>
            </div>
            
        </div>
    )
}

export default Home;