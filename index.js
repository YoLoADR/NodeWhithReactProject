const express = require('express');
const app = express();

app.get("/", (req, res)=>{
    res.send({hello: 'Standard'});
});

// env Production for Heroku 
const PORT = process.env.PORT || 5003;
app.listen(PORT);