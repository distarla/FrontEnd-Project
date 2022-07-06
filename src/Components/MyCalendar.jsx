import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import momentPlugin from "@fullcalendar/moment";
import InteractionPlugin from "@fullcalendar/interaction";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import bootstrap5Plugin from "@fullcalendar/bootstrap5";
import "./MyCalendar.css";

const MyCalendar = (props) => {
    const addEventButton = {
        text: "Adicionar Evento",
        click: () => props.addEventButtonClick(),
    };

    return (
        <FullCalendar
        plugins={[
            dayGridPlugin,
            listPlugin,
            bootstrap5Plugin,
            momentPlugin,
            InteractionPlugin,
        ]}
        headerToolbar={{
            start: "today",
            center: "title",
            end: "dayGridMonth,listMonth,listYear",
        }}
        footerToolbar={{
            start: "addEventButton",
            end: "prev,next",
        }}
        customButtons={{ addEventButton }}
        buttonText={{
            today: "Hoje",
            dayGridMonth: "Mensal",
            listMonth: "Lista Mensal",
            listYear: "Lista Anual",
        }}
        views="dayGridMonth,listMonth,listYear"
        initialView="dayGridMonth"
        events={props.myEvents}
        eventClick={(e) => props.eventClicked(e.el)}
        dateClick={(e) => props.dateClicked(e.dateStr)}
        defaultAllDay={true}
        defaultAllDayEventDuration={{ days: 1 }}
        locale="pt-PT"
        themeSystem="bootstrap5"
        />
    );
};
export default MyCalendar;
