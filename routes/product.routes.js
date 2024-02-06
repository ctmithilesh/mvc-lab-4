module.exports = app => {


    // Import Product Controller 
    const ProductController = require('../controllers/product.controller')

    // Import Router from Express
    const router = require('express').Router();

    // Create a POST route to controller using express Router
    router.post('/product/add', ProductController.create);


    app.use('/api', router)
}








