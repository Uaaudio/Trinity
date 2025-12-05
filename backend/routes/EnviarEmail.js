const express = require("express");
const router = express.Router();
const SendEmail = require("../util/SendMail");

router.post("/", SendEmail);

module.exports = router;
//