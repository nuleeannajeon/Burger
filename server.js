require( 'dotenv' ).config();

const express = require('express');
const exphbs = require("express-handlebars");

const controllerRouter = require('./controllers/burgers_controller')
const mySQL_PORT = process.env.MYSQL_PORT || 8080;

const app = express();

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

controllerRouter(app);

app.use( express.static('public') );

app.listen(mySQL_PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + mySQL_PORT);
});