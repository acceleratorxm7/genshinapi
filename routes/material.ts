import express from "express";
import searchController from "../controllers/search";

const router = express.Router();
const API_PATH = process.env.API_PATH;
const BASE_PATH = `${API_PATH}/material`

router.route(`${BASE_PATH}/`)
.get(async (req, res) => { 
    res.status(200).send(await searchController.getMaterial({
        _input: req.query.input as string,
        _category: req.query.category as string,
        _class: req.query.class as string, 
        _subclass: req.query.subclass as string
    }));
});

export = router;