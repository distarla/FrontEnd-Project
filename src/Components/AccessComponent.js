import React, { useContext, useState, useEffect } from "react";

import DataContext from '../Data/Users/dataContext';

const AccessComponent = props => {

    const { state, setState } = useContext(DataContext);
    const [show, setShow] = useState(false);

    useEffect(function() {
        setShow(state.curLevel <= props.level );        
    },[state.curName]);

    if (show) {
        return (
            // TESTE
            <button type="button" className="btn btn-primary">Teste</button>
        )
    } else {
        return false;
    }

}

export default AccessComponent;