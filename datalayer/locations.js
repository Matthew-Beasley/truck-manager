const { client } = require('./client');

const createLocations = async (locationName, locationAddress) => {
  const sql = `
  INSERT INTO locations (name, address)
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
  SET address = $1
  WHERE name = $2
  RETURNING *`;
  return (await client.query(sql, [locationAddress, locationName])).rows[0];
}


const deleteLocations = async (id) => {
  const sql = `
  DELETE FROM locations
  WHERE id = $1
  RETURNING *`;
  return (await client.query(sql, [id])).rows[0];
}

module.exports = {
  createLocations,
  readLocations,
  updateLocations,
  deleteLocations
};
