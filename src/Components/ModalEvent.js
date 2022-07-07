import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ModalEvent = (props) => {

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            id="modalEvent"
        >
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                {props.title}
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.body}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={props.id}>Apagar Evento</Button>
                <Button variant="primary" onClick={props.className}>Editar Evento</Button>
                <Button variant="secondary" onClick={props.onHide}>Fechar</Button>
            </Modal.Footer>
        </Modal>
    );
}
export default ModalEvent;