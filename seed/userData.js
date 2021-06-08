const { Users } = require("../models");

const users = [
    {
        username: "Dan",
        password: "qwertyyyyyyy"
    },
    {
        username: "Juan",
        password: "qwertyyyyyyyyyyyyy"
    }
]

const seedUsers = () => Users.bulkCreate(users, {individualHooks: true, returning: true})

module.exports = seedUsers;