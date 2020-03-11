
const { client } = require('./client');

const createTables = async () => {
  const sql = `
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
DROP TABLE IF EXISTS service_schedule;
DROP TABLE IF EXISTS routes;
DROP TABLE IF EXISTS drivers;
DROP TABLE IF EXISTS trucks;
DROP TABLE IF EXISTS locations;
DROP TABLE IF EXISTS services;
  
CREATE TABLE trucks (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v1(),
  number INTEGER NOT NULL UNIQUE,
  type VARCHAR(100) NOT NULL CHECK(char_length(type) > 1),
  mileage INTEGER NOT NULL,
  driver VARCHAR(100) NOT NULL CHECK(char_length(driver) > 1) 
);

CREATE TABLE locations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v1(),
  name VARCHAR(255) NOT NULL UNIQUE CHECK(char_length(name) > 1),
  address VARCHAR(500)  
);

CREATE TABLE services (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v1(),
  service_name VARCHAR(100) NOT NULL CHECK(char_length(service_name) > 1),
  interval INTEGER NOT NULL
);

CREATE TABLE drivers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v1(),
  name VARCHAR(100) NOT NULL CHECK(char_length(name) > 1),
  address VARCHAR(255),
  phone VARCHAR(20)
);

CREATE TABLE routes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v1(),
  "truckNumber" INTEGER REFERENCES trucks(number),
  name VARCHAR(255) REFERENCES locations(name)
);

CREATE TABLE service_schedule (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v1(),
  "truckId" UUID NOT NULL REFERENCES trucks(id),
  "serviceId" UUID NOT NULL REFERENCES services(id)
);`;
  await client.query(sql);
}

createTables();
