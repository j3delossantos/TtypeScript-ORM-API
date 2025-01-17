"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var user_routes_1 = __importDefault(require("./routes/user.routes"));
var typeorm_1 = require("typeorm");
var property_routes_1 = __importDefault(require("./routes/property.routes"));
var app = express_1.default();
typeorm_1.createConnection();
//Midelwares
app.use(cors_1.default());
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
//Routes
app.use(user_routes_1.default);
app.use(property_routes_1.default);
var port = '4000';
app.listen(port);
console.log('Server on port: ' + port);
