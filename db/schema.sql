DROP DATABASE IF EXISTS airbnb;

CREATE DATABASE airbnb;

USE airbnb;

CREATE TABLE `photos` (
  `id` VARCHAR(16),
  `photos_id` INT NOT NULL AUTO_INCREMENT,
  `likes` INT,
  `username` VARCHAR(64),
  `link` VARCHAR(255),
  `tag` VARCHAR(32),
  `photo_set` VARCHAR(10),
  PRIMARY KEY (`photos_id`)
)