import React from "react";

const Input = (props) => {
    return (
        <div className="mb-3">
        <label htmlFor={props.id} className="form-label">{props.label}</label>
        <input type={props.type || "text"} className="form-control" id={props.id} name={props.name}/>
    </div>
    )
}

export default Input;