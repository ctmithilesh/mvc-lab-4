module.exports = app => {


    // Import Product Controller 
    const ProductController = require('../controllers/product.controller')

    // Import Router from Express
    const router = require('express').Router();

    // Create a POST route to controller using express Router
    router.post('/product/add', ProductController.create);

    // Get all Products 
    router.get('/product/all', ProductController.findAll)

    // Get Product by ID 
    router.get('/product/:id', ProductController.findOne)

    // Delete All Products
    router.delete('/product/delete/all', ProductController.deleteAll)

    // prefix 
    app.use('/api', router)
}








