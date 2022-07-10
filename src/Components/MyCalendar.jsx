import React, {useState, useEffect, useRef} from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import momentPlugin from "@fullcalendar/moment";
import InteractionPlugin from "@fullcalendar/interaction";
import bootstrap5Plugin from "@fullcalendar/bootstrap5";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./MyCalendar.css";

const MyCalendar = (props) => {

    const calendarRef = useRef();
    // const calAPI = calendarRef.current._calendarAPI.currentDataManager;

    const [matches, setMatches] = useState(
        window.matchMedia("(max-width: 768px)").matches
    )

    useEffect(() => {
        window
        .matchMedia("(max-width: 768px)")
        .addEventListener('change', e => setMatches( e.matches ));
    }, []);

    // useEffect(() => {
    //     if (matches) {
    //         calAPI.setOption('dayHeaderFormat', { weekday: "narrow" });
    //     } else {
    //         calAPI.setOption('dayHeaderFormat', { weekday: "long" });
    //     }
    // }, [matches])
    
    
    return (
        <div id="divCal" >
            {matches && (
                <FullCalendar
                    ref={calendarRef}
                    height="100%"
                    contentHeight="100%"
                    aspectRatio={1}
                    nowIndicator
                    plugins={[
                        dayGridPlugin,
                        listPlugin,
                        bootstrap5Plugin,
                        momentPlugin,
                        InteractionPlugin,
                    ]}
                    headerToolbar={{
                        start: "title",
                        end: "dayGridMonth,listMonth,listYear",
                    }}
                    footerToolbar={{
                        start: "prev,next today",
                        end: "addEventButton"
                    }}
                    customButtons={{ addEventButton: {
                        text: "Ad. Evento",
                        click: () => props.addEventButtonClick(),
                    } }}
                    buttonText={{
                        today: "Hoje",
                        dayGridMonth: "Mes",
                        listMonth: "L.Mes",
                        listYear: "L.Ano",
                    }}
                    dayHeaderFormat={{ weekday: "narrow" }}
                    showNonCurrentDates={false}
                    views="dayGridMonth,listMonth,listYear"
                    initialView="dayGridMonth"
                    noEventsText="Sem Eventos para mostrar"
                    events={props.myEvents}
                    eventClick={(e) => props.eventClicked(e.el)}
                    dateClick={(e) => props.dateClicked(e.dateStr)}
                    defaultAllDay={true}
                    defaultAllDayEventDuration={{ days: 1 }}
                    locale="pt-PT"
                    firstDay={1}
                    themeSystem="bootstrap5"    
                />
            )}
            {!matches && (
                <FullCalendar
                    ref={calendarRef}
                    height="100%"
                    contentHeight="100%"
                    aspectRatio={1}
                    nowIndicator
                    plugins={[
                        dayGridPlugin,
                        listPlugin,
                        bootstrap5Plugin,
                        momentPlugin,
                        InteractionPlugin,
                    ]}
                    headerToolbar={{
                        start: "title",
                        end: "dayGridMonth,listMonth,listYear",
                    }}
                    footerToolbar={{
                        start: "prev,next today",
                        end: "addEventButton"
                    }}
                    customButtons={{ addEventButton: {
                        text: "Adicionar Evento",
                        click: () => props.addEventButtonClick(),
                    } }}
                    buttonText={{
                        today: "Hoje",
                        dayGridMonth: "Mensal",
                        listMonth: "Lista Mensal",
                        listYear: "Lista Anual",
                    }}
                    dayHeaderFormat={{weekday: "long"}}
                    views="dayGridMonth,listMonth,listYear"
                    initialView="dayGridMonth"
                    noEventsText="Sem Eventos para mostrar"
                    events={props.myEvents}
                    eventClick={(e) => props.eventClicked(e.el)}
                    dateClick={(e) => props.dateClicked(e.dateStr)}
                    defaultAllDay={true}
                    defaultAllDayEventDuration={{ days: 1 }}
                    locale="pt-PT"
                    firstDay={1}
                    themeSystem="bootstrap5"    
                />
            )}
        </div>
    );
};
export default MyCalendar;
