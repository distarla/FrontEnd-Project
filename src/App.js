import React, { useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom'
import Content from "./Views/Content";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import DataContext, { data } from './Data/Users/dataContext'

function App() {
  const [state, setState] = useState(data);

  return (
    <DataContext.Provider value={{state, setState}}>
      <div>  
          <Router>
            <Content></Content>
          </Router>
      </div>
    </DataContext.Provider>
  );
}

export default App;
