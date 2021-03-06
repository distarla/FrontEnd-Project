import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import MyCard from "./MyCard";

const ModalDelEvent = (props) => {

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            id="modalDelEvent"
        >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <MyCard
                    id="cardDeleteEvent"
                    bg="danger"
                    text="light"
                    border="danger"
                    title="Aviso!"
                    content="Esta ação vai apagar todos os dados do evento e clientes associados! Tem a certeza que pretende continuar?"
                />
            </Modal.Body>
            <Modal.Footer>
                <Button id="delConfirmBtn" variant="danger" onClick={props.id}>Confirmar</Button>
                <Button id="delCloseBtn" variant="secondary" onClick={props.onHide}>Fechar</Button>
            </Modal.Footer>
        </Modal>
    );
}
export default ModalDelEvent;