/* eslint-disable camelcase */
const express = require('express');
const {createLocations,
  readLocations,
  updateLocations,
  deleteLocations } = require('../datalayer/locations');

const locationRouter = express.Router();

locationRouter.post('/', async (req, res, next) => {
  const { name, address } = req.body;
  try {
    const data = await createLocations(name, address);
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
  const { location_address, name } = req.body;
  try {
    const data = await updateLocations(location_address, name);
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
});


locationRouter.delete('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await deleteLocations(id);
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
});

module.exports = { locationRouter };
