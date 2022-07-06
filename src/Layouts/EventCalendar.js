import React, {useState, useEffect} from "react";
import MyCalendar from "../Components/MyCalendar.jsx";
import ModalEvent from "../Components/ModalEvent.js";
import ModalAddEvent from "../Components/ModalAddEvent.js";
import ModalAddDateEvent from "../Components/ModalAddDateEvent.js";
import ModalDelEvent from "../Components/ModalDelEvent.js";
import { dateStringToPt, dateCalToString } from "../Data/Formulas/formulas.js";
import "./EventCalendar.css"

const EventCalendar = (props) => {

    // Initial state of fetch variables
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [myEvents, setMyEvents] = useState([]);

    // Initialization of variables to handle event data
    const [dateModal, setDateModal] = useState("1");
    const [eventShown, setEventShown] = useState(1);

// =====================
    
    // 400 (Bad Request) - Invalid Request (experiencia no addEvent)
    // PUT to API
    const [putState, setPutState] = useState(null); 
    function putData(put, id) {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(put)
        };
        fetch('https://62c2f855ff594c65676aea91.mockapi.io/api/v1/Events/' + id, requestOptions)
            .then(response => response.json())
            .then(data => setPutState({ postId: data.id }));
    }

    //  DELETE from API
    const [delState, setDelState] = useState(null);
    function delData(id) {
        fetch('https://62c2f855ff594c65676aea91.mockapi.io/api/v1/Events/' + id, {method: 'DELETE'})
            .then(() => setDelState({ status: 'Delete successful' }));
    }

    // =========================

    // Show Event Modal
    const [modalEvent, setModalEvent] = useState(false);

    const eventClicked = (el) => {
        setEventShown(
            {   
                title: el.fcSeg.eventRange.def.title,
                date: dateCalToString(el.fcSeg.eventRange.range.start)
            }
        )
    };
    // Modals open at first render
    useEffect(() =>{if (eventShown !== 1){setModalEvent(true);}},[eventShown])

    // Delete Event Modal
    const [modalDelEvent, setModalDelEvent] = useState(false);

    const confirmDelEvent = () => {
        console.log(eventShown)
        myEvents.forEach((ev, i) => {
            if (ev.title === eventShown.title && dateStringToPt(ev.date) === dateStringToPt(eventShown.date)) {
                delData(i+1);
                setMyEvents([...myEvents.slice(0, i), ...myEvents.slice(i + 1, myEvents.length)]);
            }
        });
        // setModalDelEvent(false);
    }

    // Warning: Unknown event handler property `onClickDel`. It will be ignored.
    const clickDel = () => {
        setModalEvent(false);
        setModalDelEvent(true);
    }

    // Add Event Modal
    const [modalAddEvent, setModalAddEvent] = useState(false);
    
    const dateClicked = (dateStr) => {
        setDateModal(dateStr);
        // setModalAddEvent(true);
    }

     // Modals open at first render
    useEffect(() => {
        if (dateModal !== "1") { setModalAddEvent(true); console.log(dateModal); }
    }, [dateModal]); 

    const addEvent = (e) => {
        e.preventDefault();
        putData({
            title: e.target.event.value,
            date: dateModal
        }, myEvents.length);
        setMyEvents([...myEvents, {
            title: e.target.event.value,
            date: dateModal
        }]);
        setDateModal('');
        // setModalAddEvent(false);
    }

    // Add Event Date Modal
    const [modalAddDateEvent, setModalAddDateEvent] = useState(false);
    
    const addDateEvent = (e) => {
        e.preventDefault();
        putData({
            id: myEvents.length,
            title: e.target.event.value,
            date: e.target.date.value
        }, myEvents.length);
        setMyEvents([...myEvents, {
            title: e.target.event.value,
            date: e.target.date.value
        }]);
        // setModalAddDateEvent(false);
    }

    // Modals open at first render
    useEffect(() => {
        if (modalDelEvent === true) {
            setModalDelEvent(false);
        } else if (modalAddEvent === true) {
            setModalAddEvent(false);
        } else if (modalAddDateEvent === true) {
            setModalAddDateEvent(false);
        } 
    }, [myEvents]);

// Fetch API data
    useEffect(() => {
        // fetch("MockData/events.json")
        fetch("https://62c2f855ff594c65676aea91.mockapi.io/api/v1/Events")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setMyEvents(data);
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
                <MyCalendar id="myCalendar" eventClicked={eventClicked} dateClicked={dateClicked} addEventButtonClick={()=>setModalAddDateEvent(true)} myEvents={myEvents}></MyCalendar>

                <div>
                    <ModalEvent
                        title={dateStringToPt(eventShown.date)}
                        body={eventShown.title}
                        onHide={()=>setModalEvent(false)}
                        show={modalEvent}
                        id={clickDel}
                    />
                </div>
                <div>
                    <ModalDelEvent
                        show={modalDelEvent}
                        onClickDel={confirmDelEvent}
                        onHide={()=>setModalDelEvent(false)}
                    />
                </div>
                <div>
                    <ModalAddEvent
                        date={dateStringToPt(dateModal)}
                        onHide={()=>setModalAddEvent(false)}
                        show={modalAddEvent}
                        onSubmit={addEvent}
                    />
                </div>
                <div>
                    <ModalAddDateEvent
                        onHide={()=>setModalAddDateEvent(false)}
                        show={modalAddDateEvent}
                        onSubmit={addDateEvent}
                    />
                </div>
            </div>
        )
    }    
}

export default EventCalendar;