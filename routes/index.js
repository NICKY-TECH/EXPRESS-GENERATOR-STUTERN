let express = require("express");
let stutern = express.Router();

/* GET users listing. */
stutern.get("/", function (req, res, next) {
  req.params.message = {
    name: "ONYIBE JUSTINA",
    sex: "FEMALE",
    age: 10,
  };
  res.status(200).json({
    status: "success",
    data: req.params.message,
  });
});

module.exports = stutern;
