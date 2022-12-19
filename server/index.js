const express = require('express');
const productRouter = require('./routes/products/productsRoutes');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
// To set this up, we'll be using the body-parser package, which can handle many forms of data. 
// This package is a middleware that intercepts the raw body and parses it in to a form that your application code can easily use.
app.use(express.json());

app.use('/api/products', productRouter);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
})
