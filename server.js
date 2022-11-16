require("dotenv").config()
const express = require("express")
const budget = require("./models/budget")
const app = express()

// Index Route
app.get('/budgets', (req, res) => {
    res.send(`you are in the Index Route ${budget[0].date}`)
})

// New Route
app.get('/budgets/new', (req, res) => {
    res.send("you are in the New Route")
})

// Create Route
app.post('/budgets', (req, res) => {
    res.send("you are in the create route")
})

// Show Route
app.get('/budgets/:index', (req, res) => {
    res.send(`you are in the Show Route with [${req.params.index}]`)
})

// listen to the port from the environment variable file
app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
})