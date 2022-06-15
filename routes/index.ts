import express, {Express} from "express";

//routes
const searchRouter = require("./search");

export = (app: Express): void => {
    app.use(searchRouter);
}

