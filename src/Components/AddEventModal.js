import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Input from './Input'
import './AddEventModal.css'

const AddEvDateModal = (props) => {

    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                id="addEvDateModal"
            >
                <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Adicionar Novo Evento:
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <form id="addDateEvent">
                            <Input id="inputAddEventDate" type="date" name="date" label="Data:"></Input>
                            <Input id="inputAddDateEvent" name="event" label="Evento:"></Input>
                        </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" form="addDateEvent" onSubmit={props.onSubmit} type="submit">Gravar</Button>
                    <Button variant="secondary" onClick={props.onHide}>Fechar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
export default AddEvDateModal;