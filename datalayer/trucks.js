const { client } = require('./client');

const createTrucks = async (truckNumber, truckType, truckMileage, driver) => {
  const sql = `
  INSERT INTO trucks (number, type, mileage, driver)
  VALUES ($1, $2, $3, $4)
  RETURNING *`;
  return (await client.query(sql, [truckNumber, truckType, truckMileage, driver])).rows[0];
}


const readTrucks = async () => {
  return (await client.query('SELECT * FROM trucks')).rows;
}


const updateTrucks = async (truckMileage, driver, truckNumber) => {
  const sql = `
  UPDATE trucks
  SET mileage = $1, driver = $2
  WHERE number = $3
  RETURNING *`;
  return (await client.query(sql, [truckMileage, driver, truckNumber])).rows[0];
}


const deleteTrucks = async (truckNumber) => {
  const sql = `
  DELETE FROM trucks
  WHERE number = $1
  RETURNING *`;
  return (await client.query(sql, [truckNumber])).rows[0];
}

module.exports = {
  createTrucks,
  readTrucks,
  updateTrucks,
  deleteTrucks
};
