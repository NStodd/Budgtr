require("dotenv").config()
const express = require("express")
const app = express()

// Index Route
app.get('/budgets', (req, res) => {

})

// Show Route
app.get('/budgets/:index', (req, res) => {
    res.send("you are in the Show Route")
})

// New Route
app.get('budgets/new', (req, res) => {
    res.send("you are in the New Route")
})

// Create Route
app.post('/budgets', (req, res) => {
    
})

// listen to the port from the environment variable file
app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
})