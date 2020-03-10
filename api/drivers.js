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
  const { id, dname } = req.body;
  try {
    const data = await updateDrivers(id, dname);
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
});


driverRouter.delete('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await deleteDrivers(id);
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
});

module.exports = { driverRouter };
