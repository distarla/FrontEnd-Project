import React from "react";

export const data = {
    curName: '',
    curLevel: 0,
}

const DataContext = React.createContext(data);

export default DataContext;