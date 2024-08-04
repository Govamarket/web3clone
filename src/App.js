import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './component/Navbar';
import Landpage from './component/Landpage';
import Foot from './component/Foot';
import Newpage from './component/Newpage';



function App() {
  return (
   <React.Fragment>
    <Navbar />
    <Landpage />
    <Foot />
    <Newpage />
   </React.Fragment>
   
  );
}

export default App;
