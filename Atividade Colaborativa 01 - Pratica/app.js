require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./router');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(router);
app.use(express.json());
app.use(express.urlencoded({extended: true }));




app.listen(3000,console.log("http://localhost:3000/"));