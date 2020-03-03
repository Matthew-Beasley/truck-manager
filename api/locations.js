/* eslint-disable camelcase */
const express = require('express');
const {
  createLocations,
  readLocations,
  updateLocations,
  deleteLocations } = require('../datalayer/locations');

const locationRouter = express.Router();

locationRouter.post('/', async (req, res, next) => {
  const { location_name, location_address } = req.body;
  try {
    const data = await createLocations(location_name, location_address);
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
});


locationRouter.get('/', async (req, res, next) => {
  try {
    const data = await readLocations();
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
});


locationRouter.put('/', async (req, res, next) => {
  const { location_address, location_name } = req.body;
  try {
    const data = await updateLocations(location_address, location_name);
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
});


locationRouter.delete('/:location_id', async (req, res, next) => {
  const { location_id } = req.params;
  try {
    const data = await deleteLocations(location_id);
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
});

module.exports = { locationRouter };
