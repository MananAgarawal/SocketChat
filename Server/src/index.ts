const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
const cors = require('cors');
require('dotenv').config()
app.use(cors());
const jsonParser = bodyParser.json();
app.use(jsonParser);
const port = process.env.PORT || 8080;


const auth = require('./routes/Authorisation');
app.use("/", auth);


app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
});