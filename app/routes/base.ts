import express from "express";
let router = express.Router();

router.use(express.json());

router.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(
        {
            "test": "Hello World"
        }
    );
});

module.exports = router;