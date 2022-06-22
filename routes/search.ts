import express, {Request, Response} from "express";
import searchController from "../controllers/search";

const router = express.Router();
const path = process.env.PATH;

//process.env.path
router.route(`/`)
.get(async (req: Request, res: Response) => {
    let result = await searchController.getMaterial();
    try {
        res.status(200).send(result);
    } catch(err) {
        console.log(err);
    }
});

router.route("/search")
.get((req, res) => {
    res.status(200).send("Success");
})

export = router;