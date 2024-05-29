const mongoose = require('mongoose');

const connectionUrl = '';

const connectToDb = async (req, res, next) => {
    try {
        await mongoose.connect(connectionUrl);
        
        console.log('DB connection successful!');
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = connectToDb;