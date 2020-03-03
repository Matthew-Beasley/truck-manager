/* eslint-disable camelcase */
const express = require('express');
const {
  createTrucks,
  readTrucks,
  updateTrucks,
  deleteTrucks
} = require('../datalayer/index');

const truckRouter = express.Router();

truckRouter.post('/', async (req, res, next) => {
  const { truck_number, truck_type, truck_mileage, driver } = req.body;
  try {
    const data = await createTrucks(truck_number, truck_type, truck_mileage, driver);
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
});


truckRouter.get('/', async (req, res, next) => {
  try {
    const data = await readTrucks();
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
});


truckRouter.put('/', async (req, res, next) => {
  const { truck_mileage, driver, truck_number } = req.body;
  try {
    const data = await updateTrucks(truck_mileage, driver, truck_number);
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
});


truckRouter.delete('/:truck_number', async (req, res, next) => {
  const { truck_number } = req.params;
  try {
    const data = await deleteTrucks(truck_number);
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
});

module.exports = { truckRouter };
