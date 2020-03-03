const express = require('express');
const { driverRouter } = require('./drivers');
const { locationRouter } = require('./locations');
const apiRouter = express.Router();
apiRouter.use('/drivers', driverRouter);
apiRouter.use('/locations', locationRouter);

module.exports = { apiRouter };
