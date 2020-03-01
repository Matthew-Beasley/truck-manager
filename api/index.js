const express = require('express');
const { driverRouter } = require('./drivers');
const apiRouter = express.Router();

apiRouter.use('/drivers', driverRouter);

module.exports = { apiRouter };
