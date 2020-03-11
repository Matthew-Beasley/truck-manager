import React, { useState } from 'react';
import axios from 'axios';

const Locations = ({ locations, setLocations }) => { 
  const [location, setLocation] = useState('');
  const [address, setAddress] = useState('');


  const createLocation = async () => {
    const response = await axios.post('/api/locations', { name: location, address });
    setLocations([...locations, response.data]);
  }


  const deleteLocation = async (locale) => {
    const response = await axios.delete(`/api/locations/${locale.id}`);
    setLocations(locations.filter(item => item.id !== response.data.id));
  }


  return (
    <div id="location-container">
      <ul>
        {locations.map(locale => {
          return (
            <li key={locale.id}>{locale.name} {locale.address}
              <button type="button" onClick={() => deleteLocation(locale)}>Delete</button>
            </li>
          )
        })}
      </ul>
      <form onSubmit={ev => ev.preventDefault()}>
        <input type="text" placeholder="location name" value={location} onChange={ev => setLocation(ev.target.value)} />
        <input type="text" placeholder="address" value={address} onChange={ev => setAddress(ev.target.value)} />
        <button type="button" onClick={() => createLocation()}>Create</button>
      </form>
    </div>
  )
}

export default Locations;
