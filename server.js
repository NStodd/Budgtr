//*************************************** */ 
// Import Dependencies
//*************************************** */ 
require("dotenv").config()
const express = require("express")
const budget = require("./models/budget")
const app = express()
const morgan = require("morgan")

//*************************************** */ 
// Register Middleware
//*************************************** */ 
app.use(express.urlencoded({extended:true}))
app.use(morgan("tiny"))
app.use("/static", express.static("public")) 

// Index Route
app.get('/budgets', (req, res) => {
    res.render(`budgt_index.ejs`,
     { Budget: budget }
     )
})

// New Route
app.get('/budgets/new', (req, res) => {
    res.render('budgt_new.ejs')
})

// Create Route
app.post('/budgets', (req, res) => {
    req.body.amount = parseInt(req.body.amount)
    // TODO: put tag stuff here

    console.log(req.body)
    budget.push(req.body)
    res.redirect("/budgets")
})

// Show Route
app.get('/budgets/:index', (req, res) => {
    const budgetItem = budget[req.params.index]
    console.log(budgetItem)
    res.render(`budgt_show.ejs`,
        {   
            BudgetItem: budgetItem,
        }
    )
})

// listen to the port from the environment variable file
app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
})