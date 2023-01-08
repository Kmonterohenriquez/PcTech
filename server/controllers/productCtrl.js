module.exports = {
  getPics: async (req, res) => {
    const db = req.app.get('db');
    const { product_id } = req.params;
    await db.products
      .get_pics(product_id)
      .then((pictures) => res.status(200).send(pictures))
      .catch((err) => res.status(500).send(err));
  },
  getAllProducts: async (req, res) => {
    const db = req.app.get('db');
    await db.products
      .get_all_products()
      .then((products) => res.status(200).send(products))
      .catch((err) => res.status(500).send(err));
  },
  getAllDesktops: async (req, res) => {
    const db = req.app.get('db');
    await db.products
      .get_all_desktops()
      .then((desktops) => res.status(200).send(desktops))
      .catch((err) => res.status(500).send(err));
  },
  getAllLaptops: async (req, res) => {
    const db = req.app.get('db');
    await db.products
      .get_all_laptops()
      .then((laptops) => res.status(200).send(laptops))
      .catch((err) => res.status(500).send(err));
  },
  getOneProduct: async (req, res) => {
    const db = req.app.get('db');
    const { product_id } = req.params;
    await db.products
      .get_one_product(product_id)
      .then((product) => res.status(200).send(product))
      .catch((err) => res.status(500).send(err));
  },
  addProduct: async (req, res) => {
    const db = req.app.get('db');
    const {
      pc_name,
      qty,
      pd_description,
      pd_type,
      price,
      os,
      cpu,
      graphic_card,
      ram,
      motherboard,
      storage,
      // img1,
      // img2,
      // img3,
      // img4,
      // img5,
    } = req.body;

    // qty = +qty;
    // price = +price;
    console.log('Req body: ', req.body);
    await db.products
      .add_product(
        pc_name,
        qty,
        pd_description,
        pd_type,
        price,
        os,
        cpu,
        graphic_card,
        ram,
        motherboard,
        storage
        // img1,
        // img2,
        // img3,
        // img4,
        // img5
      )
      .then((product) => {
        console.log("New item created")
        return res.status(200).send(product)
      })
      .catch((err) => {
        console.log("something wrong happend")
        console.log("error message:", err)
        return res.status(500).send(err)
      });
  },
  deleteProduct: async (req, res) => {
    const db = req.app.get('db');
    const { product_id } = req.params;
    await db.products
      .delete_product(product_id)
      .then(res.sendStatus(200))
      .catch((err) => res.status(500).send(err));
  },
  deleteProductFromCart: async (req, res) => {
    const db = req.app.get('db');
    const { product_id } = req.params;
    await db.products
      .delete_product_from_cart(product_id)
      .then(res.sendStatus(200))
      .catch((err) => res.status(500).send(err));
  },
  editProduct: async (req, res) => {
    const db = req.app.get('db');
    const { product_id } = req.params;
    const { pc_name, os, cpu, graphic_card, ram, motherboard, storage } =
      req.body.productEdited;
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
  addCart: async (req, res) => {
    const db = req.app.get('db');
    const { product_id } = req.params;
    console.log('product_id', product_id);

    // Checking if the item exist already
    let check_item = await db.products.check_item_on_cart(product_id);
    check_item = check_item[0];

    console.log('check_item', check_item);

    if (check_item) {
      // Increase Qty if the Item exist already
      await db.products
        .increase_qty(product_id)
        .then((product) => res.status(200).send(product))
        .catch((err) => res.status(500).send(err));
    } else {
      // Create Item if the Item doesn't exist already
      await db.products
        .add_cart(+product_id, 1)
        .then((product) => res.status(200).send(product))
        .catch((err) => res.status(500).send(err));
    }
  },
  increaseQty: async (req, res) => {
    const db = req.app.get('db');
    const { product_id } = req.params;
    await db.products
      .increase_qty(product_id)
      .then((product) => res.status(200).send(product))
      .catch((err) => res.status(500).send(err));
  },
  decreaseQty: async (req, res) => {
    const db = req.app.get('db');
    const { product_id } = req.params;
    await db.products
      .decrease_qty(product_id)
      .then((product) => res.status(200).send(product))
      .catch((err) => res.status(500).send(err));
  },
  getCart: async (req, res) => {
    const db = req.app.get('db');
    await db.products
      .get_cart()
      .then((product) => res.status(200).send(product))
      .catch((err) => res.status(500).send(err));
  },
};
