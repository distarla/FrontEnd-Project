import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import MyCalendar from "../Components/MyCalendar.jsx";
import ModalEvent from "../Components/ModalEvent.js";
import ModalAddEvent from "../Components/ModalAddEvent.js";
import ModalAddDateEvent from "../Components/ModalAddDateEvent.js";
import ModalChangeEvent from "../Components/ModalChangeEvent.js";
import ModalDelEvent from "../Components/ModalDelEvent.js";
import { dateStringToPt, dateCalToString } from "../Data/Formulas/formulas.js";
import { changeAPI, deleteAPI } from "../Data/EventsAPI/ChangeEvRequests.js";
import { EventsContext } from "../Data/EventsAPI/EventsContext.js";
import "./EventCalendar.css"
import { deleteClient } from "../Data/ClientsAPI/ClientsRequests.js";
import GetClients from "../Data/ClientsAPI/GetClients.js";

const EventCalendar = (props) => {

    // Initial state of events' data variables
    const { myEvents, setMyEvents } = useContext(EventsContext);

    // Initialization of variables to handle event data
    const [dateModal, setDateModal] = useState("1");
    const [eventShown, setEventShown] = useState(1);

// =====================

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


    // ==================

    const [eventId, setEventId] = useState("");
    const navigate = useNavigate();
    const myClients = GetClients(eventId);
    
    useEffect(() => {
        if (eventShown !== 1) {
            myEvents.forEach((ev, i) => {
                if (ev.title === eventShown.title && dateStringToPt(ev.date) === dateStringToPt(eventShown.date)) {
                    setEventId(ev.id);
                }
            });
            setModalEvent(true);
        }
    }, [eventShown])

    const clientShow = () => {
        navigate("/home/" + eventId)
    }

    // ==================

    // Delete Event Modal
    const [modalDelEvent, setModalDelEvent] = useState(false);

    const confirmDelEvent = () => {
        myEvents.forEach((ev, i) => {
            if (ev.title === eventShown.title && dateStringToPt(ev.date) === dateStringToPt(eventShown.date)) {
                // if (myClients !== null) {
                //     myClients.map(client => deleteClient(eventId, client.id));
                // };
                deleteAPI(ev.id);
                setMyEvents([...myEvents.slice(0, i), ...myEvents.slice(i + 1, myEvents.length)]);
            }
        });
    }

    const clickDel = () => {
        setModalEvent(false);
        setModalDelEvent(true);
    }

    // Change Event Modal
    const [modalChangeEvent, setModalChangeEvent] = useState(false);

    const clickChange = () => {
        setModalEvent(false);
        setModalChangeEvent(true);
    }

    const changeEvent = (e) => {
        e.preventDefault();
        myEvents.forEach((ev, i) => {
            if (ev.title === eventShown.title && dateStringToPt(ev.date) === dateStringToPt(eventShown.date)) {
                changeAPI("put", {
                    title: e.target.event.value,
                    date: e.target.date.value
                }, ev.id);
                setMyEvents([...myEvents.slice(0, i), {
                    id: ev.id,
                    title: e.target.event.value,
                    date: e.target.date.value
                }, ...myEvents.slice(i + 1, myEvents.length)]);
            }
        });
    }

    // Add Event Modal
    const [modalAddEvent, setModalAddEvent] = useState(false);
    
    const dateClicked = (dateStr) => {
        setDateModal(dateStr);
    }

    useEffect(() => {
        if (dateModal !== "1") { setModalAddEvent(true); }
    }, [dateModal]); 

    const addEvent = (e) => {
        e.preventDefault();
        changeAPI("post", {
            title: e.target.event.value,
            date: dateModal
        });
        setMyEvents([...myEvents, {
            id: (parseInt(myEvents[myEvents.length - 1].id) + 1).toString(),
            title: e.target.event.value,
            date: dateModal
        }]);
    }

    // Add Event Date Modal
    const [modalAddDateEvent, setModalAddDateEvent] = useState(false);
    
    const addDateEvent = (e) => {
        e.preventDefault();
        changeAPI("post", {
            title: e.target.event.value,
            date: e.target.date.value
        });
        setMyEvents([...myEvents, {
            id: (parseInt(myEvents[myEvents.length - 1].id) + 1).toString(),
            title: e.target.event.value,
            date: e.target.date.value
        }]);
    }

    // ===================

    useEffect(() => {
        if (modalDelEvent === true) {
            setModalDelEvent(false);
        } else if (modalAddEvent === true) {
            setModalAddEvent(false);
        } else if (modalChangeEvent === true) {
            setModalChangeEvent(false);
        } else if (modalAddDateEvent === true) {
            setModalAddDateEvent(false);
        };
        if (modalDelEvent === false && modalChangeEvent === false && modalEvent === false) {
            setEventShown(1);
            setEventId("");
        };
    }, [myEvents]);

    // ===================

        return (
            <div id="eventCalendar">
                <div id="calendar">
                    <MyCalendar id="myCalendar" eventClicked={eventClicked} dateClicked={dateClicked} addEventButtonClick={()=>setModalAddDateEvent(true)} myEvents={myEvents}></MyCalendar>
                </div>
                <div>
                    <ModalEvent
                        title={dateStringToPt(eventShown.date)}
                        body={eventShown.title}
                        onHide={()=>setModalEvent(false)}
                        show={modalEvent}
                        id={clickDel}
                        className={clickChange}
                        size={clientShow}
                    />
                </div>
                <div>
                    <ModalDelEvent
                        show={modalDelEvent}
                        id={confirmDelEvent}
                        onHide={()=>setModalDelEvent(false)}
                    />
                </div>
                <div>
                    <ModalChangeEvent
                        title={eventShown.title}
                        date={eventShown.date}
                        onHide={()=>setModalChangeEvent(false)}
                        show={modalChangeEvent}
                        onSubmit={changeEvent}
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

export default EventCalendar;