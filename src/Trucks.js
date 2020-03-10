import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Trucks = ({ trucks, setTrucks, drivers }) => {
  const [type, setType] = useState('');
  const [number, setNumber] = useState('');
  const [mileage, setMileage] = useState('');
  const [driver, setDriver] = useState('');


  const createTruck = async () => {
    const resp = await axios.post('/api/trucks', { number, type, mileage, driver });
    console.log(resp.data);
    setTrucks([...trucks, resp.data]);
  }


  return (
    <div id="truck-container">
      <h1>hello from Trucks</h1>
      <ul id="truck-list">
        {trucks.map(item => {
          return (
            <li key={item.id}>
              <div className="truck-item">
              Truck # {item.number}
              Truck Type {item.type}
              Mileage {item.mileage}
              Driver {item.driver}
              </div>
            </li>
          )
        })}
      </ul>
      <form onSubmit={ev => ev.preventDefault()}>
        <select onChange={ev => setType(ev.target.value)}>
          <option key="default" value="">Choose Type</option>
          <option key="1" value="kenworth">Kenworth</option>
          <option key="2" value="peterbilt">Peterbilt</option>
          <option key="3" value="freightliner">Freightliner</option>
          <option key="4" value="international">International</option>
        </select>
        <input type="text" placeholder="number" value={number} onChange={ev => setNumber(ev.target.value)} />
        <input type="text" placeholder="mileage" value={mileage} onChange={ev => setMileage(ev.target.value)} />
        <select onChange={ev => setDriver(ev.target.value)}>
          <option key="default" value="">choose driver</option>
          {drivers.map(employee => {
            return (
              <option key={employee.id} value={employee.name}>{employee.name}</option>
            )
          })}
        </select>
        <button type="button" onClick={() => createTruck()}>Create</button>
      </form>
    </div>
  )
}

export default Trucks;
