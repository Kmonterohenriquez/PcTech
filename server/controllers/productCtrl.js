module.exports = {
	getAllProducts: async () => {
		const db = req.app.get('db');
		await db.products
			.get_all_products()
            .then((products) => res.status(200).send(products))
            .catch(err=> res.status(500).send(err));
	},
};
