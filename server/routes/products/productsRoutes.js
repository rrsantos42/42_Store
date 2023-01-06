const express = require('express')
const dbConnector = require('../../db.server');
const multer = require('multer');
const seed = require('../../../prisma/seed');
const output = require('../../../output.json');

const api = express();

// Multer adds a body object and a file or files object to the request object. 
// The body object contains the values of the text fields of the form, the file or files object contains the files uploaded via the form.
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, 'tmp/products_csv/')
    },
    filename: function (req, file, callback) {
        const uniqueSuffix = Date.now() + '_' + Math.round(Math.random() * 1E9);
        callback(null, file.fieldname + '_' + uniqueSuffix);
    }
})

const upload = multer({ storage: storage })

api.get('/', async (req, res) => {
    const products = await dbConnector.db.product_model.findMany();
    res.send("Get all Products");
    return (products);
})

api.get('/add_products', async (req, res) => {
    await dbConnector.db.product_model.createMany({data: output, skipDuplicates: true});
    res.send("Add all Products");
})

api.get('/:productId', async (req, res) => {
    const productId = parseInt(req.params.productId)
    if (isNaN(productId))
        return ({});
    const product = await dbConnector.db.product_model.findUnique({
        where: {
            id: productId,
        },
    });
    product ? res.send(product) : res.send("Product Not Found")  
    return (product)
});



api.get('/update', async (req, res) => {
    // seed.createProduct('/home/ricardo/Desktop/42_Store/tmp/products_csv/file_1670841304201_542928551');
    for (let index = 0; index < output.length; index++)
    {
        product = output[index];
        console.log (product);
        await dbConnector.db.product_model.update ({
            where: {
                Ref: product['Ref']
            },
            data: {
                Product: product['Product'],
                Name: product['Name'], 
            },
        })
    }

})

api.post('/', (req, res) => {
    res.send("Create a new Product");
})

api.patch('/:productId', (req, res) => {
    res.send("Update an existing product");
})

api.delete('/:productId', (req, res) => {
    res.send("Delete an existing product");
})


api.post('/csv_upload', upload.single('file'), async (req, res) => {
    teste = seed.createProduct(req.file);
});

module.exports = api;

