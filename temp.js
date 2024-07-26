let payload = {
    name:"harsh",
    email:"harsh@gmail.com"
}

let token = jwt.sign(payload,"shhhh")

console.log(token);

res.cookie('token',token).send("token created")

let decoded = jwt.verify(token,'token')