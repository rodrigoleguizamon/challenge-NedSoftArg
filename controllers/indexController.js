const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
	root: (req, res) => {
		let visited = products.filter(product => product.category === 'visited')
		let inSale = products.filter(product => product.category === 'in-sale')

		res.render('index', {
			visited: visited,
			inSale: inSale,
		})
	}
};

module.exports = controller;
