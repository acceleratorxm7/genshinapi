import express from "express";
import searchController from "../controllers/search";

const router = express.Router();
const PATH = process.env.APIPATH;

router.route(`${PATH}/material`)
.get(async (req, res) => {
    let result = await searchController.getMaterial({
        _input: req.query.input,
        _category: req.query.category,
        _class: req.query.class, 
        _subclass: req.query.subclass
    });
    
    res.status(200).send(result);
});

export = router;