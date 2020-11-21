const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

require('dotenv/config');


// connect to the dataBase 

mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true } ,()=> console.log('connected to db successfully') );

// post route

const postRoute = require('./routes/posts');

app.use('/post',postRoute);


app.listen(3000 , ()=>{
    console.log('app is running on port 3000');
});