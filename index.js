const express = require('express');
const expphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const app = express();

//middleware - to get JSON data
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//static files
app.use(express.static('public'));

//template engine
const handlebars = expphbs.create({extname: ".hbs"});
app.engine('hbs', handlebars.engine);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

//Router
const routes = require("./server/routes/studentRoutes.js");
app.use('/', routes);

//Listen Port - Node js server start port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on PORT : ${PORT}`);
})