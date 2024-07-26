const express = require("express");
const db = require("./config/database");
const path = require("path");
const router = require("./routers/admin.router");
const P_router = require("./routers/product.router");
const bodyParser = require('body-parser');
const CatRouter = require("./routers/Category.router");
const Sub_router = require("./routers/SubCategory.router");
const Extra_router = require("./routers/ExtraCategory.router");
const auth_router = require("./routers/authentication.router");
const app = express();

app.set("view engine", "ejs");

// app.use(express.static('public'))

app.use(express.static(path.join(__dirname, "./public")));
app.use("/uploads", express.static(path.join(__dirname, 'uploads')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(router);
app.use(P_router);
app.use(CatRouter); 
app.use(Sub_router); 
app.use(Extra_router);
app.use(auth_router);

app.listen(8081, (err) => {
  db;
  if (err) {
    console.log("server not started  port");
    return false;
  }
  console.log("server started on at http://localhost:8081");
  return true;
});
