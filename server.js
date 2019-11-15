const express = require("express");
const path = require("path");
const friends = require("./data/friends");


const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);


app.listen(PORT, function () {
    console.log(`App listening on http://localhost:${PORT}`);
});