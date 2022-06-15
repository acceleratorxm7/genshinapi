import express, {Request, Response} from "express";

const router = express.Router();

//process.env.path
router.route("/")
.get((req: Request, res: Response) => {
    res.status(200).send("Value 2");
});

router.route("/search")
.get((req, res) => {
    res.status(200).send("Success");
})

export = router;