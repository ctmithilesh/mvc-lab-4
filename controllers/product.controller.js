// CRUD Operations on your Data Model 
// import the Products Model 
const db = require('../models')

// products property is imported seperately 
const Product = db.products


exports.create = (req, res) => {

    console.log('Hi from controller')

    console.log(req.body)
    Product.create(req.body)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            console.log(err)
        })

}

