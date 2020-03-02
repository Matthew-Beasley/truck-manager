/* eslint-disable camelcase */
const express = require('express');
const {
  createDrivers,
  updateDrivers,
  readDrivers,
  deleteDrivers
} = require('../datalayer/index');

const driverRouter = express.Router();

driverRouter.post('/', async (req, res, next) => {
  const { driverName } = req.body;
  try {
    const data = await createDrivers(driverName);
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
});


driverRouter.get('/', async (req, res, next) => {
  try {
    const data = await readDrivers();
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
});


driverRouter.put('/', async (req, res, next) => {
  const { driver_id, driver_name } = req.body;
  try {
    const data = await updateDrivers(driver_id, driver_name);
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
});


driverRouter.delete('/:driver_id', async (req, res, next) => {
  const { driver_id } = req.params;
  try {
    const data = await deleteDrivers(driver_id);
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
});

module.exports = { driverRouter };
