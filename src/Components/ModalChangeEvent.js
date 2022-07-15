import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Input from './Input'
import Alert from 'react-bootstrap/Alert';
import { dateStringToPt } from "../Data/Formulas/formulas";
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
                        <p className="text"><b>Alterar Dados do Evento:</b></p>
                    <form id="changeEvent" className="modalForm text">
                        <Input id="inputChangeDate" type="date" name="date" label="Data:" value={props.date}></Input>   
                        <Input id="inputChangeEvent" name="event" label="Evento:" value={props.title}></Input>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                <Alert id="alert" variant="danger" show={true}>
                    <Alert.Heading>Atenção!</Alert.Heading>
                    <p className="text">
                        Se alterar ou os dados do evento, não poderá recuperar os dados anteriores! 
                        </p>
                        <p id="alertNote">*Os dados dos clientes continuarão anexados ao evento.</p>
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