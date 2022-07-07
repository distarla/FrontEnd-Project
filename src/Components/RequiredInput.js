import React, { useState } from "react";
import './RequiredInput.css'

const RequiredInput = (props) => {

    const [error,setError] = useState('');

    function onChange(el) {
        var status
        if (props.type === "date") {
            status = !isNaN((new Date(el.value)).getDate());
        } else {
            status = props.pattern.test(el.value);
        };

        props.onRequired(el.name, status);

        if (!status)
            setError(props.error);
        else
            setError('');
    }

    return (
    <div className="mb-3 Required">
        <label htmlFor={props.id} className="form-label">{props.label}</label>
        <input type={props.type || 'text'} className="form-control" id={props.id} name={props.name} onChange={e => onChange(e.target)}/>
        <div className="form-text">{error}</div>
    </div>
    )
}

export default RequiredInput;