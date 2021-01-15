"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var property_controller_1 = require("../controllers/property.controller");
var router = express_1.Router();
//router.get("/propertys", getUsers);
router.post("/propertys", property_controller_1.createProperty);
/*router.get('/users/:id', getOneUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteOneUser);

*/
exports.default = router;
