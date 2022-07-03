import React, { useState, useEffect } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import listPlugin from '@fullcalendar/list';
import momentPlugin from '@fullcalendar/moment'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import "./MyCalendar.css"

const MyCalendar = (props) => {
    // const [myEvents, setMyEvents] = useState([
    //     { title: 'event 1', date: '2022-07-01' },
    //     { title: 'event 2', date: '2022-07-02' }
    // ]);
    
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [myEvents, setMyEvents] = useState([]);

    const addEventButton = {
        text: 'Adicionar Evento',
        click: ()=>props.addEventButtonClick()
            
            // if (!isNaN(date.valueOf())) { // valid?
            //     calendar.addEvent({
            //         title: 'dynamic event',
            //         start: date,
            //         allDay: true
            //     });
    }

    useEffect(() => {
        fetch("MockData/events.json")
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
            <FullCalendar
                plugins={[dayGridPlugin, listPlugin, bootstrap5Plugin, momentPlugin]}
                headerToolbar={{
                    start: 'today',
                    center: 'title',
                    end: 'dayGridMonth,listMonth,listYear'
                }}
                footerToolbar={{
                    start: 'addEventButton',
                    end: 'prev,next'
                }}
                customButtons={{ addEventButton }}
                buttonText={{
                    today: 'Hoje',
                    dayGridMonth: 'Mensal',
                    listMonth: 'Lista Mensal',
                    listYear: 'Lista Anual'
                }}
                views="dayGridMonth,listMonth,listYear"
                initialView="dayGridMonth"
                events={myEvents}
                eventClick={e => props.eventClicked(e.el)}
                defaultAllDay={true}
                defaultAllDayEventDuration={{ days: 1 }}
                locale="pt-PT"
                themeSystem="bootstrap5"
            />
        )
    }
}
export default MyCalendar;