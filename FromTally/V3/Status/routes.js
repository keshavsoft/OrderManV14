import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
    const tallyPromise = await fetch("http://localhost:9000/");
    console.log("aaaaaa : ", tallyPromise.status);

    res.send("up");
});

export { router };