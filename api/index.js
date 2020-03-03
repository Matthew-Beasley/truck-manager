const express = require('express');
const { driverRouter } = require('./drivers');
const { locationRouter } = require('./locations');
const { routeRouter } = require('./routes');
const { truckRouter } = require('./trucks');

const apiRouter = express.Router();
apiRouter.use('/drivers', driverRouter);
apiRouter.use('/locations', locationRouter);
apiRouter.use('/routes', routeRouter);
apiRouter.use('/trucks', truckRouter);

module.exports = { apiRouter };
