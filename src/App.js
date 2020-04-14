import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js'
import Home from './Home.js'
  import Teams from './Teams.js'
  import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class App extends React.Component{

  render (){
    // console.log("history in App", this.props.history )
    return (
      <div>
      <Navbar history={this.props.history} />
     
      </div>
  );
  }
}

export default App;
