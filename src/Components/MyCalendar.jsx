import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import listPlugin from '@fullcalendar/list';
import momentPlugin from '@fullcalendar/moment'
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import "./MyCalendar.css"

const MyCalendar = (props) => {
    const [myEvents, setMyEvents] = useState([
        { title: 'event 1', date: '2022-07-01' },
        { title: 'event 2', date: '2022-07-02' }
    ]);

    // tirei
    const [eventShown, setEventShown] = useState({
        date: '',
        title:'',
    })

    const eventClicked = (el) => {
        setEventShown({
            date: moment(new Date(el.fcSeg.eventRange.range.start)).format("DD/MM/YYYY").toString(),
            title: el.fcSeg.eventRange.def.title,
        })
        console.log(eventShown)
        // props.modalShow()
    }
    // 

    return (
        <FullCalendar
            plugins={[dayGridPlugin, listPlugin, bootstrap5Plugin, momentPlugin]}
            headerToolbar={{
                start: 'today prev,next',
                center: 'title',
                end: 'dayGridMonth,listMonth,listYear'
            }}
            buttonText={{
                today: 'Today',
                dayGridMonth: 'Month View',
                listMonth: 'Month List',
                listYear: 'Year List'
            }}
            views="dayGridMonth,listMonth,listYear"
            initialView="dayGridMonth"
            events={myEvents}
            eventClick={e => eventClicked(e.el)}
            // eventClick={e=>props.eventClicked(e.el)}
            defaultAllDay={true}
            defaultAllDayEventDuration={{ days: 1 }}
            locale="pt-PT"
            themeSystem= "bootstrap5"
        />
    )
}
export default MyCalendar