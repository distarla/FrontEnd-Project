import React, {useState, useEffect, useRef} from "react";
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

    // Date conversion formulas        
    const dateFormToPT = (date: String) => {
        return moment(new Date(date)).format("DD/MM/YYYY").toString()
    }

    // Initial state of fetch variables
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [myOrEvents, setMyOrEvents] = useState([]);

    // 400 (Bad Request) - Invalid Request (experiencia no addEvent)
    // Post to API
    function postData(dataPost) {
        // const post = dataPost;
        //console.log(post);
        //inserir post
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataPost)
        };
        fetch('https://62c2f855ff594c65676aea91.mockapi.io/api/v1/Events/posts', requestOptions)
        // fetch("MockData/events.json/posts", requestOptions)
            .then(response => response.json())
            .then(data => { console.log(data) }
            );
    }

    // Show Event Modal
    const eventShown = useRef();

    const [modalEventShow, setModalEventShow] = useState(false);
    const closeModalEvent = () => setModalEventShow(false);
    const openModalEvent = () => setModalEventShow(true);

    const eventClicked = (el) => {
        eventShown.current={
            title: el.fcSeg.eventRange.def.title,
            date: el.fcSeg.eventRange.range.start
        }
        openModalEvent();
    }

    // Delete Event Modal
    const [modalDelEventShow, setModalDelEventShow] = useState(false);
    const closeModalDelEvent = () => setModalDelEventShow(false);
    const openModalDelEvent = () => setModalDelEventShow(true);

    // Date to del not correct - Does not delete
    const confirmDelEvent = () => {
        if (myOrEvents.includes(eventShown.current)) {
            let i = myOrEvents.indexOf(eventShown.current);
            setMyOrEvents(myOrEvents.splice(i, 1));
        }
        console.log(myOrEvents)
        closeModalDelEvent();
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
        eventShown.current={
            title: '',
            date: dateStr
        };
        openModalAddEvent();
    }

    // experiência post
    const addEvent = (e) => {
        e.preventDefault();
        eventShown.current={
            title: e.target.event.value,
            date: eventShown.date
        };
        myOrEvents.push(eventShown.current);
        postData(eventShown.current)
        closeModalAddEvent();
        // console.log(eventShown.current)
        // console.log(myOrEvents)
    }

    // Add Event Date Modal
    const [modalAddEvDateShow, setModalAddEvDateShow] = useState(false);
    const closeModalAddEvDate = () => setModalAddEvDateShow(false);
    const openModalAddEvDate = () => setModalAddEvDateShow(true);

    const addDateEvent = (e) => {
        e.preventDefault();
        eventShown.current={
            title: e.target.event.value,
            date: e.target.date.value
        }
        myOrEvents.push(eventShown.current);
        closeModalAddEvDate();
        console.log(eventShown.current)
        console.log(myOrEvents)
    }

// Fetch API data
    useEffect(() => {
        // fetch("MockData/events.json")
        fetch("https://62c2f855ff594c65676aea91.mockapi.io/api/v1/Events")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setMyOrEvents(data);
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
                <MyCalendar id="myCalendar" eventClicked={eventClicked} dateClicked={dateClicked} addEventButtonClick={openModalAddEvDate} myEvents={myOrEvents}></MyCalendar>

                <div>
                    <ShowEventModal
                        title={dateFormToPT(eventShown.date)}
                        body={eventShown.title}
                        onHide={closeModalEvent}
                        show={modalEventShow}
                        onClickDel={clickDel}
                    />
                </div>
                <div>
                    <AddEventModal
                        date={dateFormToPT(eventShown.date)}
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
}

export default EventCalendar;