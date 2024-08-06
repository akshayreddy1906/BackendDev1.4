let express = require("express");
let app = express();
let port = 3000;

function getWelcomeMessage() {
  return "Welcome to our service!";
}
function getGreetingMessage(username) {
  return "Hello, " + username + "!";
}
function checkPasswordStrength(password) {
  if (password.length > 15) {
    return "Password is strong";
  } else {
    return "Password is weak";
  }
}
function getSum(num1, num2) {
  return num1 + num2;
}
function getSubscriptionStatus(username, isSubscribed) {
  if (isSubscribed) {
    return username + " is subscribed";
  } else {
    return username + " is not subscribed";
  }
}
function getDiscountedPrice(price, discount) {
  return price - (price * (discount / 100));
}
function getPersonalizedGreeting(age, gender, name) {
  return "Hello, " + name + "! You are a " + age + " year old " + gender + ".";
}
function getFinalPrice(price, discount, tax) {
  let discountedPrice = price - (price * (discount / 100));
  return discountedPrice + (discountedPrice * (tax / 100));
}
function getTotalExerciseTime(running, cycling, swimming) {
  return running + cycling + swimming;
}
app.get("/welcome", (req, res) => {
  res.send(getWelcomeMessage());
});
app.get("/greet", (req, res) => {
  let username = req.query.username;
  res.send(getGreetingMessage(username));
});
app.get("/check-password", (req, res) => {
  let password = req.query.password;
  res.send(checkPasswordStrength(password));
});
app.get("/sum", (req, res) => {
  let num1 = parseFloat(req.query.num1);
  let num2 = parseFloat(req.query.num2);
  res.send(getSum(num1, num2).toString());
});
app.get("/subscription-status", (req, res) => {
  let username = req.query.username;
  let isSubscribed = req.query.isSubscribed === "true";
  res.send(getSubscriptionStatus(username, isSubscribed));
});
app.get("/discounted-price", (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  res.send(getDiscountedPrice(price, discount).toString());
});
app.get("/personalized-greeting", (req, res) => {
  let age = parseInt(req.query.age);
  let gender = req.query.gender;
  let name = req.query.name;
  res.send(getPersonalizedGreeting(age, gender, name));
});
app.get("/final-price", (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  let tax = parseFloat(req.query.tax);
  res.send(getFinalPrice(price, discount, tax).toString());
});
app.get("/total-exercise-time", (req, res) => {
  let running = parseInt(req.query.running);
  let cycling = parseInt(req.query.cycling);
  let swimming = parseInt(req.query.swimming);
  res.send(getTotalExerciseTime(running, cycling, swimming).toString());
});
app.listen(port, () => {
  console.log("Server running on http://localhost:" + port);
});
