/* eslint-disable camelcase */
const express = require('express');
const {
  createRoutes,
  readRoutes,
  updateRoutes,
  deleteRoutes
} = require('../datalayer/index');
const routeRouter = express.Router();


routeRouter.post('/', async (req, res, next) => {
  const { truckNumber, name } = req.body;
  try {
    const data = await createRoutes(truckNumber, name);
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
});


routeRouter.get('/', async (req, res, next) => {
  try {
    const data = await readRoutes();
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
});


routeRouter.put('/', async (req, res, next) => {
  const { truckNumber, name, id } = req.body;
  try {
    const data = await updateRoutes(truckNumber, name, id);
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
});


routeRouter.delete('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await deleteRoutes(id);
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
})

module.exports = { routeRouter };
