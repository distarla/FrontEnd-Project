import React, {useState, useEffect, useRef} from "react";
import MyCalendar from "../Components/MyCalendar.jsx";
import ShowEventModal from "../Components/ShowEventModal.js";
import AddEventModal from "../Components/AddEventModal.js";
import moment from 'moment';
import "./EventCalendar.css"
import ModalDeleteEvent from "../Components/ModalDeleteEvent.js";

const EventCalendar = (props) => {

    // Date conversion formulas        
    const dateStringToPt = (date: String) => {
        return moment(new Date(date)).format("DD/MM/YYYY").toString()
    }
    const dateCalToString = (date: Object) => {
        return moment(new Date(date)).format("YYYY-MM-DD").toString()
    }

    // Initial state of fetch variables
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [myEvents, setMyEvents] = useState([]);
    // const myRefEvents = useRef([]);

    // Initialization of variable to handle event data
    const [eventShown, setEventShown] = useState();

    // Show Event Modal
    const [modalEventShow, setModalEventShow] = useState(false);
    const closeModalEvent = () => setModalEventShow(false);
    const openModalEvent = () => setModalEventShow(true);

    const eventClicked = (el) => {
        setEventShown({
            title: el.fcSeg.eventRange.def.title,
            date: dateCalToString(el.fcSeg.eventRange.range.start)
        })
        console.log(eventShown)
        // openModalEvent();
    }

    // Delete Event Modal
    const [modalDelEventShow, setModalDelEventShow] = useState(false);
    const closeModalDelEvent = () => setModalDelEventShow(false);
    const openModalDelEvent = () => setModalDelEventShow(true);

    // Date to del not correct - Does not delete/Calendar doesn't re-render
    const confirmDelEvent = () => {
        // myRefEvents.current.forEach((ev, i) => {
        //     if (ev.title == eventShown.current.title && dateStringToPt(ev.date) == dateStringToPt(eventShown.current.date)) {
        //         myRefEvents.current.splice(i, 1);
        //     }
        // });
        // closeModalDelEvent();
        // console.log(eventShown.current)
        // console.log(myRefEvents.current)
        console.log(myEvents)
    }

    // Warning: Unknown event handler property `onClickDel`. It will be ignored.
    const clickDel = () => {
        closeModalEvent();
        openModalDelEvent();
    }

    // Adds 2 events without correct data (on both add modals) - Next event added, adds data from previous one
    // Add Event Modal
    const [modalAddEventShow, setModalAddEventShow] = useState(false);
    const closeModalAddEvent = () => setModalAddEventShow(false);
    const openModalAddEvent = () => setModalAddEventShow(true);
    
    const dateClicked = (dateStr) => {
        // eventShown.current={
        //     title: '',
        //     date: dateStr
        // };
        openModalAddEvent();
        // console.log(eventShown.current)
        // console.log(myRefEvents)
    }

    const addEvent = (e) => {
        e.preventDefault();
        // eventShown.current={
        //     title: e.target.event.value,
        //     date: eventShown.current.date
        // };
        // myRefEvents.current.push(eventShown.current);
        closeModalAddEvent();
        // console.log(eventShown.current)
        // console.log(myRefEvents.current)
    }

// Fetch API data
    useEffect(() => {
        // fetch("MockData/events.json")
        fetch("https://62c2f855ff594c65676aea91.mockapi.io/api/v1/Events")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setMyEvents(data);
                    // myRefEvents.current = data;
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
        
    },[]);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="container">
                <MyCalendar id="myCalendar" eventClicked={eventClicked} dateClicked={dateClicked} myEvents={myEvents}></MyCalendar>

                <div>
                    <ShowEventModal
                        title={dateStringToPt(eventShown.current.date)}
                        body={eventShown.current.title}
                        onHide={closeModalEvent}
                        show={modalEventShow}
                        onClickDel={clickDel}
                    />
                </div>
                <div>
                    <AddEventModal
                        date={dateStringToPt(eventShown.current.date)}
                        onHide={closeModalAddEvent}
                        show={modalAddEventShow}
                        onSubmit={addEvent}
                    />
                </div>
                <div>
                    <ModalDeleteEvent
                        show={modalDelEventShow}
                        onClickDel={confirmDelEvent}
                        onHide={closeModalDelEvent}
                    />
                </div>
            </div>
        )
    }    
}

export default EventCalendar;