const express = require('express');
const router = express.Router();
const controller = require('./controller');


router.get("/", controller.chapter3)
router.get("/chapter4", controller.chapter4)
router.post("/login", controller.login)

module.exports = router