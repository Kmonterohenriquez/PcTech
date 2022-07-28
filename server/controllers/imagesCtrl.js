module.exports = { 
    getAllImages: async (req, res) => {
        const db = req.app.get("db");
        const { product_id } = req.params;
        await db.products
          .get_pics(product_id)
          .then((pictures) => res.status(200).send(pictures))
          .catch((err) => res.status(500).send(err));
      },
};