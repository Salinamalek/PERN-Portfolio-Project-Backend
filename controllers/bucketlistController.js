const express = require("express");
const lists = express.Router();

const {
  getAllList,
  getOneList,
  createList,
  updateList,
  deleteList,
} = require("../queries/bucketlist.js");

// const { validateRequest } = require("../validations.js");

// GET ALL
lists.get("/", async (req, res) => {
  // console.log("hit GET / bucketlist");
  const allLists = await getAllList();

  console.log(allLists);
  if (allLists.length) {
    res.status(200).json(allLists);
  } else {
    res.status(500).json({ Error: "server error" });
  }
});

// GET ONE
lists.get("/:id", async (req, res) => {
  const { id } = req.params;
  const listed = await getOneList(id);
  // console.log("bucketlist", bucketlist);
  if (!listed.message) {
    res.status(200).json(listed);
  } else {
    res.redirect("/not-found");
  }
});

// CREATE
lists.post("/", async (req, res) => {
  const newList = await createList(req.body);

  if (!newList.message) {
    res.status(200).json(newList);
  } else {
    res.status(500).json({ error: newList.message });
  }
});

// UPDATE
lists.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedList = await updateList(req.body, id);
  if (!updatedList.message) {
    res.status(200).json(updatedList);
  } else {
    res.status(500).json({ error: updatedList.message });
  }
});

// DELETE
lists.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedList = await deleteList(id);

  if (!deletedList.message) {
    res.status(200).json(deletedList);
  } else {
    res.status(500).json({ error: deletedList.message });
  }
});

module.exports = lists;
