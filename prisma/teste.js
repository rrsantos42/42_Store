const CSVToJSON = require('csvtojson');
const product_json = require('./output.json');

function createProduct(path) 
{
    console.log("PATH IS " + path)
    CSVToJSON()
    .fromFile(path)
    .then(products => 
    {

        let productObj = [];
        for (const product of products)
        {
            // console.log('product: ', product);
            if (product['Ref'] === '#N/A')
                continue ;

            if (isNaN(parseInt(product['Current Stock'])))
                product['Current Stock'] = 0;
            if (isNaN(parseInt(product['€ Preço de Venda'])))
                product['€ Preço de Venda'] = 0;
            
            console.log("Preço de Venda " + parseInt(product['€ Preço de Venda']))
            console.log("Current stock " + parseInt(product['Current Stock']))
            
            productObj.push({
                'Ref': product['Ref'],
                'Name': product['Product'],
                'Price': parseInt(product['€ Preço de Venda']),
                'Stock': parseInt(product['Current Stock']), 
                'Size': product['Size'],
                'Color': product['Color'],
                'Sold': parseInt(product['Sold'])
            })
        }
    }).catch(err => {
        console.log(err);
    });
}

createProduct('../tmp/products_csv/CsvUpload_1669773320210_660395054')