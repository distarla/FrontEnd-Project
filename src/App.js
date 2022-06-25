import React, { useState } from "react";
import LoginPage from './Views/LoginPage';
import './App.css';

import DataContext, { data } from './Data/Users/dataContext'

function App() {
  const [state, setState] = useState(data);

  return (
    <DataContext.Provider value={{state, setState}}>
      <div>
        <LoginPage></LoginPage>
      </div>
    </DataContext.Provider>
  );
}

export default App;
