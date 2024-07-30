const { createToken } = require("../middleware/authbyjwt");
const userModel = require("../models/user.schema");

const loginpage = async (req, res) => {
  try {
    res.render("login", { messages: req.flash("message") });
  } catch (error) {
    console.log(error);
  }
};

const loginProcess = async (req, res) => {
  try {
    const validUser = await userModel.findOne({ name: req.body.name });
    if (!validUser) {
      req.flash("message", "Invalid username");  
      return res.redirect("/");
    } else {
      if (validUser.password === req.body.password) {
        const token = createToken(validUser);
        res.cookie("token", token);
        req.flash("logged_in", "Logged in successfully");
        return res.render("index", { messages: req.flash("logged_in") }); // Redirect to the homepage or dashboard
      } else {
        req.flash("message", "Invalid password");
        return res.redirect('/');
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};


const forgetPassword = async (req, res) => {
  try {
    const validemail = await userModel.findOne({ email: req.body.email });
    if (!validemail) {
      req.flash("error", "User not found");
      res.redirect("back");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

const registerpage = async (req, res) => {
  try {
    res.render("register");
  } catch (error) {
    console.log(error);
  }
};

// user registration
const registration = async (req, res) => {
  try {
    const existingUser = await userModel.findOne({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
    });
    if (existingUser) {
      req.flash("error", "User already exists");
      res.redirect("register");
    } else {
      const userdata = await userModel.create(req.body);
      console.log(userdata);
      res.redirect("login");
    }
  } catch (error) {
    req.flash("error", "Issue in registration process");
    res.redirect("register");
  }
};

module.exports = { loginpage, registration, registerpage, forgetPassword, loginProcess };
