import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Drivers = ({ drivers, setDrivers }) => {
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
    const response = await axios.delete(`/api/drivers/${driverObj.id}`);
    if (response !== null) {
      const filteredDrivers = drivers.filter(item => {
        return item.id !== driverObj.id;
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
              <li key={driverItem.id}>
                <div className="driver-card">
                  {driverItem.name}
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
