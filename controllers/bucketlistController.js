const express = require("express");
const lists = express.Router();

const {
  getAllList,
  getOneList,
  createList,
  updateList,
  deleteList,
} = require("../queries/bucketlist.js");

const { validateRequest } = require("../validations.js");

// GET ALL
lists.get("/", async (req, res) => {
  const allLists = await getAllList();

  if (allLists.length) {
    res.status(200).json(allLists);
  } else {
    res.status(500).json({ Error: "server error" });
  }
});

// GET ONE
lists.get("/:id", async (req, res) => {
  const { id } = req.params;
  const list = await getOneList(id);

  if (!list.message) {
    res.status(200).json(list);
  } else {
    req.redirect("/not-found");
  }
});

// CREATE
lists.post("/", validateRequest, async (req, res) => {
  const newList = await createList(req.body);
  if (!newList.message) {
    res.status(200).json(newList);
  } else {
    res.status(500).json({ error: newList.message });
  }
});

// UPDATE
lists.put("/:id", validateRequest, async (req, res) => {
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
