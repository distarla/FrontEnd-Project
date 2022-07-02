import React, {useState} from "react";
// import Access from "../Views/Access";
// import AccessComponent from "../Components/AccessComponent";
import MyCalendar from "../Components/MyCalendar.jsx";
import Button from 'react-bootstrap/Button';
import MyModal from "../Components/MyModal";
import moment from 'moment';
import "./EventCalendar.css"


const EventCalendar = (props) => {

    const [modalShow, setModalShow] = useState(false);

    const handleClose = () => setModalShow(false);
    const handleShow = () => setModalShow(true);

    const [eventShown, setEventShown] = useState({
        date: '',
        title:'',
    })

    const eventClicked = (el) => {
        setEventShown({
            date: moment(new Date(el.fcSeg.eventRange.range.start)).format("DD/MM/YYYY").toString(),
            title: el.fcSeg.eventRange.def.title,
        })
        handleShow();
    }



    return (
        <div className="container">
            <MyCalendar id="myCalendar" eventClicked={eventClicked}></MyCalendar>

            <div>
                <MyModal
                    id="addEvent"
                    title={eventShown.date}
                    body={eventShown.title}
                    onHide={handleClose}
                    show={modalShow}
                />
            </div>
        </div>
    )
}

export default EventCalendar;