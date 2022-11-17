// const crypto = require("crypto");
// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();

// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({
//   extended: false
// }));

// // parse application/json
// app.use(bodyParser.json());

// let items = [];
// let cart = [];
// let id = 0;

// app.post('/api/products', (req, res) => {
//   id = crypto.randomUUID();
  
//   let item = {
//     id: id,
//     name: req.body.name,
//     price: req.body.price,
//   };
//   items.push(item);
//   res.send(item);
// });

// app.get('/api/products', (req, res) => {
//   res.send(items);
// });

// app.get('/api/products/:id', (req, res) => {
//     const found = items.find(item => item.id === req.params.id);
//     res.send(found);
// });

// app.delete('/api/products/:id', (req, res) => {
//     const result = items.filter(item => item.id !== req.params.id);
//     items = result
//     res.send(items);
// });


// app.post('/api/cart/:id', (req, res) => {
//   console.log("In cart post")
//   id = req.params.id
//   let item = {
//     id: id,
//     quantity: req.body.quantity,
//   };
//   if (req.params.id === item.id){
//     quantity ++;
//   }
//   items.push(cart);
//   res.send(item);
// });

// app.get('/api/cart', (req, res) => {
//   console.log("In cart get");
//   res.send(cart);
// });

// app.delete('/api/cart/:id', (req, res) => {
//     const result = items.filter(item => item.id !== req.params.id);
//     items = result
//     res.send(items);
// });


// app.listen(3000, () => console.log('Server listening on port 3000!'));