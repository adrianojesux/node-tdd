const route = require("express").Router();

console.log("teste");

const { User } = require("./app/models");

User.create({
  name: "Adriano da Silva de Jesus",
  email: "asjesus1994@gmail.com",
  passwordHash: "sdda4sdf4as4dfa54s46g2ag49a8494f4awdf"
});

module.exports = route;