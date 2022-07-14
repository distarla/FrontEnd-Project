import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SvgLogo from './SvgLogo';
import Loader from './Loader';
import Card from 'react-bootstrap/Card'
import Alert from 'react-bootstrap/Alert'
import Input from './Input'
import Button from 'react-bootstrap/Button'
import { EventsContext } from "../Data/EventsAPI/EventsContext";
import { dateStringToPt } from "../Data/Formulas/formulas.js";
import { changeClient, deleteClient } from "../Data/ClientsAPI/ClientsRequests";
import './FormChangeClient.css'

const FormChangeClient = props => {
    const {eventId} = useParams();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [myClients, setMyClients] = useState([]);
    const { myEvents, setMyEvents } = useContext(EventsContext);
    const [event, setEvent] = useState()
    const navigate = useNavigate();

    function editClient (e) {
        e.preventDefault();
        changeClient("put", {
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
        }, eventId, e.target.id);
        navigate(-2);
    }

    useEffect(() => {
        setEvent(myEvents.filter(ev => ev.id === eventId));
    },[eventId])

    useEffect(()=>{
        fetch(`https://62c2f855ff594c65676aea91.mockapi.io/api/v1/Events/${eventId}/Clients/`)
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setMyClients(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
        ) 
    }, [])
    
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div id="calLoader"><Loader /></div>;
    } else {
            return (
                <div id="container" className="divChangeClient">
                    <div id="clientHeader">
                        <SvgLogo id="clientLogo" />
                    </div>
                    <Card className="clientCard">
                        <Card.Body>
                            <Card.Title>Evento</Card.Title>
                                <p className="clientPar"><b>Título: </b>{event[0].title}</p>
                                <p className="clientPar"><b>Data: </b>{dateStringToPt(event[0].date)}</p>
                        </Card.Body>
                    </Card>
                    <Alert id="alertClient" variant="danger" show={true}>
                    <Alert.Heading>Atenção!</Alert.Heading>
                    <p className="text">
                        Se alterar ou apagar os dados dos clientes, não poderá recuperar os dados anteriores! 
                        </p>
                    </Alert>
                    {myClients.map((client, index) => {
                        return (
                            <Card key={index} className="clientCard">
                                <Card.Body className="changeClientCard">
                                    <Card.Title>Cliente</Card.Title>
                                    <form id={client.id} className="changeClientForm" onSubmit={e => editClient(e)}>
                                        <Input id="name" name="name" label="Nome:" value={client.name}></Input>
                                        <Input id="address" name="address" label="Morada:" value={client.address}></Input>
                                        <Input id="zip" name="zip" label="Código Postal:" value={client.zip}></Input>
                                        <Input id="city" name="city" label="Cidade:" value={client.city}></Input>
                                        <Input id="country" name="country" label="Pais:" value={client.country}></Input>
                                        <Input id="phone" name="phone" label="Telefone:" value={client.phone} type="number"></Input>
                                        <Input id="mail" name="mail" label="Email:" value={client.mail}></Input>
                                        <Input id="cc" name="cc" label="CC:" value={client.cc}></Input>
                                        <Input id="expiry" name="expiry" label="Expira em:" value={client.expiry} type="ate"></Input>
                                        <Input id="nif" name="nif" label="NIF:" value={client.nif}></Input>
                                        <div className="formFooter">
                                            <Button variant="primary" form={client.id} type="submit">Guardar Alterações</Button> 
                                            <Button variant="danger" onClick={() => {deleteClient(eventId, client.id); navigate(-2);}}>Apagar Cliente</Button>
                                        </div>
                                    </form>
                                </Card.Body>
                            </Card>
                        );
                    }
                    )}
                    <div id="clientFooter">
                        <Button variant="secondary" onClick={() => navigate(-1)}>Voltar</Button></div>
                </div> 
            );
        }

    
}
export default FormChangeClient;
