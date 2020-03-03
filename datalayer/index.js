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


module.exports = {
  createDrivers,
  readDrivers,
  updateDrivers,
  deleteDrivers,

  createLocations,
  readLocations,
  updateLocations,
  deleteLocations
};

