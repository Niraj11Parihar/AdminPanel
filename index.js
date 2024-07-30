const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash")
const router = require("./routers/admin.router");
const P_router = require("./routers/product.router");
const CatRouter = require("./routers/Category.router");
const Sub_router = require("./routers/SubCategory.router");
const Extra_router = require("./routers/ExtraCategory.router");
const auth_router = require("./routers/authentication.router");
const db = require("./config/database");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "./public")));
app.use("/uploads", express.static(path.join(__dirname, 'uploads')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cookieParser("SecretStringForCookies"));
app.use(session({
  secret: "SecretStringForSession",
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 1000 }
}));
app.use(flash());



app.use(router);
app.use(P_router);
app.use(CatRouter);
app.use(Sub_router);
app.use(Extra_router);
app.use(auth_router);

app.listen(8081, (err) => {
  if (err) {
    console.log("Server not started");
    return false;
  }
  db;
  console.log("Server started at http://localhost:8081");
  return true;
});
