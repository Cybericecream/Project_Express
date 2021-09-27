import express from "express";
const app = express();

let sequelize = require('./app/services/dbConnection');

// Router Imports
let base = require('./app/routes/base');
let music = require('./app/routes/music');

// Middlewar
app.use(function (req, res, next) {
    console.log('Time: ', Date.now());
    next();
})

app.use( async function (req, res, next) {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    next();
})

// Routes
app.use('/api', base);
app.use('/api/music', music);

const port = process.env.PORT || 3010;

app.listen(port, () => console.log(`App listening on Port ${port}`));