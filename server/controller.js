const getInventory = (req, res) => {
  const dbInstance = req.app.get("db");

  dbInstance
    .get_inventory()
    .then(inventory => res.status(200).json(inventory))
    .catch(error => {
      res
        .status(500)
        .send({ errorMessage: "Something went wrong! Check code!" });
      console.log(error);
    });
};
module.exports = {
  getInventory
};
