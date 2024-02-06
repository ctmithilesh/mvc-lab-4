const express = require('express')
const mongoose = require('mongoose')
const app = express()


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





app.get('/', (req, res) => {

    res.send('Welcome to Express Server .1.0');

})

const PORT = 8080
app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`)
})