const e = require("express");

const validateRequest = (req, res, next) => {
  let { name, description, image } = req.body;

  //   name key check
  if (!name || typeof name !== "string") {
    res
      .status(422)
      .json({ Error: "name key is required and must be a string" });
  }

  req.body.name = nameConversion(name);

  //    description check
  if (description && typeof description !== "string") {
    return res
      .status(422)
      .json({ Error: "description value must be a string" });
  }

  //   image check
  if (!image) {
    image = "https://";
  }
  validateUrl(image, res);
  next();
};

const confirmComplete = (req, res, next) => {
  const { completed } = req.body;

  if (!completed) {
    req.body.completed = false;
  } else {
    req.body.completed = true;
  }

  next();
};

const validateUrl = (value, res) => {
  const urlStart = value.slice(0, 7);
  const urlStarts = value.slice(0, 8);

  if (urlStart !== "http://" && urlStarts !== "https://") {
    res
      .status(400)
      .json({ Error: "image url must begin with 'http://' or 'https://' " });
  }
};

const nameConversion = (string) => {
  if (string.length < 2) {
    return string;
  }

  return string
    .toLowerCase()
    .split(` `)
    .map((el) => `${el.charAt(0).toUpperCase()}${el.slice(1)}`)
    .join(` `);
};

module.exports = {
  validateRequest,
  confirmComplete,
};
