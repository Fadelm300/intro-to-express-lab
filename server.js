// Import Express
const express = require('express')

// Create an Express app
const app = express()

// Define routes here (we'll add them soon)
// Listen for requests on port 3001
app.listen(3001, () => {
    console.log('Listening on port 3001')
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
// Route
app.get('/collectibles/:index', (req, res) => {
  const index = parseInt(req.params.index, 10);

  if (isNaN(index) || index < 0 || index >= collectibles.length) {
    res.send('This item is not yet in stock. Check back soon!');
  } else {
    const item = collectibles[index];
    res.send(`So, you want the ${item.name}? For ${item.price}, it can be yours!`);
  }
});


const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

//-->4
// Define the /shoes route
// 4. Filter Shoes by Query Parameters
app.get('/shoes', (req, res) => {
  let filteredShoes = shoes;

  
  const minPrice = parseFloat(req.query.minPrice);
  const maxPrice = parseFloat(req.query.maxPrice);
  const type = req.query.type;

  if (!!req.query.minPrice) {
      filteredShoes = filteredShoes.filter(shoe => shoe.price > minPrice);
  }

  if (!!req.query.maxPrice) {
      filteredShoes = filteredShoes.filter(shoe => shoe.price < maxPrice);
  }

  if (!!req.query.type) {
      filteredShoes = filteredShoes.filter(shoe => shoe.type.toLowerCase() === type.toLowerCase());
  }

  res.json(filteredShoes);
});
