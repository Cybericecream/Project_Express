import express from "express";
let router = express.Router();
const Artist = require('../models/artist')
const Models = require('../models/models')

router.use(express.json());

router.get('/artist', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(
        {
            "test": "Hello World"
        }
    );
});

router.post('/artist', async (req, res) => {

    // It works!
    Artist.authenticate().then(()=>{
        console.log('Database connection OK!');
    });

    const Artist = await Artist.artist.findAll({
        where: {
            id: [1] // Same as using `id: { [Op.in]: [1,2,3] }`
        }
    });

    res.setHeader('Content-Type', 'application/json');
    res.send(
        Artist
    );
});

module.exports = router;