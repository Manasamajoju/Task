import React from 'react';
import User from "./Container/User";
import Theme from "./Table/Theme";
import Post from "./Container/Post";
import Post1 from "./Components/Post1";
import Post2 from "./Components/Post2";
import Post3 from "./Components/Post3";
import Post4 from "./Components/Post4";

import { BrowserRouter as Router, Routes } from 'react-router-dom';

const Route = require("react-router-dom").Route;
function App() {

  return (

    <div className="App">
      <Router>

           <Routes>
             <Route path="Theme" element={ <Theme />} />

             <Route path="User" element={ <User />} />

             <Route path="Post" element={ <Post />} />
             <Route path="Post1" element={ <Post1/>} />
             <Route path="Post2" element={ <Post2 />} />
             <Route path="Post3" element={ <Post3 />} />
             <Route path="Post4" element={ <Post4 />} />

            </Routes>

      </Router>

       
    </div>

);

}



export default App;