import express, {Request, Response} from "express";

const router = express.Router();
const path = process.env.PATH;

//process.env.path
router.route(`${path}/`)
.get((req: Request, res: Response) => {
    
    res.status(200).send("Value 2");
});

router.route("/search")
.get((req, res) => {
    res.status(200).send("Success");
})

export = router;