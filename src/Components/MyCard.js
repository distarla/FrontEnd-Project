import React from "react";
import Card from 'react-bootstrap/Card';

const MyCard = (props) => {
    return (
        <Card
            {...props}
            bg="ligth"
            text="primary"
            border="primary"
            id={props.id}
        >
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
        </Card>
    )
}
export default MyCard;