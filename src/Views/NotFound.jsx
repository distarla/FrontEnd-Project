import React from 'react'
import Card from 'react-bootstrap/Card';
import SvgLogo from '../Components/SvgLogo';
import './NotFound.css'

const NotFound = props => (
    <div id='notFound'>
        <Card
            text='danger'
            border='danger'
        >
            <SvgLogo id='logo' />
            <Card.Body>
            <Card.Title>Erro 404</Card.Title>
                <Card.Text>"Opss... Página Não Encontrada!"</Card.Text>
            </Card.Body>
        </Card>
    </div>
)

export default NotFound