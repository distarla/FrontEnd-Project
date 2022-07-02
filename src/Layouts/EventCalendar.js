import React, {useState} from "react";
// import Access from "../Views/Access";
// import AccessComponent from "../Components/AccessComponent";
import MyCalendar from "../Components/MyCalendar.jsx";
import ShowEventModal from "../Components/ShowEventModal.js";
import AddEventModal from "../Components/AddEventModal.js";
import moment from 'moment';
import "./EventCalendar.css"


const EventCalendar = (props) => {

    // Show Event Modal
    const [modalEventShow, setModalEventShow] = useState(false);
    const closeModalEvent = () => setModalEventShow(false);
    const openModalEvent = () => setModalEventShow(true);

    const [eventShown, setEventShown] = useState({
        date: '',
        title:'',
    })

    const eventClicked = (el) => {
        setEventShown({
            date: moment(new Date(el.fcSeg.eventRange.range.start)).format("DD/MM/YYYY").toString(),
            title: el.fcSeg.eventRange.def.title,
        })
        openModalAddEvent();
    }

    // Add Event Modal
    const [modalAddEventShow, setModalAddEventShow] = useState(false);
    const closeModalAddEvent = () => setModalAddEventShow(false);
    const openModalAddEvent = () => setModalAddEventShow(true);

    const [eventToAdd, setEventToAdd] = useState({
        date: '',
        title:'',
    })
    
    const addEvent = (e) => {
        e.preventDefault();
        console.log(e.target.event.value)
        closeModalEvent();
    }

    return (
        <div className="container">
            <MyCalendar id="myCalendar" eventClicked={eventClicked}></MyCalendar>

            <div>
                <ShowEventModal
                    title={eventShown.date}
                    body={eventShown.title}
                    onHide={closeModalEvent}
                    show={modalEventShow}
                />
            </div>
            <div>
                <AddEventModal
                    date={eventToAdd.date}
                    onHide={closeModalAddEvent}
                    show={modalAddEventShow}
                    onSubmit={addEvent}
                />
            </div>
        </div>
    )
}

export default EventCalendar;