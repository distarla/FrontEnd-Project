import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Input from './Input'
import './ModalAddEvent.css'

const ModalAddEvent = (props) => {

    const inputToShow = (date:String) => {
        if (date === "") {
            return (
                <Input id="inputAddEvent" type="date" name="date" label="Data:"></Input>
            )
        } else {
            return (
                <Input id="inputAddEvent" name="date" label="Data:" value={props.value} readonly></Input>
            )
        }
    }

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
                <Modal.Body>
                    <form id="addEvent">
                        {()=>inputToShow(props.value)}   
                        <Input id="inputAddEventDate" name="event" label="Evento:"></Input>
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