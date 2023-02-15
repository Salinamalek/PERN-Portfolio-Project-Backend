DROP DATABASE IF EXISTS list_dev;
CREATE DATABASE list_dev; 

\c list_dev; 

DROP TABLE IF EXISTS bucketlist;
CREATE TABLE bucketlist (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT DEFAULT 'no description',
    location TEXT,
    continent TEXT,
    image TEXT DEFAULT 'no image found',
    completed BOOLEAN
);

-- npm run dbinit