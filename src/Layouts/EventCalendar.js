import React, {useState, useEffect, useRef} from "react";
import MyCalendar from "../Components/MyCalendar.jsx";
import ShowEventModal from "../Components/ShowEventModal.js";
import AddEventModal from "../Components/AddEventModal.js";
import ModalDeleteEvent from "../Components/ModalDeleteEvent.js";
import { dateStringToPt, dateCalToString } from "../Data/Formulas/formulas.js";
import "./EventCalendar.css"
import { useInsertionEffect } from "react";

const EventCalendar = (props) => {

    // Initial state of fetch variables
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [myEvents, setMyEvents] = useState([]);

    // Initialization of variables to handle event data
    const [dateModal, setDateModal] = useState("");
    const [eventShown, setEventShown] = useState({});
    const [eventToAdd, setEventToAdd] = useState();

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
    const [modalEventShow, setModalEventShow] = useState(false);
    const closeModalEvent = () => setModalEventShow(false);
    const openModalEvent = () => setModalEventShow(true);

    const eventClicked = (el) => {
        setEventShown(
            {
                title: el.fcSeg.eventRange.def.title,
                date: dateCalToString(el.fcSeg.eventRange.range.start)
            }
        )
    };
    useEffect(()=>{openModalEvent();},[eventShown])

    // Delete Event Modal
    const [modalDelEventShow, setModalDelEventShow] = useState(false);
    const closeModalDelEvent = () => setModalDelEventShow(false);
    const openModalDelEvent = () => setModalDelEventShow(true);

    // Date to del not correct - Does not delete/Calendar doesn't re-render
    const confirmDelEvent = () => {
        console.log(eventShown)
        myEvents.forEach((ev, i) => {
            if (ev.title == eventShown.title && dateStringToPt(ev.date) == dateStringToPt(eventShown.date)) {
                setMyEvents([...myEvents.slice(0, i), ...myEvents.slice(i + 1, myEvents.length)]);
            }
        });
        // console.log(myEvents)
        // closeModalDelEvent();
    }

    // Warning: Unknown event handler property `onClickDel`. It will be ignored.
    const clickDel = () => {
        closeModalEvent();
        openModalDelEvent();
    }

    // Add Event Modal
    const [modalAddEventShow, setModalAddEventShow] = useState(false);
    const closeModalAddEvent = () => setModalAddEventShow(false);
    const openModalAddEvent = () => setModalAddEventShow(true);

    // Como Mostar data escolhida - Valor default input date? ou  <p> com data, se tiver (e esconde input e vice-versa), e if no addEvent para adicionar esta, se tiver ou a do input - apagar data no final
    const dateClicked = (dateStr) => {
        setDateModal(dateStr);
        // openModalAddEvent();
    }
    
    const addEvent = (e) => {
        e.preventDefault();
        setMyEvents([...myEvents, {
            title: e.target.event.value,
            date: e.target.date.value
        }]);
        console.log(e.target.event.value)
        // closeModalAddEvent();
    }

    useEffect(() => { openModalAddEvent(); console.log(dateModal) }, [dateModal]);
    useEffect(() => { openModalAddEvent(); }, [eventToAdd]);

    // Modals a disparar pelo fetch no primeiro render
    useEffect(() => {
        if (modalDelEventShow === true) {
            closeModalDelEvent();
            // postData(myEvents);
        } else if (modalAddEventShow === true) {
            closeModalAddEvent();
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
                <MyCalendar id="myCalendar" eventClicked={eventClicked} dateClicked={dateClicked} addEventButtonClick={openModalAddEvent} myEvents={myEvents}></MyCalendar>

                <div>
                    <ShowEventModal
                        title={dateStringToPt(eventShown.date)}
                        body={eventShown.title}
                        onHide={closeModalEvent}
                        show={modalEventShow}
                        onClickDel={clickDel}
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
                    <AddEventModal
                        onHide={closeModalAddEvent}
                        show={modalAddEventShow}
                        onSubmit={addEvent}
                    />
                </div>
            </div>
        )
    }    
}

export default EventCalendar;