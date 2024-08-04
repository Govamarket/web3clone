import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './component/Navbar';
import Landpage from './component/Landpage';
import Foot from './component/Foot';



function App() {
  return (
   <React.Fragment>
    <Navbar />
    <Landpage />
    <Foot />
   </React.Fragment>
   
  );
}

export default App;
