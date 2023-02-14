const db = require("../db/dbConfig.js");

const getAllList = async () => {
  try {
    const allList = await db.any("SELECT * FROM bucketlist");
    return allList;
  } catch (error) {
    return error;
  }
};

const getOneList = async (idValue) => {
  try {
    const oneList = await db.one(
      "SELECT * FROM bucketlist WHERE id=$1",
      idValue
    );
    return oneList;
  } catch (error) {
    return error;
  }
};

const createList = async (list) => {
  try {
    const newList = await db.one(
      "INSERT INTO bucketlist (name, description, image, location, completed) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [list.name, list.description, list.image, list.location, list.completed]
    );
    return newList;
  } catch (error) {
    return error;
  }
};

const updateList = async (list, idValue) => {
  try {
    const updatedList = await db.one(
      "UPDATE bucketlist SET name=$1, description=$2, image=$3, location=$4, completed=$5 WHERE id=$6 RETURNING *",
      [
        list.name,
        list.description,
        list.image,
        list.location,
        list.completed,
        idValue,
      ]
    );
    return updatedList;
  } catch (error) {
    return error;
  }
};

const deleteList = async (idValue) => {
  try {
    const deletedList = await db.one(
      "DELETE FROM bucketlist WHERE id=$1 RETURNING *",
      idValue
    );
    return deletedList;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllList,
  getOneList,
  createList,
  updateList,
  deleteList,
};
