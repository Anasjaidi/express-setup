const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");


// append .env vars to envirement variables
dotenv.config('./.env.test')

// select settings for choosen mode
const {
	corsOptions,
  name,
	app: { port, debug, logger_format },
} = require("./config/settings")(env);
const env = process.env.NODE_ENV


// create instance from express
const app = express();

// add some vars to express app
app.set("port", port)
app.set("debug", debug)
app.set("env", name)


// initialize middlewares
app.use(cors());
app.use(express.json());
app.use(morgan(process.env.MORGAN_MODE));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './public'), {dotfiles: true}))