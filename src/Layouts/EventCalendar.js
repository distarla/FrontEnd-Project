import React, {useState} from "react";
// import Access from "../Views/Access";
// import AccessComponent from "../Components/AccessComponent";
import MyCalendar from "../Components/MyCalendar.jsx";
import Button from 'react-bootstrap/Button';
import MyModal from "../Components/MyModal";
import "./EventCalendar.css"


const EventCalendar = (props) => {

    // Modal teste
    const [modalShow, setModalShow] = useState(false);

    const handleClose = () => setModalShow(false);
    const handleShow = () => setModalShow(true);


    return (
        <div className="container">
            <MyCalendar id="myCalendar"></MyCalendar>

            {/* Modal test */}
            <div>
                <Button variant="primary" onClick={handleShow}>
                    Launch modal
                </Button>

                <MyModal
                    id="addEvent"
                    title="Add Event"
                    body="Event ..."
                    onHide={handleClose}
                    show={modalShow}
                />
            </div>
        </div>
    )
}

export default EventCalendar;