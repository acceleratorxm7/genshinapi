import express, {Express} from "express";

//routes
const searchRouter = require("./search");
const materialRouter = require("./material");

export = (app: Express): void => {
    app.use(searchRouter);
    app.use(materialRouter);
}

