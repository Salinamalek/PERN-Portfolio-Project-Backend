# Full Stack Application Portfolio Project

Dev: Salina Malek

## Day Dream Bucketlist

A fullstack app that allows users to add to their bucketlist wishes that can be edited and deleted. Also, users can mark the wishes as incomplete or complete.

### Overview

This app used Express which built a complete CRUD back-end application that adheres to RESTful routes.

### Getting Started

Create a top-level folder that will contain both your back-end and front-end applications:

1. Create a folder directory for this app.
2. `cd` into the directory.
3. Fork and clone this repo into your directory.
4. Name the repo whatever you choose (to make things easier, specify that it is the `back-end` in your title).

#### Back-end Setup

It would be best to open a new terminal tab dedicated to running and developing your back-end.

- `cd` into your repo
- `touch .env` to create your .env file and paste the following:

**.env**

```
PORT=3005
PG_HOST=localhost
PG_PORT=5432
PG_DATABASE=list_dev
PG_USER=postgres
```

- `npm install` - install npm packages listed in `package.json`.
- `npm run dbinit` - initialize a new database and create tables.
- `npm run dbseed` - seed the table(s) with some data.
- `nodemon` - confirm that this is running on port 3333.
- Visit http://localhost:3333/snacks/ and make sure you see some snack data in the form of an array of objects.
- `npm run test` - to run the back-end tests.
