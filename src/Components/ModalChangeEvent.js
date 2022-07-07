import React from "react";
import Modal from 'react-bootstrap/Modal';
import FormChangeEvent from "./FormChangeEvent";
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
                    <div>
                        <p><b>Dados Atuais do Evento:</b></p>
                        <p className="previousData">Data: {props.date}</p>
                        <p className="previousData">Evento: {props.title}</p>
                    </div>
                        <p><b>Novos Dados do Evento:</b></p>
                    <FormChangeEvent id="changeEvent" onClick={props.onHide} onSubmit={props.onSubmit} />
                </Modal.Body>
            </Modal>
        </div>
    );
}
export default ModalChangeEvent;