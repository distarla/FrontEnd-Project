import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import listPlugin from '@fullcalendar/list';

const MyCalendar = (props) => {
    return (
        <FullCalendar
            plugins={[dayGridPlugin, listPlugin]}
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
            events={[
                { title: 'event 1', date: '2022-06-01' },
                { title: 'event 2', date: '2022-06-02' }
            ]}
            defaultAllDay={true}
            defaultAllDayEventDuration={{ days: 1 }}
            themeSystem='standard'
        />
    )
}
export default MyCalendar