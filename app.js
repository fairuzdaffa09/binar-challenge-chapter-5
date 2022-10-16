const express = require('express');
const router = require('./router');
const app = express();
const path = require('path')
const port = 8000;

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})