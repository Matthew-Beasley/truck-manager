const { client } = require('./client');

const createDrivers = async (driverName) => {
  const sql = `
  INSERT INTO drivers (driver_name)
  VALUES ($1)
  RETURNING *`;
  return (await client.query(sql, [driverName])).rows[0];
}


const readDrivers = async () => {
  const sql = 'select * from drivers';
  return (await client.query(sql)).rows;
}


const updateDrivers = async (driverId, newName) => {
  const sql = `
  UPDATE drivers
  SET name = $1
  WHERE driver_id = $2
  RETURNING *`;
  return (await client.query(sql, [newName, driverId])).rows[0];
}


const deleteDrivers = async (driverId) => {
  const sql = `
  DELETE FROM drivers
  WHERE driver_id = $1
  RETURNING *`;
  return (await client.query(sql, [driverId])).rows[0];
}


module.exports = {
  createDrivers,
  readDrivers,
  updateDrivers,
  deleteDrivers
};
