import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ShowEventModal = (props) => {

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            id="showEventModal"
            onDelete={props.onDelete}
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
                <Button variant="danger" onClick={props.onClick}>Apagar Evento</Button>
                <Button variant="secondary" onClick={props.onHide}>Fechar</Button>
            </Modal.Footer>
        </Modal>
    );
}
export default ShowEventModal;