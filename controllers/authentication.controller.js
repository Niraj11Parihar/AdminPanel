
// Whole authentication process is here

const userModel = require("../models/user.schema");

const loginpage = async (req, res) => {
    try {
      res.render("login");
    } catch (error) {
      console.log(error);
    }
  };
  
  const loginProcess = async (req, res) => {
      try {
        const validUser = await userModel.findOne({ name: req.body.name });
        if (!validUser) {
          res.send("Invalid username");
        } else {
          if (validUser.password === req.body.password) {
            res.render("index");
          } else {
            res.send("Invalid password");
          }
        }
      } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
      }
    };
  
  const forgetPassword = async (req,res) => {
    try {
          const validemail = await userModel.findOne({email : req.body.email});
          if(!validemail){
            res.status(404).send("user not found");
            next(error);
          }
    } catch (error) {
      
    }
  } 
    
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
        res.send("User already exists");
      } else {
        const userdata = await userModel.create(req.body);
        console.log(userdata);
        res.render("login");
      }
    } catch (error) {
      res.send("Issue in login process");
    }
  };

  module.exports = {loginpage, registration, registerpage, forgetPassword, loginProcess}
  