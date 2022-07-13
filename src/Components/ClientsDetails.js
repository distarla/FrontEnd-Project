import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import SvgLogo from './SvgLogo';
import Loader from './Loader';
import Card from 'react-bootstrap/Card'
import { EventsContext } from "../Data/EventsAPI/EventsContext";
import { dateStringToPt } from "../Data/Formulas/formulas.js";
import './ClientsDetails.css'

const ClientsDetails = props => {
    const {eventId} = useParams();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [myClients, setMyClients] = useState([]);
    const { myEvents, setMyEvents } = useContext(EventsContext);
    const [event, setEvent]=useState()

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
                <div id="container" className="client">
                    <div id="clientHeader">
                        <SvgLogo id="clientLogo" />
                    </div>
                    <Card className="clientCard">
                        <Card.Body>
                            <Card.Title>Evento</Card.Title>
                            <Card.Text>
                                <p><b>Título: </b>{event[0].title}</p>
                                <p><b>Data: </b>{dateStringToPt(event[0].date)}</p>
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
                                            <p><b>Nome: </b>{client.name}</p>
                                        </div>
                                        <hr />
                                        <div>
                                            <p><b>Morada: </b>{client.address}</p> 
                                            <p><b>Código Postal: </b>{client.zip}</p>
                                            <p><b>Cidade: </b>{client.city}</p> 
                                            <p><b>Pais: </b>{client.country}</p>
                                        </div>
                                        <hr />
                                        <div>
                                            <p><b>Telefone: </b>{client.phone}</p>
                                            <p><b>Email: </b>{client.mail}</p>
                                        </div>
                                        <hr />
                                        <div>
                                            <p><b>CC: </b>{client.cc}</p>
                                            <p><b>Expira em: </b>{client.expiry}</p>
                                            <p><b>NIF: </b>{client.nif}</p> 
                                        </div>        
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        );
                    }
                    )}
                </div>
                
            );
        }
    
}
export default ClientsDetails;
