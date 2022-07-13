import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SvgLogo from './SvgLogo';
import Loader from './Loader';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { EventsContext } from "../Data/EventsAPI/EventsContext";
import { dateStringToPt } from "../Data/Formulas/formulas.js";
import './ClientsDetails.css'

const ClientsDetails = props => {
    const {eventId} = useParams();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [myClients, setMyClients] = useState([]);
    const { myEvents, setMyEvents } = useContext(EventsContext);
    const [event, setEvent] = useState()
    const navigate = useNavigate();

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
        if (myClients.length === 0) {
            return (
                <div id="container" className="client">
                    <div id="clientHeader">
                        <SvgLogo id="clientLogo" />
                    </div>
                    <Card className="clientCard">
                        <Card.Body>
                            <Card.Title>Evento</Card.Title>
                            <Card.Text>
                                <p className="clientPar"><b>Título: </b>{event[0].title}</p>
                                <p className="clientPar"><b>Data: </b>{dateStringToPt(event[0].date)}</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <p className="clientPar">Este evento não tem clientes associados!</p>
                    <div id="clientFooter"><Button variant="secondary" onClick={()=>navigate(-1)}>Voltar</Button></div>
                </div>
            )
        } else {
            return (
                <div id="container" className="client">
                    <div id="clientHeader">
                        <SvgLogo id="clientLogo" />
                    </div>
                    <Card className="clientCard">
                        <Card.Body>
                            <Card.Title>Evento</Card.Title>
                            <Card.Text>
                                <p className="clientPar"><b>Título: </b>{event[0].title}</p>
                                <p className="clientPar"><b>Data: </b>{dateStringToPt(event[0].date)}</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    {myClients.map((client, index) => {
                        return (
                            <Card key={index} className="clientCard">
                                <Card.Body>
                                    <Card.Title>Cliente</Card.Title>
                                    <Card.Text>
                                        <div>
                                            <p className="clientPar"><b>Nome: </b>{client.name}</p>
                                        </div>
                                        <hr />
                                        <div>
                                            <p className="clientPar"><b>Morada: </b>{client.address}</p>
                                            <p className="clientPar"><b>Código Postal: </b>{client.zip}</p>
                                            <p className="clientPar"><b>Cidade: </b>{client.city}</p>
                                            <p className="clientPar"><b>Pais: </b>{client.country}</p>
                                        </div>
                                        <hr />
                                        <div>
                                            <p className="clientPar"><b>Telefone: </b>{client.phone}</p>
                                            <p className="clientPar"><b>Email: </b>{client.mail}</p>
                                        </div>
                                        <hr />
                                        <div>
                                            <p className="clientPar"><b>CC: </b>{client.cc}</p>
                                            <p className="clientPar"><b>Expira em: </b>{client.expiry}</p>
                                            <p className="clientPar"><b>NIF: </b>{client.nif}</p>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        );
                    }
                    )}
                    <div id="clientFooter"><Button variant="secondary" onClick={()=>navigate(-1)}>Voltar</Button></div>
                </div>
                
            );
        }
    }
    
}
export default ClientsDetails;
