import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Input from './Input'
import './ModalAddEvent.css'

const ModalAddEvent = (props) => {

    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                id="modalAddEvent"
            >
                <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Adicionar Novo Evento:
                </Modal.Title>
                </Modal.Header>
                <Modal.Body id="modalBody">
                    <p>Data: {props.date}</p>
                    <form id="addEvent" className="modalForm">
                        <Input id="inputAddEvent" name="event" label="Evento:"></Input>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" form="addEvent" onSubmit={props.onSubmit} type="submit">Gravar</Button>
                    <Button variant="secondary" onClick={props.onHide}>Fechar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
export default ModalAddEvent;