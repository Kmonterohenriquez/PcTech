module.exports = {
	getAllProducts: async (req, res) => {
		const db = req.app.get('db');
		await db.products
			.get_all_products()
			.then((products) => res.status(200).send(products))
			.catch((err) => res.status(500).send(err));
	},
	getOneProduct: async (req, res) => {
		const db = req.app.get('db');
		const { product_id } = req.body;
		await db.products
			.get_one_product(product_id)
			.then((product) => res.status(200).send(product))
			.catch((err) => res.status(500).send(err));
	},
	
};
