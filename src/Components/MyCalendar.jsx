import React, { useState } from 'react'
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

    const [myEvents, setMyEvents] = useState([]);

    const addEventButton = {
        text: 'Adicionar Evento',
        click: function () {
            var dateStr = prompt('Enter a date in YYYY-MM-DD format');
            var date = new Date(dateStr + 'T00:00:00'); // will be in local time
            
            if (!isNaN(date.valueOf())) { // valid?
                calendar.addEvent({
                    title: 'dynamic event',
                    start: date,
                    allDay: true
                });
                alert('Great. Now, update your database...');
            } else {
                alert('Invalid date.');
            }
        }
    }

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
            buttonText = {{
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
            themeSystem= "bootstrap5"
        />
    )
}
export default MyCalendar