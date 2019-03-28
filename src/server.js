require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/files', express.static(path.resolve(__dirname, "..", "tmp", "uploads")));

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true
});

app.use(require('./routes'));

const port = 3000;

app.listen(process.env.PORT || port , err => {
    if(err){
        console.log(err);
    }else{
        console.log('Server is running on port 3000');
    }
} );