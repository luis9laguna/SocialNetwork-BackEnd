//REQUIRED
const mongoose = require('mongoose')


//CODE

const dbConnection = () => {
    try {
        mongoose.connect(process.env.DB_CN, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    } catch (error) {
        throw new Error('Database connection Error')
    }
}


module.exports = {
    dbConnection
}

