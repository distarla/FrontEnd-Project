import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SvgLogo from "./SvgLogo";
import Card from "react-bootstrap/Card";
import Input from "./Input";
import Button from "react-bootstrap/Button";
import { EventsContext } from "../Data/EventsAPI/EventsContext";
import { dateStringToPt } from "../Data/Formulas/formulas.js";
import { changeClient } from "../Data/ClientsAPI/ClientsRequests";


const FormAddClient = (props) => {
    const { eventId } = useParams();
    const { myEvents, setMyEvents } = useContext(EventsContext);
    const [event, setEvent] = useState(myEvents.filter((ev) => ev.id === eventId));
    const navigate = useNavigate();

    function addClient(e) {
        e.preventDefault();
        changeClient(
        "post",
        {
            name: e.target.name.value,
            address: e.target.address.value,
            zip: e.target.zip.value,
            city: e.target.city.value,
            country: e.target.country.value,
            phone: e.target.phone.value,
            mail: e.target.mail.value,
            cc: e.target.cc.value,
            expiry: e.target.expiry.value,
            nif: e.target.nif.value,
        },
        eventId);
        navigate(-2);
    }

    useEffect(() => {
        setEvent(myEvents.filter((ev) => ev.id === eventId));
    }, [eventId]);

    return (
        <div id="container" className="divAddClient">
        <div id="clientHeader">
            <SvgLogo id="clientLogo" />
            </div>
            {event.map((ev, i) =>
           { return(
        <Card className="clientCard" key={i}>
            <Card.Body>
            <Card.Title>Evento</Card.Title>
            <p className="clientPar"><b>Título: </b>{ev.title}</p>
            <p className="clientPar"><b>Data: </b>{dateStringToPt(ev.date)}
            </p>
            </Card.Body>
        </Card>
        )})}
        <Card className="clientCard">
            <Card.Body className="addClientCard">
            <Card.Title>Cliente</Card.Title>
            <form
                id="addClientForm"
                className="clientForm"
                onSubmit={(e) => addClient(e)}
            >
                <Input id="name" name="name" label="Nome:"></Input>
                <Input id="address" name="address" label="Morada:"></Input>
                <Input id="zip" name="zip" label="Código Postal:"></Input>
                <Input id="city" name="city" label="Cidade:"></Input>
                <Input id="country" name="country" label="Pais:"></Input>
                <Input id="phone" name="phone" label="Telefone:" type="number"></Input>
                <Input id="mail" name="mail" label="Email:"></Input>
                <Input id="cc" name="cc" label="CC:"></Input>
                <Input id="expiry" name="expiry" label="Expira em:" type="date"></Input>
                <Input id="nif" name="nif" label="NIF:"></Input>
                <Button variant="primary" form="addClientForm" type="submit">
                Guardar Alterações
                </Button>
            </form>
            </Card.Body>
        </Card>
        <div id="clientFooter">
            <Button variant="secondary" onClick={() => navigate(-1)}>
            Voltar
            </Button>
        </div>
        </div>
    );
};
export default FormAddClient;
