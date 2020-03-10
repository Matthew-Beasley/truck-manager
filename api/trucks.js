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
  const { number, type, mileage, driver } = req.body;
  try {
    const data = await createTrucks(number, type, mileage, driver);
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
  const { mileage, driver, number } = req.body;
  try {
    const data = await updateTrucks(mileage, driver, number);
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
});


truckRouter.delete('/:number', async (req, res, next) => {
  const { number } = req.params;
  try {
    const data = await deleteTrucks(number);
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
});

module.exports = { truckRouter };
