import http from "http";
import express, {Express} from "express";

const router: Express = express();
const server = http.createServer(router);
const PORT = 3000;

router.use(express.urlencoded({ extended: false}));
router.use(express.json());

//header setting
router.use((req, res, next) => {
    // set the CORS policy
    res.header('Access-Control-Allow-Origin', '*');
    // set the CORS headers
    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
    // set the CORS method headers
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
        return res.status(200).json({});
    }
    next();
});

router.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});

server.listen(PORT, () => { console.log("running"); });