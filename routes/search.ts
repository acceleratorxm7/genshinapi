import express from "express";
import searchController from "../controllers/search";

const router = express.Router();
const path = process.env.PATH;

//process.env.path
router.route(`/`)
.get(async (req, res) => {
    let result = await searchController.getMaterial({
        language: "Korean",
        text: "ASDF"
    });
    result.map(el => {
        console.log(el);
    })
    res.status(200).send(result);
});

router.route("/search")
.get((req, res) => {
    res.status(200).send("Success");
})

export = router;