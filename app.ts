const express = require('express');
import { Request, Response } from 'express';
import { getAuthToken } from './src/middleware/authenticate';
require('dotenv').config();

const app = express();

app.use(require("morgan")("dev"));
app.use(express.json());

app.post("/", getAuthToken);

app.listen(process.env.PORT, ()=>{
    console.log("profile-api is running on port " + process.env.PORT);
});
