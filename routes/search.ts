import express, {Request, Response} from "express";
import searchController from "../controllers/search";
import { IsBoolean } from "class-validator";
import { transformAndValidate } from "class-transformer-validator";

const router = express.Router();
const path = process.env.PATH;

class a {
    public result: boolean;

    @IsBoolean()
    public count: boolean;
}

//process.env.path
router.route(`/`)
.get(async (req: Request, res: Response) => {
    let result = await searchController.getMaterial();
    try {
        let test = await transformAndValidate(a, result);    
        res.status(200).send(test);
    } catch(err) {
        console.log(err);
    }
});

router.route("/search")
.get((req, res) => {
    res.status(200).send("Success");
})

export = router;