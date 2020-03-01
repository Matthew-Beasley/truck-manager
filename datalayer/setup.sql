CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
DROP TABLE IF EXISTS service_schedule;
DROP TABLE IF EXISTS routes;
DROP TABLE IF EXISTS drivers;
DROP TABLE IF EXISTS trucks;
DROP TABLE IF EXISTS locations;
DROP TABLE IF EXISTS services;
  
CREATE TABLE trucks (
  truck_id UUID PRIMARY KEY DEFAULT uuid_generate_v1(),
  truck_number INTEGER NOT NULL UNIQUE,
  truck_type VARCHAR(100) NOT NULL CHECK(char_length(truck_type) > 1),
  truck_mileage INTEGER NOT NULL,
  driver VARCHAR(100) NOT NULL CHECK(char_length(driver) > 1) 
);

CREATE TABLE locations (
  location_id UUID PRIMARY KEY DEFAULT uuid_generate_v1(),
  location_name VARCHAR(255) NOT NULL UNIQUE CHECK(char_length(location_name) > 1),
  location_address VARCHAR(500)  
);

CREATE TABLE services (
  service_id UUID PRIMARY KEY DEFAULT uuid_generate_v1(),
  service_name VARCHAR(100) NOT NULL CHECK(char_length(service_name) > 1),
  service_interval INTEGER NOT NULL
);

CREATE TABLE drivers (
  driver_id UUID PRIMARY KEY DEFAULT uuid_generate_v1(),
  driver_name VARCHAR(100) NOT NULL UNIQUE CHECK(char_length(driver_name) > 1)
);

CREATE TABLE routes (
  route_id UUID PRIMARY KEY DEFAULT uuid_generate_v1(),
  truck_id UUID REFERENCES trucks(truck_id),
  location_id UUID REFERENCES locations(location_id)
);

CREATE TABLE service_schedule (
  schedule_id UUID PRIMARY KEY DEFAULT uuid_generate_v1(),
  truck_id UUID NOT NULL REFERENCES trucks(truck_id),
  service_id UUID NOT NULL REFERENCES services(service_id)
);