import React, { useState } from "react";
import RequiredInput from "../Components/RequiredInput";

const LoginForm = (props) => {

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

    // dados do login - hash e comparar password
    function onSubmit (e) {
        e.preventDefault();
        const addUser = { 
            username: e.target.username.value,
            password: e.target.password.value,
        };
        console.log(addUser);
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