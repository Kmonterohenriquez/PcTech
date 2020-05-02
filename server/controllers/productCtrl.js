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
	addProduct: async (req, res) => {
		const db = req.app.get('db');
		const {
			pc_name,
			os,
			cpu,
			graphic_card,
			ram,
			motherboard,
			storage,
		} = req.body;
		await db.products
			.add_product(pc_name, os, cpu, graphic_card, ram, motherboard, storage)
			.then((product) => res.status(200).send(product))
			.catch((err) => res.status(500).send(err));
	},
	deleteProduct: async (req, res) => {
		const db = req.app.get('db');
		const { product_id } = req.params;
		await db.products
			.delete_product(product_id)
			.then(res.sendStatus(200))
			.catch((err) => status(500).send(err));
	},
	editProduct: async (req, res) => {
		const db = req.app.get('db');
		const { product_id } = req.params;
		const {
			pc_name,
			os,
			cpu,
			graphic_card,
			ram,
			motherboard,
			storage,
		} = req.body.productEdited;
		await db.products
			.edit_product(
				product_id,
				pc_name,
				os,
				cpu,
				graphic_card,
				ram,
				motherboard,
				storage
			)
			.then((product) => res.status(200).send(product))
			.catch((err) => res.status(500).send(err));
	},
};
