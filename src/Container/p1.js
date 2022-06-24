import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Tenuis from './Table/Tenuis';
import Page from './Table/Ratione';
import Theme from "./Table/Theme";
import Ullam from './Table/Ullam';
import Ratione from './Table/Ratione';
import Userlist from './Table/Userlist';
import Person1 from './Table/Person1';
import Person2 from './Table/Person2';
import Person3 from './Table/Person3';
import Person4 from './Table/Person4';
import Person5 from './Table/Person5';
import Person6 from './Table/Person6';

const Route = require("react-router-dom").Route;

function App() {

  return (
        
    <Router>
      <Routes>
        <Route path="/Ratione" element={ <Ratione />} />
        <Route path="/Ullam" element={ <Ullam />} />
        <Route path="/Theme" element={ <Theme />} />
        <Route path="/Tenuis" element={ <Tenuis />} />
        <Route path="/Page" element={ <Page />} />
        <Route path="/Userlist" element={ <Userlist />} />
        <Route path="/Person1" element={ <Person1 />} />
        <Route path="/Person2" element={ <Person2 />} />
        <Route path="/Person3" element={ <Person3 />} />
        <Route path="/Person4" element={ <Person4 />} />
        <Route path="/Person5" element={ <Person5 />} />
        <Route path="/Person16" element={ <Person6 />} />
      </Routes>
    </Router>
       
    
  );
}

 
export default App;
