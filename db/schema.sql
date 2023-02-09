DROP DATABASE IF EXISTS list_dev;
CREATE DATABASE list_dev; 

\c list_dev; 

DROP TABLE IF EXISTS bucketlist;
CREATE TABLE bucketlist (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT DEFAULT 'no description',
    location TEXT,
    image TEXT DEFAULT 'no image found',
    visited BOOLEAN
);

-- devs table
-- DROP TABLE IF EXISTS devs;

-- CREATE TABLE devs (
--     id SERIAL PRIMARY KEY,
--     name TEXT NOT NULL,
--     imageURL TEXT,
--     githubURL TEXT,
--     linkedinURL TEXT,
--     email TEXT, 
--     description TEXT
-- );

-- DROP TABLE IF EXISTS favorites;

-- CREATE TABLE favorites (
--     name TEXT NOT NULL,
--     list_id INT NOT NULL,
--     CONSTRAINT fk_bucketlist_list_id
--     FOREIGN KEY (list_id) REFERENCES bucketlist(id) ON DELETE CASCADE
-- );

-- npm run dbinit