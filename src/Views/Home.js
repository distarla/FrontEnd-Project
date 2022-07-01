import React, {useState} from "react";
import Access from "./Access";
import AccessComponent from "../Components/AccessComponent";
import MyCalendar from "../Components/MyCalendar.jsx";
import MyModal from "../Components/MyModal";
import Button from 'react-bootstrap/Button';
import MyCard from "../Components/MyCard";

const Home = (props) => {
    // Modal
    const [modalShow, setModalShow] = useState(false);
    

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
            <MyCard id="event" title="17/02/2022" text="Margarida Martins + André Alves"></MyCard>
            {/* Modal test*/}
            <div>
                <Button variant="primary" onClick={() => setModalShow(true)}>
                    Launch modal
                </Button>

                <MyModal
                    id="addEvent"
                    title="Add Event"
                    body="Event ..."
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>
        </div>
    )
}

export default Home;