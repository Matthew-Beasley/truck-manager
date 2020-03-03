import React, { useEffect, useState } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import Drivers from './Drivers';


const Home = () => {
  return (
    <h1>Hello from Home</h1>
  )
}


const Dispatch = () => {
  return (
    <h1>Hello from Dispatch</h1>
  )
}


const Service = () => {
  return (
    <h1>Hello from Service</h1>
  )
}


const App = () => {

  return (
    <div id="app-container">
      <h1>Truck Management System</h1>
      <header>
        <div className="Link"><Link to="/">Home</Link></div>
        <div className="Link"><Link to="/drivers">Driver Management</Link></div>
        <div className="Link"><Link to="/dispatch">Dispatch</Link></div>
        <div className="Link"><Link to="/service">Truck Maintainance</Link></div>
      </header>
      <div id="routes">
        <Route exact path="/" component={Home} />
        <Route path="/drivers" component={Drivers} />
        <Route path="/dispatch" component={Dispatch} />
        <Route path="/service" component={Service} />
      </div>
    </div>
  )
}

export default App;
