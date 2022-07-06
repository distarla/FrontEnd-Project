import React, {useState, useEffect, useRef} from "react";
import MyCalendar from "../Components/MyCalendar.jsx";
import ModalEvent from "../Components/ModalEvent.js";
import ModalAddEvent from "../Components/ModalAddEvent.js";
import ModalDelEvent from "../Components/ModalDelEvent.js";
import { dateStringToPt, dateCalToString } from "../Data/Formulas/formulas.js";
import "./EventCalendar.css"

const EventCalendar = (props) => {

    // Initial state of fetch variables
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [myEvents, setMyEvents] = useState([]);

    // Initialization of variables to handle event data
    const [dateModal, setDateModal] = useState("");
    const [eventShown, setEventShown] = useState({});

// =====================
    
    // 400 (Bad Request) - Invalid Request (experiencia no addEvent)
    // Post to API
    // function postData(post) {
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(post)
    //     };
    //     fetch('https://62c2f855ff594c65676aea91.mockapi.io/api/v1/Events/posts', requestOptions)
    //         .then(response => response.json())
    //         .then(data => { console.log(data) }
    //         );
    // }

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
    useEffect(() =>{if (eventShown !== {}){setModalEvent(true);}},[eventShown])

    // Delete Event Modal
    const [modalDelEvent, setModalDelEvent] = useState(false);

    // Date to del not correct - Does not delete/Calendar doesn't re-render
    const confirmDelEvent = () => {
        console.log(eventShown)
        myEvents.forEach((ev, i) => {
            if (ev.title === eventShown.title && dateStringToPt(ev.date) === dateStringToPt(eventShown.date)) {
                setMyEvents([...myEvents.slice(0, i), ...myEvents.slice(i + 1, myEvents.length)]);
            }
        });
        // console.log(myEvents)
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
        setModalAddEvent(true);
    }
    
    const addEvent = (e) => {
        e.preventDefault();
        setMyEvents([...myEvents, {
            title: e.target.event.value,
            date: e.target.date.value
        }]);
        // setModalAddEvent(false);
    }

    useEffect(() => {
        if (dateModal !== "") { setModalAddEvent(true); console.log(dateModal); }
    }, [dateModal]); 

    // Modals a disparar pelo fetch no primeiro render
    useEffect(() => {
        if (modalDelEvent === true) {
            setModalDelEvent(false);
            // postData(myEvents);
        } else if (modalAddEvent === true) {
            setModalAddEvent(false);
            // postData(eventToAdd):
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
                <MyCalendar id="myCalendar" eventClicked={eventClicked} dateClicked={dateClicked} addEventButtonClick={()=>setModalAddEvent(true)} myEvents={myEvents}></MyCalendar>

                <div>
                    <ModalEvent
                        title={dateStringToPt(eventShown.date)}
                        body={eventShown.title}
                        onHide={()=>setModalEvent(false)}
                        show={modalEvent}
                        onClickDel={clickDel}
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
                    {/* Como alterar input do modal conforme clica no botão adic Ev. ou numa data - No componente modal, como fiz não funciona! */}
                    <ModalAddEvent
                        onHide={()=>setModalAddEvent(false)}
                        show={modalAddEvent}
                        onSubmit={addEvent}
                        value={dateModal}
                    />
                </div>
            </div>
        )
    }    
}

export default EventCalendar;