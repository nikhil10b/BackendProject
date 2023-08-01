const express = require('express')
const mongoose = require('mongoose')
const multer = require('multer')
const Student  = require('./studentSchema')
const csvtojson = require('csvtojson')

const app = express()

mongoose.connect('mongodb://localhost:27017/MongoExcelDemo').then(() => {     // MongoDB connection
    console.log('database connected')
});


app.use(express.static('public'))    // static folder
app.set('view engine','ejs')             // set the template engine

app.listen(3000, () => {
     console.log('server started at port 3000')
})