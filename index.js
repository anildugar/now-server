//Setup Requirements
var express = require('express');
var app = express();


/* app.get('/api/user/', (req,res) => 
{
    res.status(200).json({'message' : ' Welcome User routes'});
});

app.get('/api/db/', (req,res) => 
{
    res.status(200).json({'message' : ' Welcome DB routes'});
});

app.use('/api/game/', (req,res) => 
{
    res.status(200).json({'message' : ' Welcome Game routes'});
}); */

//Setup Routes
app.get('/api', (req, res) => {
    res.status(200).json( {'message' : 'Welcome api route!!'});
}); 

//Setup Routes
app.get('/', (req, res) => {
    res.status(200).json( {'message' : 'Welcome !!'});
});

app.listen(5000, () => {
    console.log(`Server is booming on port 5000
  Visit http://localhost:5000`);
  });

  module.exports = app;