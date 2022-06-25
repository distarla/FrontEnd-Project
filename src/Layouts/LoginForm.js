import React, { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { sha256 } from 'js-sha256';
import RequiredInput from "../Components/RequiredInput";
import usersData from "../Data/Users/usersData";
import DataContext from "../Data/Users/dataContext";
import './LoginForm.css'

const LoginForm = (props) => {

    const { state, setState } = useContext(DataContext);
    let navigate = useNavigate();

    const [valid, setValid] = useState(false);
    const [validations, setValidations] = useState([
        { input: 'username', valid: false },
        { input: 'password', valid: false },
        ])

    function checkForm() {
        setValid(validations.map( inp => inp.valid).reduce( (resultado,valido) => resultado && valido))
    }

    function valRequired(el,state) {
        validations.forEach ( inp => {
            if (inp.input === el)
                inp.valid = state;
        })
        checkForm();
    }

    function validateLogin(username, password) {
        console.log(`Username: ${username}, Password: ${password}`)
        usersData.forEach((user, index) => {
            if (user.username == username && user.password == password) {
                setState({
                    ...state,
                    curName: usersData[index].name,
                    curLevel: usersData[index].level,
                }); 
                navigate("/home", { replace: true });
            } else {
                return false;
            }
        })
    }

    function onSubmit (e) {
        e.preventDefault();
        let password = sha256(e.target.password.value);
        const loginData = {
            username: e.target.username.value,
            password: password,
        };   
        validateLogin(loginData.username, loginData.password);
    }

    return (
        <form onSubmit={e => onSubmit(e)}>
            <RequiredInput id="username" name="username" label="Username" onRequired={valRequired} pattern={/^[a-zA-Z0-9]{3,12}$/} error="Tem de indicar username (3 a 12 caracteres)"/>
            <RequiredInput id="password" name="password" label="Password" onRequired={valRequired} pattern={/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,15}$/} error="Password inválida (>8 caract: 1 maisc, 1 minúsc, 1 núm, 1 símb)"/>
            <button type="submit" className="btn btn-primary" disabled={!valid}>Login</button>
        </form>
    );

}

export default LoginForm;