const dbServer = require('../server/db.server.js');
const CSVToJSON = require('csvtojson');
const fs = require('fs');

const db = dbServer.db;

function createProduct(path) 
{
    CSVToJSON()
    .fromFile(path)
    .then(products => 
    {
        let productObj = [];

        for (const product of products)
        {
            if (product['Ref'] === '#N/A')
                continue ;

            if (isNaN(parseInt(product['Current Stock'])))
                product['Current Stock'] = 0;
            if (isNaN(parseFloat(product['€ Preço de Venda'])))
                product['€ Preço de Venda'] = 0;
            
            
            productObj.push({
                'Ref': product['Ref'],
                'Product': product['Product'],
                'Name': product['Name'],
                'Price': parseFloat(product['€ Preço de Venda']),
                'Stock': parseInt(product['Current Stock']), 
                'Size': product['Size'],
                'Color': product['Color'],
                'Sold': parseInt(product['Sold'])
            })
        }
        fs.writeFileSync('output.json', JSON.stringify(productObj), 'utf8', (err) => {
            if (err)
                console.log(err);
        });
    }).catch(err => {
        console.log("Erro " + err);
    });
}


module.exports = {createProduct};