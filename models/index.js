const dbConfig = require('../config/db.config')
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// empty object 
const db = {

}

// pass the mongoose import as a property
db.mongoose = mongoose;

// store db url as a property in url property
db.url = dbConfig.url

// create a property products in the DB object 
db.products = require('./products.model')
db.courses = require('./courses.model')
db.employees = require('./employee.model')


module.exports = db;

