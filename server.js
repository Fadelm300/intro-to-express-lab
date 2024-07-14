// Import Express
const express = require('express')

// Create an Express app
const app = express()

// Define routes here (we'll add them soon)
//مهمممممم جدا
// Listen for requests on port 3000
app.listen(3000, () => {
    console.log('Listening on port 3000')
  })


  
// Define the data array
  const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];




// --> 1
  app.get('/greeting/:name', (req, res) => {

    res.send(`Hello there, ${req.params.name} !`);

});

//--> 2

app.get('/roll/:number',(req,res)=>{
    const number=req.params.number;

    if(isNaN(number)){
        res.send(`You must specify a number `);
    }
    else{
        const maxNumber = parseInt(number, 10);
        const rolledNumber = Math.floor(Math.random() * (maxNumber ));
        res.send(`You rolled  ${rolledNumber}.`);

    }
})

//-->3

  