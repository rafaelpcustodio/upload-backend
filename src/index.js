require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');

const app = express();



mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true
});

app.use(express.json()); // permite app receber JSON como request
app.use(express.urlencoded({ extended: true })); // lidar com requisição com Url encoded
app.use(morgan("dev"));
app.use('/files', express.static(path.resolve(__dirname, "..", "tmp", "uploads")));

app.use(require('./routes'));

app.listen(3000);

