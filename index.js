const express = require("express");
const config = require("./config");

const PORT = config.PORT;

const app = express();
const Middleware = require("./middleware");
const MainController = require("./controllers");

Middleware(app);
app.use("", MainController);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
