const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

// create instance from express
const app = express();

// append .env vars to envirement variables
dotenv.config('./.env')

// initialize middlewares
app.use(cors());
app.use(express.json());
app.use(morgan(process.env.MORGAN_MODE));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './public'), {dotfiles: true}))