import React from "react";
import Card from 'react-bootstrap/Card';

const MyCard = (props) => {
    return (
        <Card
            {...props}
            bg={props.bg}
            text={props.text}
            border={props.border}
            id={props.id}
        >
            <Card.Body>
                <Card.Title bsPrefix={props.bsPrefix || "card-title"}>{props.title}</Card.Title>
                <Card.Text>
                    {props.content}
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
        </Card>
    )
}
export default MyCard;