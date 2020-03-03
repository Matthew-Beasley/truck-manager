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
  const { truck_number, location_number } = req.body;
  try {
    const data = await createRoutes(truck_number, location_number);
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
  const { truck_number, location_name, route_id } = req.body;
  try {
    const data = await updateRoutes(truck_number, location_name, route_id);
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
});


routeRouter.delete('/route_id', async (req, res, next) => {
  const { route_id } = req.params;
  try {
    const data = await deleteRoutes(route_id);
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
})

module.exports = { routeRouter };
