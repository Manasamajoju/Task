import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Userdetail1 from './Table/Userdetail1';
import Userdetail2 from './Table/Userdetail2';
import Theme from "./Table/Theme";
import Userdetail3 from './Table/Userdetail3';
import Userdetail4 from './Table/Userdetail4';
import Userlist from './Table/Userlist';
// import Person2 from './Table/Person2';
// import Person3 from './Table/Person3';
// import Person4 from './Table/Person4';
// import Person5 from './Table/Person5';
// import Person6 from './Table/Person6';
import User from './Container/User';
import Post from './Container/Post';
import Psts from './Container/Psts';

const Route = require("react-router-dom").Route;
=======
import User from "./Container/User";
import Theme from "./Table/Theme";
import Post from "./Container/Post";
import Post1 from "./Components/Post1";
import Post2 from "./Components/Post2";
import Post3 from "./Components/Post3";
import Post4 from "./Components/Post4";

import { BrowserRouter as Router, Routes } from 'react-router-dom';
>>>>>>> 8a4df8496d128f289541455dfbde9b927cdc3f77

const Route = require("react-router-dom").Route;
function App() {

  const myStyle={
    backgroundImage: 
"url('https://images.unsplash.com/photo-1601674957874-1284f5996fea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw%3D&&q=80')",
    height:'750px',
    width: '500',
    marginTop:'-80px',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
  return (
    <div className="App">
<<<<<<< HEAD
    <div style={myStyle}>
    <Router>
      <Routes>
        <Route path="/Userdetail1" element={ <Userdetail1 />} />
        <Route path="/Userdetail2" element={ <Userdetail2 />} />
        <Route path="/Theme" element={ <Theme />} />
        <Route path="/Userdetail3" element={ <Userdetail3 />} />
        <Route path="/Psts" element={ <Psts />} />
        <Route path="/Post" element={ <Post />} />
        <Route path="/Userlist" element={ <Userlist />} />
        <Route path="/Userdetail4" element={ <Userdetail4 />} />
        <Route path="/User" element={ <User />} />
        {/* <Route path="/Person2" element={ <Person2 />} />
        <Route path="/Person3" element={ <Person3 />} />
        <Route path="/Person4" element={ <Person4 />} />
        <Route path="/Person5" element={ <Person5 />} />
        <Route path="/Person16" element={ <Person6 />} /> */}

      </Routes>
    </Router>
=======
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

       
>>>>>>> 8a4df8496d128f289541455dfbde9b927cdc3f77
    </div>
  </div>
    
       
    
  );
}

 
export default App;
