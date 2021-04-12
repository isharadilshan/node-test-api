const bodyParser = require("body-parser");
const express = require("express");
const config = require("./config");

const PORT = config.PORT;

const app = express();
const MainController = require("./controllers");

app.use(bodyParser.json());
app.use("/couriermate", MainController);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
