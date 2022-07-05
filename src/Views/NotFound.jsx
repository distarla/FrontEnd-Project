import React from 'react'
import Card from 'react-bootstrap/Card';
import SvgLogo from '../Components/SvgLogo';
import './NofFound.css'

const NotFound = props => (
    <div className="container">
        <Card
            text='danger'
            border='danger'
        >
            <SvgLogo id='logo' />
            <Card.Body>
            <Card.Title id="title">Erro 404</Card.Title>
                <Card.Text>"Opss... Página Não Encontrada!"</Card.Text>
            </Card.Body>
        </Card>
    </div>
)

export default NotFound