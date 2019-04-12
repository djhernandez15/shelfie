require("dotenv").config();
const express = require("express");
const app = express();
const { CONNECTION_STRING } = process.env;
const PORT = 5050;
const massive = require("massive");
const controller = require("./controller");

massive(CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(error => {
    console.log(error);
  });

app.use(express.json());

app.get('/api/inventory', controller.getInventory)

app.post('/api/products', controller.postProduct)

app.delete('/api/inventory/:product_id')



app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));
