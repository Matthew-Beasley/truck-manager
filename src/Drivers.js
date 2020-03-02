import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Drivers = () => {
  const [drivers, setDrivers] = useState([]);
  const [driver, setDriver] = useState('');

  useEffect(() => {
    axios.get('/api/drivers')
      .then(response => setDrivers(response.data));
  }, []);

  const createDriver = async () => {
    const response = await axios.post('/api/drivers', { driverName: driver });
    setDriver('');
    setDrivers([...drivers, response.data])
  }

  const deleteDriver = async (driverObj) => {
    const response = await axios.delete(`/api/drivers/${driverObj.driver_id}`);
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
                <div className="driver-card">
                  {driverItem.driver_name}
                  <button type="button" onClick={() => deleteDriver(driverItem)}>X</button>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Drivers;
