const { client } = require('./client');

const createLocations = async (locationName, locationAddress) => {
  const sql = `
  INSERT INTO locations (name, location_address)
  VALUES ($1, $2)
  RETURNING *`;
  return (await client.query(sql, [locationName, locationAddress])).rows[0];
}


const readLocations = async () => {
  return (await client.query('SELECT * FROM locations')).rows;
}


const updateLocations = async (locationAddress, locationName) => {
  const sql = `
  UPDATE locations
  SET location_address = $1
  WHERE name = $2
  RETURNING *`;
  return (await client.query(sql, [locationAddress, locationName])).rows[0];
}


const deleteLocations = async (locationName) => {
  const sql = `
  DELETE FROM locations
  WHERE name = $1
  RETURNING *`;
  return (await client.query(sql, [locationName])).rows[0];
}

module.exports = {
  createLocations,
  readLocations,
  updateLocations,
  deleteLocations
};
