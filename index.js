const connectToDatabase = require("./src/database/connect");

const dotenv = require("dotenv")
dotenv.config()

connectToDatabase();

require("./modules/express");