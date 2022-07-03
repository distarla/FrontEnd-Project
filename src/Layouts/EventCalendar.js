import React, {useState} from "react";
// import Access from "../Views/Access";
// import AccessComponent from "../Components/AccessComponent";
import MyCalendar from "../Components/MyCalendar.jsx";
import ShowEventModal from "../Components/ShowEventModal.js";
import AddEventModal from "../Components/AddEventModal.js";
import moment from 'moment';
import "./EventCalendar.css"
import ModalDeleteEvent from "../Components/ModalDeleteEvent.js";
import AddEvDateModal from "../Components/AddEvDateModal.js";

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
        openModalEvent();
    }

    // Delete Event Modal
    const [modalDelEventShow, setModalDelEventShow] = useState(false);
    const closeModalDelEvent = () => setModalDelEventShow(false);
    const openModalDelEvent = () => setModalDelEventShow(true);

    const [eventToDel, setEventToDel] = useState({
        date: '',
        title:'',
    })

    const confirmDelEvent = () => {
        console.log(eventShown);
        closeModalDelEvent();
    }

    const launchModal = () => {
        closeModalEvent();
        openModalDelEvent();

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
        closeModalAddEvent();
    }

    // Add Event Date Modal
    const [modalAddEvDateShow, setModalAddEvDateShow] = useState(false);
    const closeModalAddEvDate = () => setModalAddEvDateShow(false);
    const openModalAddEvDate = () => setModalAddEvDateShow(true);

    const addDateEvent = (e) => {
        e.preventDefault();
        console.log(e.target.event.value, e.target.date.value)
        closeModalAddEvDate();
    }

    return (
        <div className="container">
            <MyCalendar id="myCalendar" eventClicked={eventClicked} addEventButtonClick={openModalAddEvDate}></MyCalendar>

            <div>
                <ShowEventModal
                    title={eventShown.date}
                    body={eventShown.title}
                    onHide={closeModalEvent}
                    show={modalEventShow}
                    launchModal={launchModal}
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
            <div>
                <ModalDeleteEvent
                    show={modalDelEventShow}
                    onClick={confirmDelEvent}
                    onHide={closeModalDelEvent}
                />
            </div>
            <div>
                <AddEvDateModal
                    onHide={closeModalAddEvDate}
                    show={modalAddEvDateShow}
                    onSubmit={addDateEvent}
                />
            </div>
        </div>
    )
}

export default EventCalendar;