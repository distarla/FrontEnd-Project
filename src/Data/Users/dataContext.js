import React from "react";

export const data = {
    curName: '',
    curLevel: 0,
    loggedIn: false,
}

const DataContext = React.createContext(data);

export default DataContext;