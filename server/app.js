

// declarations
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const user = require("./router/user");


// declarations


// methods
dotenv.config({ path: "./env/config.env" });
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", user);
// methods


// helpers
//helpers

app.listen(process.env.PORT || 3000 , () => {
  console.log(`listening on port ${process.env.PORT} \n http://localhost:${process.env.PORT}`);
});
