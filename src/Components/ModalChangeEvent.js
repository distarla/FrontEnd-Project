import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Input from './Input'
import Alert from 'react-bootstrap/Alert';
import './ModalChangeEvent.css'

const ModalChangeEvent = (props) => {

    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                id="modalChangeEvent"
            >
                <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Editar Evento:
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="text">
                        <p><b>Dados Atuais do Evento:</b></p>
                        <p className="previousData">Data: {props.date}</p>
                        <p className="previousData">Evento: {props.title}</p>
                    </div>
                        <p className="text"><b>Novos Dados do Evento:</b></p>
                    <form id="changeEvent" className="text">
                        <Input id="inputChangeDate" type="date" name="date" label="Data:"></Input>   
                        <Input id="inputChangeEvent" name="event" label="Evento:"></Input>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                <Alert id="alert" variant="danger" show={true}>
                    <Alert.Heading>Atenção!</Alert.Heading>
                    <p className="text">
                        Se alterar os dados do evento, não poderá recuperar os dados anteriores!
                    </p>
                </Alert>
                    <div id="changeModalButtons">
                        <Button variant="primary" form="changeEvent" onSubmit={props.onSubmit} type="submit" >Alterar Evento</Button>
                        <Button variant="secondary" onClick={props.onHide}>Fechar</Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
export default ModalChangeEvent;