import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
//import Drivers from './Drivers';


const Home = () => {
  return (
    <h1>Hello from Home</h1>
  )
}


const Drivers = () => {
  const [drivers, setDrivers] = useState([]);
  const [driver, setDriver] = useState('');

  useEffect(() => {
    axios.get('/api/drivers')
      .then(response => setDrivers(response.data));
  }, []);

  const createDriver = async () => {
    const response = await axios.post('/api/drivers', { driverName: driver })
    setDrivers([...drivers, response.data])
  }

  const deleteDriver = async (driverObj) => {
    console.log(driverObj)
    const response = await axios.delete(`/api/drivers/${driverObj.driver_id}`); //id may be a bug
    if (response !== null) {
      const filteredDrivers = drivers.filter(item => {
        return item.driver_id !== driverObj.driver_id;
      });
      setDrivers(filteredDrivers);
    }
  }

  return (
    <div id="drivers-wrapper">
      <form onSubmit={ev => ev.preventDefault()}>
        <label>Create Driver</label>
        <input type="text" value={driver} onChange={ev => setDriver(ev.target.value)} />
        <button type="submit" onClick={ev => createDriver(ev)}>Submit</button>
      </form>
      <div id="drivers-content">
        <ul id="drivers-list">
          {drivers.map(driverItem => {
            return (
              <li key={driverItem.driver_id}>
                {driverItem.driver_name}
                <button onClick={() => deleteDriver(driverItem)}>X</button>
              </li> //refactor the db names
            )
          })}
        </ul>
      </div>
    </div>
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
