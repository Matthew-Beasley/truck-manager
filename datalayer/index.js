const {
  createDrivers,
  readDrivers,
  updateDrivers,
  deleteDrivers
} = require('./drivers');

const {
  createLocations,
  readLocations,
  updateLocations,
  deleteLocations
} = require('./locations');

const {
  createRoutes,
  readRoutes,
  updateRoutes,
  deleteRoutes
} = require('./routes');

const {
  createTrucks,
  readTrucks,
  updateTrucks,
  deleteTrucks
} = require('./trucks');


module.exports = {
  createDrivers,
  readDrivers,
  updateDrivers,
  deleteDrivers,

  createLocations,
  readLocations,
  updateLocations,
  deleteLocations,

  createRoutes,
  readRoutes,
  updateRoutes,
  deleteRoutes,

  createTrucks,
  readTrucks,
  updateTrucks,
  deleteTrucks
};

