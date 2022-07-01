import express from "express";
import searchController from "../controllers/search";

const router = express.Router();
const path = process.env.API_PATH;

//process.env.path
router.route(`/`)
.get(async (req, res) => {
    res.status(200).send(await searchController.getElement());
});

router.route("/search")
.get((req, res) => {
    res.status(200).send("Success");
})

export = router;