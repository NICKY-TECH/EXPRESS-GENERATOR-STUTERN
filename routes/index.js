let express = require("express");
let stutern = express.Router();

/* send an object . */
stutern.get("/", function (req, res, next) {
  req.params.message = {
    name: "ONYIBE JUSTINA",
    sex: "FEMALE",
    age: 10,
  };
  res.status(200).json({
    data: req.params.message,
  });
});

module.exports = stutern;
