const express = require('express')
const mongoose = require('mongoose')
const app = express()

const ProductController = require('./controllers/product.controller')

// Allows Server to accept json data 
app.use(express.json())

const db = require('./models')
mongoose.set("strictQuery", false);

db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to the database!")
}).catch(err => {
    console.log("Cannot connect to the database!", err)
    process.exit()
});


// Link Product Controller Routes to index.js
require('./routes/product.routes')(app);


// You cannot call controller with app.get() and app.post()
app.get('/', (req, res) => {

    res.send('Welcome to Express Server .1.0');

})

const PORT = 8080
app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`)
})