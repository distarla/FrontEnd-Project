import React from "react";
import SvgLogo from "../Components/SvgLogo";
import LoginForm from "../Layouts/LoginForm";
import './LoginPage.css'

const LoginPage = (props) => {

    return (
        <div className="container">
            <figure id="logoLogin">
                <SvgLogo></SvgLogo>
            </figure>
            <LoginForm></LoginForm>
        </div>    
    )
}

export default LoginPage