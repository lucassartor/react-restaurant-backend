const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var path = require('path');

//Import Routes
const postsRoute = require('./routes/posts');
const dishesRoute = require('./routes/dishes');
const leadersRoute = require('./routes/leaders');
const promotionsRoute = require('./routes/promotions');
const commentsRoute = require('./routes/comments');

require('dotenv/config');

//Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/posts', postsRoute);
app.use('/dishes', dishesRoute);
app.use('/leaders', leadersRoute);
app.use('/promotions', promotionsRoute);
app.use('/comments', commentsRoute);
app.use('/images', express.static('public'));


//Routes
app.get('/', (req,res) => {
    res.send('Home');
});


app.get('/images/:fileName', (req,res) => {
    res.sendFile(path.join(__dirname, '/public/images', req.params.fileName));
});

//Connect to db
mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log('connected to db')
);

//Start listening to the server
app.listen(8080);