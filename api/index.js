const express = require('express');
const { driverRouter } = require('./drivers');
const { locationRouter } = require('./locations');
const { routeRouter } = require('./routes');

const apiRouter = express.Router();
apiRouter.use('/drivers', driverRouter);
apiRouter.use('/locations', locationRouter);
apiRouter.use('/routes', routeRouter);

module.exports = { apiRouter };
