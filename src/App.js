/* eslint-disable react/jsx-wrap-multilines */
import React, { useEffect, useState } from 'react';
import { Route, useHistory } from 'react-router-dom';
import Drivers from './Drivers';
import Trucks from './Trucks';
import Dispatch from './Dispatch';
import Locations from './Locations';
import axios from 'axios';


const Home = () => {
  return (
    <h1>Hello from Home</h1>
  )
}


const Service = () => {
  return (
    <h1>Hello from Service</h1>
  )
}


const App = () => {
  const history = useHistory();
  const [drivers, setDrivers] = useState([]);
  const [trucks, setTrucks] = useState([]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    Promise.all([
      axios.get('/api/drivers'),
      axios.get('/api/trucks'),
      axios.get('/api/locations')
    ])
      .then(values => {
        setDrivers(values[0].data);
        setTrucks(values[1].data);
        setLocations(values[2].data);
      });
  }, [])

  const navigateTo = (location) => {
    history.push(location);
  }

  return (
    <div id="app-container">
      <h1>Truck Management System</h1>
      <header>
        <button type="button" onClick={() => navigateTo('/')}>Home</button>
        <button type="button" onClick={() => navigateTo('/dispatch')}>Dispatch</button>
        <button type="button" onClick={() => navigateTo('/drivers')}>Drivers</button>
        <button type="button" onClick={() => navigateTo('/trucks')}>Trucks</button>
        <button type="button" onClick={() => navigateTo('/locations')}>Locations</button>
        <button type="button" onClick={() => navigateTo('/service')}>Service</button>
      </header>
      <div id="routes">
        <Route exact path="/" component={Home} />

        <Route
          path="/drivers" render={props => <Drivers
            drivers={drivers} setDrivers={setDrivers} {...props} />}
        />

        <Route
          path="/dispatch" render={() => <Dispatch
            trucks={trucks} locations={locations} />}
        />

        <Route
          path="/trucks" render={() => <Trucks
            drivers={drivers} trucks={trucks} setTrucks={setTrucks} />}
        />

        <Route 
          path="/locations" render={() => <Locations
            locations={locations} setLocations={setLocations} />}
        />

        <Route path="/service" component={Service} />
      </div>
    </div>
  )
}

export default App;
