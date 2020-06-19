const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {

    detail: (req, res) => {
        let product = products.find(function (p) {
            return p.id == req.params.id
        })

        res.render('detail', {product: product})
    }
}
module.exports = controller