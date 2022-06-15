const dotenv = require("dotenv");
const path = require("path");

dotenv.config({
    path: path.resolve(__dirname, `${process.env.mode}.env`)
});