const { client } = require('./client');

const createRoutes = async (truckNumber, locationName) => {
  const sql = `
  INSERT INTO routes (truckNumber, name)
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
  SET truckNumber = $1, name = $2
  WHERE id = $3
  RETURNING *`;
  return (await client.query(sql, [truckNumber, locationName, routeId])).rows[0];
}


const deleteRoutes = async (routeId) => {
  const sql = `
  DELETE FROM routes
  WHERE id = $1
  RETURNING *`;
  return (await client.query(sql, [routeId])).rows[0];
}

module.exports = {
  createRoutes,
  readRoutes,
  updateRoutes,
  deleteRoutes
};
