const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys')
//Trick - we just need a function, it's not necessary to have more variable 
require('./services/passport');

//We should pass the adress of online database in there
mongoose.connect(keys.mongoURI);

const app = express();
//Trick - it's function execute automatically, (app) it's params, you can take a look in his file for understand
require('./routes/authRoutes')(app);




// env Production for Heroku 
const PORT = process.env.PORT || 5003;
app.listen(PORT);