"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_controller_1 = require("../controllers/user.controller");
var router = express_1.Router();
router.get('/users', user_controller_1.getUsers);
/*
router.get('/users/:id', );
router.post('/users', );
router.put('/users', );
router.delete('/users/:id', );
*/
exports.default = router;
