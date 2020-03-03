const { client } = require('./client');

const createRoutes = async (truckNumber, locationName) => {
  const sql = `
  INSERT INTO routes (truck_number, location_name)
  VALUES ($1, $2)
  RETURNING *`;
  return (await client.query(sql, [truckNumber, locationName])).rows[0];
} 


const readRoutes = async () => {
  return (await client.query('SELECT * FROM routes')).rows;
}


const updateRoutes = async (truckNumber, locationName, routeId) => {
  const sql = `
  UPDATE routes
  SET truck_number = $1, location_name = $2
  WHERE route_id = $3
  RETURNING *`;
  return (await client.query(sql, [truckNumber, locationName, routeId])).rows[0];
}


const deleteRoutes = async (routeId) => {
  const sql = `
  DELETE FROM routes
  WHERE route_id = $1
  RETURNING *`;
  return (await client.query(sql, [routeId])).rows[0];
}

module.exports = {
  createRoutes,
  readRoutes,
  updateRoutes,
  deleteRoutes
};
