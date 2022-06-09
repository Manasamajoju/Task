import React from 'react';
import User from "./Container/User";
import {BrowserRouter as Router, Route, Switch} from "react-route-dom";
import Theme from "./Table/Theme";


function App() {

  return (

    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/User" component={User} />
          </Switch>     
           </Router>
      
        <Theme />  
       
    </div>

);

}



export default App;