let express = require('express');
let app = express();
app.get("/shout",(req,res)=>{
  let myName = (req.query.name).toUpperCase();
  res.send(myName);
});

app.get("/fullname",(req,res)=>{
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;
  let fullName = firstName + " " + lastName;
  res.send(fullName);
});

app.get("/date",(req,res)=>{
  let year = req.query.year;
  let month = req.query.month;
  let formattedDate = month + ", " + year;
  res.send(formattedDate);
});

app.get("/greet",(req,res)=>{
  let name = req.query.name;
  let greeting = `namaste ${name} !`;
  res.send(greeting);
});

app.get("/address",(req,res)=>{
  let street = req.query.street;
  let city = req.query.city;
  let state = req.query.state;
  let address = `${street}, ${city}, ${state}`;
  res.send(address);
});

app.get("/email",(req,res)=>{
  let username = req.query.username;
  let domain = req.query.domain;
  let email = `${username}@${domain}`;
  res.send(email);
})

let PORT = 3000;
app.listen(PORT,()=>{
  console.log("Server is running on port 3000");
})