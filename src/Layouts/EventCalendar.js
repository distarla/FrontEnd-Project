import React, {useState} from "react";
// import Access from "../Views/Access";
// import AccessComponent from "../Components/AccessComponent";
import MyCalendar from "../Components/MyCalendar.jsx";
import Button from 'react-bootstrap/Button';
import MyCard from "../Components/MyCard";
import MyModal from "../Components/MyModal";
import "./EventCalendar.css"


const EventCalendar = (props) => {
    // tirei
    // Modal
    const [modalShow, setModalShow] = useState(false);
    // 
    
    // const [eventShown, setEventShown] = useState({
    //     date: '',
    //     title:'',
    // })

    // // const eventModal = useRef(null);

    // const eventClicked = (el) => {
    //     setEventShown({
    //         date: moment(new Date(el.fcSeg.eventRange.range.start)).format("DD/MM/YYYY").toString(),
    //         title: el.fcSeg.eventRange.def.title,
    //     });

    //     // eventModal.setAttribute("title", eventShown.date);
    //     // eventModal.setAttribute("body", eventShown.title);
    //     // eventModal.setAttribute("show", true);
    // }

    return (
        <div className="container">
            <MyCalendar id="myCalendar"></MyCalendar>
            {/* <MyCalendar id="myCalendar" eventclick={eventClicked}></MyCalendar> */}

            <MyCard id="event" title="17/02/2022" text="Margarida Martins + André Alves"></MyCard>

            <div>
                <Button variant="primary" onClick={() => setModalShow(true)}>
                    Launch modal
                </Button>

                 {/* <MyModal
                    id="eventModal" ref={eventModal} title="" body="" onShow
                /> */}
                
                {/* <MyModal
                    id="addEvent"
                    title="Add Event"
                    body="Event ..."
                    show={() => setShow(false)}
                    hide={() => setShow(false)}
                /> */}

                <MyModal
                    id="addEvent"
                    title="Add Event"
                    body="Event ..."
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>
        </div>
    )
}

export default EventCalendar;