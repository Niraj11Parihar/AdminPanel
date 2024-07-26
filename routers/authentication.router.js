const { Router } = require("express");
const { loginpage, loginProcess, forgetPassword, registerpage, registration } = require("../controllers/authentication.controller");

const auth_router = Router()

auth_router.get('/',loginpage);
auth_router.post('/loginProcess',loginProcess);
auth_router.post('/loginProcess',forgetPassword);
auth_router.get('/register',registerpage);
auth_router.post('/registration',registration);

module.exports = auth_router;