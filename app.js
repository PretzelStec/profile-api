"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var authenticate_1 = require("./src/middleware/authenticate");
require('dotenv').config();
var app = express();
app.use(require("morgan")("dev"));
app.use(express.json());
app.post("/", authenticate_1.getAuthToken);
app.listen(process.env.PORT, function () {
    console.log("profile-api is running on port " + process.env.PORT);
});
