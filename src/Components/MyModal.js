import React, {useState} from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const MyModal = (props) => {

    // const [show, setShow] = useState(false);

    

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            id={props.id}
            // show={show}
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
                {/* <Button variant="primary">Save</Button>
                {props.buttons} */}
                {/* <Button variant="secondary" onClick={() => setShow(false)}>Close</Button> */}
                <Button variant="secondary" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
export default MyModal;