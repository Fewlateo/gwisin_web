const express = require('express');
const app = express();
require("./database");

const routes = require("./views/routes");
const api = require("./routes/api");

app.set ( "view engine", "ejs" );

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded());

app.use("/", routes);
app.use("/api", api);

app.listen(3000, () => {
    console.log("Applicaiton is listening on port 3000...")
});

