import React, { useContext, useState, useEffect } from "react";
import Alert from 'react-bootstrap/Alert';
import './AlertWelcome.css'


import usersData from '../Data/Users/usersData';

import DataContext from '../Data/Users/dataContext';

const AlertWelcome = props => {

    const { state, setState } = useContext(DataContext);
    const [user, setUser] = useState({});
    const [alertText, setAlertText] = useState('');
    const [showAlert, setShowAlert] = useState(false);


    useEffect(function() {
        setUser(usersData.filter(el => el.name == state.curName)[0])
        setAlertText(state.curName)
        if (state.curName!==""){
            setShowAlert(true)
        }
    }, [state.curName]);
    

    return (
        <div id="alertWelcome">
            <Alert id="alert" show={showAlert} variant="success" onClose={() => setShowAlert(false)} dismissible>
                <Alert.Heading id="heading">Bem-Vindo(a), </Alert.Heading>
                <p>{alertText}</p>
            </Alert>
        </div>
    );

}

export default AlertWelcome;