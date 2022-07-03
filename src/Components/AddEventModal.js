import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Input from './Input'
import './AddEventModal.css'

const AddEventModal = (props) => {

    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                id="addEventModal"
            >
                <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Adicionar Novo Evento:
                </Modal.Title>
                </Modal.Header>
                <Modal.Body id="modalBody">
                    <p>Data: {props.date}</p>
                    <form id="addEvent" onSubmit={props.onSubmit}>
                        <Input id="inputAddEvent" name="event" label="Evento:"></Input>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" form="addEvent" type="submit">Gravar</Button>
                    <Button variant="secondary" onClick={props.onHide}>Fechar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
export default AddEventModal;