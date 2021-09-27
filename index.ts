import express from "express";
const app = express();

app.get('/api', (req, res) => {
    res.send('test');
});

const port = process.env.PORT || 3010;

app.listen(port, () => console.log(`App listening on Port ${port}`));